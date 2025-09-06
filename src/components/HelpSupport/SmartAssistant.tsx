import { Bot, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const topicsList = [
  "Parking Issues",
  "Reservation Queries", 
  "Payment Problems",
  "Cancellations"
];

interface SmartAssistantProps {
  onTopicClick?: (topic: string) => void;
}

export const SmartAssistant = ({ onTopicClick }: SmartAssistantProps) => {
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
          <p className="text-sm font-medium text-text-secondary mb-3">Popular Topics:</p>
          {topicsList.map((topic, index) => (
            <button
              key={index}
              onClick={() => onTopicClick?.(topic)}
              className="w-full text-left px-4 py-3 text-text-primary rounded-lg transition-smooth hover:bg-hover-light hover:text-accent border border-transparent hover:border-accent/20"
            >
              {topic}
            </button>
          ))}
        </div>
      </div>
    </Card>
  );
};