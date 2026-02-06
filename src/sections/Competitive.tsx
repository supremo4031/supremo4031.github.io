import { Container } from "../components/Container";
import { SectionHeader } from "../components/SectionHeader";
import { Badge } from "../components/Badge";
import { competitiveProfiles } from "../content/competitive";

export function Competitive() {
  return (
    <section id="competitive" className="py-16">
      <Container>
        <SectionHeader
          title="Competitive Programming"
          subtitle="Profiles and max ratings across platforms."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {competitiveProfiles.map((p) => (
            <article
              key={p.platform}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                {p.platform}
              </h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
                Handle:{" "}
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-slate-500/60 underline-offset-2 hover:text-white hover:decoration-white/80"
                >
                  {p.handle}
                </a>
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-300">
                {typeof p.maxRating === "number" && p.maxRating > 0 ? (
                  <Badge>Max rating: {p.maxRating}</Badge>
                ) : null}
                {p.rankLabel ? <Badge>{p.rankLabel}</Badge> : null}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

