interface Section {
  heading: string;
  content: string[];
}

interface LegalPageProps {
  title: string;
  subtitle?: string;
  sections: Section[];
}

export default function LegalPage({ title, subtitle, sections }: LegalPageProps) {
  return (
    <main>
      {/* Header */}
      <section className="bg-[#1F2937] pt-40 pb-14 px-6">
        <div className="max-w-3xl mx-auto">
          {subtitle && (
            <p className="text-[#D2C8F1] text-sm font-semibold uppercase tracking-widest mb-3">
              {subtitle}
            </p>
          )}
          <h1 className="text-[26px] md:text-[35px] lg:text-[44px] font-bold text-white leading-tight">
            {title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 bg-[#F8F7FC]">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-5 sm:px-8 md:px-12 py-10 flex flex-col gap-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-[18px] font-bold text-[#1F2937] mb-4 pb-3 border-b border-gray-100">
                  {section.heading}
                </h2>
                <div className="flex flex-col gap-3">
                  {section.content.map((block, i) => {
                    if (block.startsWith("- ")) {
                      return (
                        <div key={i} className="flex gap-3 items-start">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#8664F2] shrink-0" />
                          <span className="text-[#4B5563] text-sm leading-relaxed">{block.slice(2)}</span>
                        </div>
                      );
                    }
                    return (
                      <p key={i} className="text-[#4B5563] text-sm leading-relaxed">
                        {block}
                      </p>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
