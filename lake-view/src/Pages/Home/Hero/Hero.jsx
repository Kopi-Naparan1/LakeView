import { Link } from "react-router-dom";
import HeroImage from "../../../assets/images/To_Use/Hero.avif";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={HeroImage}
        alt="Lake View Café overlooking Lake Apo in Bukidnon"
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/55 to-black/75" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-[80svh] lg:min-h-screen site-container py-12 sm:py-16 lg:py-20">
        {/* TEXT BLOCK */}
        <div className="max-w-2xl space-y-4 sm:space-y-6">
          <p className="text-xs font-semibold tracking-widest uppercase sm:text-sm text-secondary/80">
            Bukidnon Nature Escape & Tourist Spot
          </p>

          <h1 className="font-display font-bold leading-tight text-secondary text-[clamp(1.8rem,5vw,3.5rem)]">
            Lake Apo Nature Park — Café and Resthouse in Bukidnon
          </h1>

          <p className="text-sm leading-relaxed sm:text-base md:text-lg text-secondary/80">
            Relax by scenic lake views, enjoy local food, and stay overnight in
            Bukidnon’s peaceful natural retreat.
          </p>
        </div>

        <div className="flex flex-col gap-3 mt-6 sm:mt-8 sm:flex-row sm:gap-4">
          {/* PRIMARY CTA */}
          <Link
            to="/directions"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-secondary px-5 py-3 text-sm font-semibold text-primary shadow-md transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:bg-secondary/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/80"
          >
            Get Directions
          </Link>

          {/* SECONDARY CTA */}
          <Link
            to="/menu"
            className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-semibold transition-colors duration-150 ease-out border rounded-lg sm:w-auto border-secondary/70 text-secondary backdrop-blur-sm hover:border-secondary hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/80"
          >
            Explore Café
          </Link>

          {/* TERTIARY CTA */}
          <Link
            to="/resthouse"
            className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-semibold underline transition-colors duration-150 ease-out sm:w-auto text-secondary/80 underline-offset-4 hover:text-secondary hover:underline"
          >
            View Resthouse
          </Link>
        </div>
      </div>
    </section>
  );
}
