import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AboutImage1 from "../../../../../IMAGES/Hero.jpg";
import AboutImage2 from "../../../../../IMAGES/about_2.jpg";
import AboutImage3 from "../../../../../IMAGES/about_4.jpg";
import AboutImage4 from "../../../../../IMAGES/about_3.jpg";

const aboutImages = [
  { src: AboutImage2, alt: "Café seating with a lake backdrop" },
  { src: AboutImage3, alt: "Inside Lake View Café in the morning" },
  { src: AboutImage4, alt: "Inside Lake View Café at night" },
  { src: AboutImage1, alt: "Scenic lake view from Lake View Café" },
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = aboutImages.length;
  const carouselRef = useRef(null);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = touchStartX.current;
  }

  function handleTouchMove(e) {
    touchEndX.current = e.touches[0].clientX;
  }

  function handleTouchEnd() {
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) < 50) return;

    if (delta > 0) {
      goNext();
    } else {
      goPrev();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  }

  function handleKeyDown(e) {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goNext();
    }
  }

  function goPrev() {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }

  function goNext() {
    setActiveIndex((prev) => (prev + 1) % total);
  }

  return (
    <section className="relative w-full py-20 bg-background sm:py-24 lg:py-32">
      <div className="flex flex-col-reverse items-center gap-10 site-container md:flex-row md:gap-12">
        {/* Left: Text (60%) */}
        <div className="space-y-6 md:w-3/5">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary/60">
            About Us
          </span>
          <h2 className="text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
            Experience Lake View Café
          </h2>
          <p className="text-base leading-relaxed text-primary/80 sm:text-lg md:text-xl">
            Lake View Café is a modern nature café on the shores of Lake Apo,
            Valencia City, Bukidnon. Whether you're here to study, work
            remotely, or simply enjoy a peaceful break, our cozy lakeside
            setting offers the perfect escape. Sip on specialty coffee, capture
            Instagram-worthy moments, and unwind surrounded by lush greenery.
          </p>
        </div>

        {/* Right: Sliding Carousel (40%) */}
        <div className="w-full md:w-2/5">
          <div
            ref={carouselRef}
            className="relative h-64 w-full touch-pan-y overflow-hidden rounded-xl shadow-xl ring-1 ring-primary/10 md:h-[400px] lg:h-[500px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="region"
            aria-roledescription="carousel"
            aria-label="Café interior and lake view photos"
          >
            <div
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {aboutImages.map((image) => (
                <div key={image.src} className="flex-shrink-0 w-full h-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous photo"
              className="absolute z-10 flex items-center justify-center p-2 transition -translate-y-1/2 border rounded-full shadow-md left-3 top-1/2 border-primary bg-background/80 text-primary hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next photo"
              className="absolute z-10 flex items-center justify-center p-2 transition -translate-y-1/2 border rounded-full shadow-md right-3 top-1/2 border-primary bg-background/80 text-primary hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 mt-4">
            {aboutImages.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to photo ${index + 1}`}
                aria-current={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 ${
                  index === activeIndex
                    ? "bg-primary"
                    : "bg-secondary/60 hover:bg-secondary"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
