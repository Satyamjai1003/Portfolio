import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-24 px-4 md:px-6 lg:px-8 relative">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-10 lg:gap-14 items-start">
          <div className="space-y-6 text-center lg:text-left pt-4 md:pt-6 lg:pt-8">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Passionate about Data Science and AI Web Application
            </h3>

            <p className="text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed text-base md:text-lg">
             With a strong foundation in Data Science, I specialize in transforming raw data into meaningful insights and building robust Machine Learning models to solve complex real-world problems. Beyond just analysis, I bridge the gap between backend data processing and front-end delivery—leveraging Python, SQL and PowerBI to engineer predictive systems. My focus is on creating end-to-end, data-driven solutions that are not only mathematically sound but also intuitively designed for the end-user.
            </p>

            <p className="text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed text-base md:text-lg">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center lg:justify-start gap-4 pt-4">
              {/* <a href="#contact" className="cosmic-button">
                Get In Touch
              </a> */}
              <a
                href="/resume.pdf"
                download="Satyam_Jaiswal_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="relative p-6 md:p-8 rounded-3xl border border-border/40 bg-card/50 backdrop-blur-sm shadow-[0_0_40px_rgba(0,0,0,0.35)] overflow-hidden">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />

            <h3 className="text-2xl md:text-3xl font-bold mb-7 text-foreground text-center">
              Areas of Focus
            </h3>

            <div className="space-y-3 md:space-y-4 relative z-10">
              <div className="group p-4 md:p-5 rounded-2xl border border-border/40 bg-background/40 hover:bg-background/80 hover:border-border/80 transition-all duration-300 flex items-start gap-4 md:gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 flex flex-col items-start text-left gap-1.5">
                  <h4 className="font-semibold text-foreground tracking-wide text-base md:text-lg">
                    Data Science & Analytics
                  </h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Transforming complex data into actionable insights through statistical modeling and visual storytelling.
                  </p>
                </div>
              </div>

              <div className="group p-4 md:p-5 rounded-2xl border border-border/40 bg-background/40 hover:bg-background/80 hover:border-border/80 transition-all duration-300 flex items-start gap-4 md:gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div className="flex-1 flex flex-col items-start text-left gap-1.5">
                  <h4 className="font-semibold text-foreground tracking-wide text-base md:text-lg">
                    Predictive Solutions & Automation
                  </h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Building intelligent, automated systems that optimize workflows and enhance decision-making.
                  </p>
                </div>
              </div>

              <div className="group p-4 md:p-5 rounded-2xl border border-border/40 bg-background/40 hover:bg-background/80 hover:border-border/80 transition-all duration-300 flex items-start gap-4 md:gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
                    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
                    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/>
                    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/>
                  </svg>
                </div>
                <div className="flex-1 flex flex-col items-start text-left gap-1.5">
                  <h4 className="font-semibold text-foreground tracking-wide text-base md:text-lg">
                    AI Integration
                  </h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Incorporating intelligent features to enhance application capabilities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
