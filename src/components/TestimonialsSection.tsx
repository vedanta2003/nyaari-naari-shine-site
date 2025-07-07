import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Nyaari Naari Season 2 was a game-changer for my business. The connections I made led to my first major partnership!",
      author: "Priya Sharma",
      title: "Founder, EcoBeauty",
      rating: 5
    },
    {
      quote: "The energy at this event is unmatched. I left feeling inspired and with a clear action plan for my startup.",
      author: "Kavya Patel",
      title: "Tech Entrepreneur",
      rating: 5
    },
    {
      quote: "From the talks to the networking sessions, every moment was valuable. Can't wait for Season 3!",
      author: "Meera Singh",
      title: "Creative Director",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-6">
            What Past Attendees Say
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Hear from the amazing women who joined us in previous seasons
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Quote className="w-8 h-8 text-secondary mb-4" />
              
              <p className="font-body text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-semibold text-primary">
                    {testimonial.author}
                  </h4>
                  <p className="font-body text-sm text-muted-foreground">
                    {testimonial.title}
                  </p>
                </div>
                
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};