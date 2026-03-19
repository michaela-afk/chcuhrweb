import Link from "next/link";
import Image from "next/image";

export default function ONasPage() {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="relative flex items-center min-h-[480px] pt-16">
        <Image
          src="/photos/3V9A0018.jpg"
          alt="HR konzultace – přednáška"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-[#1F2937]/65" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="text-[#D2C8F1] text-sm font-semibold uppercase tracking-widest mb-4">O nás</div>
          <h1 className="text-5xl font-bold text-white mb-6">Kdo jsme</h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
            CHCUHR je HR konzultační a implementační služba pro firmy, které chtějí skutečně fungující HR.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-[#1F2937] mb-6">Naše mise</h2>
            <p className="text-[#6B7280] leading-relaxed text-lg mb-6">
              Pomáháme firmám budovat lepší pracoviště implementací praktického, moderního a byznysově orientovaného HR.
            </p>
            <p className="text-[#6B7280] leading-relaxed">
              Mnoho firem se potýká s tím, že nemají HR oddělení, jejich HR je zahlcené administrativou, chybí jim strukturované HR procesy, nebo potřebují pomoc se škálováním people operations. CHCUHR pomáhá těmto firmám navrhnout a zavést HR systémy, které podporují jak zaměstnance, tak byznysové výsledky.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="bg-[#F8F7FC] rounded-2xl p-8">
              <div className="text-4xl font-bold text-[#8664F2] mb-2">20–200</div>
              <div className="text-[#1F2937] font-medium">zaměstnanců</div>
              <div className="text-[#6B7280] text-sm mt-1">Typická velikost firem, kterým pomáháme</div>
            </div>
            <div className="bg-[#F8F7FC] rounded-2xl p-8">
              <div className="text-4xl font-bold text-[#8664F2] mb-2">3</div>
              <div className="text-[#1F2937] font-medium">hlavní služby</div>
              <div className="text-[#6B7280] text-sm mt-1">Interim HR, HR projekty, HR outsourcing</div>
            </div>
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="py-20 px-6 bg-[#F8F7FC]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1F2937] mb-4">Pro koho pracujeme</h2>
            <p className="text-[#6B7280] text-lg mb-8">
              Primárně se zaměřujeme na malé a střední firmy, které chtějí profesionální HR bez zbytečné byrokracie.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Startupy", desc: "Budující první HR základy a procesy" },
                { title: "Scale-upy", desc: "Rychle rostoucí firmy potřebující HR strukturu" },
                { title: "Technologické firmy", desc: "S důrazem na moderní a datový přístup k HR" },
                { title: "Servisní firmy", desc: "Kde lidé jsou klíčovým aktivem" },
                { title: "Rodinné firmy", desc: "Přecházející na profesionální HR" },
                { title: "Firmy v transformaci", desc: "Potřebující HR podporu při změnách" },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-5 border border-gray-100">
                  <h3 className="font-bold text-[#1F2937] mb-1 text-sm">{item.title}</h3>
                  <p className="text-[#6B7280] text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/photos/3V9A1044.jpg"
              alt="Účastník HR akce"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* SUHR connection */}
      <section className="py-20 px-6 bg-[#1F2937]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[#8664F2] text-sm font-semibold uppercase tracking-widest mb-4">Ekosystém</div>
            <h2 className="text-3xl font-bold text-white mb-6">
              CHCUHR &amp; SUHR
            </h2>
            <p className="text-gray-400 leading-relaxed mb-5">
              CHCUHR je úzce propojena s <span className="text-[#D2C8F1] font-medium">SUHR</span> – HR vzdělávací a komunitní platformou.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Zatímco SUHR rozvíjí HR profesionály prostřednictvím akademií, kurzů a komunity, CHCUHR aplikuje HR znalosti v praxi firem. Vzdělání a praxe se tak vzájemně doplňují a posilují.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="border border-gray-700 rounded-2xl p-8">
              <div className="text-[#D2C8F1] font-bold text-xl mb-3">SUHR</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                HR vzdělávání a HR komunita. HR akademie, kurzy, eventy a profesní networking.
              </p>
            </div>
            <div className="border border-[#8664F2] rounded-2xl p-8">
              <div className="text-[#8664F2] font-bold text-xl mb-3">CHCUHR</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                HR konzultace a implementace. Aplikace HR znalostí v reálném prostředí firem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-5">
            Pojďme se poznat
          </h2>
          <p className="text-[#6B7280] text-lg mb-10">
            Domluvte si nezávaznou konzultaci a řekněte nám o svých HR výzvách.
          </p>
          <Link
            href="/#kontakt"
            className="inline-block bg-[#8664F2] text-white font-semibold px-10 py-4 rounded-lg hover:bg-[#7450e0] transition-colors"
          >
            Domluvit konzultaci
          </Link>
        </div>
      </section>
    </main>
  );
}
