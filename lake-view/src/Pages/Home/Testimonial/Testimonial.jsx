import { Star } from "lucide-react";
import AppImage from "../../../components/AppImage";

import image1 from "./profile1.avif";
import image2 from "./profile2.avif";
import image3 from "./profile3.avif";

const testimonials = [
  {
    id: 1,
    picture: image1,
    name: "Maria Santos",
    role: "Traveler",
    quote:
      "The view of Lake Apo is absolutely peaceful. The café food was fresh and the atmosphere was relaxing.",
    rating: 5,
  },
  {
    id: 2,
    picture: image3,
    name: "John Reyes",
    role: "Student Visitor",
    quote:
      "Perfect place to unwind. The resthouse is clean and the surroundings feel very calm and natural.",
    rating: 5,
  },
  {
    id: 3,
    picture: image2,
    name: "Angela Cruz",
    role: "Food Enthusiast",
    quote:
      "Loved the café experience. Great food, good service, and a beautiful lake view you don’t usually find.",
    rating: 4,
  },
];

export default function Testimonial() {
  return (
    <section className="w-full py-16 bg-background sm:py-20 lg:py-28">
      <div className="flex flex-col gap-10 site-container">
        {/* HEADER */}
        <div className="max-w-2xl space-y-3">
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl text-primary">
            What Visitors Are Saying
          </h2>
          <p className="text-sm sm:text-base text-primary/80">
            Real experiences from guests who visited Lake Apo Café and
            Resthouse.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col h-full p-6 transition-all duration-200 bg-white border shadow-sm group border-primary/10 rounded-2xl hover:-translate-y-1 hover:shadow-lg"
            >
              {/* USER HEADER */}
              <div className="flex items-center gap-3 mb-4">
                <AppImage
                  src={item.picture}
                  alt={item.name}
                  className="object-cover w-10 h-10 rounded-full"
                />

                <div>
                  <p className="text-sm font-semibold text-primary">
                    {item.name}
                  </p>
                  <p className="text-xs text-primary/70">{item.role}</p>
                </div>
              </div>

              {/* QUOTE */}
              <p className="text-sm leading-relaxed sm:text-base text-primary/80">
                “{item.quote}”
              </p>
              {/* RATING */}
              <div className="flex gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < item.rating
                        ? "fill-primary text-primary"
                        : "text-primary/20"
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
