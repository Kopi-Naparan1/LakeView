import { Link } from "react-router-dom";
import HeroImage from "../../../../../IMAGES/Hero.jpg";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] supports-[height:100svh]:min-h-[70svh] sm:min-h-[90vh] sm:supports-[height:100svh]:min-h-[90svh] lg:min-h-[100vh] lg:supports-[height:100svh]:min-h-[100svh] overflow-hidden">
      {/* Background Image */}
      <img
        src={HeroImage}
        alt="Lake View Café overlooking Lake Apo in Bukidnon"
        className="absolute inset-0 object-cover w-full h-full"
        loading="lazy"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80">
        <div className="flex flex-col justify-center h-full gap-6 py-8 site-container sm:gap-10 sm:py-12 lg:gap-12 lg:py-16 xl:justify-between">
          {/* Text */}
          <div className="max-w-3xl space-y-4 sm:space-y-5">
            <p className="text-sm font-semibold tracking-widest uppercase text-secondary/90 sm:text-base sm:text-secondary/70">
              Lake View Café • Bukidnon
            </p>

            <h1 className="font-display text-[clamp(1.75rem,5.5vw,3.9rem)] font-bold leading-tight text-secondary">
              Coffee with a View of Lake Apo
            </h1>

            <p className="text-base leading-relaxed text-secondary/75 sm:text-lg md:text-xl md:text-secondary/85">
              Relax, study, and enjoy specialty coffee surrounded by lush
              nature. Perfect for students, remote workers, and Instagram-worthy
              moments.
            </p>
          </div>

          {/* CTA Buttons */}
          {/* CTA Buttons */}
          <div className="flex flex-row flex-wrap justify-start gap-2 sm:justify-start sm:gap-4">
            <Link
              to="/directions"
              className="inline-flex items-center justify-center 
    min-w-[120px] sm:min-w-[150px] 
    rounded-lg bg-secondary 
    px-3 py-2 text-xs sm:px-5 sm:py-3 sm:text-sm 
    font-semibold text-primary shadow-md 
    transition-transform duration-150 ease-out 
    hover:-translate-y-0.5 hover:bg-secondary/95
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/80"
            >
              Get Directions
            </Link>

            <Link
              to="/menu"
              className="inline-flex items-center justify-center 
    min-w-[120px] sm:min-w-[150px] 
    rounded-lg border border-secondary/70 
    px-3 py-2 text-xs sm:px-5 sm:py-3 sm:text-sm
    font-semibold text-secondary/90 backdrop-blur-sm 
    transition-colors duration-150 ease-out 
    hover:border-secondary hover:text-secondary
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/80"
            >
              View Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
