import FeatureGrid from "./components/FeatureGrid";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.25),rgba(15,23,42,0))] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(217,70,239,0.2),rgba(15,23,42,0))] blur-3xl" />
        <Hero />
      </div>
      <FeatureGrid />
      <Testimonials />
      <Pricing />
      <footer className="mx-auto flex max-w-6xl flex-col gap-4 px-6 pb-12 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Nova AI. All rights reserved.</span>
        <div className="flex items-center gap-6">
          <button className="transition hover:text-white">Security</button>
          <button className="transition hover:text-white">Careers</button>
          <button className="transition hover:text-white">Contact</button>
        </div>
      </footer>
    </div>
  );
}
