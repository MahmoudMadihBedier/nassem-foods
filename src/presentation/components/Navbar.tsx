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
      scrolled ? 'py-4 bg-white/80 backdrop-blur-xl border-b border-zinc-100 shadow-sm' : 'py-6 bg-transparent'
    }`}>
      <div className="flex items-center justify-between px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="نسيم الزبداني" className="h-12 w-auto" />
        </div>

        <div className="flex items-center gap-8 text-[13px] font-bold uppercase tracking-[0.05em] text-zinc-500">
          <a href="#hero" className="hover:text-primary transition-colors">الرئيسية</a>
          <a href="#menu" className="hover:text-primary transition-colors">القائمة</a>
          <a href="#about" className="hover:text-primary transition-colors">قصتنا</a>
          <a href="#contact" className="hover:text-primary transition-colors">اتصل بنا</a>
        </div>

        <div className="flex items-center gap-3">
           <a href="tel:+9710000000" className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-container transition-all font-bold text-sm shadow-md">
            <Phone size={14} />
            احجز طاولة
          </a>
        </div>
      </div>
    </nav>
  );
};
