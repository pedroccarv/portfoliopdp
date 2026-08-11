import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { profile } from "@/data/portfolio";

const nav = [
  { to: "/", label: { pt: "Sobre Mim", en: "About Me" } },
  { to: "/projetos", label: { pt: "Projetos", en: "Projects" } },
  { to: "/experiencias", label: { pt: "Experiências", en: "Experience" } },
  { to: "/contato", label: { pt: "Contato", en: "Contact" } },
] as const;

export function SiteHeader() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4">
        <Link to="/" className="min-w-0 font-display text-lg font-bold tracking-tight">
          {profile.name.split(" ")[0]}
          <span className="text-gradient">.dev</span>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label[lang]}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center rounded-md border border-border p-0.5 font-mono text-xs">
            {(["pt", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={
                  "rounded-full px-2.5 py-1 uppercase transition-colors " +
                  (lang === l
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground")
                }
              >
                {l}
              </button>
            ))}
          </div>

          <button
            className="shrink-0 rounded-md p-2 text-muted-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 px-5 py-3 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block rounded-md px-2 py-2.5 text-sm text-muted-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label[lang]}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
