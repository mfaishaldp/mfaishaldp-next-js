"use client";
import { useEffect, useRef } from "react";
import profile from "../../data/profile.json";

type Projects = {
  title: string;
  desc: string;
  tags: string[];
  link: string;
};

export default function ProjectsSection() {
  const rootRef = useRef<HTMLElement | null>(null);
  const cards: Projects[] = (profile.projects as Projects[]) || [];

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-visible");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);


  return (
    <section id="projects" className="mt-24 border-t border-slate-200/70 pt-12" ref={rootRef as any}>
      <header className="mb-8">
        <h2 className="font-display text-3xl font-bold text-[var(--soft-ink)] animate-slideUp">Projects</h2>
        <p className="mt-2 max-w-2xl text-slate-700">
          Selected work across data analytics, data engineering, and full-stack JavaScript.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((p, idx) => (
          <article
            key={p.title}
            className="reveal group flex h-full flex-col rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur transition-shadow hover:shadow-md"
            style={{ transitionDelay: `${idx * 80}ms` }}
          >
            <div className="items-start justify-between">
              <h3 className="font-semibold text-[var(--soft-ink)]">{p.title}</h3>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-teal)]">
                {p.tags[0]}
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-300 bg-white px-2 py-1 text-xs text-slate-600"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-auto border-slate-200/70" />
            <a
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent-coral)] transition-transform hover:-translate-y-[1px] ml-auto"
              href="#"
            >
              View details
              <svg
                aria-hidden
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M5 12h12M13 6l6 6-6 6" />
              </svg>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
