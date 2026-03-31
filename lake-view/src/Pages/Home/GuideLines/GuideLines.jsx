import {
  Trash2,
  CigaretteOff,
  Ban,
  PackageX,
  Tent,
  VolumeX,
  ShieldOff,
  Leaf,
  Flame,
} from "lucide-react";

const rules = [
  {
    icon: Trash2,
    text: "Dispose of your trash properly — take all waste with you.",
  },
  {
    icon: CigaretteOff,
    text: "No smoking or gambling inside the park.",
  },
  {
    icon: Ban,
    text: "No alcohol or illegal substances allowed.",
  },
  {
    icon: PackageX,
    text: "Avoid bringing plastic bags or bottles.",
  },
  {
    icon: Tent,
    text: "Outside equipment is not allowed (e.g. kayaks, boats, tents).",
  },
  {
    icon: VolumeX,
    text: "Keep noise levels low to maintain a peaceful environment.",
  },
  {
    icon: ShieldOff,
    text: "Stay out of restricted or rehabilitation areas.",
  },
  {
    icon: Leaf,
    text: "Do not take plants or animals from the park.",
  },
  {
    icon: Flame,
    text: "No grilling or cooking inside the area.",
  },
];

export default function ParkGuidelines() {
  return (
    <section className="w-full py-16 bg-background sm:py-20 lg:py-28">
      <div className="flex flex-col gap-10 site-container">
        {/* Heading */}
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Park Guidelines
          </h2>
          <p className="mt-3 text-sm text-primary/80">
            Help us preserve the beauty of Lake Apo by following these simple
            guidelines.
          </p>
        </div>

        {/* Rules */}
        <div className="grid gap-4 sm:grid-cols-2">
          {rules.map((rule, index) => {
            const Icon = rule.icon;

            return (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-white border rounded-xl"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/60">
                  <Icon loading="lazy" className="w-5 h-5 text-primary" />
                </span>

                <p className="text-sm text-primary">{rule.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
