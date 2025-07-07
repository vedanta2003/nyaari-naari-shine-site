import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { EventSegments } from "@/components/EventSegments";
import { WhoShouldAttend } from "@/components/WhoShouldAttend";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { RegisterSection } from "@/components/RegisterSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { StickyRegisterButton } from "@/components/StickyRegisterButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <EventSegments />
      <WhoShouldAttend />
      <TestimonialsSection />
      <RegisterSection />
      <FAQSection />
      <Footer />
      <StickyRegisterButton />
    </div>
  );
};

export default Index;
