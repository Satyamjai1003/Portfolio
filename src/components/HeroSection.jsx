import { ArrowDown, Github } from "lucide-react";
import { useState, useEffect } from "react";

const ROLES = [
  "Data Science",
  "Data Analytics",
  "ML Engineer",
  "AI Enthusiast",
];

const heroStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

  @keyframes levitate {
    0%   { transform: translateY(0px) scale(1); }
    30%  { transform: translateY(-14px) scale(1.012); }
    60%  { transform: translateY(-6px) scale(1.006); }
    100% { transform: translateY(0px) scale(1); }
  }
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeSlideLeft {
    from { opacity: 0; transform: translateX(40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes orb1 {
    0%, 100% { transform: translate(0,0) scale(1); }
    50%       { transform: translate(40px, -30px) scale(1.1); }
  }
  @keyframes orb2 {
    0%, 100% { transform: translate(0,0) scale(1); }
    50%       { transform: translate(-30px, 40px) scale(1.15); }
  }
  @keyframes orb3 {
    0%, 100% { transform: translate(0,0) scale(1); }
    33%       { transform: translate(20px, 20px) scale(1.05); }
    66%       { transform: translate(-20px, -10px) scale(0.95); }
  }
  @keyframes gridMove {
    0%   { background-position: 0 0; }
    100% { background-position: 60px 60px; }
  }
  @keyframes scanline {
    0%   { transform: translateY(-100%); }
    100% { transform: translateY(100vh); }
  }
  @keyframes float1 {
    0%, 100% { transform: translateY(0); opacity: 0.5; }
    50%       { transform: translateY(-22px); opacity: 1; }
  }
  @keyframes float2 {
    0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
    50%       { transform: translateY(-18px) translateX(10px); opacity: 0.8; }
  }
  @keyframes roleIn {
    from { opacity: 0; transform: translateY(12px); filter: blur(6px); }
    to   { opacity: 1; transform: translateY(0); filter: blur(0); }
  }
  @keyframes roleOut {
    from { opacity: 1; transform: translateY(0); filter: blur(0); }
    to   { opacity: 0; transform: translateY(-12px); filter: blur(6px); }
  }
  @keyframes shimmerLine {
    0%   { left: -100%; }
    100% { left: 100%; }
  }
  @keyframes badgePulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(139,92,246,0.4); }
    50%       { box-shadow: 0 0 0 6px rgba(139,92,246,0); }
  }
  @keyframes borderPulse {
    0%, 100% { border-color: rgba(139,92,246,0.4); }
    50%       { border-color: rgba(168,85,247,0.8); }
  }

  .hero-btn-primary {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 0.78rem 2rem; border-radius: 9999px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.875rem; font-weight: 500;
    background: linear-gradient(135deg, rgba(139,92,246,0.95) 0%, rgba(109,40,217,1) 100%);
    color: #fff;
    border: 1.5px solid rgba(167,139,250,0.4);
    box-shadow: 0 0 20px rgba(139,92,246,0.35), inset 0 1px 0 rgba(255,255,255,0.12);
    transition: all 0.3s ease; text-decoration: none; position: relative; overflow: hidden;
  }
  .hero-btn-primary::after {
    content: ''; position: absolute; top: 0; left: -100%;
    width: 100%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
    transition: left 0.4s ease;
  }
  .hero-btn-primary:hover::after { left: 100%; }
  .hero-btn-primary:hover {
    transform: translateY(-3px) scale(1.04);
    box-shadow: 0 0 40px rgba(139,92,246,0.7), 0 10px 30px rgba(109,40,217,0.4);
  }
  .hero-btn-primary:active { transform: scale(0.97); }

  .hero-btn-outline {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 0.78rem 2rem; border-radius: 9999px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.875rem; font-weight: 500;
    background: rgba(139,92,246,0.06);
    color: rgba(196,181,253,0.9);
    border: 1.5px solid rgba(139,92,246,0.45);
    box-shadow: 0 0 12px rgba(139,92,246,0.1);
    transition: all 0.3s ease; text-decoration: none;
  }
  .hero-btn-outline:hover {
    transform: translateY(-3px) scale(1.04);
    background: rgba(139,92,246,0.15);
    border-color: rgba(167,139,250,0.85);
    color: rgba(220,210,255,1);
    box-shadow: 0 0 28px rgba(139,92,246,0.4);
  }
  .hero-btn-outline:active { transform: scale(0.97); }

  .social-icon {
    width: 40px; height: 40px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    border: 1.5px solid rgba(139,92,246,0.3);
    background: rgba(139,92,246,0.07);
    color: rgba(196,181,253,0.7);
    transition: all 0.3s ease; text-decoration: none;
  }
  .social-icon:hover {
    border-color: rgba(168,85,247,0.8);
    background: rgba(139,92,246,0.18);
    color: rgba(220,210,255,1);
    transform: translateY(-3px);
    box-shadow: 0 0 20px rgba(139,92,246,0.4);
  }

  .role-entering { animation: roleIn 0.5s ease forwards; }
  .role-exiting  { animation: roleOut 0.4s ease forwards; }
`;

export const HeroSection = () => {
  const [imgError, setImgError] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleAnim, setRoleAnim] = useState("role-entering");

  // Rotate roles
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleAnim("role-exiting");
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setRoleAnim("role-entering");
      }, 420);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{heroStyles}</style>
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
        style={{ background: "var(--background)" }}
      >

        {/* ── Animated grid ── */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: `linear-gradient(rgba(139,92,246,0.06) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(139,92,246,0.06) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          animation: "gridMove 8s linear infinite",
        }} />

        {/* ── Vignette ── */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 20%, var(--background) 100%)",
        }} />

        {/* ── Glow orbs ── */}
        <div style={{
          position: "absolute", top: "-15%", left: "-10%", zIndex: 0,
          width: "600px", height: "600px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 65%)",
          animation: "orb1 8s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", bottom: "-20%", right: "-10%", zIndex: 0,
          width: "700px", height: "700px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 65%)",
          animation: "orb2 10s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", top: "40%", left: "40%", zIndex: 0,
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 65%)",
          animation: "orb3 12s ease-in-out infinite",
        }} />

        {/* ── Floating particles ── */}
        {[...Array(18)].map((_, i) => (
          <div key={i} style={{
            position: "absolute", zIndex: 1,
            width: `${(i % 3) + 1}px`, height: `${(i % 3) + 1}px`,
            borderRadius: "50%",
            backgroundColor: i % 3 === 0 ? "rgba(168,85,247,0.6)" : i % 3 === 1 ? "rgba(99,102,241,0.5)" : "rgba(56,189,248,0.4)",
            left: `${(i * 41 + 7) % 95}%`,
            top: `${(i * 57 + 13) % 90}%`,
            animation: `float${(i % 2) + 1} ${5 + (i % 5)}s ease-in-out infinite`,
            animationDelay: `${(i % 5) * 0.7}s`,
          }} />
        ))}

        {/* ── Scanline ── */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", left: 0, right: 0, height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.15), transparent)",
            animation: "scanline 10s linear infinite",
          }} />
        </div>

        {/* ── Main content ── */}
        <div className="container max-w-6xl mx-auto z-10 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-20">

            {/* ── LEFT: Text ── */}
            <div className="flex-1 space-y-7 max-w-xl" style={{ textAlign: "left" }}>

              {/* Badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "6px 16px", borderRadius: "9999px",
                border: "1px solid rgba(139,92,246,0.35)",
                background: "rgba(139,92,246,0.08)",
                animation: "fadeSlideUp 0.7s ease 0.1s both, badgePulse 3s ease infinite",
              }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#a855f7", boxShadow: "0 0 8px #a855f7" }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", fontWeight: 500, color: "rgba(196,181,253,0.9)", letterSpacing: "0.08em" }}>
                  Available for opportunities
                </span>
              </div>

              {/* Heading */}
              <div style={{ animation: "fadeSlideUp 0.7s ease 0.2s both" }}>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "2rem", fontWeight: 500,
                  color: "rgba(255,255,255,0.45)",
                  letterSpacing: "0.05em", marginBottom: "8px",
                }}>
                  Hello, I'm
                </p>
                <h1 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(4.6rem, 0.5vw, 4rem)",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: "-1px",
                  color: "var(--foreground)",
                  margin: 0,
                }}>
                  Satyam{" "}
                  <span style={{
                    background: "linear-gradient(135deg, #c4b5fd, #a855f7, #6366f1)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    Jaiswal
                  </span>
                </h1>
              </div>

              {/* Animated role */}
              <div style={{
                display: "flex", alignItems: "center", gap: "12px",
                animation: "fadeSlideUp 0.7s ease 0.35s both",
              }}>
                <div style={{
                  width: "28px", height: "2px",
                  background: "linear-gradient(90deg, #6366f1, #a855f7)",
                  borderRadius: "2px", flexShrink: 0,
                }} />
                <div style={{ minHeight: "32px", display: "flex", alignItems: "center", overflow: "hidden" }}>
                  <span
                    key={roleIndex}
                    className={roleAnim}
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "1.55rem",
                      fontWeight: 700,
                      background: "linear-gradient(90deg, #a78bfa, #38bdf8)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      display: "block",
                    }}
                  >
                    {ROLES[roleIndex]}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1.1rem", fontWeight: 400,
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.8,
                animation: "fadeSlideUp 0.7s ease 0.5s both",
              }}>
                I architect data-driven solutions with modern machine learning pipelines —
                transforming raw information into automated intelligence through clean code,
                deep analysis and scalable ML models.
              </p>

              {/* CTA Buttons */}
              <div style={{
                display: "flex", flexWrap: "wrap", gap: "12px",
                animation: "fadeSlideUp 0.7s ease 0.65s both",
              }}>
                <a href="#contact" className="hero-btn-primary">
                  Get In Touch
                </a>
                <a
                  href="https://github.com/Satyamjai1003"
                  target="_blank" rel="noopener noreferrer"
                  className="hero-btn-outline"
                >
                  <Github size={15} />
                  GitHub
                </a>
              </div>

              {/* Social icons removed as requested */}
              <div style={{
                display: "flex", alignItems: "center", gap: "16px",
                animation: "fadeSlideUp 0.7s ease 0.8s both",
              }}>
                <div style={{ width: "40px", height: "1px", background: "rgba(255,255,255,0.12)" }} />
                <div style={{ width: "40px", height: "1px", background: "rgba(255,255,255,0.12)" }} />
              </div>
            </div>

            {/* ── RIGHT: Photo ── */}
            <div style={{
              flexShrink: 0,
              animation: "fadeSlideLeft 0.8s ease 0.4s both",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <div style={{ position: "relative" }} className="group">

                {/* Outer rotating border ring */}
                <div style={{
                  position: "absolute", inset: "-16px", borderRadius: "32px",
                  background: "conic-gradient(from 0deg, transparent 70%, rgba(139,92,246,0.6) 85%, rgba(168,85,247,0.9) 100%)",
                  animation: "orb1 4s linear infinite",
                  filter: "blur(3px)",
                }} />

                {/* Glow behind photo */}
                <div style={{
                  position: "absolute", inset: "-28px", borderRadius: "40px",
                  background: "radial-gradient(ellipse, rgba(139,92,246,0.35) 0%, transparent 70%)",
                  filter: "blur(20px)",
                  animation: "borderGlow 3s ease-in-out infinite",
                }} />

                {/* Photo frame */}
                <div style={{
                  position: "relative", borderRadius: "24px", overflow: "hidden",
                  width: "380px", height: "460px",
                  border: "2px solid rgba(139,92,246,0.4)",
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
                  animation: "levitate 5.5s ease-in-out infinite",
                  transition: "all 0.4s ease",
                  transformStyle: "preserve-3d",
                }}
                className="group-hover:scale-105 group-hover:shadow-[0_0_80px_rgba(139,92,246,0.4)] group-hover:rotate-1 group-hover:animate-[borderPulse_1.5s_ease-in-out_infinite]"
                >
                  {/* Shimmer effect on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                      animation: "shimmerLine 1.5s ease-in-out",
                    }}
                  />

                  {/* Interactive particles on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        style={{
                          position: "absolute",
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          background: i % 2 === 0 ? "rgba(139,92,246,0.8)" : "rgba(168,85,247,0.8)",
                          left: `${20 + (i * 10)}%`,
                          top: `${15 + (i * 8)}%`,
                          animation: `float${(i % 2) + 1} ${2 + (i % 2)}s ease-in-out infinite`,
                          animationDelay: `${i * 0.2}s`,
                          boxShadow: `0 0 8px ${i % 2 === 0 ? 'rgba(139,92,246,0.6)' : 'rgba(168,85,247,0.6)'}`,
                        }}
                      />
                    ))}
                  </div>
                  {imgError ? (
                    <div style={{
                      width: "100%", height: "100%",
                      display: "flex", flexDirection: "column",
                      alignItems: "center", justifyContent: "center",
                      background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.1), rgba(15,15,30,0.9))",
                      gap: "16px",
                    }}>
                      <div style={{
                        width: "96px", height: "96px", borderRadius: "50%",
                        background: "linear-gradient(135deg, rgba(139,92,246,0.4), rgba(99,102,241,0.3))",
                        border: "2px solid rgba(139,92,246,0.5)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "2.5rem", fontWeight: 800,
                        fontFamily: "'Syne', sans-serif",
                        color: "rgba(196,181,253,0.9)",
                      }}>
                        SJ
                      </div>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>
                        place photo in /public/profile.jpeg
                      </span>
                    </div>
                  ) : (
                    <img
                      src="/profile.jpeg"
                      alt="Satyam Jaiswal"
                      onError={() => setImgError(true)}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", transition: "transform 0.5s ease" }}
                      className="group-hover:scale-105"
                    />
                  )}
                </div>

                {/* Corner accent dots */}
                <span style={{ position: "absolute", top: "-6px", left: "-6px", width: "12px", height: "12px", borderRadius: "50%", background: "#a855f7", boxShadow: "0 0 12px rgba(168,85,247,0.9)" }} />
                <span style={{ position: "absolute", top: "-6px", right: "-6px", width: "12px", height: "12px", borderRadius: "50%", background: "#a855f7", boxShadow: "0 0 12px rgba(168,85,247,0.9)" }} />
                <span style={{ position: "absolute", bottom: "-6px", left: "-6px", width: "12px", height: "12px", borderRadius: "50%", background: "#38bdf8", boxShadow: "0 0 12px rgba(56,189,248,0.9)" }} />
                <span style={{ position: "absolute", bottom: "-6px", right: "-6px", width: "12px", height: "12px", borderRadius: "50%", background: "#38bdf8", boxShadow: "0 0 12px rgba(56,189,248,0.9)" }} />

                {/* Floating stat cards */}
                <div style={{
                  position: "absolute", top: "16px", right: "-80px",
                  background: "rgba(15,10,30,0.85)", backdropFilter: "blur(12px)",
                  border: "1px solid rgba(139,92,246,0.3)", borderRadius: "12px",
                  padding: "10px 14px", animation: "levitate 6s ease-in-out infinite 1s",
                }}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.3rem", fontWeight: 800, color: "#a855f7", lineHeight: 1 }}>3+</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", marginTop: "2px" }}>Projects</div>
                </div>

                <div style={{
                  position: "absolute", bottom: "32px", left: "-80px",
                  background: "rgba(15,10,30,0.85)", backdropFilter: "blur(12px)",
                  border: "1px solid rgba(56,189,248,0.3)", borderRadius: "12px",
                  padding: "10px 14px", animation: "levitate 7s ease-in-out infinite 0.5s",
                }}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.3rem", fontWeight: 800, color: "#38bdf8", lineHeight: 1 }}>ML</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", marginTop: "2px" }}>Enthusiast</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
          animation: "fadeSlideUp 1s ease 1.2s both",
        }}
          className="animate-bounce"
        >
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>SCROLL</span>
          <ArrowDown size={16} style={{ color: "rgba(168,85,247,0.7)" }} />
        </div>
      </section>
    </>
  );
};