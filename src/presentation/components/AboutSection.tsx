import { FadeIn } from './FadeIn';

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <FadeIn direction="right" antigravity>
          <div className="relative group">
            <div className="aspect-[4/5] bg-surface-container-high rounded-[2rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-[1.02]">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000"
                alt="Restaurant Interior"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
            </div>
            {/* Antigravity Badge */}
            <div className="absolute -bottom-10 -right-4 w-40 h-40 bg-primary rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-background shadow-[0_20px_50px_rgba(233,195,73,0.4)] rotate-12">
               <span className="text-sm font-bold uppercase tracking-widest mb-1 opacity-60">Est.</span>
               <span className="text-4xl font-serif font-bold italic">1985</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={0.2}>
          <div className="relative z-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/50 mb-6 block">Our Heritage</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10 text-white leading-tight">
              The Weightless <br />
              <span className="text-primary italic">Soul of Zabadani</span>
            </h2>
            <div className="space-y-8 text-white/40 text-lg leading-relaxed font-light">
              <p>
                At Naseem Al-Zabadani, we've stripped away the noise to let the flavors float. Our heritage from the gardens of Zabadani is elevated into a weightless dining experience in Dubai.
              </p>
              <p>
                Every dish is a masterclass in balance—where tradition meets the antigravity of modern gastronomy.
              </p>

              <div className="pt-12 grid grid-cols-2 gap-10 border-t border-white/5">
                <div className="group">
                  <span className="block text-primary text-4xl font-serif font-bold mb-2 group-hover:translate-y-[-5px] transition-transform">Pure</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Original Harvest</span>
                </div>
                <div className="group">
                  <span className="block text-primary text-4xl font-serif font-bold mb-2 group-hover:translate-y-[-5px] transition-transform">Boundless</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Culinary Spirit</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
