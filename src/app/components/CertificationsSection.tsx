"use client";
import profile from "../../data/profile.json";

type Cert = {
  provider: string;
  name: string;
  issued: string;
  link?: string;
};

export default function CertificationsSection() {
  const certs: Cert[] = (profile as any).certifications || [];

  if (!certs.length) return null;

  return (
    <section id="certifications" className="mt-24 border-t border-slate-200/70 pt-12">
      <header className="mb-8">
        <h2 className="font-display text-3xl font-bold text-[var(--soft-ink)] animate-slideUp">Certifications</h2>
        <p className="mt-2 max-w-2xl text-slate-700">
          Selected credentials that complement data engineering, analytics, and full‑stack work.
        </p>
      </header>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {certs.map((c) => (
          <li
            key={`${c.provider}-${c.name}-${c.issued}`}
            className="reveal rounded-xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-teal)]">
                  {c.provider}
                </div>
                <div className="mt-1 text-[var(--soft-ink)] font-medium">{c.name}</div>
                <div className="mt-1 text-xs text-slate-600">Issued in {c.issued}</div>
              </div>
              {c.link && (
                <a
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent-coral)] transition-transform hover:-translate-y-[1px]"
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
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
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
