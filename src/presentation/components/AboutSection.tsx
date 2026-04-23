import { FadeIn } from './FadeIn';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <FadeIn direction="right">
          <div className="relative">
            <div className="aspect-[4/5] bg-surface-container-high rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000"
                alt="Restaurant Interior"
                className="w-full h-full object-cover" loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary rounded-3xl p-6 hidden md:flex flex-col justify-end text-background shadow-2xl">
               <span className="text-4xl font-serif font-bold italic text-background">Since</span>
               <span className="text-2xl font-bold text-background">1985</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={0.2}>
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-white">The Breeze of <span className="text-primary italic">Zabadani</span></h2>
            <div className="space-y-6 text-white/60 text-lg leading-relaxed">
              <p>
                Naseem Al-Zabadani represents more than just a culinary destination; it is a bridge between the tranquil gardens of Zabadani and the vibrant spirit of Dubai.
              </p>
              <p>
                Founded on the principles of Middle Eastern hospitality, we take pride in sourcing the finest ingredients to recreate the authentic flavors of our heritage. Our chefs combine age-old recipes with contemporary techniques to create masterpieces that delight all senses.
              </p>
              <div className="pt-8 grid grid-cols-2 gap-8 border-t border-white/10">
                <div>
                  <span className="block text-primary text-3xl font-serif font-bold">100%</span>
                  <span className="text-sm uppercase tracking-widest text-white/40">Fresh Ingredients</span>
                </div>
                <div>
                  <span className="block text-primary text-3xl font-serif font-bold">24/7</span>
                  <span className="text-sm uppercase tracking-widest text-white/40">Dubai Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
