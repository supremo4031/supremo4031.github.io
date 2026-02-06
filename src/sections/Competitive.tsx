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
              className="rounded-2xl border border-slate-200 
                         hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] 
                         transition-all duration-300 
                         cursor-pointer
                         bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5"
            >
              <a href={p.url} target="_blank">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                  {p.platform}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-300">
                  {typeof p.maxRating === "number" && p.maxRating > 0 ? (
                    <Badge>Max rating: {p.maxRating}</Badge>
                  ) : null}
                  {p.rankLabel ? <Badge>{p.rankLabel}</Badge> : null}
                </div>
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

