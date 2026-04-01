import { createElement } from "react";
import { Bed, MapPin, Leaf } from "lucide-react";

const trustItems = [
  {
    title: "Affordable Overnight Stays",
    detail:
      "Simple, budget-friendly rooms perfect for travelers and small groups.",
    icon: Bed,
    tone: "text-primary",
  },
  {
    title: "Inside Lake Apo Nature Park",
    detail: "Stay just steps away from the lake and main scenic spots.",
    icon: MapPin,
    tone: "text-accent",
  },
  {
    title: "Quiet, Nature-Filled Environment",
    detail:
      "Relax in a peaceful setting surrounded by trees, fresh air, and nature.",
    icon: Leaf,
    tone: "text-primary/80",
  },
];

export default function TrustStrip() {
  return (
    <section className="w-full border-y border-secondary bg-background">
      <div className="max-w-6xl px-4 py-6 mx-auto">
        <div className="grid gap-4 text-primary sm:grid-cols-3">
          {trustItems.map(({ title, detail, icon, tone }) => (
            <div
              key={title}
              className="flex items-start gap-3 p-4 border shadow-sm rounded-xl border-secondary/60 bg-white/70"
            >
              <span className="flex items-center justify-center rounded-full h-9 w-9 bg-secondary/70">
                {createElement(icon, { className: `h-4 w-4 ${tone}` })}
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
