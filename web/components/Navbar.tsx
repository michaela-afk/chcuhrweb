"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "#sluzby", label: "Služby" },
  { href: "#jak-pracujeme", label: "Jak pracujeme" },
  { href: "#o-nas", label: "O nás" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20 md:h-32">
        <Link href="/" className="flex items-center">
          <Image
            src="/Copy of CHCUHR logo-3.png"
            alt="CHCUHR logo"
            width={360}
            height={120}
            className="h-[80px] md:h-[160px] w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium uppercase tracking-wide text-[#6B7280] hover:text-[#8664F2] transition-all duration-200 hover:scale-[1.10] inline-block"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="mailto:info@suhr.cz"
            className="ml-2 bg-[#8664F2] text-white text-base font-semibold px-6 py-3 rounded-xl hover:bg-[#7450e0] hover:shadow-lg hover:shadow-[#8664F2]/25 hover:-translate-y-0.5 transition-all duration-200"
          >
            Domluvit konzultaci
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[#1F2937]"
          onClick={() => setOpen(!open)}
          aria-label="Otevřít menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#6B7280] hover:text-[#8664F2] transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="mailto:info@suhr.cz"
            className="bg-[#8664F2] text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center hover:bg-[#7450e0] transition-colors"
            onClick={() => setOpen(false)}
          >
            Domluvit konzultaci
          </a>
        </div>
      )}
    </header>
  );
}
