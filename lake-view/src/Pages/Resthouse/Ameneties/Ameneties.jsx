import { Bed, ShowerHead, Mountain } from "lucide-react";
import AppImage from "../../../components/AppImage";
import Comfortable from "../../../assets/images/To_Use/ResthousePage/archive/comfortable.avif";
import Necessities from "../../../assets/images/To_Use/ResthousePage/archive/necessities.avif";
import Nature from "../../../assets/images/To_Use/ResthousePage/archive/nature.avif";
const amenities = [
  {
    icon: Bed,
    title: "Comfortable Stay",
    desc: "Clean bedding and simple rooms designed for a restful overnight stay.",
  },
  {
    icon: ShowerHead,
    title: "Essential Facilities",
    desc: "Basic bathroom and electricity to ensure a convenient and functional stay.",
  },
  {
    icon: Mountain,
    title: "Nature Experience",
    desc: "Peaceful surroundings with lake views and fresh air inside Lake Apo Nature Park.",
  },
];

export default function Amenities() {
  return (
    <section className="w-full py-16 bg-background sm:py-20 lg:py-28">
      <div className="flex flex-col gap-10 site-container">
        {/* HEADER */}
        <div className="max-w-2xl space-y-3">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
            Amenities and Services
          </h2>
          <p className="text-sm text-primary/80 sm:text-base">
            Everything you need for a simple, comfortable stay near Lake Apo.
          </p>
        </div>

        {/* IMAGE GRID */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <AppImage
            src={Comfortable}
            alt="Comfortable bedding"
            className="w-full aspect-[4/3] object-cover rounded-xl"
          />
          <AppImage
            src={Necessities}
            alt="Bathroom"
            className="w-full aspect-[4/3] object-cover rounded-xl"
          />
          <AppImage
            src={Nature}
            alt="Lake view"
            className="w-full aspect-[4/3] object-cover rounded-xl"
          />
        </div>

        {/* AMENITIES GRID */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {amenities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex flex-col h-full p-5 transition-all duration-200 border border-gray-200 group bg-gray-50 rounded-2xl hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  {/* ICON */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary/70">
                    <Icon loading="lazy" className="w-5 h-5 text-primary" />
                  </div>

                  {/* TEXT */}
                  <div>
                    <p className="text-sm font-semibold text-primary sm:text-base">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-primary/80">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
