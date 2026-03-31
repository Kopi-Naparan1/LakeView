import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqGroups = [
  {
    category: "General",
    items: [
      {
        question: "What are the opening hours of Lake Apo?",
        answer:
          "Lake Apo Nature Park is generally open daily from 8:00 AM to 6:00 PM. Hours may vary depending on weather and local guidelines.",
      },
      {
        question: "Is there an entrance fee?",
        answer:
          "Yes, visitors may need to pay a small entrance fee. Fees may vary, so it's best to prepare a minimal amount (~₱100) upon arrival. ",
      },
      {
        question: "How do I get to Lake Apo from Valencia City?",
        answer:
          "Lake Apo Nature Park is accessible by road from Valencia City. You can travel by private vehicle or hire local transportation.",
      },
    ],
  },
  {
    category: "Café",
    items: [
      {
        question: "Do I need a reservation for the café?",
        answer:
          "No reservation is required. Walk-in guests are welcome during operating hours.",
      },
    ],
  },
  {
    category: "Resthouse",
    items: [
      {
        question: "Do I need to book in advance?",
        answer:
          "Booking in advance is recommended, especially during weekends and holidays.",
      },
      {
        question: "How much does it cost to stay?",
        answer:
          "Room rates vary depending on the type. Basic rooms start at around ₱1,200 per night.",
      },
    ],
  },
];

export default function FAQ({ ContactFAQSectionRef }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      ref={ContactFAQSectionRef}
      className="w-full py-16 bg-background sm:py-20 lg:py-28"
    >
      <div className="max-w-3xl site-container">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-8 space-y-8">
          {faqGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              {/* Category */}
              <h3 className="mb-3 text-lg font-semibold text-primary">
                {group.category}
              </h3>

              {/* Items */}
              <div className="space-y-3">
                {group.items.map((faq, index) => {
                  const currentIndex = `${groupIndex}-${index}`;

                  return (
                    <div key={currentIndex} className="border rounded-xl">
                      {/* Question */}
                      <button
                        onClick={() =>
                          setOpenIndex(
                            openIndex === currentIndex ? null : currentIndex,
                          )
                        }
                        className="flex items-center justify-between w-full p-4 text-left"
                      >
                        <span className="font-semibold text-gray-900">
                          {faq.question}
                        </span>

                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            openIndex === currentIndex ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Answer */}
                      {openIndex === currentIndex && (
                        <div className="px-4 pb-4 text-sm text-gray-600">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
