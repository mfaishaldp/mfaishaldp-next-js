"use client";
import profile from "../../data/profile.json";

type Experience = {
  company: string;
  period: string;
  role: string;
  desc: string;
  color?: string;
};

export default function ExperienceSection() {
  const items: Experience[] = (profile.experiences as Experience[]) || [];

  return (
    <section id="experience" className="mt-24 border-t border-slate-200/70 pt-12">
      <header className="mb-8">
        <h2 className="font-display text-3xl font-bold text-[var(--soft-ink)] animate-slideUp">Experience</h2>
      </header>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="space-y-12">
          {items.map((item) => (
            <div key={`${item.company}-${item.period}`} className="reveal">
              <h3 className="text-2xl font-semibold text-[var(--soft-ink)]">{item.company}</h3>
              <p className="mt-1 text-slate-600">{item.period}</p>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px border-l-2 border-dashed border-slate-300" />
          <div className="space-y-12 pl-12">
            {items.map((item, idx) => (
              <div key={`${item.role}-${idx}`} className="reveal">
                <div className="relative">
                  <span
                    className="absolute -left-12 top-1 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-dashed border-slate-300 bg-white shadow-sm"
                    style={{ outlineOffset: "2px" }}
                  >
                    <span
                      className="block h-3.5 w-3.5 rounded-full"
                      style={{ backgroundColor: item.color || "#2f7a72" }}
                    />
                  </span>
                  <h4 className="text-2xl font-semibold text-[var(--soft-ink)]">{item.role}</h4>
                </div>
                <p className="mt-2 max-w-xl text-slate-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
