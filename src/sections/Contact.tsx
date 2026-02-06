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
          <div className="rounded-2xl border border-slate-200 
                          hover:border-white/40 
                          hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
                          transition-all duration-300
                          bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Email</p>
            <a
              className="mt-2 block text-sm text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
              href={email?.href ?? "mailto:you@example.com"}
            >
              {email?.href.replace("mailto:", "") ?? "you@example.com"}
            </a>
          </div>
          <div className="rounded-2xl border border-slate-200 
                          hover:border-white/40 
                          hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
                          transition-all duration-300
                          bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">GitHub</p>
            <a
              className="mt-2 block text-sm text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
              href={github?.href ?? "#"}
              target="_blank"
              rel="noreferrer"
            >
              {github?.href ?? "https://github.com/your-handle"}
            </a>
          </div>
          <div className="rounded-2xl border border-slate-200 
                          hover:border-white/40 
                          hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
                          ransition-all duration-300
                          bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">LinkedIn</p>
            <a
              className="mt-2 block text-sm text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
              href={linkedin?.href ?? "#"}
              target="_blank"
              rel="noreferrer"
            >
              {linkedin?.href ?? "https://www.linkedin.com/in/your-handle/"}
            </a>
          </div>
        </div>
        <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
          Location: <span className="text-slate-700 dark:text-slate-300">{profile.location}</span>
        </p>
      </Container>
    </section>
  );
}

