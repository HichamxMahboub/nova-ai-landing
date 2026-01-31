import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-30 border-b border-white/5 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 text-sm font-semibold text-white shadow-glow">
            N
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Nova AI</p>
            <p className="text-xs text-slate-400">Premium Stack</p>
          </div>
        </div>

        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a className="transition hover:text-white" href="#features">
            Features
          </a>
          <a className="transition hover:text-white" href="#testimonials">
            Customers
          </a>
          <a className="transition hover:text-white" href="#pricing">
            Pricing
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white md:inline-flex">
            Sign in
          </button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-2xl bg-white px-4 py-2 text-xs font-semibold text-slate-900"
          >
            Join waitlist
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
