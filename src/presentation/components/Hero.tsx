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
            className="inline-block px-4 py-1.5 mb-10 text-[12px] font-bold tracking-[0.1em] text-primary uppercase border border-primary/20 rounded-full bg-primary/5"
          >
            تجربة طعام خارج حدود الجاذبية
          </motion.span>

          <div className="flex justify-center mb-10">
            <img
              src="/logo.png"
              alt="شعار نسيم الزبداني"
              className="h-48 md:h-72 w-auto object-contain drop-shadow-[0_20px_50px_rgba(255,184,0,0.2)]"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-2xl text-zinc-500 max-w-lg mx-auto mb-10 font-sans font-light leading-relaxed"
          >
            استمتع بمزيج فريد بين عبق تراث الزبداني وفخامة دبي الحديثة في تجربة تفوق الخيال.
          </motion.p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xs mx-auto sm:max-w-none">
            <a
              href="#menu"
              className="px-10 py-4 bg-primary text-white font-bold rounded-full hover:shadow-lg transition-all w-full sm:w-auto text-lg"
            >
              استكشف القائمة
            </a>
            <a
              href="#about"
              className="px-10 py-4 border border-zinc-200 text-zinc-900 font-bold rounded-full hover:bg-zinc-50 transition-all w-full sm:w-auto backdrop-blur-sm text-lg"
            >
              قصتنا
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
