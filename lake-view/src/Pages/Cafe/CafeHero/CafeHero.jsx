import { HashLink } from "react-router-hash-link";
import AppImage from "../../../components/AppImage";
import HeroImage from "../../../assets/images/To_Use/CafePage/cafe-hero.avif";

export default function CafeHero({ CafeMenuSectionRef }) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <AppImage
        src={HeroImage}
        alt="Lake View Cafe overlooking Lake Apo in Bukidnon"
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/65 to-black/85" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-[80svh] lg:min-h-screen site-container py-12 sm:py-16 lg:py-20">
        {/* TEXT BLOCK */}
        <div className="max-w-2xl space-y-4 sm:space-y-6">
          <h1 className="font-display font-bold leading-tight text-secondary text-[clamp(1.8rem,5vw,3.5rem)]">
            Lake Apo Cafe in Bukidnon - Dining by the Lake
          </h1>

          <p className="text-sm leading-relaxed sm:text-base md:text-lg text-secondary/80">
            Enjoy affordable meals, coffee, and relaxing lake views at Lake Apo
            Nature Park in Valencia, Bukidnon.
          </p>
        </div>

        <div className="flex flex-col gap-3 mt-6 sm:mt-8 sm:flex-row sm:gap-4">
          {/* PRIMARY CTA */}
          <HashLink
            to="/contact#contact-map"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-secondary px-5 py-3 text-sm font-semibold text-primary shadow-md transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:bg-secondary/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/80"
          >
            Get Directions
          </HashLink>

          {/* SECONDARY CTA */}
          <button
            type="button"
            onClick={() =>
              CafeMenuSectionRef?.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-semibold transition-colors duration-150 ease-out border rounded-lg sm:w-auto border-secondary/70 text-secondary backdrop-blur-sm hover:border-secondary hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/80"
          >
            View Menu
          </button>

          {/* TERTIARY CTA */}
        </div>
      </div>
    </section>
  );
}
