import { Instagram, Twitter, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="font-heading font-bold text-2xl mb-4 text-secondary">
              Nyaari Naari
            </h3>
            <p className="font-body text-white/80 leading-relaxed">
              Empowering women entrepreneurs to build, connect, and thrive together. 
              Join the movement that's changing the face of business.
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="text-center">
            <h4 className="font-heading font-semibold text-lg mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="font-body text-sm">hello@wingsofwomen.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="font-body text-sm">+91 98765 43210</span>
              </div>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="text-center md:text-right">
            <h4 className="font-heading font-semibold text-lg mb-4">
              Follow Us
            </h4>
            <div className="flex justify-center md:justify-end gap-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-secondary hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-secondary hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-secondary hover:bg-white/10">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="font-body text-white/60 mb-4">
            Powered by <span className="text-secondary font-semibold">Wings of Women</span>
          </p>
          <p className="font-body text-xs text-white/40">
            © 2024 Wings of Women. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};