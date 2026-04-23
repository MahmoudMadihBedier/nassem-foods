import { Navbar } from './presentation/components/Navbar';
import { Hero } from './presentation/components/Hero';
import { MenuSection } from './presentation/components/MenuSection';
import { AboutSection } from './presentation/components/AboutSection';
import { Footer } from './presentation/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-background text-white">
      <Navbar />
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
