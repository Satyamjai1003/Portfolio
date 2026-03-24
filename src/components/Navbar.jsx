import { cn } from "@/lib/utils";
import { FileText, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isThemeTransition, setIsThemeTransition] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleActiveSection = () => {
      const sections = navItems
        .map((item) => item.href.substring(1))
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      const scrollPos = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollPos) {
          setActiveSection(navItems[i].name);
          return;
        }
      }
      setActiveSection("Home");
    };

    window.addEventListener("scroll", handleActiveSection);
    return () => window.removeEventListener("scroll", handleActiveSection);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsThemeTransition(true);
    setTimeout(() => setIsThemeTransition(false), 700);

    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-md py-3 border-b border-border/40"
          : "bg-background py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className={isThemeTransition ? "theme-swipe active" : "theme-swipe"} />

        {/* Logo */}
        <a
          href="#hero"
          className="flex-shrink-0 flex items-center gap-1 group"
          aria-label="Home"
        >
          <span
            className="text-xl font-black tracking-tight transition-all duration-300 group-hover:opacity-80"
            style={{
              background: "linear-gradient(135deg, #a855f7, #6366f1, #38bdf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontFamily: "'Georgia', serif",
              letterSpacing: "-0.5px",
            }}
          >
            Satyam
          </span>
          <span
            className="text-xl font-black tracking-tight transition-all duration-300 group-hover:opacity-80"
            style={{
              color: "var(--foreground)",
              fontFamily: "'Georgia', serif",
              letterSpacing: "-0.5px",
            }}
          >
            Jaiswal
          </span>
          {/* Dot accent */}
          <span
            className="w-1.5 h-1.5 rounded-full mb-3 flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #a855f7, #6366f1)" }}
          />
        </a>

        {/* Desktop Nav — centered absolutely */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveSection(item.name)}
              className={cn(
                "relative px-4 py-1.5 text-sm font-medium transition-colors duration-200 group",
                activeSection === item.name
                  ? "text-foreground"
                  : "text-foreground/60 hover:text-foreground"
              )}
            >
              {item.name}
              <span
                className={cn(
                  "absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-foreground rounded-full transition-all duration-300",
                  activeSection === item.name
                    ? "w-[60%] opacity-100"
                    : "w-0 opacity-0 group-hover:w-[40%] group-hover:opacity-40"
                )}
              />
            </a>
          ))}
        </div>

        {/* Right side: Resume button + Theme toggle */}
        <div className="hidden md:flex items-center gap-3">
          {/* Resume Button */}
          <button
            onClick={() => setIsResumeOpen(true)}
            className="relative flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold text-white overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40"
            style={{
              background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)",
              boxShadow: "0 0 12px rgba(139, 92, 246, 0.5)",
            }}
          >
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                animation: "shimmer 1.2s infinite",
              }}
            />
            <span
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
              style={{ boxShadow: "0 0 0 4px rgba(139, 92, 246, 0.3)", transition: "opacity 0.3s" }}
            />
            <FileText size={14} className="relative z-10 drop-shadow" />
            <span className="relative z-10 tracking-wide">Resume</span>
            <style>{`@keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }`}</style>
          </button>

          {/* Theme Toggle */}
          {/* <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full text-foreground/70 hover:text-foreground hover:bg-foreground/10 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-300" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button> */}
        </div>

        {/* Mobile: Theme + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full text-foreground/70 hover:text-foreground hover:bg-foreground/10 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-300" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background/97 backdrop-blur-md z-40 flex flex-col items-center justify-center md:hidden",
          "transition-all duration-300",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center space-y-6 text-lg">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "text-foreground/70 hover:text-foreground transition-colors duration-300 font-medium",
                activeSection === item.name &&
                "text-foreground border-b border-foreground/40 pb-0.5"
              )}
              onClick={() => {
                setActiveSection(item.name);
                setIsMenuOpen(false);
              }}
            >
              {item.name}
            </a>
          ))}

          {/* Resume button in mobile menu */}
          <button
            onClick={() => { setIsResumeOpen(true); setIsMenuOpen(false); }}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-white transition-all duration-300 shadow-md mt-2 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)", boxShadow: "0 0 12px rgba(139,92,246,0.5)" }}
          >
            <FileText size={15} />
            View Resume
          </button>
        </div>
      </div>
      {/* Resume PDF Modal */}
      {isResumeOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
          onClick={() => setIsResumeOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            style={{
              maxHeight: "90vh",
              border: "1px solid rgba(139,92,246,0.3)",
              boxShadow: "0 0 40px rgba(139,92,246,0.2)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              className="flex items-center justify-between px-5 py-3 flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)" }}
            >
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <FileText size={16} />
                Resume — Satyam Jai
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/resume.pdf"
                  download="Satyam_Jai_Resume.pdf"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/20 text-white hover:bg-white/30 transition-all duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  ⬇ Download
                </a>
                <button
                  onClick={() => setIsResumeOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-200"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 bg-zinc-900 overflow-hidden" style={{ minHeight: "75vh" }}>
              <iframe
                src="/resume.pdf"
                title="Resume"
                className="w-full h-full"
                style={{ minHeight: "75vh", border: "none" }}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};