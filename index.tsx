import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";
import { useLang } from "@/lib/i18n";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pedro Soares — Portfólio de Engenharia de Software" },
      {
        name: "description",
        content:
          "Portfólio bilíngue de Pedro Soares: formação, habilidades, projetos, experiências e contato em desenvolvimento full-stack.",
      },
      { property: "og:title", content: "Pedro Soares — Portfólio de Engenharia de Software" },
      {
        property: "og:description",
        content: "Sobre mim, projetos, experiências e contato — em português e inglês.",
      },
    ],
  }),
  component: About,
});

function About() {
  const { lang } = useLang();

  return (
    <div>
      <section className="relative overflow-hidden">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          width={1536}
          height={1024}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.13] grayscale"
        />
        <div className="hero-glow relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
          <p className="mono-label">
            {lang === "pt" ? "Portfólio profissional" : "Professional portfolio"}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] sm:text-6xl">
            {profile.name}
            <span className="block text-primary">{profile.role[lang]}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.about[lang][0]}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/projetos"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {lang === "pt" ? "Ver projetos" : "View projects"}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              {lang === "pt" ? "Sobre mim" : "About me"}
            </h2>
            <div className="mt-5 space-y-4 text-muted-foreground">
              {profile.about[lang].map((paragraph) => (
                <p key={paragraph} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="card-elevated p-6">
              <p className="mono-label">{lang === "pt" ? "Interesses" : "Interests"}</p>
              <ul className="mt-3 space-y-2 text-sm">
                {profile.interests[lang].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-md bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-elevated p-6">
              <p className="mono-label">{lang === "pt" ? "Habilidades" : "Skills"}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
