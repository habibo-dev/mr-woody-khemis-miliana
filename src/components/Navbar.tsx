import { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-primary text-white w-10 h-10 rounded-xl flex items-center justify-center font-display font-black text-xl shadow-lg group-hover:scale-105 transition-transform">
            W
          </div>
          <span className={cn(
            "font-display font-black text-2xl tracking-tight transition-colors",
            isScrolled ? "text-secondary" : "text-white"
          )}>
            Mr Woody
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className={cn(
            "flex items-center gap-6 font-medium text-sm transition-colors",
            isScrolled ? "text-secondary/80" : "text-white/90"
          )}>
            <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Avis / آراء</a>
            <a href="#location" className="hover:text-primary transition-colors">Localisation</a>
          </div>

          <div className="flex items-center gap-4">
            <button className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors",
              isScrolled ? "text-secondary" : "text-white"
            )}>
              <Globe className="w-4 h-4" />
              <span>AR / FR</span>
            </button>
            <a 
              href="tel:0675151612" 
              className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-full font-bold flex items-center gap-2 shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              <span>0675 15 16 12</span>
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={cn(
            "md:hidden p-2 rounded-lg",
            isScrolled ? "text-secondary" : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          <a href="#menu" className="text-secondary font-medium p-2" onClick={() => setIsMobileMenuOpen(false)}>Menu</a>
          <a href="#reviews" className="text-secondary font-medium p-2" onClick={() => setIsMobileMenuOpen(false)}>Avis / آراء</a>
          <a href="#location" className="text-secondary font-medium p-2" onClick={() => setIsMobileMenuOpen(false)}>Localisation</a>
          <div className="h-px bg-gray-100 my-2" />
          <a 
            href="tel:0675151612" 
            className="bg-primary text-white p-3 rounded-xl font-bold flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now: 0675 15 16 12</span>
          </a>
        </div>
      )}
    </header>
  );
}