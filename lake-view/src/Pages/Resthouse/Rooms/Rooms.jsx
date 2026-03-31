import { Link } from "react-router-dom";
import AppImage from "../../../components/AppImage";
import FamilyRoomImage from "../../../assets/images/To_Use/ResthousePage/family-room.avif";
import BasicRoomImage from "../../../assets/images/To_Use/ResthousePage/basic-house.avif";
const rooms = [
  {
    id: "room1",
    image: BasicRoomImage,
    alt: "lake apo resthouse basic room interior bukidnon affordable stay",
    title: "Basic Cozy Room",
    capacity: "Good for 2–3 guests",
    price: "₱1,200 / night",
    ctaPrimary: "Book Now",
    ctaSecondary: "View Details",
  },
  {
    id: "room2",
    image: FamilyRoomImage,
    alt: "bukidnon resthouse family room near lake apo spacious interior",
    title: "Family Room",
    capacity: "Good for 4–6 guests",
    price: "₱2,500 / night",
    ctaPrimary: "Book Now",
    ctaSecondary: "View Details",
  },
];

export default function Services({
  bookingSectionRef,
  setRoom,
  RoomsSectionRef,
}) {
  function handleBookingRoomType(roomType) {
    setRoom(roomType);
    bookingSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <section
      ref={RoomsSectionRef}
      className="w-full py-16 sm:py-20 lg:py-28 bg-background"
    >
      <div className="flex flex-col gap-10 site-container">
        {/* HEADER */}
        <div className="max-w-2xl space-y-3">
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl text-primary">
            Resthouse Rooms
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-primary/80">
            Choose the room that fits your stay near Lake Apo.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="flex flex-col h-full overflow-hidden transition-all duration-200 bg-white border shadow-md group rounded-2xl border-primary/10 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <AppImage
                  src={room.image}
                  alt={room.alt}
                  className="w-full aspect-[4/3] sm:aspect-[16/10] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col flex-grow gap-3 p-5 group/cta">
                <h3 className="text-base font-semibold sm:text-lg text-primary">
                  {room.title}
                </h3>

                <p className="text-sm text-primary/70">{room.capacity}</p>

                <p className="mt-6 text-sm font-bold duration-150 text-primary/70 group-hover/cta:text-primary">
                  {room.price}
                </p>

                {/* CTA */}
                <div className="flex flex-col gap-2 mt-auto sm:flex-row sm:justify-start">
                  <Link
                    onClick={() => handleBookingRoomType(room.title)}
                    className=" group-hover/cta:bg-primary w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-secondary bg-primary rounded-lg transition-transform duration-150 hover:-translate-y-0.5 hover:bg-primary/90"
                  >
                    {room.ctaPrimary}
                  </Link>

                  <Link
                    to={room.moreDetailLink}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-primary border border-primary/40 rounded-lg transition-colors duration-150 hover:bg-primary/5"
                  >
                    {room.ctaSecondary}
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
