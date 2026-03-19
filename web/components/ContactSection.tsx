"use client";

import { useState } from "react";

const benefits = [
  "Nezávazná konzultace",
  "Konkrétní doporučení na míru",
  "Zkušenosti z desítek firem",
];

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      alert("Něco se pokazilo. Zkuste to prosím znovu nebo napište přímo na info@suhr.cz");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="kontakt" className="relative py-24 px-6 bg-white scroll-mt-32 overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(134,100,242,0.07) 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(184,159,245,0.08) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left – text */}
        <div>
          <h2 className="text-[35px] md:text-[41px] font-bold text-[#1F2937] mb-4">
            Pojďme společně najít řešení pro vaše HR
          </h2>
          <p className="text-[#6B7280] text-lg leading-relaxed mb-8">
            Ozveme se vám nejpozději do 2 dnů a domluvíme si krátký úvodní call.
          </p>

          {/* Benefits */}
          <ul className="flex flex-col gap-3 mb-10">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#F0EDF9] flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-[#8664F2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-[#1F2937] text-sm font-medium">{b}</span>
              </li>
            ))}
          </ul>

          {/* Email */}
          <div className="inline-flex items-center gap-3 bg-[#F8F7FC] border border-[#E5DEFA] rounded-xl px-4 py-3">
            <div className="w-8 h-8 rounded-lg bg-[#8664F2] flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-[#1F2937]">info@suhr.cz</span>
          </div>
        </div>

        {/* Right – form */}
        <div>
          {sent ? (
            <div className="bg-[#F0EDF9] border border-[#E5DEFA] rounded-2xl p-10 text-center">
              <div className="w-12 h-12 rounded-full bg-[#8664F2] flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1F2937] mb-2">Zpráva odeslána!</h3>
              <p className="text-[#6B7280]">Ozveme se vám nejpozději do 2 dnů.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">Jméno</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1F2937] placeholder:text-gray-400
                    focus:outline-none focus:border-[#8664F2] focus:ring-2 focus:ring-[#8664F2]/10 transition-all"
                  placeholder="Vaše jméno"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">E-mail</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1F2937] placeholder:text-gray-400
                    focus:outline-none focus:border-[#8664F2] focus:ring-2 focus:ring-[#8664F2]/10 transition-all"
                  placeholder="vas@email.cz"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1F2937] mb-1.5">Zpráva</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1F2937] placeholder:text-gray-400
                    focus:outline-none focus:border-[#8664F2] focus:ring-2 focus:ring-[#8664F2]/10 transition-all resize-none"
                  placeholder="Co aktuálně řešíte ve firmě?"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="bg-[#8664F2] text-white font-semibold px-8 py-4 rounded-xl
                  hover:bg-[#7450e0] hover:shadow-lg hover:shadow-[#8664F2]/25 hover:-translate-y-0.5
                  active:translate-y-0 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Odesílám…" : "Odeslat zprávu"}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
