const testimonials = [
  {
    quote:
      "Nova shipped our AI concierge in a week. The orchestration layer is stunning.",
    name: "Maya Chen",
    role: "Founder, Lumen Labs",
  },
  {
    quote:
      "The observability suite turned our agent ops into a predictable growth engine.",
    name: "Andre Vega",
    role: "VP Product, Helix AI",
  },
  {
    quote:
      "We cut inference spend by 42% while doubling throughput. The UI is addictive.",
    name: "Priya Raman",
    role: "CTO, Orbit Stack",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative mx-auto max-w-6xl px-6 pb-24">
      <div className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(94,234,212,0.25),rgba(15,23,42,0))] blur-3xl" />
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
          Trusted Teams
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          Founders choose Nova to scale faster.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="rounded-[28px] border border-white/10 bg-slate-900/60 p-6"
          >
            <p className="text-sm text-slate-200">“{item.quote}”</p>
            <div className="mt-6">
              <p className="text-sm font-semibold text-white">{item.name}</p>
              <p className="text-xs text-slate-400">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
