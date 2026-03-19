"use client";

const problems = [
  {
    text: "Nemáte vlastní HR, ale firma roste",
    desc: "Pomáháme vám nastavit klíčové HR procesy externě, abyste měli jistotu, že lidé i firma rostou správným směrem.",
  },
  {
    text: "Máte HR, ale chybí strategie",
    desc: "Podíváme se na vaše HR fungování a pomůžeme vám nastavit jasný směr, který podpoří růst firmy i práci s lidmi.",
  },
  {
    text: "Manažeři si nejsou jistí, jak vést lidi",
    desc: "Podpoříme vaše manažery v práci s lidmi – od vedení 1:1 schůzek přes zpětnou vazbu až po řešení náročných situací v týmu.",
  },
  {
    text: "Lidé odcházejí častěji, než byste chtěli",
    desc: "Pomůžeme vám odhalit, proč lidé odcházejí, a nastavit kroky, které zvýší stabilitu týmu a spokojenost zaměstnanců.",
  },
  {
    text: "Chybí jasné role a odpovědnosti",
    desc: "Nastavíme strukturu rolí a odpovědností tak, aby každý věděl, co se od něj očekává a tým fungoval efektivněji.",
  },
  {
    text: "Řešíte konkrétní HR situaci nebo problém",
    desc: "Ať už jde o složitý případ v týmu, změny ve firmě nebo důležité rozhodnutí, pomůžeme vám najít řešení a další kroky.",
  },
];

export default function ProblemsSection() {
  return (
    <section id="situace" className="relative py-24 px-6 bg-[#F8F7FC] scroll-mt-32 overflow-hidden">


      {/* Corner accents */}
      <svg className="absolute -left-2 -top-2 w-48 h-48 pointer-events-none" viewBox="0 0 200 200" fill="none">
        <path d="M 0,160 L 0,20 Q 0,0 20,0 L 160,0" stroke="#FDCD0A" strokeWidth="18" strokeLinecap="round"/>
        <path d="M 0,120 L 0,20 Q 0,0 20,0 L 120,0" stroke="#FDCD0A" strokeWidth="6" strokeLinecap="round" strokeOpacity="0.4"/>
      </svg>
      <svg className="absolute -right-2 -bottom-2 w-48 h-48 pointer-events-none" viewBox="0 0 200 200" fill="none">
        <path d="M 200,40 L 200,180 Q 200,200 180,200 L 40,200" stroke="#8664F2" strokeWidth="18" strokeLinecap="round"/>
        <path d="M 200,80 L 200,180 Q 200,200 180,200 L 80,200" stroke="#8664F2" strokeWidth="6" strokeLinecap="round" strokeOpacity="0.4"/>
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-14">
          <h2 className="text-[35px] md:text-[41px] font-bold text-[#1F2937] mb-4">
            Situace, se kterými umíme pomoci
          </h2>
          <p className="text-[#6B7280] text-lg leading-relaxed">
            Mnoho malých a středních firem řeší podobné výzvy. Firma roste, přibývají lidé, ale HR zatím nemá jasnou strukturu nebo na něj jednoduše není kapacita. Právě v těchto chvílích dává smysl mít vedle sebe partnera, který pomůže HR uchopit systematicky.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.text}
              className="group relative flex flex-col bg-white rounded-2xl p-8 shadow-sm border border-gray-100
                hover:shadow-[0_8px_30px_rgba(134,100,242,0.12)]
                hover:-translate-y-[5px]
                hover:scale-[1.01]
                hover:bg-[#B89FF5]
                hover:border-[#B89FF5]
                transition-all duration-300 ease-out
                min-h-[200px]"
            >
              <p className="font-bold text-[#1F2937] text-[17px] leading-snug mb-3 tracking-[-0.01em] group-hover:text-white transition-colors duration-300">
                {problem.text}
              </p>
              <p className="text-[#6B7280] text-sm leading-relaxed flex-1 group-hover:text-white transition-colors duration-300">
                {problem.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
