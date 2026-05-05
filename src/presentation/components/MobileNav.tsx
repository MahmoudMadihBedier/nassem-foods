import { useState } from 'react';
import { Menu as MenuIcon, X, MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'التجربة', href: '#hero' },
    { name: 'تراثنا', href: '#about' },
    { name: 'القائمة', href: '#menu' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <>
      <div className="fixed top-6 left-6 z-[100] md:hidden flex items-center gap-4">
        <img src="/logo.png" alt="Logo" className="h-10 w-auto shadow-sm" />
        <button
          onClick={() => setIsOpen(true)}
          className="p-4 bg-primary text-white rounded-2xl shadow-lg flex items-center gap-2 font-bold text-sm uppercase tracking-widest"
        >
          <MenuIcon size={18} />
          القائمة
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-white flex flex-col"
          >
            <div className="flex justify-between items-center p-8">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
                <span className="text-zinc-900 font-serif font-bold text-2xl">نسيم الزبداني</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-3 bg-zinc-50 rounded-full text-zinc-900"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-10 gap-8">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl font-serif font-bold text-zinc-900 hover:text-primary transition-colors flex items-center group"
                >
                  <span className="text-sm font-sans font-bold text-primary/30 ml-4 tracking-widest uppercase">0{i + 1}</span>
                  {item.name}
                </motion.a>
              ))}
            </div>

            <div className="p-10 bg-zinc-50 border-t border-zinc-100 space-y-8">
              <div className="flex flex-col gap-4 text-zinc-400 text-sm">
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-primary" />
                  دبي مارينا، الإمارات
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-primary" />
                  +971 00 000 0000
                </div>
              </div>
              <div className="flex gap-4">
                <Instagram size={20} className="text-zinc-300 hover:text-primary transition-colors" />
                <Facebook size={20} className="text-zinc-300 hover:text-primary transition-colors" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
