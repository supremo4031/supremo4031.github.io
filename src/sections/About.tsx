import { profile } from "../content/profile";
import { Container } from "../components/Container";
import { SectionHeader } from "../components/SectionHeader";
import { Badge } from "../components/Badge";

export function About() {
  return (
    <section id="about" className="py-16">
      <Container>
        <SectionHeader
          title="About"
          subtitle="A quick background and what I enjoy working on."
        />
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            <div className="space-y-4 text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300">
              {profile.aboutParagraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="rounded-2xl border border-slate-200 
                            hover:border-white/40 
                            hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
                            transition-all duration-300
                            bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Highlights</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {profile.highlights.map((h) => (
                  <Badge key={h}>{h}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

