import { motion, AnimatePresence } from 'framer-motion';
import { Home, Utensils, History, Phone, MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';

export const FloatingActionBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { icon: Home, label: 'Home', href: '#hero' },
    { icon: History, label: 'Story', href: '#about' },
    { icon: Utensils, label: 'Menu', href: '#menu' },
    { icon: Phone, label: 'Call', href: 'tel:+9710000000' },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.8 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] md:hidden"
        >
          <div className="flex items-center gap-1 p-2 bg-background/40 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="flex flex-col items-center justify-center w-14 h-14 rounded-[1.5rem] text-white/40 hover:text-primary hover:bg-white/5 transition-all"
                aria-label={item.label}
              >
                <item.icon size={20} />
                <span className="text-[8px] uppercase tracking-tighter mt-1 font-bold">{item.label}</span>
              </a>
            ))}
            <div className="w-[1px] h-8 bg-white/10 mx-2" />
            <button
              className="w-14 h-14 rounded-full bg-primary text-background flex items-center justify-center shadow-[0_10px_20px_rgba(255,184,0,0.3)]"
              aria-label="Chat"
            >
              <MessageSquare size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
