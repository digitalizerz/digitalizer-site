import { contact } from "@/data/contact";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ContactLocations() {
  return (
    <section className="border-t border-white/8 bg-near-black text-white">
      <div className="page-shell pt-[clamp(8.75rem,16vw,11.25rem)] pb-[clamp(8.75rem,16vw,11.25rem)]">
        <SectionLabel tone="green">Where we work</SectionLabel>
        <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
          <h2 className="max-w-xl font-sans text-[clamp(2.2rem,5vw,4.2rem)] font-medium leading-[0.95] tracking-[-0.035em]">
            Baltimore headquarters.
            <br />
            Houston office.
          </h2>
          <div className="flex flex-col">
            <a
              href={contact.phone.href}
              className="inline-flex min-h-11 items-center font-sans text-2xl tracking-tight text-white transition-colors duration-300 hover:text-brand-green md:text-3xl"
            >
              {contact.phone.label}
            </a>
            <a
              href={contact.email.href}
              className="inline-flex min-h-11 items-center font-sans text-xl tracking-tight text-white transition-colors duration-300 hover:text-brand-green md:text-2xl"
            >
              {contact.email.label}
            </a>
          </div>
        </div>

        <ul className="mt-20 grid gap-12 border-t border-white/10 pt-12 md:grid-cols-2 md:gap-0">
          {contact.offices.map((office) => (
            <li
              key={office.city}
              className="md:border-l md:border-white/10 md:px-10 first:md:border-l-0 first:md:pl-0"
            >
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/40">
                {office.city}
                <span className="text-white/25"> · {office.note}</span>
              </p>
              <p className="mt-5 font-sans text-xl tracking-tight text-white">
                {office.lines[0]}
              </p>
              <p className="mt-2 text-white/55">{office.lines[1]}</p>
            </li>
          ))}
        </ul>

        <ul className="mt-16 flex flex-wrap gap-x-8 gap-y-2">
          {contact.social.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center text-sm text-white/55 transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
