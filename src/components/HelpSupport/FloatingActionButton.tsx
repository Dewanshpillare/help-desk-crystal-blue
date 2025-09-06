import { useState } from "react";
import { MessageCircle, Mail, Phone, Video, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactOptions = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help via email",
    action: () => window.open("mailto:support@parkingmanagement.com")
  },
  {
    icon: Phone,
    title: "Phone Support", 
    description: "Call us directly",
    action: () => window.open("tel:+1-800-PARKING")
  },
  {
    icon: Video,
    title: "Live Chat",
    description: "Chat with an agent",
    action: () => console.log("Opening live chat...")
  }
];

export const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Options Panel */}
      {isOpen && (
        <Card className="absolute bottom-20 right-0 w-80 bg-white rounded-xl shadow-strong p-4 mb-4 animate-in slide-in-from-bottom-2">
          <div className="space-y-3">
            <h4 className="font-semibold text-text-primary text-center mb-4">Contact Support</h4>
            {contactOptions.map((option, index) => (
              <button
                key={index}
                onClick={option.action}
                className="w-full flex items-center gap-4 p-3 rounded-lg transition-smooth hover:bg-hover-light hover:shadow-soft border border-transparent hover:border-accent/20"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <option.icon className="w-5 h-5 text-accent" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-text-primary">{option.title}</p>
                  <p className="text-sm text-text-secondary">{option.description}</p>
                </div>
              </button>
            ))}
          </div>
        </Card>
      )}

      {/* FAB Button */}
      <Button
        onClick={togglePanel}
        className="w-16 h-16 rounded-full gradient-primary shadow-strong hover:shadow-strong transition-smooth hover:scale-105 animate-float"
        size="icon"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </Button>
    </div>
  );
};