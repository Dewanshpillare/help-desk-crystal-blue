import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50">
      <div className="text-center max-w-2xl px-6">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-text-primary mb-6">
            Parking Management System
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Smart parking solutions for modern cities. Manage reservations, payments, and find available spaces with ease.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button 
            onClick={() => navigate('/help')}
            className="gradient-primary text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-medium hover:shadow-strong transition-smooth hover:scale-105"
            size="lg"
          >
            Visit Help & Support
          </Button>
          
          <p className="text-text-tertiary">
            Get assistance with parking, reservations, and payments
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
