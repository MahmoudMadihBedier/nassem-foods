import { Navbar } from './presentation/components/Navbar';
import { Hero } from './presentation/components/Hero';
import { MenuSection } from './presentation/components/MenuSection';
import { AboutSection } from './presentation/components/AboutSection';
import { Footer } from './presentation/components/Footer';
import { MobileNav } from './presentation/components/MobileNav';

function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-background text-white overflow-x-hidden">
      <Navbar />
      <MobileNav />
      <main>
        <Hero />
        <AboutSection />
        <MenuSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
