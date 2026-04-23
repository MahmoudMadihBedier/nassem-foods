import { Menu as MenuIcon, Phone } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center gap-2">
        <span className="text-primary text-2xl font-serif font-bold">نسيم الزبداني</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
        <a href="#hero" className="hover:text-primary transition-colors">Home</a>
        <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
        <a href="#about" className="hover:text-primary transition-colors">Our Story</a>
        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
      </div>
      <div className="flex items-center gap-4">
        <a href="tel:+9710000000" className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full hover:bg-primary/20 transition-all">
          <Phone size={16} />
          <span className="hidden sm:inline">Book Table</span>
        </a>
        <button aria-label="Menu" className="md:hidden p-2 text-white">
          <MenuIcon />
        </button>
      </div>
    </nav>
  );
};
