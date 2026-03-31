export default function ContactForm({ bookingSectionRef }) {
  return (
    <section
      ref={bookingSectionRef}
      className="w-full py-16 bg-background sm:py-20 lg:py-28"
    >
      <div className="max-w-3xl px-4 mx-auto">
        {/* Heading */}
        <div className="text-left">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Send a Message
          </h2>
          <p className="mt-3 text-sm text-primary/80">
            Have questions or want to request a booking? Send us a message and
            we’ll get back to you.
          </p>
        </div>

        {/* Form */}
        <form className="p-6 mt-10 space-y-6 bg-white border shadow-sm rounded-2xl">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-primary/90">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 mt-1 border rounded-lg outline-none text-primary/85 focus:ring-2 focus:ring-primary"
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
              className="w-full px-4 py-2 mt-1 border rounded-lg outline-none text-primary/85 focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-primary/90">
              Message
            </label>
            <textarea
              rows="3"
              placeholder="Got anything in mind?"
              className="w-full px-4 py-2 mt-1 border rounded-lg outline-none text-primary/85 focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          {/* CTA */}
          <button
            type="submit"
            className="w-full sm:w-auto items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-secondary transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
