import { Mic, Users, ShoppingBag, Network, ImageIcon, Heart } from "lucide-react";

export const EventSegments = () => {
  const segments = [
    {
      icon: Mic,
      title: "10x Talks",
      description: "Inspiring stories from successful women founders who've made it big",
      color: "bg-primary"
    },
    {
      icon: Target,
      title: "Founder's Open Mic",
      description: "Pitch your business idea and get instant feedback from the community",
      color: "bg-secondary"
    },
    {
      icon: ShoppingBag,
      title: "Brand Walk",
      description: "Showcase your products and services to fellow entrepreneurs",
      color: "bg-primary"
    },
    {
      icon: Network,
      title: "Speed Networking",
      description: "Fast-paced networking sessions to expand your business connections",
      color: "bg-secondary"
    },
    {
      icon: ImageIcon,
      title: "Business Gallery Wall",
      description: "Visual showcase of women-led businesses and their success stories",
      color: "bg-primary"
    },
    {
      icon: Heart,
      title: "Manifestation Moment & Fillers",
      description: "Mindful moments and fun activities to energize and inspire",
      color: "bg-secondary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-6">
            Event Segments
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            A carefully curated experience designed to maximize learning, 
            networking, and growth for every attendee
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <div 
                key={index}
                className="group bg-gradient-card p-8 rounded-2xl shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-4"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`${segment.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-heading font-bold text-xl text-primary mb-4">
                  {segment.title}
                </h3>
                
                <p className="font-body text-muted-foreground leading-relaxed">
                  {segment.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Fix import
import { Target } from "lucide-react";