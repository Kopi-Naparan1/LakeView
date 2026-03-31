export default function BookingSection({ bookingSectionRef, room, setRoom }) {
  return (
    <section
      ref={bookingSectionRef}
      className="w-full py-16 bg-background sm:py-20 lg:py-28"
    >
      <div className="max-w-3xl px-4 mx-auto">
        {/* Heading */}
        <div className="text-left">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Book Your Stay
          </h2>
          <p className="mt-3 text-sm text-primary/80">
            Reserve your room at Lake Apo Resthouse and enjoy a relaxing
            overnight stay near the lake.
          </p>
        </div>

        {/* Form */}
        <form className="p-6 mt-10 space-y-6 bg-white border shadow-sm rounded-2xl">
          {/* Room Type */}
          <div>
            <label className="block text-sm font-medium text-primary/90">
              Room Type
            </label>

            <input
              type="text"
              placeholder="Input room type (eg. Basic or Family)"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-lg outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-primary/90">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 mt-1 border rounded-lg outline-none focus:ring-2 text-primary/80 focus:ring-primary"
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm font-medium text-primary/90">
              Contact (Phone or Email)
            </label>
            <input
              type="text"
              placeholder="e.g. 09123456789 or email@example.com"
              className="w-full px-4 py-2 mt-1 border rounded-lg outline-none focus:ring-2 text-primary/80 focus:ring-primary"
            />
          </div>

          {/* Dates */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-primary/90">
                Check-in Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 mt-1 border rounded-lg outline-none focus:ring-2 text-primary/80 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary/90">
                Check-out Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 mt-1 border rounded-lg outline-none focus:ring-2 text-primary/80 focus:ring-primary"
              />
            </div>
          </div>

          {/* Guests */}
          <div>
            <label className="block text-sm font-medium text-primary/90">
              Number of Guests
            </label>
            <input
              type="number"
              min="1"
              placeholder="Enter number of guests"
              className="w-full px-4 py-2 mt-1 border rounded-lg outline-none focus:ring-2 text-primary/80 focus:ring-primary"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-primary/90">
              Message (optional)
            </label>
            <textarea
              rows="3"
              placeholder="Any special requests?"
              className="w-full px-4 py-2 mt-1 border rounded-lg outline-none focus:ring-2 text-primary/80 focus:ring-primary"
            ></textarea>
          </div>

          {/* CTA */}
          <button
            type="submit"
            className="w-full sm:w-auto items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-secondary transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            Request Booking
          </button>
        </form>
      </div>
    </section>
  );
}
