import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: "interim-hr",
    title: "Interim HR",
    subtitle: "HR vedení, když ho nejvíc potřebujete",
    description:
      "Dočasné HR vedení nebo HR podpora pro firmy, které potřebují zkušené HR know-how, ale nechtějí nebo nemohou přijmout stálého HR manažera. Fungujeme jako váš interní HR partner.",
    activities: [
      "Zastupování HR manažera",
      "Podpora vedení a managementu",
      "Budování HR základů",
      "Stabilizace HR procesů",
      "Podpora v období růstu nebo transformace",
    ],
    forWhom: "Startupům a scale-upům, které teprve budují HR tým. Firmám procházejícím změnou nebo rychlým růstem.",
    image: "/photos/3V9A0850.jpg",
    imageAlt: "HR konzultantka na workshopu",
  },
  {
    id: "hr-projekty",
    title: "HR projekty",
    subtitle: "Konkrétní HR iniciativy od A do Z",
    description:
      "Implementace specifických HR projektů s důrazem na praktické výsledky. Nejen navrhujeme – skutečně pomáháme zavést řešení, která fungují v reálném prostředí vaší firmy.",
    activities: [
      "Design náborového procesu",
      "Onboarding systém",
      "Řízení výkonu",
      "Kompetenční modely",
      "HR strategie",
      "Employer branding základy",
      "HR dokumentace a politiky",
    ],
    forWhom: "Firmám, které chtějí zlepšit konkrétní oblast HR. Společnostem přecházejícím z neformálního HR na strukturované.",
    image: "/photos/3V9A0691.jpg",
    imageAlt: "HR konzultant prezentuje projekt",
  },
  {
    id: "hr-outsourcing",
    title: "HR outsourcing",
    subtitle: "Průběžná HR podpora bez vlastního HR oddělení",
    description:
      "Zajistíme průběžné HR aktivity vaší firmy. Staráme se o HR procesy, podporujeme manažery a zlepšujeme HR systémy – vše bez nutnosti budovat vlastní HR tým.",
    activities: [
      "Správa HR procesů",
      "HR administrativní podpora",
      "Procesy employee lifecycle",
      "Podpora pro manažery",
      "Zlepšování HR procesů",
    ],
    forWhom: "Malým a středním firmám bez HR oddělení. Firmám, které chtějí profesionální HR bez interního HR manažera.",
    image: "/photos/3V9A0089.jpg",
    imageAlt: "Psaní poznámek na HR akci",
  },
];

export default function SluzbyPage() {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="relative flex items-center min-h-[480px] pt-16">
        <Image
          src="/photos/3V9A0326.jpg"
          alt="HR konference – publikum"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#1F2937]/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="text-[#D2C8F1] text-sm font-semibold uppercase tracking-widest mb-4">Služby</div>
          <h1 className="text-5xl font-bold text-white mb-6">Co děláme</h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
            Nabízíme tři hlavní oblasti HR podpory. Vždy s důrazem na praktické výsledky a byznysový dopad.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col gap-24">
          {services.map((s, i) => (
            <div
              key={s.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex lg:flex-row-reverse" : ""}`}
            >
              <div>
                <div className="w-10 h-1 bg-[#8664F2] mb-6 rounded" />
                <h2 className="text-3xl font-bold text-[#1F2937] mb-2">{s.title}</h2>
                <p className="text-[#8664F2] font-medium mb-5">{s.subtitle}</p>
                <p className="text-[#6B7280] leading-relaxed mb-6">{s.description}</p>
                <p className="text-sm text-[#6B7280] italic">{s.forWhom}</p>
              </div>
              <div className={`flex flex-col gap-6 ${i % 2 === 1 ? "lg:mr-12" : ""}`}>
                <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="bg-[#F8F7FC] rounded-2xl p-6">
                  <div className="text-sm font-semibold text-[#1F2937] uppercase tracking-wider mb-4">
                    Typické aktivity
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    {s.activities.map((a) => (
                      <li key={a} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#D2C8F1] flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-[#8664F2]" />
                        </div>
                        <span className="text-[#1F2937] text-sm">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#F8F7FC]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-5">
            Nevíte, která služba je pro vás?
          </h2>
          <p className="text-[#6B7280] text-lg mb-10">
            Domluvte si nezávaznou konzultaci. Společně zjistíme, co vaše firma potřebuje.
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
