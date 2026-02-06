import { NAV_ITEMS, type SectionId } from "../lib/sections";
import { Container } from "./Container";

import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  function jumpTo(id: SectionId) {
    setOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <button
            className="rounded-lg px-2 py-1 text-sm font-semibold text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-400/60 dark:text-white dark:hover:bg-white/10"
            onClick={() => jumpTo("home")}
          >
            Portfolio
          </button>

          <div className="hidden items-center gap-6 md:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                className="text-sm text-slate-200 hover:text-white"
                onClick={() => jumpTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-white/10"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              Menu
            </button>
          </div>
        </nav>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-slate-200 bg-white md:hidden dark:border-white/10 dark:bg-slate-950/90">
          <Container>
            <div className="flex flex-col gap-2 py-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  className="rounded-lg px-3 py-2 text-left text-sm text-slate-200 hover:bg-white/10 hover:text-white"
                  onClick={() => jumpTo(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </Container>
        </div>
      ) : null}
    </div>
  );
}

