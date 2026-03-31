import { MapPin, Clock, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const infoList = [
  {
    key: 1,
    icon: MapPin,
    title: "Location",
    description: "Lake Apo Nature Park, Valencia, Bukidnon",
  },
  {
    key: 2,
    icon: Clock,
    title: "Hours",
    description: "Open daily (8:00 AM - 6:00 PM)",
  },
  {
    key: 3,
    icon: Phone,
    title: "Contact",
    description: "Available upon request",
  },
];

export default function LocationInfo() {
  return (
    <section className="w-full py-16 bg-background sm:py-20 lg:py-28">
      <div className="flex flex-col gap-10 site-container">
        {/* HEADER */}
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary/70">
            Location
          </p>

          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl text-primary">
            Visit the Resthouse
          </h2>

          <p className="text-sm sm:text-base text-primary/70">
            Simple details for planning your day at Lake Apo.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {infoList.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.key}
                className="flex items-start h-full gap-4 p-5 transition-all duration-200 bg-white border shadow-sm group border-primary/10 rounded-2xl hover:-translate-y-1 hover:shadow-md"
              >
                {/* ICON */}
                <div className="flex items-center justify-center w-10 h-10 transition-colors rounded-lg bg-primary/10 group-hover:bg-primary/20">
                  <Icon className="w-5 h-5 text-primary" />
                </div>

                {/* TEXT */}
                <div className="flex flex-col">
                  <p className="text-sm font-semibold sm:text-base text-primary">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-primary/70">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex flex-col justify-between max-w-3xl gap-2 sm:flex-row sm:items-center sm:gap-4">
          <p className="text-sm text-primary/70">
            Find us inside Lake Apo Nature Park, just a short walk from the lake
            entrance.
          </p>

          <Link
            to="/directions"
            className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 text-sm font-semibold text-secondary bg-primary rounded-lg whitespace-nowrap transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            Get Directions
          </Link>
        </div>
      </div>
    </section>
  );
}
