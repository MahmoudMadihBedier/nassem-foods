import { motion, useScroll, useTransform } from 'framer-motion';
import { ThreeHero } from './ThreeHero';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-10">
      <ThreeHero />
      <motion.div
        style={{ y: y1, opacity }}
        className="relative z-10 text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.3em] text-accent uppercase border border-accent/30 rounded-full bg-gradient-to-r from-primary/10 to-accent/10"
          >
            Antigravity Dining Experience
          </motion.span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6 text-zinc-900 leading-[1.1] tracking-tight">
            Naseem <br />
            <span className="text-primary italic">Al-Zabadani</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-base md:text-xl text-zinc-500 max-w-lg mx-auto mb-10 font-sans font-light leading-relaxed"
          >
            Experience the weightless fusion of Zabadani heritage and Dubai's modern luxury.
          </motion.p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xs mx-auto sm:max-w-none">
            <a
              href="#menu"
              className="px-10 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full hover:shadow-lg transition-all w-full sm:w-auto hover:from-primary-600 hover:to-accent-dark"
            >
              The Menu
            </a>
            <a
              href="#about"
              className="px-10 py-4 border border-zinc-200 text-zinc-900 font-bold rounded-full hover:bg-zinc-50 transition-all w-full sm:w-auto backdrop-blur-sm"
            >
              Story
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-20"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-400 to-transparent" />
      </motion.div>
    </section>
  );
};
