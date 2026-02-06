import { Container } from "../components/Container";
import { SectionHeader } from "../components/SectionHeader";
import { Badge } from "../components/Badge";
import { skillCategories } from "../content/skills";

export function Skills() {
  return (
    <section id="skills" className="py-16">
      <Container>
        <SectionHeader
          title="Skills"
          subtitle="A toolbox optimized for distributed event-driven systems and pragmatic full-stack delivery."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {skillCategories.map((cat) => (
            <div
              key={cat.name}
              className="rounded-2xl border border-slate-200 
                         hover:border-white/40 
                         hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
                         transition-all duration-300
                         bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                {cat.name}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

