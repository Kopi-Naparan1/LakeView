import { Facebook, Phone, MessageCircle } from "lucide-react";

const contacts = [
  {
    id: "facebook",
    icon: <Facebook className="w-5 h-5" />,
    title: "Facebook Page",
    desc: "Message us for quick inquiries and updates.",
    link: "https://facebook.com/yourpage", // replace
    cta: "Visit Page",
  },
  {
    id: "phone",
    icon: <Phone className="w-5 h-5" />,
    title: "Phone / SMS",
    desc: "Call or text us for booking and questions.",
    link: "tel:+639123456789", // replace
    cta: "Call Now",
  },
  {
    id: "Instagram",
    icon: <MessageCircle className="w-5 h-5" />,
    title: "Instagram",
    desc: "Chat with us directly for faster response.",
    link: "", // replace
    cta: "Message Now",
  },
];

export default function SocialContact() {
  return (
    <section className="w-full py-16 bg-background sm:py-20 lg:py-28">
      <div className="flex flex-col gap-10 site-container">
        {/* Heading */}
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Connect With Us
          </h2>
          <p className="mt-3 text-sm text-gray-600">
            Reach out through your preferred platform for faster assistance.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 transition bg-white border rounded-2xl hover:shadow-md group"
            >
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/60 text-primary">
                  {item.icon}
                </span>

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">{item.desc}</p>

                  <span className="inline-block mt-3 text-sm font-semibold text-primary group-hover:underline">
                    {item.cta}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
