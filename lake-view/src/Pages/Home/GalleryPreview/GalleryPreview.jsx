import { Link } from "react-router-dom";
import image1 from "../../../assets/images/To_Use/GalleryAVIF/food1.avif";
import image2 from "../../../assets/images/To_Use/GalleryAVIF/food2.avif";
import image3 from "../../../assets/images/To_Use/GalleryAVIF/food3.avif";
import image4 from "../../../assets/images/To_Use/GalleryAVIF/food4.avif";
import image5 from "../../../assets/images/To_Use/GalleryAVIF/food5.avif";
import image6 from "../../../assets/images/To_Use/GalleryAVIF/food6.avif";

const galleryItems = [
  { image: image1, name: "@lakelife_view", likes: 1240 },
  { image: image2, name: "@cafe.vibes", likes: 980 },
  { image: image3, name: "@morningbrew", likes: 760 },
  { image: image4, name: "@sunset.moments", likes: 1450 },
  { image: image5, name: "@gourmetjourney", likes: 890 },
  { image: image6, name: "@coffeelovers", likes: 1120 },
];

export default function GalleryPreview() {
  return (
    <section className="w-full py-16 bg-background sm:py-20 lg:py-28">
      <div className="flex flex-col gap-10 site-container">
        {/* HEADER */}
        <div className="max-w-2xl space-y-3 sm:space-y-4">
          <h2 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl text-primary">
            Experience the View
          </h2>
          <p className="text-sm leading-relaxed sm:text-base md:text-lg text-primary/75">
            See stunning Lake Apo scenery, café ambiance, and resthouse
            accommodations in Bukidnon.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item.name}
              className="flex flex-col h-full overflow-hidden transition-all duration-200 ease-out bg-white border shadow-sm group rounded-2xl border-primary/10 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="flex items-center justify-between p-4 sm:p-5">
                <h3 className="text-sm font-semibold sm:text-base text-primary">
                  {item.name}
                </h3>

                <span className="text-xs font-medium sm:text-sm text-primary/60">
                  {item.likes.toLocaleString()} likes
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="flex justify-center pt-4 sm:pt-6">
          <Link
            to="/gallery"
            className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-semibold text-secondary bg-primary rounded-lg transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            View Full Gallery
          </Link>
        </div> */}
      </div>
    </section>
  );
}
