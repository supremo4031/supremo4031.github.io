import { Container } from "../components/Container";
import { SectionHeader } from "../components/SectionHeader";
import { profile } from "../content/profile";

export function Contact() {
  const email = profile.socials.find((s) => s.label.toLowerCase() === "email");
  const github = profile.socials.find((s) => s.label.toLowerCase() === "github");
  const linkedin = profile.socials.find((s) => s.label.toLowerCase() === "linkedin");

  return (
    <section id="contact" className="py-16">
      <Container>
        <SectionHeader title="Contact" subtitle="Best ways to reach me." />
        <div className="grid gap-4 md:grid-cols-3">
          {profile.socials.map((p) => (
            <article
              key={p.label}
              className="rounded-2xl border border-slate-200 
                         hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] 
                         transition-all duration-300 
                         cursor-pointer
                         bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5"
            >
              <a href={p.href} target="_blank">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                  {p.label}
                </h3>
                <div className="mt-2 block text-sm text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white">
                  {p.label === "Email" ? p.href.replace("mailto:", "") : p.href}
                </div>
              </a>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
          Location: <span className="text-slate-700 dark:text-slate-300">{profile.location}</span>
        </p>
      </Container>
    </section>
  );
}

