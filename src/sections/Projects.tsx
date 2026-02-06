import { Container } from "../components/Container";
import { SectionHeader } from "../components/SectionHeader";
import { Badge } from "../components/Badge";
import { projects } from "../content/projects";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const ordered = [...featured, ...rest];

  return (
    <section id="projects" className="py-16">
      <Container>
        <SectionHeader
          title="Projects"
          subtitle="Selected work. Each card is config-driven for quick edits."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {ordered.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-slate-200 
                         hover:border-white/40 
                         hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
                         transition-all duration-300
                         bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  {p.title}
                </h3>
                {p.featured ? (
                  <span className="rounded-full bg-brand-500/15 px-3 py-1 text-xs font-medium text-brand-200">
                    Featured
                  </span>
                ) : null}
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.techStack.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-4 text-sm">
                {p.githubUrl ? (
                  <a
                    className="text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                ) : null}
                {p.demoUrl ? (
                  <a
                    className="text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
                    href={p.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

