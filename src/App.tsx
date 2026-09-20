import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Background from './components/Background';

function App() {

  return (
    <div className="bg-background min-h-screen text-primary selection:bg-white selection:text-black font-sans relative">
      <Background />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        <Skills />
        <Contact />
      </main>

      <footer className="py-12 text-center border-t border-white/5 bg-background relative z-10">
        <span className="text-xs text-secondary font-mono uppercase tracking-widest">
          © {new Date().getFullYear()} Anurag Anand. Engineered with Taste.
        </span>
      </footer>
    </div>
  );
}

export default App;