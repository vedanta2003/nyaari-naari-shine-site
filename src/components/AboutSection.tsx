import { Mic, ShoppingBag, Network, Trophy, Sparkles, Target } from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    { icon: Mic, text: "10x Talks by Trailblazing Founders" },
    { icon: Target, text: "Open Mic Pitches" },
    { icon: ShoppingBag, text: "Brand Walk" },
    { icon: Trophy, text: "Showcase Booths" },
    { icon: Network, text: "Speed Networking" },
    { icon: Sparkles, text: "Fun Fillers & Spot Prizes" }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-8">
            About Nyaari Naari
          </h2>
          
          <p className="font-body text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            Nyaari Naari is where ambitious women entrepreneurs come together to build, 
            grow, and thrive. It's not just an event—it's a movement that celebrates 
            the power of women in business, fostering connections that last beyond the day.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <p className="font-body font-semibold text-primary text-center">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};