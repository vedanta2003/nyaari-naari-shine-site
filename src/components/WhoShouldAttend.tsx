import { Briefcase, Lightbulb, Palette, Rocket } from "lucide-react";
import networkingImg from "@/assets/networking-illustration.jpg";

export const WhoShouldAttend = () => {
  const attendeeTypes = [
    {
      icon: Briefcase,
      title: "Women Founders",
      description: "Leading startups and established businesses"
    },
    {
      icon: Rocket,
      title: "Solopreneurs",
      description: "Building their empire one step at a time"
    },
    {
      icon: Palette,
      title: "Creators",
      description: "Artists, designers, and content creators"
    },
    {
      icon: Lightbulb,
      title: "Side-Hustlers",
      description: "Turning passion projects into profit"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-up">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-8">
              Who Should Attend?
            </h2>
            
            <p className="font-body text-lg text-muted-foreground mb-10 leading-relaxed">
              This event is designed for ambitious women who are ready to take their 
              business to the next level. Whether you're just starting out or scaling up, 
              you'll find your tribe here.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {attendeeTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="bg-secondary/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-primary mb-1">
                        {type.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground">
                        {type.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Image */}
          <div className="animate-fade-in">
            <img 
              src={networkingImg} 
              alt="Women entrepreneurs networking" 
              className="w-full h-auto rounded-2xl shadow-strong"
            />
          </div>
        </div>
      </div>
    </section>
  );
};