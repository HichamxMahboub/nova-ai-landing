const tiers = [
  {
    name: "Launch",
    price: "$199",
    cadence: "/month",
    description: "For early-stage teams shipping their first AI product.",
    highlights: [
      "3 AI workspaces",
      "10k agent runs",
      "Private data vault",
      "Email + Slack support",
    ],
  },
  {
    name: "Scale",
    price: "$499",
    cadence: "/month",
    description: "Built for fast-growing teams who need observability and speed.",
    highlights: [
      "Unlimited workspaces",
      "100k agent runs",
      "Realtime orchestration",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    description: "Dedicated infrastructure with compliance and advanced controls.",
    highlights: [
      "SAML + SCIM",
      "Dedicated success team",
      "Custom model hosting",
      "99.99% SLA",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative mx-auto max-w-6xl px-6 pb-24">
      <div className="pointer-events-none absolute left-1/3 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.2),rgba(15,23,42,0))] blur-3xl" />
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Flexible plans for every AI team.
          </h2>
        </div>
        <p className="max-w-xl text-sm text-slate-400">
          All plans include premium onboarding, SOC2-grade controls, and Nova
          governance dashboards.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/60 p-6 ${
              tier.featured ? "shadow-glow" : ""
            }`}
          >
            {tier.featured && (
              <div className="absolute right-6 top-6 rounded-full bg-emerald-400/20 px-3 py-1 text-xs text-emerald-200">
                Most popular
              </div>
            )}
            <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-3xl font-semibold text-white">
                {tier.price}
              </span>
              <span className="text-sm text-slate-400">{tier.cadence}</span>
            </div>
            <p className="mt-3 text-sm text-slate-300">{tier.description}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              {tier.highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  {highlight}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:opacity-90">
              Choose {tier.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
