import Link from "next/link";
import Image from "next/image";
import ProblemsSection from "@/components/ProblemsSection";
import ContactSection from "@/components/ContactSection";
import StatsRow from "@/components/StatsRow";
import FallWobbleText from "@/components/FallWobbleText";
import HowWeWorkSteps from "@/components/HowWeWorkSteps";

const services = [
  {
    title: "Nastavení HR ve firmě",
    description: "Pro firmy, které HR nemají nebo ho mají jen částečně. Nastavíme základní HR procesy tak, aby firma mohla zdravě růst.",
    example: "Nastavený onboarding proces včetně checklistů, šablon a jasných odpovědností.",
  },
  {
    title: "HR strategie",
    description: "Pomůžeme vám nastavit jasný směr práce s lidmi, který bude vycházet z vašich byznysových cílů. HR tak začne systematicky podporovat fungování firmy.",
    example: "HR strategie na 6–12 měsíců včetně priorit, konkrétních kroků a metrik.",
  },
  {
    title: "Konzultace pro vedení a HR",
    description: "Pomáháme řešit konkrétní situace, které ve firmě aktuálně řešíte – od práce s lidmi po nastavení procesů. Přinášíme praktická řešení, která fungují v praxi.",
    example: "Návrh řešení konkrétní situace (např. odchody lidí, konflikty v týmu) + doporučené kroky.",
  },
  {
    title: "Interim HR",
    description: "Dočasně převezmeme HR agendu nebo její část a zajistíme stabilní fungování i v období změn nebo růstu. Získáte zkušené HR know-how bez nutnosti přijímat interního HR manažera.",
    example: "Převzatá HR agenda (nábor, onboarding, komunikace s manažery) a stabilizované procesy.",
  },
  {
    title: "HR outsourcing",
    description: "Zajistíme dlouhodobou podporu HR aktivit – od každodenní agendy po podporu manažerů a zlepšování procesů. Fungujeme jako vaše externí HR oddělení.",
    example: "Pravidelná správa HR agendy + dostupná HR podpora pro manažery i zaměstnance.",
  },
  {
    title: "HR projekty",
    description: "Zrealizujeme konkrétní HR změny nebo iniciativy podle vašich potřeb – od náboru přes onboarding až po výkonnostní řízení. Věci nastavíme a dotáhneme do praxe.",
    example: "Navržený a zavedený proces (např. výkonnostní řízení nebo nábor) včetně nástrojů a šablon.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex items-center min-h-[380px] md:min-h-[620px] pt-16 bg-[#1F2937]">
        <Image
          src="/photos/3V9A1749.jpg"
          alt="Tým CHCUHR"
          fill
          className="object-cover object-left md:object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#1F2937]/70" />
        <div className="relative z-10 w-full py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-[63px] md:text-[79px] font-bold text-white leading-tight mb-8 mt-[60px] max-w-3xl">
              Skvělé firmy začínají u <FallWobbleText>spokojených lidí.</FallWobbleText>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-10 max-w-2xl font-medium">
              A od toho jsme tu my. Pomáháme malým a středním firmám nastavit a rozvíjet HR tak, aby podporovalo růst firmy i spokojenost zaměstnanců.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col items-start gap-2">
                <a
                  href="mailto:info@suhr.cz"
                  className="bg-[#8664F2] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#7450e0] transition-colors text-center shadow-lg shadow-[#8664F2]/30"
                >
                  Domluvit konzultaci
                </a>
                <span className="text-white/70 text-sm pl-1">info@suhr.cz</span>
              </div>
              <Link
                href="#sluzby"
                className="border border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:border-white hover:bg-white/10 transition-colors text-center"
              >
                Naše služby
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ProblemsSection />

      {/* O nás – SUHR */}
      <section id="o-nas" className="relative py-24 px-6 bg-[#1F2937] scroll-mt-32">
        <div className="relative z-20 max-w-6xl mx-auto">
          <h2 className="text-[35px] md:text-[41px] font-bold text-white mb-4">
            CHCUHR je součástí ekosystému SUHR
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="self-start">
              <div className="relative mt-[30px]">
                <svg className="absolute -top-3 -left-4 w-8 h-8 text-[#8664F2] opacity-60" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
                </svg>
                <blockquote className="pl-6">
                  <p className="text-gray-200 leading-relaxed mb-4 text-lg italic">
                    „V CHCUHR čerpáme ze zkušeností a sítě SUHR – největší HR vzdělávací platformy v České republice."
                  </p>
                  <p className="text-gray-300 leading-relaxed italic">
                    „Za sedm let existence SUHR proškolilo tisíce absolventů, propojilo stovky HR expertů a pomohlo stovkám firem posunout jejich HR na novou úroveň. Tuto sílu a know-how přinášíme přímo do vaší firmy."
                  </p>
                </blockquote>
                <div className="mt-6 pl-6 mb-[20px]">
                  <p className="text-white font-semibold text-sm">Michaela Tumpachová</p>
                  <p className="text-[#D2C8F1] text-sm">Zakladatelka CHCUHR</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>
        {/* Founder photo – starts at stats bar level */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/photos/founder.png"
          alt="Michaela Tumpachová – zakladatelka CHCUHR"
          style={{
            position: "absolute",
            bottom: "64px",
            right: "max(24px, calc((100% - 72rem) / 2))",
            height: "459px",
            width: "383px",
            objectFit: "cover",
            zIndex: 20,
          }}
        />
      </section>

      {/* Stats bridge */}
      <div className="relative z-10 -mt-16 -mb-16 px-6">
        <StatsRow />
      </div>

      {/* Services */}
      <section id="sluzby" className="relative pt-32 pb-24 px-6 bg-[#F8F7FC] scroll-mt-32 overflow-hidden">
        {/* Decorative corner accents */}
        <svg className="absolute -right-2 -top-2 w-48 h-48 pointer-events-none" viewBox="0 0 200 200" fill="none">
          <path d="M 200,160 L 200,20 Q 200,0 180,0 L 40,0" stroke="#8664F2" strokeWidth="18" strokeLinecap="round"/>
          <path d="M 200,120 L 200,20 Q 200,0 180,0 L 80,0" stroke="#8664F2" strokeWidth="6" strokeLinecap="round" strokeOpacity="0.4"/>
        </svg>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="mb-14">
            <h2 className="text-[35px] md:text-[41px] font-bold text-[#1F2937] mb-4">Naše služby</h2>
            <p className="text-[#6B7280] text-lg leading-relaxed">
              Každá firma má jiné potřeby – od nastavení základních HR procesů až po strategické řízení lidí. Naše služby pokrývají klíčové oblasti, které vám pomohou stabilizovat tým, podpořit růst firmy a nastavit HR tak, aby dlouhodobě fungovalo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group flex flex-col bg-white rounded-2xl p-8 shadow-sm border border-gray-100
                  hover:shadow-[0_12px_40px_rgba(134,100,242,0.10)]
                  hover:-translate-y-[5px]
                  hover:scale-[1.01]
                  hover:bg-[#FDFCFF]
                  hover:border-[#E5DEFA]
                  transition-all duration-300 ease-out"
              >
                {/* Top accent bar */}
                <div className="w-8 h-[3px] bg-[#8664F2] rounded-full mb-6 group-hover:w-14 transition-all duration-300" />

                <h3 className="text-[17px] font-bold text-[#1F2937] mb-3 leading-snug">{s.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed flex-1">{s.description}</p>

                {/* Příklad výstupu */}
                <div className="mt-5 pt-5 border-t border-gray-100">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#8664F2] mb-2">
                    Příklad výstupu
                  </span>
                  <p className="text-[#1F2937] text-sm leading-relaxed">{s.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jak pracujeme */}
      <section id="jak-pracujeme" className="relative py-24 px-6 scroll-mt-32">
        <Image
          src="/photos/3V9A0732.jpg"
          alt="Spolupráce s klientem – CHCUHR"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#1F2937]/75" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Heading + subtitle */}
          <div className="mb-14">
            <h2 className="text-[35px] md:text-[41px] font-bold text-white mb-4">Jak pracujeme</h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Každá firma je jiná, ale princip naší spolupráce zůstává stejný. Nejprve pochopíme vaši situaci, navrhneme řešení a společně ho uvedeme do praxe tak, aby dlouhodobě fungovalo.
            </p>
          </div>

          {/* Steps grid */}
          <HowWeWorkSteps />
        </div>
      </section>


      <ContactSection />
    </main>
  );
}
