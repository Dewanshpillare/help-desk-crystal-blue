import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  faqs: FAQ[];
}

const faqData: FAQCategory[] = [
  {
    title: "PARKING",
    faqs: [
      {
        id: "parking-1",
        question: "How do I find available parking spaces?",
        answer: "You can use our mobile app or website to view real-time availability of parking spaces. Simply enter your location or browse by area to see available spots near you."
      },
      {
        id: "parking-2", 
        question: "What are the parking rates?",
        answer: "Parking rates vary by location and duration. Hourly rates typically range from $2-8 per hour, with daily maximums available. Check the specific location details for exact pricing."
      },
      {
        id: "parking-3",
        question: "Can I extend my parking session?",
        answer: "Yes, you can extend your parking session through the mobile app or website as long as the space is available and you haven't exceeded the maximum allowed time."
      }
    ]
  },
  {
    title: "RESERVATIONS", 
    faqs: [
      {
        id: "reservation-1",
        question: "How far in advance can I make a reservation?",
        answer: "You can make reservations up to 30 days in advance. This ensures you have a guaranteed parking spot when you need it."
      },
      {
        id: "reservation-2",
        question: "Can I modify my reservation?",
        answer: "Yes, you can modify your reservation up to 1 hour before your scheduled arrival time. Changes can be made through your account dashboard."
      },
      {
        id: "reservation-3",
        question: "What happens if I'm late for my reservation?",
        answer: "We hold your reserved space for up to 15 minutes past your scheduled arrival time. After that, the space may be released to other users."
      }
    ]
  },
  {
    title: "PAYMENTS",
    faqs: [
      {
        id: "payment-1", 
        question: "What payment methods are accepted?",
        answer: "We accept all major credit cards, debit cards, mobile payments (Apple Pay, Google Pay), and digital wallets. You can also set up automatic payments for convenience."
      },
      {
        id: "payment-2",
        question: "How do I get a refund?",
        answer: "Refunds are processed automatically for cancelled reservations made at least 1 hour in advance. For other refund requests, please contact our support team with your transaction details."
      },
      {
        id: "payment-3",
        question: "Why was my payment declined?",
        answer: "Payment declines can occur due to insufficient funds, expired cards, or bank security measures. Please check your payment information and try again, or contact your bank if issues persist."
      }
    ]
  },
  {
    title: "CANCELLATIONS",
    faqs: [
      {
        id: "cancellation-1",
        question: "How do I cancel my reservation?",
        answer: "You can cancel your reservation through the mobile app or website by going to 'My Reservations' and selecting 'Cancel'. Cancellations made 1+ hours in advance receive full refunds."
      },
      {
        id: "cancellation-2",
        question: "Is there a cancellation fee?",
        answer: "No cancellation fees apply when you cancel at least 1 hour before your scheduled arrival. Cancellations made less than 1 hour in advance may be subject to a small processing fee."
      },
      {
        id: "cancellation-3", 
        question: "Can I cancel a recurring reservation?",
        answer: "Yes, you can cancel individual instances or the entire recurring reservation series. Go to your account settings to manage recurring reservations."
      }
    ]
  }
];

export const FAQAccordion = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {faqData.map((category, index) => (
        <div key={index} className="space-y-4">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-text-primary mb-2 tracking-wide">
              {category.title}
            </h3>
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-primary-light mx-auto rounded-full"></div>
          </div>
          
          <Accordion type="single" collapsible className="space-y-3">
            {category.faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-white rounded-xl shadow-soft border-0 overflow-hidden transition-smooth hover:shadow-medium"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-medium text-text-primary hover:text-accent transition-smooth hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="bg-neutral-200 rounded-lg p-4 text-text-secondary leading-relaxed">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  );
};