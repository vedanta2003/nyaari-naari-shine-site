import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What's the dress code for the event?",
      answer: "Business casual or smart casual. We encourage comfortable yet professional attire that makes you feel confident and ready to network!"
    },
    {
      question: "Is this suitable for early-stage founders?",
      answer: "Absolutely! Nyaari Naari welcomes women entrepreneurs at all stages - from ideation to scaling. You'll find valuable insights regardless of where you are in your journey."
    },
    {
      question: "Do I need to bring anything special?",
      answer: "Just bring yourself, business cards if you have them, and an open mind! We'll provide notepads, refreshments, and plenty of networking opportunities."
    },
    {
      question: "Will there be networking time?",
      answer: "Yes! Speed networking is a key segment, plus there are multiple breaks and interaction opportunities throughout the day to connect with fellow entrepreneurs."
    },
    {
      question: "Can I showcase my business at the event?",
      answer: "Yes! We have dedicated showcase booths and the Brand Walk segment where you can display your products/services. Registration includes these opportunities."
    },
    {
      question: "Is food provided?",
      answer: "Yes, we provide refreshments, snacks, and lunch. If you have specific dietary requirements, please mention them during registration."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Got questions? We've got answers!
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gradient-card rounded-xl shadow-soft overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/50 transition-colors duration-200"
                >
                  <h3 className="font-heading font-semibold text-primary pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-secondary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-secondary flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};