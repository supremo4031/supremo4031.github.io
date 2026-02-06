import { Container } from "../components/Container";
import { NAV_ITEMS } from "../lib/sections";
import { profile } from "../content/profile";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 dark:border-white/10">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">{profile.name}</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              {profile.headline}
            </p>
            <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
              @ {new Date().getFullYear()}  ARPAN  LAYEK.  ALL  RIGHTS  RESERVED.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm sm:grid-cols-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                href={`#${item.id}`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

