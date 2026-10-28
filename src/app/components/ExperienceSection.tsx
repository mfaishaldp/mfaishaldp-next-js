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
    <section
      id="experience"
      className="mt-24 border-t border-slate-200/70 pt-12"
      style={{ contentVisibility: "auto", containIntrinsicSize: "1200px 700px" }}
    >
      <header className="mb-8">
        <h2 className="font-display text-3xl font-bold text-[var(--soft-ink)] animate-slideUp">Experience</h2>
      </header>

      <div className="md:grid md:grid-cols-2 md:gap-10">
        <div className="hidden md:block md:space-y-12">
          {items.map((item) => (
            <div key={`${item.company}-${item.period}`} className="reveal">
              <h3 className="text-2xl font-semibold text-[var(--soft-ink)]">{item.company}</h3>
              <p className="mt-1 text-slate-600">{item.period}</p>
            </div>
          ))}
        </div>

        <div className="relative hidden md:block">
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

        <div className="space-y-6 md:hidden">
          {items.map((item, idx) => (
            <div key={`${item.company}-${item.period}-${idx}`} className="reveal relative pl-8">
              <span
                className="absolute left-0 top-2 inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-dashed border-slate-300 bg-white shadow-sm"
              >
                <span
                  className="block h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: item.color || "#2f7a72" }}
                />
              </span>
              <div className="border-l border-slate-200 pl-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-[var(--soft-ink)]">{item.company}</h3>
                  <span className="text-xs font-medium text-slate-500">{item.period}</span>
                </div>
                <h4 className="mt-2 text-base font-semibold text-[var(--soft-ink)]">{item.role}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
