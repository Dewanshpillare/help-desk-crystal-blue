import { Bot, Search, Mail, Phone, Video } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

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

interface SmartAssistantProps {
  onTopicClick?: (topic: string) => void;
}

export const SmartAssistant = ({ onTopicClick }: SmartAssistantProps) => {
  console.log("SmartAssistant component is rendering");
  return (
    <Card className="bg-white rounded-xl shadow-medium p-6 transition-smooth hover:shadow-strong">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
          <Bot className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-text-primary">Smart Assistant</h3>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-4 h-4" />
          <Input
            type="text"
            placeholder="Ask me anything..."
            className="w-full pl-10 pr-4 py-3 bg-neutral-50 border-border/50 rounded-lg focus:ring-2 focus:ring-accent/20 transition-smooth"
          />
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-text-secondary mb-3">Contact Support:</p>
          {contactOptions.map((option, index) => (
            <button
              key={index}
              onClick={option.action}
              className="w-full flex items-center gap-3 p-3 rounded-lg transition-smooth hover:bg-hover-light hover:shadow-soft border border-transparent hover:border-accent/20"
            >
              <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                <option.icon className="w-4 h-4 text-accent" />
              </div>
              <div className="text-left">
                <p className="font-medium text-text-primary text-sm">{option.title}</p>
                <p className="text-xs text-text-secondary">{option.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </Card>
  );
};