import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Nyaari Naari
            <span className="block text-secondary animate-glow">Season 3</span>
          </h1>
          
          <p className="font-body text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            A High-Energy Meet for Women Entrepreneurs to Connect, Learn & Shine
          </p>
          
          {/* Event Details */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10 text-white/80">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="font-body">Coming Soon</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="font-body">Location TBA</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="font-body">Women Entrepreneurs</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <Button 
            variant="cta" 
            size="xl" 
            className="animate-float"
            onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Register Now
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};