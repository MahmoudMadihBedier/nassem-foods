import { useState } from 'react';
import { Menu as MenuIcon, X, MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Experience', href: '#hero' },
    { name: 'Heritage', href: '#about' },
    { name: 'The Menu', href: '#menu' },
    { name: 'Connect', href: '#contact' },
  ];

  return (
    <>
      <div className="fixed top-6 right-6 z-[100] md:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="p-4 bg-primary text-background rounded-2xl shadow-[0_15px_30px_rgba(233,195,73,0.4)] flex items-center gap-2 font-bold text-xs uppercase tracking-widest"
        >
          <MenuIcon size={18} />
          Menu
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-background flex flex-col"
          >
            <div className="flex justify-between items-center p-8">
              <span className="text-primary font-serif font-bold text-2xl">نسيم الزبداني</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-3 bg-white/5 rounded-full text-white"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-10 gap-8">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl font-serif font-bold text-white hover:text-primary transition-colors flex items-center group"
                >
                  <span className="text-xs font-sans font-bold text-primary/30 mr-4 tracking-widest uppercase">0{i + 1}</span>
                  {item.name}
                </motion.a>
              ))}
            </div>

            <div className="p-10 bg-white/5 border-t border-white/5 space-y-8">
              <div className="flex flex-col gap-4 text-white/40 text-sm">
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-primary" />
                  Dubai Marina, UAE
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-primary" />
                  +971 00 000 0000
                </div>
              </div>
              <div className="flex gap-4">
                <Instagram size={20} className="text-white/20 hover:text-primary transition-colors" />
                <Facebook size={20} className="text-white/20 hover:text-primary transition-colors" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
