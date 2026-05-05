import { FadeIn } from './FadeIn';
import { Tilt } from './Tilt';

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <FadeIn direction="left" antigravity>
          <Tilt>
            <div className="relative group">
              <div className="aspect-[4/5] bg-zinc-100 rounded-[2rem] overflow-hidden shadow-xl transition-transform duration-700 group-hover:scale-[1.02]">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000"
                  alt="التصميم الداخلي للمطعم"
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
              </div>
              <div
                style={{ transform: "translateZ(50px)" }}
                className="absolute -bottom-10 -left-4 w-40 h-40 bg-gradient-to-br from-primary to-primary-container rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-white shadow-xl -rotate-12"
              >
                 <span className="text-sm font-bold uppercase tracking-widest mb-1 opacity-60 font-sans">تأسس</span>
                 <span className="text-4xl font-serif font-bold italic">1985</span>
              </div>
            </div>
          </Tilt>
        </FadeIn>

        <FadeIn direction="right" delay={0.2}>
          <div className="relative z-10">
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary/50 mb-6 block">تراثنا الأصيل</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-10 text-zinc-900 leading-tight">
              جوهر الزبداني <br />
              <span className="text-primary italic font-serif">المتحرر من الجاذبية</span>
            </h2>
            <div className="space-y-8 text-zinc-500 text-xl leading-relaxed font-light">
              <p>
                في نسيم الزبداني، قمنا بإزالة كل ما هو مألوف لنسمح للنكهات بأن تطفو. تراثنا من بساتين الزبداني يرتقي ليصبح تجربة طعام فريدة في قلب دبي.
              </p>
              <p>
                كل طبق هو لوحة فنية تجسد التوازن المثالي—حيث تلتقي التقاليد العريقة بإبداع فن الطهي الحديث.
              </p>

              <div className="pt-12 grid grid-cols-2 gap-10 border-t border-zinc-100">
                <div className="group">
                  <span className="block text-primary text-4xl font-serif font-bold mb-2 group-hover:translate-y-[-5px] transition-all">نقي</span>
                  <span className="text-[12px] uppercase tracking-[0.1em] font-bold text-zinc-400">محصول أصلي</span>
                </div>
                <div className="group">
                  <span className="block text-secondary text-4xl font-serif font-bold mb-2 group-hover:translate-y-[-5px] transition-all">مبدع</span>
                  <span className="text-[12px] uppercase tracking-[0.1em] font-bold text-zinc-400">روح الطهي</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
