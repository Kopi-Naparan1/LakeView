import { MapPin, Clock, Phone } from "lucide-react";

const infoList = [
  {
    key: 1,
    icon: <MapPin className="w-5 h-5 text-primary" />,
    title: "Location",
    description: "Lake Apo Nature Park, Valencia, Bukidnon",
  },
  {
    key: 2,
    icon: <Clock className="w-5 h-5 text-primary" />,
    title: "Hours",
    description: "Open daily (8:00 AM - 6:00 PM)",
  },
  {
    key: 3,
    icon: <Phone className="w-5 h-5 text-primary" />,
    title: "Contact",
    description: "Available upon request",
  },
];

export default function LocationInfo() {
  return (
    <section className="w-full py-16 bg-background sm:py-20 lg:py-28">
      <div className="flex flex-col gap-8 site-container">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Location
          </p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Visit the Café
          </h2>
          <p className="mt-3 text-sm text-gray-600">
            Simple details for planning your day at Lake Apo.
          </p>
        </div>

        {/* Info List */}
        <div className="grid gap-4 text-primary sm:grid-cols-2 lg:grid-cols-3">
          {infoList.map((item) => (
            <div
              key={item.key}
              className="p-5 border shadow-sm rounded-2xl border-secondary/90 bg-white/70"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-secondary/60">
                  {item.icon}
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-sm text-gray-600">
          Find us inside Lake Apo Nature Park, just a short walk from the lake
          entrance.
        </p>
      </div>
    </section>
  );
}
