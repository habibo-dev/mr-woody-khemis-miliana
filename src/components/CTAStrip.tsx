import { Phone } from 'lucide-react';

export function CTAStrip() {
  return (
    <section className="bg-primary py-16 relative overflow-hidden">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-secondary/20 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-4">
              Hungry? Get your meal in minutes!
            </h2>
            <p className="text-white/80 text-lg md:text-xl font-medium">
              Fast delivery or quick takeaway. Call us now to place your order.
            </p>
          </div>
          
          <a 
            href="tel:0675151612"
            className="flex-shrink-0 bg-white text-secondary hover:bg-accent px-8 py-5 rounded-full font-black text-xl md:text-2xl flex items-center gap-4 shadow-xl transition-transform hover:scale-105"
          >
            <div className="bg-primary/10 p-3 rounded-full">
              <Phone className="w-8 h-8 text-primary fill-current" />
            </div>
            0675 15 16 12
          </a>
        </div>
      </div>
    </section>
  );
}