import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Zásady zpracování osobních údajů – CHCUHR",
  description: "Zásady ochrany a zpracování osobních údajů CHCUHR / SUHR, s.r.o.",
};

export default function ZasadyPage() {
  return (
    <LegalPage
      title="Zásady zpracování osobních údajů"
      subtitle="CHCUHR / SUHR, s.r.o."
      sections={[
        {
          heading: "1. Správce osobních údajů",
          content: [
            "Správcem osobních údajů je:",
            "SUHR, s.r.o.",
            "IČO: 14202573",
            "Sídlo: Husova 1308, 671 72 Miroslav",
            "E-mail: info@suhr.cz",
          ],
        },
        {
          heading: "2. Jaké údaje zpracováváme",
          content: [
            "Zpracováváme pouze údaje, které nám sami poskytnete prostřednictvím kontaktního formuláře nebo e-mailu, zejména:",
            "- jméno",
            "- e-mailová adresa",
            "- obsah zprávy (např. popis vaší situace)",
          ],
        },
        {
          heading: "3. Za jakým účelem údaje zpracováváme",
          content: [
            "Vaše osobní údaje zpracováváme za účelem:",
            "- kontaktování zpět na základě vaší poptávky",
            "- domluvení konzultace nebo spolupráce",
            "- následné komunikace v rámci poskytování služeb",
          ],
        },
        {
          heading: "4. Právní základ zpracování",
          content: [
            "Osobní údaje zpracováváme na základě:",
            "- oprávněného zájmu (odpověď na vaši poptávku)",
            "- případně plnění smlouvy nebo jednání o smlouvě",
          ],
        },
        {
          heading: "5. Doba uchování údajů",
          content: [
            "Vaše osobní údaje uchováváme pouze po dobu nezbytně nutnou:",
            "- pro vyřízení vaší poptávky",
            "- případně po dobu trvání spolupráce",
            "- maximálně po dobu 3 let od poslední komunikace",
          ],
        },
        {
          heading: "6. Kdo má k údajům přístup",
          content: [
            "K osobním údajům mají přístup pouze oprávněné osoby správce.",
            "Údaje mohou být zpracovávány také externími nástroji (např. e-mailové služby nebo nástroje pro správu komunikace), které jsou využívány v rámci běžného provozu a splňují požadavky na ochranu osobních údajů.",
          ],
        },
        {
          heading: "7. Vaše práva",
          content: [
            "Máte právo:",
            "- požadovat přístup ke svým osobním údajům",
            "- požadovat opravu nepřesných údajů",
            "- požadovat výmaz osobních údajů",
            "- omezit zpracování",
            "- vznést námitku proti zpracování",
            "V případě dotazů nás můžete kontaktovat na e-mailu: info@suhr.cz",
          ],
        },
        {
          heading: "8. Zabezpečení údajů",
          content: [
            "Vaše údaje chráníme pomocí přiměřených technických a organizačních opatření, aby nedošlo k jejich zneužití nebo neoprávněnému přístupu.",
          ],
        },
        {
          heading: "9. Závěrečná ustanovení",
          content: [
            "Tyto zásady jsou platné od 20. 3. 2026.",
          ],
        },
      ]}
    />
  );
}
