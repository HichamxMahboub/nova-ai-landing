const features = [
  {
    title: "Model-aware insights",
    description: "Real-time telemetry that explains every decision your agents make.",
    tag: "Observability",
    size: "md:col-span-2",
  },
  {
    title: "Agent swarms",
    description: "Spin up specialized copilots that collaborate automatically.",
    tag: "Orchestration",
  },
  {
    title: "Private data vault",
    description: "Encrypted storage with fine-grained access controls.",
    tag: "Security",
  },
  {
    title: "Multimodal pipelines",
    description: "Blend text, vision, and audio workflows in minutes.",
    tag: "Builders",
  },
  {
    title: "Latency optimizer",
    description: "Adaptive caching and routing tuned for global traffic.",
    tag: "Performance",
  },
  {
    title: "Founders cockpit",
    description: "One view for growth, retention, and model spend.",
    tag: "Analytics",
    size: "md:col-span-2",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-6 pb-24">
      <div className="pointer-events-none absolute left-10 top-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.25),rgba(15,23,42,0))] blur-3xl" />
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
            Feature Stack
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            AI infrastructure, beautifully orchestrated.
          </h2>
        </div>
        <button className="hidden rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white md:inline-flex">
          Explore all features
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/60 p-6 backdrop-blur ${
              feature.size ?? ""
            }`}
          >
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.35),rgba(15,23,42,0))] blur-2xl" />
            </div>
            <div className="relative space-y-4">
              <span className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                {feature.tag}
              </span>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-sm text-slate-300">{feature.description}</p>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                Ready in 48 hours
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
