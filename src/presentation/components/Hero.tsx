import { motion } from 'framer-motion';
import { ThreeHero } from './ThreeHero';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ThreeHero />
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-primary uppercase border border-primary/20 rounded-full bg-primary/5">
            DUBAI'S FINEST MIDDLE EASTERN CUISINE
          </span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 text-white leading-tight">
            Naseem Al-Zabadani <br />
            <span className="text-primary italic">نسيم الزبداني</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-sans">
            A symphony of flavors from the heart of Zabadani, served with contemporary elegance in the heart of Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#menu"
              className="px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-background font-bold rounded-full hover:scale-105 transition-transform w-full sm:w-auto"
            >
              Explore Menu
            </a>
            <a
              href="#about"
              className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all w-full sm:w-auto"
            >
              Our Story
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest font-bold text-white">Scroll Down</span>
        <div className="w-px h-8 bg-white/50" />
      </div>
    </section>
  );
};
