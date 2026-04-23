import { Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-surface-container-lowest py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <h2 className="text-primary text-3xl font-serif font-bold mb-6">نسيم الزبداني</h2>
            <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
              Experience the true essence of Middle Eastern hospitality in the heart of Dubai. Join us for a journey of taste and tradition.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="p-3 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all"><Instagram size={20} /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="p-3 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all"><Facebook size={20} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter" className="p-3 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><a href="#hero" className="hover:text-primary transition-colors text-white/40">Home</a></li>
              <li><a href="#menu" className="hover:text-primary transition-colors text-white/40">Menu</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors text-white/40">Our Story</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors text-white/40">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li>Dubai, United Arab Emirates</li>
              <li>+971 00 000 0000</li>
              <li>info@naseem-alzabadani.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/20">
          <p>&copy; 2024 Naseem Al-Zabadani. All Rights Reserved.</p>
          <p>Designed for Excellence</p>
        </div>
      </div>
    </footer>
  );
};
