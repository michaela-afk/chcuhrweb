import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Domluvte si nezávaznou konzultaci s CHCUHR. Napište nám na info@chcuhr.cz a ozveme se do 48 hodin.",
  openGraph: {
    url: "https://www.chcuhr.cz/kontakt",
    title: "Kontakt | CHCUHR",
    description: "Domluvte si nezávaznou konzultaci s CHCUHR. Napište nám na info@chcuhr.cz a ozveme se do 48 hodin.",
  },
  alternates: {
    canonical: "https://www.chcuhr.cz/kontakt",
  },
};

export default function KontaktPage() {
  return (
    <main>
      {/* Header */}
      <section className="relative flex items-center min-h-[480px] pt-16">
        <Image
          src="/photos/3V9A0074.webp"
          alt="HR konzultanti na stage"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#1F2937]/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="text-[#D2C8F1] text-sm font-semibold uppercase tracking-widest mb-4">Kontakt</div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Začněme spolupráci</h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
            Napište nám nebo si rovnou domluvte konzultaci. Rádi si vyslechneme vaše HR výzvy.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-[#1F2937] mb-8">Co od nás čekat</h2>
            <div className="flex flex-col gap-6">
              {[
                {
                  step: "1",
                  title: "Nezávazná konzultace",
                  desc: "Nejprve si promluvíme o vašich HR výzvách a zjistíme, zda a jak vám dokážeme pomoci.",
                },
                {
                  step: "2",
                  title: "Návrh spolupráce",
                  desc: "Připravíme konkrétní návrh – rozsah, přístup a podmínky spolupráce.",
                },
                {
                  step: "3",
                  title: "Zahájení",
                  desc: "Pokud si sedneme, začneme pracovat. Rychle a prakticky.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-5">
                  <div className="w-10 h-10 rounded-full bg-[#8664F2] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                    {item.step}
                  </div>
                  <div>
                    <div className="font-semibold text-[#1F2937] mb-1">{item.title}</div>
                    <div className="text-[#6B7280] text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-[#F8F7FC] rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[#1F2937] mb-6">Kontaktní údaje</h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="text-[#8664F2] mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-[#6B7280] uppercase tracking-wider mb-1">Email</div>
                    <a href="mailto:info@chcuhr.cz" className="text-[#1F2937] font-medium hover:text-[#8664F2] transition-colors">
                      info@chcuhr.cz
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-[#8664F2] mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-[#6B7280] uppercase tracking-wider mb-1">Web</div>
                    <span className="text-[#1F2937] font-medium">chcuhr.cz</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1F2937] rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-3">Domluvte konzultaci</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Pošlete nám email s krátkým popisem vaší situace a my se vám ozveme do 48 hodin.
              </p>
              <a
                href="mailto:info@chcuhr.cz?subject=Konzultace%20CHCUHR"
                className="inline-block bg-[#8664F2] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#7450e0] transition-colors text-sm"
              >
                Napsat email
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
