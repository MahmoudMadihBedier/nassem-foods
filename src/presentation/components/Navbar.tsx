import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-500 hidden md:block ${
      scrolled ? 'py-4 bg-background/80 backdrop-blur-xl border-b border-white/5' : 'py-6 bg-transparent'
    }`}>
      <div className="flex items-center justify-between px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Naseem Al-Zabadani Logo" className="h-10 w-auto brightness-110" />
          <span className="text-primary text-xl font-serif font-bold tracking-tight">نسيم الزبداني</span>
        </div>

        <div className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
          <a href="#hero" className="hover:text-primary transition-colors">Home</a>
          <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
          <a href="#about" className="hover:text-primary transition-colors">Story</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-3">
           <a href="tel:+9710000000" className="flex items-center gap-2 px-6 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full hover:bg-primary/20 transition-all font-bold text-xs uppercase tracking-widest">
            <Phone size={14} />
            Book Table
          </a>
        </div>
      </div>
    </nav>
  );
};
