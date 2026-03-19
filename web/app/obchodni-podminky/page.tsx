import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Obchodní podmínky – CHCUHR",
  description: "Obchodní podmínky pro poskytování služeb CHCUHR / SUHR, s.r.o.",
};

export default function ObchodniPodminkyPage() {
  return (
    <LegalPage
      title="Obchodní podmínky"
      subtitle="CHCUHR / SUHR, s.r.o."
      sections={[
        {
          heading: "1. Základní ustanovení",
          content: [
            "Tyto obchodní podmínky upravují vztah mezi poskytovatelem služeb CHCUHR a jeho klienty.",
            "Poskytovatelem služeb je:",
            "SUHR, s.r.o.",
            "IČO: 14202573",
            "Sídlo: Husova 1308, 671 72 Miroslav",
            "Tyto podmínky se vztahují na všechny služby nabízené pod značkou CHCUHR.",
          ],
        },
        {
          heading: "2. Nabídka a poptávka služeb",
          content: [
            "Služby jsou poskytovány na základě individuální domluvy mezi poskytovatelem a klientem.",
            "Odesláním formuláře na webu nevzniká závazná objednávka, ale pouze nezávazná poptávka služby.",
            "Na základě poptávky bude klient kontaktován a bude mu předložen konkrétní návrh spolupráce.",
          ],
        },
        {
          heading: "3. Uzavření smlouvy",
          content: [
            "Smluvní vztah mezi poskytovatelem a klientem vzniká:",
            "- podpisem smlouvy, nebo",
            "- potvrzením nabídky (např. e-mailem)",
            "Součástí dohody je zejména:",
            "- rozsah služeb",
            "- cena",
            "- forma spolupráce",
            "- časový rámec",
          ],
        },
        {
          heading: "4. Cena a platební podmínky",
          content: [
            "Cena služeb je stanovena individuálně dle rozsahu spolupráce.",
            "Pokud není dohodnuto jinak:",
            "- fakturace probíhá na základě vystavené faktury",
            "- splatnost faktury je 14 dní",
            "Poskytovatel je oprávněn požadovat zálohu před zahájením spolupráce.",
          ],
        },
        {
          heading: "5. Poskytování služeb",
          content: [
            "Poskytovatel se zavazuje poskytovat služby:",
            "- odborně a s péčí",
            "- v dohodnutém rozsahu",
            "- ve sjednaném termínu",
            "Klient se zavazuje:",
            "- poskytovat potřebnou součinnost",
            "- dodávat včas podklady",
            "- spolupracovat na realizaci služeb",
          ],
        },
        {
          heading: "6. Odpovědnost",
          content: [
            "Poskytovatel nenese odpovědnost za:",
            "- rozhodnutí klienta učiněná na základě doporučení",
            "- výsledky, které jsou ovlivněny faktory mimo kontrolu poskytovatele",
            "Služby mají charakter odborného poradenství a podpory.",
          ],
        },
        {
          heading: "7. Ochrana důvěrných informací",
          content: [
            "Obě strany se zavazují zachovávat mlčenlivost o všech důvěrných informacích získaných během spolupráce.",
            "Tyto informace nebudou poskytnuty třetím stranám bez souhlasu druhé strany.",
          ],
        },
        {
          heading: "8. Ukončení spolupráce",
          content: [
            "Spolupráci lze ukončit:",
            "- dohodou obou stran",
            "- výpovědí dle podmínek uvedených ve smlouvě",
            "V případě ukončení spolupráce má poskytovatel nárok na úhradu již poskytnutých služeb.",
          ],
        },
        {
          heading: "9. Závěrečná ustanovení",
          content: [
            "Tyto obchodní podmínky jsou platné od 20. 3. 2026.",
            "Poskytovatel si vyhrazuje právo tyto podmínky aktualizovat.",
          ],
        },
      ]}
    />
  );
}
