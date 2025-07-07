import { Button } from "@/components/ui/button";

export const StickyRegisterButton = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-background/95 to-transparent backdrop-blur-sm border-t border-border/20">
      <div className="container mx-auto">
        <Button 
          variant="cta" 
          size="lg" 
          className="w-full"
          onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Register Now 🚀
        </Button>
      </div>
    </div>
  );
};