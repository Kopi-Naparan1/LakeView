import { Star, MapPin, Clock } from "lucide-react";

const trustItems = [
  {
    title: "Guest Favorite",
    detail: "A top stop for visitors exploring Lake Apo.",
    icon: Star,
    tone: "text-primary",
  },
  {
    title: "Inside Lake Apo",
    detail: "Located within Lake Apo Nature Park.",
    icon: MapPin,
    tone: "text-accent",
  },
  {
    title: "Open Daily",
    detail: "Welcoming dine-in guests every day.",
    icon: Clock,
    tone: "text-primary/80",
  },
];

export default function TrustStrip() {
  return (
    <section className="w-full border-y border-secondary bg-background">
      <div className="max-w-6xl px-4 py-6 mx-auto">
        <div className="grid gap-4 text-primary sm:grid-cols-3">
          {trustItems.map(({ title, detail, icon: Icon, tone }) => (
            <div
              key={title}
              className="flex items-start gap-3 p-4 border shadow-sm rounded-xl border-secondary/70 bg-white/70"
            >
              <span className="flex items-center justify-center rounded-full text-primary h-9 w-9 bg-secondary/70">
                <Icon loading="lazy" className={`h-4 w-4 ${tone}`} />
              </span>
              <div>
                <p className="text-sm font-semibold text-primary">{title}</p>
                <p className="text-sm text-primary/80">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
