import { motion } from 'framer-motion';
import { Phone, ArrowRight, Star, Clock, MapPin } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-secondary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero.jpg" 
          alt="Delicious fast food burger" 
          className="w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary border border-primary/30 font-semibold text-sm mb-6">
              🔥 Best Fast Food in Khemis Miliana
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-display font-black text-white leading-[1.1] mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Delicious Fast Food <br />
            <span className="text-primary">In Minutes.</span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Premium taste, lightning speed. Les meilleurs tacos, pizzas et sandwichs à Khemis Miliana. 
            <span className="block mt-2 font-medium text-white">البنة والسرعة مضمونة!</span>
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a 
              href="tel:0675151612"
              className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(255,69,0,0.4)] transition-all hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>Call Now</span>
            </a>
            <a 
              href="#order"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all"
            >
              <span>Order Online</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Trust Chips */}
          <motion.div 
            className="flex flex-wrap gap-4 md:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-2 text-white">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              </div>
              <div>
                <div className="font-bold">4.7/5</div>
                <div className="text-xs text-gray-400">28 Reviews</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-white">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-bold">Open Now</div>
                <div className="text-xs text-gray-400">Until 12:00 AM</div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-white">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-bold">Khemis Miliana</div>
                <div className="text-xs text-gray-400">Takeaway & Delivery</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}