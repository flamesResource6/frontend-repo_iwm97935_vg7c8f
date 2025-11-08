import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white selection:bg-cyan-500/30 selection:text-white">
      {/* Top nav style bar */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="inline-block h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
            <span className="text-sm font-semibold tracking-wider text-slate-200">AI Fridge Gene</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#cta" className="hover:text-white transition-colors">Get access</a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <div id="features"><Features /></div>
        <HowItWorks />
        <div id="cta"><FinalCTA /></div>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/60 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} AI Fridge Gene. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
