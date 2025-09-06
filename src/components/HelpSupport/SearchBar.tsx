import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export const SearchBar = ({ 
  placeholder = "Search your query here...", 
  onSearch 
}: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
        <Input
          type="text"
          placeholder={placeholder}
          className="w-full pl-12 pr-6 py-4 text-lg bg-white rounded-[30px] border-0 shadow-medium transition-smooth focus:shadow-strong focus:ring-2 focus:ring-accent/20 text-text-primary placeholder:text-text-secondary"
          onChange={(e) => onSearch?.(e.target.value)}
        />
      </div>
    </div>
  );
};