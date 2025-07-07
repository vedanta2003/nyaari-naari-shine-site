import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const RegisterSection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    whatsapp: '',
    city: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.whatsapp) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('registrations')
        .insert({
          full_name: formData.fullName,
          business_name: formData.businessName || null,
          email: formData.email,
          whatsapp: formData.whatsapp,
          city: formData.city || null
        });

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Email Already Registered",
            description: "This email is already registered for the event.",
            variant: "destructive"
          });
        } else {
          toast({
            title: "Registration Failed",
            description: "Something went wrong. Please try again.",
            variant: "destructive"
          });
        }
        return;
      }

      // Success message
      toast({
        title: "Registration Successful! 🎉",
        description: "Welcome to Nyaari Naari Season 3! We'll be in touch soon with event details.",
      });

      // Reset form
      setFormData({
        fullName: '',
        businessName: '',
        email: '',
        whatsapp: '',
        city: ''
      });

    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="register" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-6">
              Secure Your Spot
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Join the most empowering women entrepreneurs' event of the year
            </p>
          </div>
          
          <Card className="p-8 shadow-strong animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="font-heading font-medium text-primary">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="font-body"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="businessName" className="font-heading font-medium text-primary">
                    Business Name
                  </Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    placeholder="Your business name"
                    className="font-body"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="font-heading font-medium text-primary">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@domain.com"
                  required
                  className="font-body"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="font-heading font-medium text-primary">
                    WhatsApp Number *
                  </Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    required
                    className="font-body"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="city" className="font-heading font-medium text-primary">
                    City
                  </Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Your city"
                    className="font-body"
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                variant="cta" 
                size="xl" 
                className="w-full mt-8"
                disabled={isLoading}
              >
                {isLoading ? "Registering..." : "Count Me In! 🚀"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};