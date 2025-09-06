import { SearchBar } from "@/components/HelpSupport/SearchBar";
import { FAQAccordion } from "@/components/HelpSupport/FAQAccordion";
import { SmartAssistant } from "@/components/HelpSupport/SmartAssistant";
import { FloatingActionButton } from "@/components/HelpSupport/FloatingActionButton";

const HelpSupport = () => {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // Add search logic here
  };

  const handleTopicClick = (topic: string) => {
    console.log("Topic clicked:", topic);
    // Add topic handling logic here
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header Section */}
      <header className="w-full gradient-primary text-white py-16 px-6 shadow-medium">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Help & Support
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Find quick answers to your queries about parking, reservations, payments, and more.
          </p>
        </div>
      </header>

      {/* Search Section */}
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto">
          <div className="w-full max-w-4xl mx-auto">
            <SearchBar 
              placeholder="Search your query here..."
              onSearch={handleSearch}
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Browse through our most common questions and answers to find the help you need.
              </p>
            </div>
            <FAQAccordion />
          </div>

          {/* Smart Assistant Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <SmartAssistant onTopicClick={handleTopicClick} />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-100 py-8 px-6 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-text-tertiary">
            © 2025 Parking Management System — All Rights Reserved
          </p>
        </div>
      </footer>

      {/* Floating Action Button */}
      <FloatingActionButton />
    </div>
  );
};

export default HelpSupport;