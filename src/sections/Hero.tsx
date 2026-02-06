import { profile } from "../content/profile";
import { Container } from "../components/Container";
import { LinkButton } from "../components/Button";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-600/25 blur-3xl" />
        <div className="absolute -bottom-28 right-0 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
      </div>
      <Container>
        <div className="relative grid items-center gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <div>
            <p className="text-sm font-medium text-brand-200/90">{profile.location}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg text-slate-200 sm:text-xl">{profile.headline}</p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href={profile.resumePath} variant="primary">
                Download Resume
              </LinkButton>
              <LinkButton
                href={profile.socials.find((s) => s.label === "GitHub")?.href ?? "#"}
                target="_blank"
                rel="noreferrer"
              >
                View GitHub
              </LinkButton>
              <LinkButton href="#contact" variant="ghost">
                Contact
              </LinkButton>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-300">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  className="hover:text-white"
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {profile.avatarUrl ? (
            <div className="flex justify-center md:justify-end">
              <div className="relative h-40 w-40 overflow-hidden rounded-full border border-white/10 bg-slate-900/60 shadow-xl sm:h-48 sm:w-48 md:h-56 md:w-56">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

