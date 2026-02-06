import { Container } from "../components/Container";
import { SectionHeader } from "../components/SectionHeader";
import { LinkButton } from "../components/Button";
import { profile } from "../content/profile";

export function Resume() {
  return (
    <section id="resume" className="py-16">
      <Container>
        <SectionHeader
          title="Resume"
          subtitle="Download a PDF version of my resume."
        />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 
                          hover:border-white/40 
                          hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
                          transition-all duration-300
                          bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5 p-6">
            <a href={profile.resumePath} target="_blank">
                <h3 className="text-base text-white">
                  {profile.name}
                </h3>
                <p className="mt-2 text-sm text-white/90">
                  Full-Stack Engineer • Java / Go • Microservices
                </p>
                <p className="mt-2 text-sm/10 text-white/60">
                  Last updated: Jan 2026
                </p>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

