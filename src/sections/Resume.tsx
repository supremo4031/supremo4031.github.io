import { Container } from "../components/Container";
import { SectionHeader } from "../components/SectionHeader";
import { LinkButton } from "../components/Button";
import { profile } from "../content/profile";

export function Resume() {
  return (
    <section id="resume" className="py-16">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 sm:p-10">
          <SectionHeader
            title="Resume"
            subtitle="Download a PDF version of my resume."
          />
          <div className="flex flex-wrap items-center gap-3">
            <LinkButton href={profile.resumePath} variant="primary" target="_blank" rel="noreferrer">
              View Resume
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

