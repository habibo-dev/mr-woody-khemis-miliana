import { Phone } from 'lucide-react';

export function MobileStickyCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-gray-200 z-50">
      <a 
        href="tel:0675151612"
        className="w-full bg-primary text-white py-3.5 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,69,0,0.3)] active:scale-95 transition-transform"
      >
        <Phone className="w-5 h-5 fill-current" />
        <span>Call Now: 0675 15 16 12</span>
      </a>
    </div>
  );
}