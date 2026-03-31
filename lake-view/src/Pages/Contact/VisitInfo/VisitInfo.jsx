import { MapPin, Clock, Phone } from "lucide-react";

const infoList = [
  {
    key: 1,
    icon: MapPin,
    title: "Location",
    description: "Lake Apo, Guinuyoran, Valencia City, Bukidnon",
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
    description: "+63 945 443 0356 (TM)",
  },
];

export default function VisitInfo() {
  return (
    <section className="w-full py-16 bg-background sm:py-20 lg:py-28">
      <div className="flex flex-col gap-10 site-container">
        {/* HEADER */}
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary/80">
            Location
          </p>

          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl text-primary">
            Visit Information
          </h2>

          <p className="text-sm sm:text-base text-primary/80">
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
                <div className="flex items-center justify-center w-10 h-10 transition-colors rounded-lg bg-secondary/70 ">
                  <Icon className="w-5 h-5 text-primary" />
                </div>

                {/* TEXT */}
                <div className="flex flex-col">
                  <p className="text-sm font-semibold sm:text-base text-primary">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-primary/90">
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
        </div>
      </div>
    </section>
  );
}
