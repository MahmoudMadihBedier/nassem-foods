import { Instagram, Facebook, Twitter, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-white py-32 px-6 relative overflow-hidden border-t border-zinc-100">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <img src="/logo.png" alt="Logo" className="h-16 w-auto" />
              <h2 className="text-primary text-4xl font-serif font-bold italic tracking-tight">نسيم الزبداني</h2>
            </div>
            <p className="text-zinc-400 max-w-sm mb-10 text-lg font-light leading-relaxed">
              Elevating Middle Eastern culinary traditions into a weightless, modern experience in the heart of Dubai.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-zinc-50 rounded-2xl hover:bg-primary/10 hover:text-primary transition-all duration-500 border border-zinc-100"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-zinc-300 font-bold mb-8 uppercase tracking-[0.4em] text-[10px]">Navigation</h4>
            <ul className="space-y-5 text-zinc-500 text-sm font-medium">
              {['Home', 'Menu', 'Story', 'Contact'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors flex items-center gap-2 group">
                    {item}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-300 font-bold mb-8 uppercase tracking-[0.4em] text-[10px]">Connection</h4>
            <ul className="space-y-6 text-zinc-500 text-sm font-light">
              <li>
                <span className="block text-[10px] uppercase tracking-widest text-primary/40 mb-1">Dubai Address</span>
                Dubai Marina, UAE
              </li>
              <li>
                <span className="block text-[10px] uppercase tracking-widest text-primary/40 mb-1">Reservation</span>
                +971 00 000 0000
              </li>
              <li>
                <span className="block text-[10px] uppercase tracking-widest text-primary/40 mb-1">Inquiry</span>
                concierge@naseem-alzabadani.com
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.3em] text-zinc-300 font-bold">
          <p>&copy; 2024 Naseem Al-Zabadani. Designed for the Future.</p>
          <div className="flex gap-8">
             <a href="#" className="hover:text-zinc-900 transition-colors">Privacy</a>
             <a href="#" className="hover:text-zinc-900 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
