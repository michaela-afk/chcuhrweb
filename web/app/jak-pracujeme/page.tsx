import Link from "next/link";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Úvodní konzultace",
    description:
      "Začínáme rozhovorem. Chceme porozumět vašemu byznysu, lidem a aktuálním HR výzvám. Bez předpřipravených řešení – nejprve nasloucháme.",
  },
  {
    number: "02",
    title: "Analýza a návrh",
    description:
      "Na základě zjištěného navrhneme konkrétní přístup a plán spolupráce. Jasné cíle, jasný rozsah, jasná očekávání.",
  },
  {
    number: "03",
    title: "Implementace",
    description:
      "Pracujeme vedle vás, ne pro vás. Pomáháme HR řešení skutečně zavést do každodenní praxe firmy.",
  },
  {
    number: "04",
    title: "Předání a podpora",
    description:
      "Naším cílem je, aby firma fungovala samostatně. Předáváme znalosti a procesy, které váš tým dokáže sám řídit.",
  },
];

const values = [
  {
    title: "Praktičnost",
    description: "Zaměřujeme se na řešení, která fungují v reálných firmách. Ne teorie – praxe.",
  },
  {
    title: "Partnerství",
    description: "Pracujeme úzce s majiteli, vedením a manažery. Jsme součástí vašeho týmu.",
  },
  {
    title: "Transparentnost",
    description: "Jasná komunikace a jasná očekávání od začátku. Žádné překvapení.",
  },
  {
    title: "Dopad",
    description: "Naše práce musí viditelně zlepšit to, jak firma pracuje s lidmi.",
  },
];

export default function JakPracujemePage() {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="relative flex items-center min-h-[480px] pt-16">
        <Image
          src="/photos/3V9A1452.jpg"
          alt="HR konzultace – prezentace"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-[#1F2937]/65" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="text-[#D2C8F1] text-sm font-semibold uppercase tracking-widest mb-4">Jak pracujeme</div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Náš přístup</h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
            HR by mělo vždy podporovat byznysové cíle. Věříme v praktická řešení, která skutečně fungují.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-14">Jak spolupráce vypadá</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6 p-8 rounded-2xl border border-gray-100 bg-[#F8F7FC]">
                <div className="text-4xl font-bold text-[#D2C8F1] shrink-0 leading-none">{step.number}</div>
                <div>
                  <h3 className="text-xl font-bold text-[#1F2937] mb-3">{step.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-[#1F2937]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Naše hodnoty</h2>
          <p className="text-gray-400 text-lg mb-14 max-w-xl">
            Principy, které stojí za každou naší spoluprací.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="border border-gray-700 rounded-2xl p-8">
                <div className="w-10 h-1 bg-[#8664F2] mb-5 rounded" />
                <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern HR note */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1F2937] mb-5">Moderní HR pro moderní firmy</h2>
            <p className="text-[#6B7280] leading-relaxed mb-5">
              Používáme moderní HR nástroje, datově podložené přístupy a tam, kde to dává smysl, i AI. Naším cílem není HR pro HR – ale HR, které přináší firmě konkrétní výsledky.
            </p>
            <p className="text-[#6B7280] leading-relaxed">
              CHCUHR je součástí širšího ekosystému SUHR, kde vzdělání a praxe jdou ruku v ruce.
            </p>
          </div>
          <div className="relative h-[380px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/photos/3V9A0074.jpg"
              alt="Dva HR konzultanti na stage"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#F8F7FC]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-5">
            Chcete vědět více?
          </h2>
          <p className="text-[#6B7280] text-lg mb-10">
            Domluvte si konzultaci a zjistěte, jak vám CHCUHR může pomoci.
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
