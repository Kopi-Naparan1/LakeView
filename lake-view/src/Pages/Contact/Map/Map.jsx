export default function Map({ id, ContactMapSectionRef }) {
  return (
    <section
      id={id}
      ref={ContactMapSectionRef}
      className="w-full py-16 bg-background sm:py-20 lg:py-28"
    >
      <div className="flex flex-col gap-10 site-container">
        {/* Heading */}
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Find Us
          </h2>
          <p className="mt-3 text-sm text-primary/80">
            Located inside Lake Apo Nature Park, accessible by road from
            Valencia City.
          </p>
        </div>

        {/* Map */}
        <div className="w-full h-[350px] sm:h-[400px] lg:h-[450px] overflow-hidden rounded-2xl border">
          <iframe
            title="Lake Apo Nature Park Location"
            src="https://www.google.com/maps?q=Lake+Apo+Nature+Park+Bukidnon&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
