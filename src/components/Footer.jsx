import { ArrowUp, Github, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border/40 bg-background text-foreground dark:bg-[#020617] dark:text-slate-100">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_30%,rgba(147,197,253,0.15),transparent_35%),radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_45%)]" />
      <div className="relative px-4 py-10 lg:py-14 mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
          <div className="text-center lg:text-left">
            <p className="text-sm text-muted-foreground mb-2 dark:text-slate-300">© {new Date().getFullYear()} All rights reserved.</p>
            <p className="text-center text-xl md:text-2xl font-semibold text-foreground dark:text-slate-100 italic tracking-wide max-w-3xl mx-auto lg:mx-0">
              "The best way to predict the future is to create it."
            </p>
          </div>

          <div className="flex items-center justify-center lg:justify-end gap-2">
            {[
              {
                Icon: Linkedin,
                href: "https://www.linkedin.com/in/satyamjaiswal02",
                title: "LinkedIn",
              },
              {
                Icon: Github,
                href: "https://github.com/Satyamjai1003",
                title: "GitHub",
              },
              {
                Icon: Instagram,
                href: "https://www.instagram.com/satyamjaiswal0342/",
                title: "Instagram",
              },
              {
                Icon: Twitter,
                href: "https://x.com/SatyamJais4098",
                title: "Twitter",
              },
            ].map(({ Icon, href, title }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noreferrer"
                title={title}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:-translate-y-1 hover:bg-white/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              >
                <Icon size={20} />
              </a>
            ))}
            <a
              href="#hero"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition hover:-translate-y-1 hover:scale-105"
            >
              <ArrowUp size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
