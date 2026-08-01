import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp, ShoppingBag, ShieldCheck } from 'lucide-react';

interface FloatingActionsProps {
  onOpenOrderModal: (medicineName?: string) => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenOrderModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Action Buttons Container */}
      <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end space-y-3 pointer-events-none">
        
        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="pointer-events-auto p-3 rounded-full bg-slate-800/90 hover:bg-slate-900 text-white shadow-xl backdrop-blur-md border border-slate-700/50 hover:scale-110 active:scale-95 transition-all group"
            aria-label="Back to Top"
            title="Back to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        )}

        {/* Floating Call Button */}
        <a
          href="tel:09835650482"
          className="pointer-events-auto p-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
          aria-label="Call Sunil Ayurvedic Aushdhalaya"
          title="Call Now: 09835650482"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Floating Pulsating WhatsApp Button */}
        <button
          onClick={() => onOpenOrderModal()}
          className="pointer-events-auto p-4 rounded-full bg-[#0A8F6A] hover:bg-[#087859] text-white shadow-2xl animate-pulse-ring hover:scale-110 active:scale-95 transition-all flex items-center justify-center relative group"
          aria-label="Order Medicines via WhatsApp"
          title="WhatsApp Order Medicine"
        >
          <MessageSquare className="w-6 h-6 fill-current text-white" />
          <span className="absolute right-full mr-3 bg-slate-900/90 text-white text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-slate-700/50">
            Order Medicines on WhatsApp
          </span>
        </button>

      </div>

      {/* Mobile Sticky Bottom Bar CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-4 flex items-center justify-between gap-2 shadow-2xl">
        <button
          onClick={() => onOpenOrderModal()}
          className="flex-1 py-2.5 bg-[#0A8F6A] hover:bg-[#087859] text-white text-xs font-bold rounded-xl flex items-center justify-center space-x-2 shadow-md cursor-pointer"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp Order</span>
        </button>

        <a
          href="tel:09835650482"
          className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl flex items-center justify-center space-x-2 shadow-md"
        >
          <Phone className="w-4 h-4" />
          <span>Call 09835650482</span>
        </a>
      </div>
    </>
  );
};
