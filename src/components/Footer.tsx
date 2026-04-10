import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <a href="#" className="flex items-center gap-2 group" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                <img 
                  src="/images/logo.jpg" 
                  alt="Mr Woody" 
                  className="h-12 w-12 rounded-full object-cover shadow-md" 
                />
              </a>
              <span className="font-display font-black text-2xl tracking-tight">
                Mr Woody
              </span>
            </div>
            <p className="text-gray-400 font-medium">
              Premium fast food in Khemis Miliana. Delicious taste, fast service, quality ingredients.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#menu" className="hover:text-primary transition-colors">Menu</a></li>
              <li><a href="#order" className="hover:text-primary transition-colors">Order Online</a></li>
              <li><a href="#reviews" className="hover:text-primary transition-colors">Reviews</a></li>
              <li><a href="#location" className="hover:text-primary transition-colors">Location</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:0675151612" className="hover:text-white transition-colors">0675 15 16 12</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>764G+PXR, Khemis Miliana, Algeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span>Open until 12:00 AM</span>
              </li>
            </ul>
          </div>

          {/* Order CTA */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Hungry?</h4>
            <p className="text-gray-400 mb-6">Don't wait, order your favorite meal now.</p>
            <a 
              href="tel:0675151612"
              className="inline-block bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl font-bold transition-colors w-full text-center"
            >
              Call to Order
            </a>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Mr Woody Fast Food. All rights reserved.</p>
          <p>Khemis Miliana, Algeria</p>
        </div>
      </div>
    </footer>
  );
}
