import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { useLang } from "@/lib/i18n";

export function SiteFooter() {
  const { lang } = useLang();

  return (
    <footer className="mt-24 border-t border-border/60 py-10">
      <div className="mx-auto grid max-w-6xl gap-4 px-5 sm:flex sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name} —{" "}
          {lang === "pt" ? "Todos os direitos reservados." : "All rights reserved."}
        </p>
        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="E-mail"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
