import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-start">
          <div>
            <div className="mb-3">
              <Image
                src="/Untitled design-8.png"
                alt="CHCUHR logo"
                width={280}
                height={69}
                className="w-[280px] h-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pomáháme firmám nastavit HR tak, aby fungovalo pro lidi i byznys.
            </p>
          </div>
          <div className="md:text-right">
            <div className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">Kontakt</div>
            <a
              href="mailto:info@suhr.cz"
              className="text-sm font-semibold text-[#D2C8F1] hover:text-white transition-colors"
            >
              info@suhr.cz
            </a>
            <p className="text-gray-400 text-sm mt-4">
              Součást ekosystému{" "}
              <a
                href="https://www.suhr.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D2C8F1] font-medium hover:text-white transition-colors"
              >
                SUHR
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} CHCUHR. Všechna práva vyhrazena.</span>
          <div className="flex gap-5">
            <Link href="/obchodni-podminky" className="hover:text-gray-300 transition-colors">
              Obchodní podmínky
            </Link>
            <Link href="/zasady-zpracovani-osobnich-udaju" className="hover:text-gray-300 transition-colors">
              Zásady zpracování osobních údajů
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
