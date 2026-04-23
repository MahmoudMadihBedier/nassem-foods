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
    <section id="menu" className="py-24 px-6 bg-surface-container-lowest">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">Our Masterpieces</h2>
            <p className="text-white/50">Each dish is a curated experience of tradition and modernity.</p>
          </div>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-16 no-scrollbar overflow-x-auto pb-4 sm:overflow-visible">
            {menuData.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all border whitespace-nowrap ${
                  activeCategory === cat.category
                  ? 'bg-primary border-primary text-background font-bold'
                  : 'bg-surface-container border-white/5 text-white/60 hover:border-white/20'
                }`}
              >
                <img src={cat.icon} alt="" className="w-5 h-5 object-contain filter grayscale invert brightness-0" />
                <span className="text-sm">{cat.category}</span>
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Menu Items */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid md:grid-cols-2 gap-x-12 gap-y-8"
            >
              {activeItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="group flex justify-between items-end border-b border-white/5 pb-4 hover:border-primary/30 transition-colors"
                >
                  <div className="flex-1 pr-4">
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-lg text-white group-hover:text-primary transition-colors">{item.name}</h3>
                    </div>
                    <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] mt-1 font-bold">Authentic Heritage</p>
                  </div>
                  <div className="text-primary font-serif font-bold text-xl flex items-baseline gap-1">
                    {item.price} <span className="text-[10px] text-white/40 font-sans tracking-widest uppercase">AED</span>
                  </div>
                </motion.div>
              ))}
              {activeItems.length === 0 && (activeCategory) && (
                <div className="col-span-2 py-20 text-center">
                   <p className="text-white/20 italic font-serif text-xl">The culinary story for this category is still being written...</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
