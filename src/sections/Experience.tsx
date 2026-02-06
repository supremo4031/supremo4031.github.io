import { Container } from "../components/Container";
import { SectionHeader } from "../components/SectionHeader";
import { experience } from "../content/experience";

export function Experience() {
  return (
    <section id="experience" className="py-16">
      <Container>
        <SectionHeader
          title="Experience"
          subtitle="Specializing in distributed systems, event-driven microservices."
        />
        <div className="space-y-4">
          {experience.map((item) => (
            <div
              key={`${item.company}-${item.role}-${item.start}`}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                    {item.role} · {item.company}
                  </h3>
                  {item.location ? (
                    <p className="text-sm text-slate-600 dark:text-slate-300">{item.location}</p>
                  ) : null}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {item.start} — {item.end}
                </p>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
                {item.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

