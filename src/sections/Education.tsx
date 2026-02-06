import { Container } from "../components/Container";
import { SectionHeader } from "../components/SectionHeader";
import { education } from "../content/education";

export function Education() {
  return (
    <section id="education" className="py-16">
      <Container>
        <SectionHeader title="Education" subtitle="Where I learned the fundamentals." />
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((e) => (
            <div
              key={`${e.institution}-${e.degree}`}
              className="rounded-2xl border border-slate-200 
                         hover:border-white/40 
                         hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
                         transition-all duration-300
                         bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                {e.institution}
              </h3>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">{e.degree}</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{e.period}</p>
              {e.highlights?.length ? (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
                  {e.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

