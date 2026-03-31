import { Link } from "react-router-dom";
import AppImage from "../../../components/AppImage";
import image1 from "../../../assets/images/To_Use/MenuAVIF/food1.avif";
import image2 from "../../../assets/images/To_Use/MenuAVIF/food2.avif";
import image3 from "../../../assets/images/To_Use/MenuAVIF/food3.avif";
import image4 from "../../../assets/images/To_Use/MenuAVIF/food4.avif";
import image5 from "../../../assets/images/To_Use/MenuAVIF/food5.avif";
import image6 from "../../../assets/images/To_Use/MenuAVIF/food6.avif";

const menuItems = [
  {
    image: image1,
    name: "Express Meal",
    description: "Quick meal combo",
    price: 233,
  },
  {
    image: image2,
    name: "Chicken Bowl",
    description: "Grilled chicken with rice",
    price: 199,
  },
  {
    image: image3,
    name: "Burger Set",
    description: "Burger with fries",
    price: 185,
  },
  {
    image: image4,
    name: "Pasta Plate",
    description: "Creamy pasta serving",
    price: 210,
  },
  {
    image: image5,
    name: "Steak Meal",
    description: "Steak with vegetables",
    price: 320,
  },
  {
    image: image6,
    name: "Dessert Combo",
    description: "Cake with ice cream",
    price: 150,
  },
];

const formatPrice = (price) => `\u20b1${price.toLocaleString("en-PH")}`;

export default function CafeMenu({ CafeMenuSectionRef }) {
  return (
    <section
      ref={CafeMenuSectionRef}
      id="cafe-menu"
      className="relative w-full py-24 bg-background lg:py-32"
    >
      <div className="flex flex-col gap-16 site-container">
        {/* Header */}
        <div className="flex flex-col max-w-2xl gap-5">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary/70">
            Menu
          </span>

          <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
            Coffee, Meals & Café Favorites
          </h2>

          <p className="text-base leading-relaxed text-primary/80 sm:text-lg">
            Choose from a variety of local meals, snacks, and beverages prepared
            fresh for visitors at Lake View Café.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="flex flex-col overflow-hidden transition-transform duration-200 ease-out bg-white border shadow-md group rounded-2xl border-primary/10 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <AppImage
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full aspect-[4/3] transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 p-5">
                <div className="flex items-center justify-between gap-3 al">
                  <h3 className="text-lg font-semibold text-primary">
                    {item.name}
                  </h3>
                  <span className="text-sm font-semibold text-primary/90">
                    {formatPrice(item.price)}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-primary/80">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="flex justify-center pt-6">
          <Link
            to="/menu"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-secondary transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            View Full Menu
          </Link>
        </div> */}
      </div>
    </section>
  );
}
