"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 7, suffix: "", label: "let na trhu", static: true },
  { target: 7000, suffix: "+", label: "proškolených HRistů" },
  { target: 300, suffix: "+", label: "zapojených expertů" },
];

function formatNumber(n: number, target: number): string {
  if (target >= 1000) {
    return n.toLocaleString("cs-CZ").replace(/\s/g, "\u00a0");
  }
  return String(n);
}

function useCounter(target: number, active: boolean, duration = 1500, delay = 0) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const timeout = setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(timeout);
  }, [active, target, duration, delay]);

  return value;
}

function StatItem({ target, suffix, label, active, delay, isLast, isStatic }: {
  target: number;
  suffix: string;
  label: string;
  active: boolean;
  delay: number;
  isLast: boolean;
  isStatic?: boolean;
}) {
  const value = useCounter(target, isStatic ? false : active, 1500, delay);

  return (
    <div className="contents">
      <div
        style={{ transitionDelay: `${delay}ms` }}
        className={`text-center flex-1 min-w-0 transition-all duration-700 ease-out
          ${active ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}
      >
        <div className="text-[36px] sm:text-[50px] font-bold text-white leading-none mb-1">
          {isStatic ? `${target}${suffix}` : `${formatNumber(value, target)}${suffix}`}
        </div>
        <div className="text-white/70 text-sm">{label}</div>
      </div>
      {!isLast && <div className="w-px h-12 bg-white/20 mx-4 shrink-0" />}
    </div>
  );
}

export default function StatsRow() {
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
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="max-w-6xl mx-auto bg-[#8664F2] rounded-2xl px-6 py-10 flex flex-wrap sm:flex-nowrap items-center justify-between gap-y-8 shadow-xl shadow-[#8664F2]/20">
      {stats.map((stat, i) => (
        <StatItem
          key={stat.label}
          target={stat.target}
          suffix={stat.suffix}
          label={stat.label}
          active={visible}
          delay={i * 150}
          isLast={i === stats.length - 1}
          isStatic={"static" in stat && stat.static}
        />
      ))}
    </div>
  );
}
