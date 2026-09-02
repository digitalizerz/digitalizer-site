import Image from "next/image";
import Link from "next/link";
import { contact } from "@/data/contact";
import { footerNavigation } from "@/data/navigation";

function SocialIcon({ name }: { name: (typeof contact.social)[number]["label"] }) {
  const className = "size-4";

  if (name === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden>
        <path
          fill="currentColor"
          d="M4.98 3.5A2.48 2.48 0 1 1 2.5 6a2.48 2.48 0 0 1 2.48-2.5ZM3 8.75h3.96V21H3Zm6.22 0H13v1.68h.06c.55-1 1.9-2.06 3.91-2.06 4.18 0 4.95 2.75 4.95 6.33V21H18v-5.56c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94V21H9.22Z"
        />
      </svg>
    );
  }

  if (name === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden>
        <path
          fill="currentColor"
          d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm8 1.8H8A3.2 3.2 0 0 0 4.8 8v8A3.2 3.2 0 0 0 8 19.2h8A3.2 3.2 0 0 0 19.2 16V8A3.2 3.2 0 0 0 16 4.8ZM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 1.7A2.1 2.1 0 1 0 14.1 12 2.1 2.1 0 0 0 12 9.9Zm4.55-2.85a.95.95 0 1 1-.95.95.95.95 0 0 1 .95-.95Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M13.5 9.5V8.1c0-.7.5-.8.8-.8h2.1V4.2h-2.9c-3 0-3.6 2.2-3.6 3.7v1.6H8.1V13h1.8v8h3.6v-8h2.4l.4-3.5Z"
      />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-near-black text-white">
      <div className="page-shell pt-24 pb-10 md:pt-28">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
          <Link href="/" className="inline-flex w-fit items-center">
            <Image
              src="/images/digitalizer-logo.png"
              alt="Digitalizer"
              width={1600}
              height={331}
              className="h-7 w-auto md:h-8"
            />
          </Link>

          <nav aria-label="Footer">
            <ul className="flex flex-col gap-1">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-[0.95rem] text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <a
              href={contact.phone.href}
              className="inline-flex min-h-11 items-center font-sans text-xl tracking-tight text-white transition-colors duration-300 hover:text-brand-green md:text-2xl"
            >
              {contact.phone.label}
            </a>

            <ul className="mt-6 space-y-5">
              {contact.offices.map((office) => (
                <li key={office.city} className="text-sm leading-relaxed text-white/55">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/40">
                    {office.city}
                    <span className="text-white/25"> · {office.note}</span>
                  </p>
                  {office.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </li>
              ))}
            </ul>

            <ul className="mt-8 flex items-center gap-2">
              {contact.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="inline-flex size-11 items-center justify-center text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    <SocialIcon name={item.label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-16 border-t border-white/10 pt-6 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-white/35">
          © {year} {contact.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
