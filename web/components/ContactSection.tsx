const benefits = [
  "Nezávazná konzultace",
  "Konkrétní doporučení na míru",
  "Zkušenosti z desítek firem",
];

export default function ContactSection() {
  return (
    <section id="kontakt" className="relative py-24 px-6 bg-white scroll-mt-32 overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(134,100,242,0.07) 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(184,159,245,0.08) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-[35px] md:text-[41px] font-bold text-[#1F2937] mb-4">
            Pojďme společně najít řešení pro vaše HR
          </h2>
          <p className="text-[#6B7280] text-lg leading-relaxed mb-8">
            Ozveme se vám nejpozději do 2 dnů a domluvíme si krátký úvodní call.
          </p>

          {/* Benefits */}
          <ul className="flex flex-col gap-3 mb-10">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#F0EDF9] flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-[#8664F2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-[#1F2937] text-sm font-medium">{b}</span>
              </li>
            ))}
          </ul>

          <div className="flex justify-end">
            <a
              href="mailto:info@suhr.cz"
              className="bg-[#8664F2] text-white font-semibold px-8 py-4 rounded-xl
                hover:bg-[#7450e0] hover:shadow-lg hover:shadow-[#8664F2]/25 hover:-translate-y-0.5
                active:translate-y-0 transition-all duration-200"
            >
              Napsat na info@suhr.cz
            </a>
          </div>
      </div>
    </section>
  );
}
