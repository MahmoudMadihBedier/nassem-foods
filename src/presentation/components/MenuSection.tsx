import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuRepository } from '../../data/repositories/MenuRepository';
import { FadeIn } from './FadeIn';

export const MenuSection = () => {
  const menuData = useMemo(() => MenuRepository.getMenu(), []);
  const [activeCategory, setActiveCategory] = useState(menuData[0]?.category || '');

  const activeItems = useMemo(() =>
    menuData.find(c => c.category === activeCategory)?.items || [],
    [menuData, activeCategory]
  );

  if (menuData.length === 0) return null;

  return (
    <section id="menu" className="py-32 px-6 bg-zinc-50 relative">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-24">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/50 mb-6 block">Selection</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-zinc-900">Gravity-Defying <br/><span className="text-primary italic">Flavors</span></h2>
          </div>
        </FadeIn>

        {/* Category Filter */}
        <div className="sticky top-24 z-20 mb-20 bg-zinc-50/80 backdrop-blur-md py-4 -mx-6 px-6">
          <div className="flex gap-3 no-scrollbar overflow-x-auto pb-2 max-w-4xl mx-auto justify-start sm:justify-center">
            {menuData.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-500 border whitespace-nowrap ${
                  activeCategory === cat.category
                  ? 'bg-primary border-primary text-white font-bold shadow-lg'
                  : 'bg-white border-zinc-200 text-zinc-400 hover:border-primary/50 hover:text-primary'
                }`}
              >
                <img src={cat.icon} alt="" className="w-4 h-4 object-contain filter grayscale opacity-40 group-hover:opacity-100" />
                <span className="text-xs uppercase tracking-widest">{cat.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12"
            >
              {activeItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1 pr-6">
                      <h3 className="text-xl text-zinc-900 group-hover:text-primary transition-colors duration-500 font-serif">{item.name}</h3>
                      <p className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] mt-2 font-bold group-hover:text-primary/40 transition-colors">Celestial Recipe</p>
                    </div>
                    <div className="text-primary font-serif font-bold text-2xl flex items-baseline gap-1 mt-1">
                      {item.price} <span className="text-[10px] text-zinc-300 font-sans tracking-[0.2em] uppercase font-bold">AED</span>
                    </div>
                  </div>
                  <div className="h-[1px] w-full bg-zinc-100 group-hover:bg-primary/20 transition-all duration-700" />
                </motion.div>
              ))}
              {activeItems.length === 0 && (
                <div className="col-span-full py-32 text-center">
                   <p className="text-zinc-300 italic font-serif text-2xl">Preparing weightless delights...</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
