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

          <div className="flex flex-col sm:flex-row sm:items-center gap-12">
            {/* Benefits */}
            <ul className="flex flex-col gap-3">
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

            {/* Contact info */}
            <div className="flex flex-col gap-4 shrink-0">
              <a href="mailto:info@suhr.cz" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-[#F0EDF9] flex items-center justify-center shrink-0 group-hover:bg-[#8664F2] transition-colors">
                  <svg className="w-4 h-4 text-[#8664F2] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-[#1F2937] font-medium group-hover:text-[#8664F2] transition-colors">info@suhr.cz</span>
              </a>
              <a href="tel:+420732658407" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-[#F0EDF9] flex items-center justify-center shrink-0 group-hover:bg-[#8664F2] transition-colors">
                  <svg className="w-4 h-4 text-[#8664F2] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-[#1F2937] font-medium group-hover:text-[#8664F2] transition-colors">+420 732 658 407</span>
              </a>
            </div>
          </div>
      </div>
    </section>
  );
}
