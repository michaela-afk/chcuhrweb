"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "1",
    title: "Seznámení a pochopení situace",
    desc: "Nejprve si společně projdeme vaši aktuální situaci, cíle a výzvy. Potřebujeme pochopit, kde jste teď a kam se chcete posunout.",
  },
  {
    num: "2",
    title: "Návrh řešení",
    desc: "Na základě toho připravíme konkrétní návrh spolupráce – co dává smysl řešit, jakým způsobem a v jakém pořadí.",
  },
  {
    num: "3",
    title: "Implementace v praxi",
    desc: "Nezůstáváme u doporučení. Pomáháme řešení zavést do každodenního fungování firmy tak, aby opravdu fungovalo.",
  },
  {
    num: "4",
    title: "Podpora a další rozvoj",
    desc: "Po implementaci vás nenecháme samotné. Pomáháme ladit detaily, reagovat na nové situace a posouvat HR dál podle potřeb firmy.",
  },
];

export default function HowWeWorkSteps() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 sm:grid-flow-col gap-4">
      {steps.map((item, i) => (
        <div
          key={item.num}
          style={{
            transitionDelay: `${i * 180}ms`,
            transitionProperty: "opacity, transform",
            transitionDuration: "500ms",
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
          }}
          className="group flex gap-5 px-6 py-6 rounded-xl bg-white/10 border border-white/10
            hover:bg-[#B89FF5] hover:border-[#B89FF5] hover:-translate-y-1
            transition-[background,border,box-shadow,transform] duration-200 ease-out backdrop-blur-sm"
        >
          <div className="text-[36px] font-bold leading-none shrink-0 w-11 text-right
            text-white/25 group-hover:text-white transition-colors duration-200 select-none pt-0.5">
            {item.num}
          </div>
          <div>
            <h3 className="font-bold text-white mb-1.5">{item.title}</h3>
            <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
