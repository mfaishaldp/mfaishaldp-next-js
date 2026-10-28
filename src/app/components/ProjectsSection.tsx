"use client";
import { useEffect, useRef, useState } from "react";
import profile from "../../data/profile.json";
import { MdOutlineDoNotDisturbAlt } from "react-icons/md";

type Projects = {
  title: string;
  desc: string;
  tags: string[];
  link: string;
  video: string;
  image?: string[];
};

export default function ProjectsSection() {
  const rootRef = useRef<HTMLElement | null>(null);
  const cards: Projects[] = (profile.projects as Projects[]) || [];
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<
    Record<string, number>
  >({});

  const toEmbedUrl = (url: string) => {
    try {
      const u = new URL(url);
      const host = u.hostname;
      if (host.includes("youtu.be")) {
        const id = u.pathname.replace("/", "");
        return id ? `https://www.youtube.com/embed/${id}` : url;
      }
      if (host.includes("youtube.com")) {
        const v = u.searchParams.get("v");
        return v ? `https://www.youtube.com/embed/${v}` : url;
      }
      return url;
    } catch (e) {
      return url;
    }
  };

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
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!activeVideo) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeVideo]);

  return (
    <section
      id="projects"
      className="mt-24 border-t border-slate-200/70 pt-12"
      ref={rootRef as any}
      style={{
        contentVisibility: "auto",
        containIntrinsicSize: "1200px 900px",
      }}
    >
      <header className="mb-8">
        <h2 className="font-display text-3xl font-bold text-[var(--soft-ink)] animate-slideUp">
          Projects
        </h2>
        <p className="mt-2 max-w-2xl text-slate-700">
          Selected work across data analytics, data engineering, and full-stack
          JavaScript.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((p, idx) => {
          const projectImages = Array.isArray(p.image)
            ? p.image.filter(Boolean)
            : [];
          const currentImageIndex = activeImageIndex[p.title] ?? 0;
          const currentImage = projectImages[currentImageIndex] || null;

          const moveImage = (direction: "prev" | "next") => {
            if (projectImages.length <= 1) return;
            setActiveImageIndex((prev) => {
              const current = prev[p.title] ?? 0;
              const nextIndex =
                direction === "next"
                  ? (current + 1) % projectImages.length
                  : (current - 1 + projectImages.length) % projectImages.length;

              return {
                ...prev,
                [p.title]: nextIndex,
              };
            });
          };

          return (
            <article
              key={p.title}
              className="reveal group flex h-full flex-col rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm transition-shadow hover:shadow-md"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {projectImages.length > 0 && currentImage ? (
                <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                  <img
                    src={currentImage}
                    alt={`${p.title} project preview`}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  {projectImages.length > 1 && (
                    <div className="absolute inset-x-2 bottom-2 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => moveImage("prev")}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-sm font-bold text-slate-800 shadow-sm transition hover:bg-white"
                        aria-label={`Previous image for ${p.title}`}
                      >
                        ‹
                      </button>
                      <div className="rounded-full bg-slate-900/70 px-2 py-1 text-[10px] font-medium tracking-[0.18em] text-white uppercase">
                        {currentImageIndex + 1}/{projectImages.length}
                      </div>
                      <button
                        type="button"
                        onClick={() => moveImage("next")}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-sm font-bold text-slate-800 shadow-sm transition hover:bg-white"
                        aria-label={`Next image for ${p.title}`}
                      >
                        ›
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex aspect-[16/10] items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  <MdOutlineDoNotDisturbAlt className="w-10 h-10" />
                </div>
              )}

              <div className="mt-4 flex items-start justify-between gap-3">
                <h3 className="font-semibold text-[var(--soft-ink)]">
                  {p.title}
                </h3>
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
              <div className="mt-4 flex items-center gap-3">
                {p.video?.trim() && (
                  <button
                    type="button"
                    onClick={() => setActiveVideo(p.video)}
                    className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-[var(--soft-ink)] shadow-sm transition hover:-translate-y-[1px] hover:shadow-md"
                  >
                    Watch video
                    <svg
                      aria-hidden
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="currentColor"
                    >
                      <path d="M21.8 7.8s-.2-1.6-.8-2.2c-.8-.8-1.7-.8-2.1-.9C16 4.5 12 4.5 12 4.5h0s-4 0-6.9.2c-.5.1-1.3.1-2.1.9-.6.6-.8 2.2-.8 2.2S2 9.6 2 11.4v1.2c0 1.8.2 3.6.2 3.6s.2 1.6.8 2.2c.8.8 1.9.8 2.4.9 1.8.2 6.6.2 6.6.2s4 0 6.9-.2c.4-.1 1.3-.1 2.1-.9.6-.6.8-2.2.8-2.2s.2-1.8.2-3.6v-1.2c0-1.8-.2-3.6-.2-3.6ZM9.8 14.9v-5l5 2.5-5 2.5Z" />
                    </svg>
                  </button>
                )}
                {p.link && (
                  <a
                    className="ml-auto inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent-coral)] transition-transform hover:-translate-y-[1px]"
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
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
                )}
                {!p.link && (
                  <span className="ml-auto text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-red-600">
                    Data Restricted from company
                  </span>
                )}
              </div>
            </article>
          );
        })}
      </div>
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 px-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-3 top-3 z-10 rounded-full bg-white/90 px-2 py-1 text-xs font-semibold text-slate-800 shadow hover:bg-white"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
            >
              Close
            </button>
            <div className="aspect-video w-full">
              <iframe
                title="Project video"
                src={toEmbedUrl(activeVideo)}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
