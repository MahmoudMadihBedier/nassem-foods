import { Navbar } from './presentation/components/Navbar';
import { Hero } from './presentation/components/Hero';
import { MenuSection } from './presentation/components/MenuSection';
import { AboutSection } from './presentation/components/AboutSection';
import { Footer } from './presentation/components/Footer';
import { MobileNav } from './presentation/components/MobileNav';
import { FloatingActionBar } from "./presentation/components/FloatingActionBar";
import { FloatingElement } from './presentation/components/FloatingElement';

function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-white text-zinc-900 overflow-x-hidden">
      <Navbar />
      <MobileNav />
      <FloatingActionBar />

      {/* Decorative Floating Elements */}
      <FloatingElement speed={0.2} className="fixed top-[20%] left-[5%] opacity-10 hidden md:block">
        <div className="w-12 h-12 border border-primary rotate-45" />
      </FloatingElement>
      <FloatingElement speed={-0.3} className="fixed bottom-[20%] right-[10%] opacity-10 hidden md:block">
        <div className="w-32 h-32 rounded-full border border-secondary" />
      </FloatingElement>
      <FloatingElement speed={0.1} className="fixed top-[60%] right-[5%] opacity-10 hidden md:block">
        <div className="w-8 h-8 bg-primary rounded-sm rotate-12" />
      </FloatingElement>

      <main className="relative z-10">
        <Hero />
        <AboutSection />
        <MenuSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
