import Image1 from "../ResthouseAssets/gallery-1.avif";
import Image2 from "../ResthouseAssets/gallery-2.avif";
import Image3 from "../ResthouseAssets/gallery-3.avif";
import Image4 from "../ResthouseAssets/gallery-4.avif";
import AppImage from "../../../components/AppImage";

const galleryImages = [
  {
    src: Image1,
    alt: "lake apo resthouse room interior bukidnon",
  },
  {
    src: Image2,
    alt: "resthouse exterior near lake apo bukidnon",
  },
  {
    src: Image3,
    alt: "lake apo view bukidnon peaceful scenery",
  },
  {
    src: Image4,
    alt: "bukidnon nature surroundings near resthouse",
  },
];

export default function Gallery() {
  return (
    <section className="w-full py-16 bg-background sm:py-20 lg:py-28">
      <div className="flex flex-col gap-10 site-container">
        {/* Heading */}
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Resthouse Experience
          </h2>
          <p className="mt-3 text-sm text-primary/80">
            See the rooms, surroundings, and peaceful environment around Lake
            Apo Resthouse.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-xl">
              <AppImage
                src={img.src}
                alt={img.alt}
                className="object-cover w-full h-56 transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
