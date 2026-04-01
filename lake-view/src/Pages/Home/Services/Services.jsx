import image1 from "../HomeAssets/lake-view-cafe.avif";

import image2 from "../HomeAssets/resthouse-close.avif";
import AppImage from "../../../components/AppImage";
import { Link } from "react-router-dom";
import { preloadRoute } from "../../../pages";

const services = [
  {
    key: "cafe-service-card",
    image: image1,
    service: "Lake View Café",
    description:
      "Enjoy freshly prepared meals and drinks while overlooking the lake.",
    cta: "View Menu",
    to: "/cafe",
  },
  {
    key: "resthouse-service-card",
    image: image2,
    service: "Lake View Resthouse",
    description:
      "Stay in comfortable rooms surrounded by nature and fresh mountain air.",
    cta: "Check Availability",
    to: "/resthouse",
  },
];

export default function Services() {
  function handleLinkIntent(path) {
    void preloadRoute(path);
  }

  return (
    <section className="w-full py-16 bg-background sm:py-20 lg:py-28">
      <div className="flex flex-col gap-10 site-container">
        {/* HEADER */}
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl text-primary">
            Explore What You Can Experience
          </h2>
          <p className="text-sm leading-relaxed sm:text-base md:text-lg text-primary/80">
            Choose between lakeside dining or a relaxing overnight stay at Lake
            Apo.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.key}
              className="flex flex-col h-full overflow-hidden transition-all duration-200 ease-out bg-white border shadow-md group rounded-2xl border-primary/10 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <AppImage
                  src={service.image}
                  alt={service.service}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col flex-grow gap-3 p-5">
                <h3 className="text-base font-semibold sm:text-lg text-primary">
                  {service.service}
                </h3>

                <p className="text-sm leading-relaxed sm:text-base text-primary/80">
                  {service.description}
                </p>

                {/* CTA pushed to bottom */}
                <div className="pt-4 mt-auto">
                  <Link
                    to={service.to}
                    onMouseEnter={() => handleLinkIntent(service.to)}
                    onFocus={() => handleLinkIntent(service.to)}
                    onTouchStart={() => handleLinkIntent(service.to)}
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-secondary transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                  >
                    {service.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
