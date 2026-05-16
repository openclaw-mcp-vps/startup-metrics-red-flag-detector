export default function Page() {
  const flags = [
    "Burn rate acceleration",
    "Churn spike detection",
    "CAC/LTV ratio collapse",
    "Revenue growth stall",
    "Runway compression",
    "Engagement cliff patterns",
  ];

  const faqs = [
    {
      q: "How does the red flag detection work?",
      a: "Upload your metrics via CSV or connect your data sources. Our pattern engine scores your data against 40+ known startup failure indicators and surfaces risks ranked by severity.",
    },
    {
      q: "What metrics do I need to provide?",
      a: "At minimum: MRR, churn rate, burn rate, and CAC. The more data you provide (DAU, LTV, runway), the more accurate and comprehensive your risk analysis becomes.",
    },
    {
      q: "How quickly will I get alerted?",
      a: "Alerts fire in real-time as soon as a pattern crosses a risk threshold. You'll receive in-app notifications and email alerts so you can act before a red flag becomes a fatal flaw.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Early Warning System
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Detect startup death spiral patterns{" "}
          <span className="text-[#58a6ff]">early</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Analyze your startup metrics against 40+ known failure indicators. Get real-time alerts and actionable recommendations before red flags become fatal.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Detecting Red Flags — $39/mo
        </a>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
          {flags.map((f) => (
            <div key={f} className="flex items-center gap-2 bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-3 text-sm">
              <span className="text-red-400 font-bold">!</span>
              <span>{f}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] text-xs font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$39</p>
          <p className="text-[#8b949e] text-sm mb-6">/month · cancel anytime</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "40+ failure pattern detectors",
              "CSV upload & API connections",
              "Real-time risk scoring",
              "Email & in-app alerts",
              "Actionable recommendations",
              "Unlimited metric history",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#484f58] text-xs pb-8">
        © {new Date().getFullYear()} Startup Metrics Red Flag Detector. All rights reserved.
      </footer>
    </main>
  );
}
