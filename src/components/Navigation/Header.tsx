import { Home, User, Settings, Bell, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white shadow-soft border-b border-border/20 sticky top-0 z-40">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-lg"></div>
            <span className="text-xl font-bold text-text-primary">ParkingMS</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-text-secondary hover:text-primary"
            >
              <Home className="w-4 h-4" />
              Home
            </Button>
            <Button 
              variant="ghost"
              className="flex items-center gap-2 text-text-secondary hover:text-primary"
            >
              <User className="w-4 h-4" />
              Profile
            </Button>
            <Button 
              variant="ghost"
              className="flex items-center gap-2 text-text-secondary hover:text-primary"
            >
              <Bell className="w-4 h-4" />
              Notifications
            </Button>
            <Button 
              variant="ghost"
              className="flex items-center gap-2 text-text-secondary hover:text-primary"
            >
              <Settings className="w-4 h-4" />
              Settings
            </Button>
          </div>

          {/* Profile Actions */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-medium text-text-primary">John Doe</p>
                <p className="text-xs text-text-secondary">Premium Member</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <User className="w-5 h-5 text-accent" />
              </div>
            </div>
            <Button variant="ghost" size="icon" className="text-text-secondary hover:text-destructive">
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};