"use client";
export const dynamic = "force-dynamic";
import Image from "next/image";
import { useEffect, useRef } from "react";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import CertificationsSection from "./components/CertificationsSection";

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const root = containerRef.current;
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
  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[var(--background)] text-slate-900"
    >
      <nav className="sticky top-0 z-50 bg-[var(--background)]/95 backdrop-blur-sm border-b border-slate-200/70 animate-fadeIn">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            {/* <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-semibold text-[var(--accent-teal)] shadow-sm ring-1 ring-slate-200/80 transition-transform hover:-translate-y-[1px]">
              F
            </div> */}
            <span className="text-2xl font-semibold text-[var(--soft-ink)] font-display">
              mfaishaldp
            </span>
          </div>

          <div className="hidden items-center gap-7 text-sm font-semibold uppercase tracking-[0.16em] text-slate-600 md:flex">
            {/* <button className="hover:text-[var(--soft-ink)] pb-2" type="button">Services</button> */}
            <button
              className="hover:text-[var(--soft-ink)] pb-2"
              type="button"
              onClick={() => scrollToId("profile")}
            >
              Profile
            </button>
            <button
              className="hover:text-[var(--soft-ink)] pb-2"
              type="button"
              onClick={() => scrollToId("experience")}
            >
              Experience
            </button>
            <button
              className="hover:text-[var(--soft-ink)] pb-2"
              type="button"
              onClick={() => scrollToId("projects")}
            >
              Projects
            </button>
            <button
              className="hover:text-[var(--soft-ink)] pb-2"
              type="button"
              onClick={() => scrollToId("certifications")}
            >
              Certifications
            </button>
          </div>
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-800">
            <a
              href="https://wa.me/6282219727232?text=Hi%20Faishal%2C%20I%27d%20love%20to%20chat%20about%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200/80 transition hover:-translate-y-[1px] hover:shadow-md"
              aria-label="WhatsApp"
            >
              <svg
                className="h-5 w-5 text-[var(--accent-teal)]"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mfaishaldp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200/80 transition hover:-translate-y-[1px] hover:shadow-md"
              aria-label="LinkedIn"
            >
              <svg
                className="h-5 w-5 text-[var(--accent-teal)]"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://github.com/mfaishaldp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200/80 transition hover:-translate-y-[1px] hover:shadow-md"
              aria-label="GitHub"
            >
              <svg
                className="h-5 w-5 text-[var(--accent-teal)]"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-6 pb-16 pt-8 lg:pt-12">
        <section
          id="profile"
          className="relative mt-12 flex flex-col gap-12 lg:mt-16 lg:flex-row lg:items-center lg:gap-14"
        >
          <div className="flex-1 space-y-9">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent-teal)]">
                Profile
              </p>
              <h1 className="text-5xl font-extrabold leading-[1.05] text-[var(--soft-ink)] sm:text-6xl animate-slideUp">
                Hey There,
                <br /> I&apos;m Faishal
              </h1>
            </div>

            <a
              className="inline-flex text-lg font-semibold text-[var(--accent-coral)] transition-transform hover:-translate-y-[1px] hover:opacity-90 animate-slideUp-delayed"
              href="mailto:faishaldarmaputra@gmail.com"
            >
              faishaldarmaputra@gmail.com
            </a>

            <div className="flex items-center gap-3 text-sm text-slate-600 animate-slideUp-delayed">
              <span className="h-px w-12 bg-slate-300" />
              <span>
                Data analyst & data engineer building reliable, scalable data
                products.
              </span>
            </div>

            <div className="flex items-center gap-4 pt-6 text-[var(--soft-ink)] animate-slideUp-delayed">
              <span className="text-5xl font-extrabold leading-none">4</span>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-600">
                Years
                <br />
                Experience
              </div>
            </div>
          </div>

          <div className="order-first mx-auto w-full max-w-[540px] lg:order-none lg:flex lg:justify-center">
            <div className="relative isolate aspect-[3/4] w-full max-w-[520px]">
              <div
                className="absolute inset-[6%] -rotate-2 bg-[var(--accent-teal)] shadow-[0_35px_55px_rgba(34,74,72,0.28)] animate-softPulse"
                style={{
                  clipPath:
                    "polygon(6% 14%, 40% 6%, 64% 16%, 90% 6%, 88% 26%, 70% 30%, 96% 42%, 92% 60%, 72% 68%, 90% 82%, 64% 94%, 38% 86%, 18% 96%, 12% 76%, 6% 66%, 20% 54%, 4% 38%, 12% 20%)",
                }}
              />
              <div className="absolute inset-0 group">
                <Image
                  src="/pp-2.png"
                  alt="Portrait of Binjan"
                  fill
                  priority
                  className="relative z-10 object-cover object-top drop-shadow-[0_28px_35px_rgba(0,0,0,0.22)] saturate-[0.65] sepia-[0.35] hue-rotate-[-10deg] contrast-[1.06] brightness-[0.97] transition-transform duration-300 ease-out group-hover:scale-[1.015]"
                />
                <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-[var(--background)]/12 via-[var(--accent-coral)]/18 to-[var(--background)]/10 mix-blend-screen animate-gentleFloat" />
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-8 self-start text-slate-700 lg:pl-4">
            <p className="max-w-md text-lg leading-8 animate-slideUp">
              I turn messy datasets into clear stories and robust pipelines.
              From dashboards to data platforms, I design and ship solutions
              that keep decisions fast and reliable.
            </p>

            <div className="flex items-center gap-4 rounded-full border border-dashed border-slate-400 bg-white/70 px-6 py-4 shadow-sm backdrop-blur">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-slate-300 bg-white">
                <svg
                  aria-hidden
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  className="h-10 w-10 text-[var(--soft-ink)]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="32" cy="32" r="24" />
                  <path d="M18 36c6-4 10-10 14-18 4 8 8 14 14 18" />
                  <circle cx="32" cy="32" r="4" />
                </svg>
              </div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--soft-ink)] animate-slideUp-delayed">
                Certified Hacktiv8 - Full-Stack JavaScript
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-full border border-dashed border-slate-400 bg-white/70 px-6 py-4 shadow-sm backdrop-blur">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-slate-300 bg-white">
                <svg
                  aria-hidden
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  className="h-10 w-10 text-[var(--soft-ink)]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="32" cy="32" r="24" />
                  <path d="M18 36c6-4 10-10 14-18 4 8 8 14 14 18" />
                  <circle cx="32" cy="32" r="4" />
                </svg>
              </div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--soft-ink)] animate-slideUp-delayed">
                Bachelor Computer Science - Telkom University
              </div>
            </div>
          </div>
        </section>

        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
      </main>
    </div>
  );
}
