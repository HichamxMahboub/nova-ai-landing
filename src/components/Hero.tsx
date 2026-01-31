import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.4),rgba(15,23,42,0))] blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.35),rgba(15,23,42,0))] blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-glow"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.8)]" />
            AI-native launch • 2026 waitlist
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            The premium AI workspace for
            <span className="block bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
              high-velocity teams
            </span>
          </motion.h1>

          <motion.p variants={item} className="text-lg text-slate-300">
            Nova AI unifies research, orchestration, and deployment with a
            lightning-fast interface built for founders and operators.
          </motion.p>

          <motion.div variants={item} className="flex flex-col gap-4 sm:flex-row">
            <div className="flex w-full max-w-md items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900"
              >
                Join waitlist
              </motion.button>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white"
            >
              View live demo
            </motion.button>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-6 text-xs text-slate-400">
            <span>Trusted by AI-native startups</span>
            <span>•</span>
            <span>99.99% uptime</span>
            <span>•</span>
            <span>SOC2-ready</span>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/10 to-cyan-500/20 blur-2xl" />
          <div className="relative rounded-[28px] border border-white/10 bg-slate-900/70 p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Nova Console
              </div>
              <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs text-emerald-300">
                Live
              </span>
            </div>
            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm text-slate-200">Autonomous research</div>
                <div className="mt-2 h-2 w-2/3 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300" />
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm text-slate-200">Realtime orchestration</div>
                <div className="mt-2 h-2 w-3/4 rounded-full bg-gradient-to-r from-fuchsia-400 to-indigo-400" />
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm text-slate-200">Secure deployment</div>
                <div className="mt-2 h-2 w-1/2 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
