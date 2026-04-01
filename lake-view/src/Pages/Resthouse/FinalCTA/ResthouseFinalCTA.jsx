import { Link } from "react-router-dom";

export default function FinalResthouseCTA({ RoomsSectionRef }) {
  function scrollToRoom() {
    RoomsSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function handleClickToRoom() {
    scrollToRoom();
  }
  return (
    <section className="w-full py-16 bg-background sm:py-20 lg:py-28">
      <div className="flex flex-col gap-10 site-container">
        {/* HEADER */}
        <div className="max-w-2xl space-y-3 sm:space-y-4">
          <h2 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl text-primary">
            Planning Your Stay?
          </h2>
          <p className="text-sm leading-relaxed sm:text-base md:text-lg text-primary/75">
            Check room availability and plan your visit to Lake Apo Resthouse
            today.
          </p>
        </div>

        {/* CTA BUTTONS */}
        <div className="flex flex-col gap-3 mt-6 sm:flex-row sm:gap-4 sm:mt-8">
          {/* PRIMARY CTA */}
          <button
            type="button"
            onClick={() => handleClickToRoom()}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-secondary px-5 py-3 text-sm font-semibold text-primary shadow-md border-2 border-primary/70 transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:bg-secondary/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/80"
          >
            Book Now
          </button>

          {/* SECONDARY CTA */}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-semibold transition-colors duration-150 ease-out border rounded-lg sm:w-auto text-primary/80 border-primary/60 backdrop-blur-sm hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
