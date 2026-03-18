import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="w-full py-16 bg-background sm:py-20 lg:py-28">
      <div className="flex flex-col gap-10 site-container">
        {/* HEADER */}
        <div className="max-w-2xl space-y-3 sm:space-y-4">
          <h2 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl text-primary">
            Plan Your Visit to Lake Apo Nature Park
          </h2>
          <p className="text-sm leading-relaxed sm:text-base md:text-lg text-primary/75">
            Visit for a quick escape or stay overnight and experience the calm
            of nature.
          </p>
        </div>

        {/* CTA BUTTONS */}
        <div className="flex flex-col gap-3 mt-6 sm:flex-row sm:gap-4 sm:mt-8">
          {/* PRIMARY CTA */}
          <Link
            to="/directions"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-secondary px-5 py-3 text-sm font-semibold text-primary shadow-md border-2 border-primary/70 transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:bg-secondary/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/80"
          >
            Get Directions
          </Link>

          {/* SECONDARY CTA */}
          <Link
            to="/menu"
            className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-semibold transition-colors duration-150 ease-out border rounded-lg sm:w-auto text-primary/80 border-primary/60 backdrop-blur-sm hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            Explore Café
          </Link>

          {/* TERTIARY CTA */}
          <Link
            to="/resthouse"
            className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-semibold underline transition-colors duration-150 ease-out sm:w-auto text-primary/80 underline-offset-4 hover:text-primary hover:underline"
          >
            View Resthouse
          </Link>
        </div>
      </div>
    </section>
  );
}
