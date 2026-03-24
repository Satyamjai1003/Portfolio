import { useState } from "react";

const skillGroups = [
  {
    title: "Languages",
    category: "frontend",
    emoji: "⌨️",
    color: "#f7df1e",
    glow: "rgba(247,223,30,0.3)",
    skills: [
      { name: "JavaScript", logo: "javascript", color: "f7df1e" },
      { name: "Python", logo: "python", color: "3776ab" },
      { name: "C", logo: "c", color: "a8b9cc" },
      { name: "C++", logo: "cplusplus", color: "00599c" },
      { name: "Java", logo: "java", color: "f89820" },
    ],
  },
  {
    title: "Frontend",
    category: "frontend",
    emoji: "🎨",
    color: "#e34f26",
    glow: "rgba(227,79,38,0.3)",
    skills: [
      { name: "HTML", logo: "html5", color: "e34f26" },
      { name: "CSS", logo: "css", color: "2965f1" },
      { name: "React", logo: "react", color: "61dafb" },
    ],
  },
  {
    title: "Backend",
    category: "backend",
    emoji: "⚙️",
    color: "#092e20",
    glow: "rgba(9,46,32,0.5)",
    skills: [
      { name: "Django", logo: "django", color: "092e20" },
      { name: "Flask", logo: "flask", color: "ffffff" },
    ],
  },
  {
    title: "Databases",
    category: "backend",
    emoji: "🗄️",
    color: "#00758f",
    glow: "rgba(0,117,143,0.35)",
    skills: [
      { name: "MySQL", logo: "mysql", color: "00758f" },
      { name: "SQL", logo: "sqlite", color: "003b57" },
    ],
  },
  {
    title: "Tools & Platforms",
    category: "tools",
    emoji: "🛠️",
    color: "#181717",
    glow: "rgba(100,100,100,0.3)",
    skills: [
      { name: "Git & GitHub", logo: "github", color: "ffffff" },
      { name: "Vercel", logo: "vercel", color: "ffffff" },
      { name: "Streamlit", logo: "streamlit", color: "ff4b4b" },
    ],
  },
  {
    title: "ML Libraries",
    category: "tools",
    emoji: "🤖",
    color: "#f7931e",
    glow: "rgba(247,147,30,0.3)",
    skills: [
      { name: "Pandas", logo: "pandas", color: "150458" },
      { name: "NumPy", logo: "numpy", color: "013243" },
      { name: "Matplotlib", logo: "plotly", color: "3f4f75" },
      { name: "Scikit-learn", logo: "scikitlearn", color: "f7931e" },
      { name: "TensorFlow", logo: "tensorflow", color: "ff6f00" },
      { name: "PyTorch", logo: "pytorch", color: "ee4c2c" },
      { name: "Seaborn", logo: "python", color: "4c72b0" },
    ],
  },
];

const categories = [
  { id: "all", label: "All", emoji: "✦" },
  { id: "frontend", label: "Frontend", emoji: "🎨" },
  { id: "backend", label: "Backend", emoji: "⚙️" },
  { id: "tools", label: "Tools", emoji: "🛠️" },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

  @keyframes skOrb1 {
    0%,100%{transform:translate(0,0) scale(1);opacity:.5}
    50%{transform:translate(35px,-25px) scale(1.1);opacity:.8}
  }
  @keyframes skOrb2 {
    0%,100%{transform:translate(0,0) scale(1);opacity:.4}
    50%{transform:translate(-30px,35px) scale(1.12);opacity:.7}
  }
  @keyframes skFloat {
    0%,100%{transform:translateY(0);opacity:.5}
    50%{transform:translateY(-18px);opacity:1}
  }
  @keyframes skFadeUp {
    from{opacity:0;transform:translateY(24px)}
    to{opacity:1;transform:translateY(0)}
  }
  @keyframes skCardIn {
    from{opacity:0;transform:translateY(20px) scale(.97)}
    to{opacity:1;transform:translateY(0) scale(1)}
  }
  @keyframes skShimmer {
    0%{left:-100%}100%{left:100%}
  }
  @keyframes skPulse {
    0%,100%{opacity:.6}50%{opacity:1}
  }
  @keyframes skTagHover {
    from{transform:scale(1)}
    to{transform:scale(1.08) translateY(-2px)}
  }

  .sk-tab {
    display:inline-flex;align-items:center;gap:6px;
    padding:9px 22px;border-radius:9999px;
    font-family:'Syne',sans-serif;font-size:.83rem;font-weight:700;
    letter-spacing:.04em;cursor:pointer;
    border:1.5px solid transparent;
    transition:all .3s ease;
  }
  .sk-tab-active {
    background:linear-gradient(135deg,#6366f1,#a855f7);
    color:#fff;border-color:rgba(168,85,247,.5);
    box-shadow:0 0 24px rgba(139,92,246,.5);
  }
  .sk-tab-inactive {
    background:rgba(139,92,246,.05);
    color:rgba(196,181,253,.65);
    border-color:rgba(139,92,246,.18);
  }
  .sk-tab-inactive:hover {
    background:rgba(139,92,246,.12);
    border-color:rgba(168,85,247,.45);
    color:rgba(220,210,255,.9);
    box-shadow:0 0 14px rgba(139,92,246,.25);
  }

  .sk-card {
    position:relative;overflow:hidden;
    background:rgba(139,92,246,.04);
    border:1.5px solid rgba(139,92,246,.14);
    border-radius:20px;padding:24px;
    backdrop-filter:blur(8px);
    transition:all .35s ease;
    animation:skCardIn .6s ease both;
  }
  .sk-card::before {
    content:'';position:absolute;top:0;left:0;right:0;height:1px;
    background:linear-gradient(90deg,transparent,rgba(139,92,246,.4),transparent);
  }
  .sk-card:hover {
    border-color:rgba(168,85,247,.4);
    background:rgba(139,92,246,.08);
    transform:translateY(-4px);
    box-shadow:0 0 36px rgba(139,92,246,.18);
  }
  .sk-card:hover .sk-card-shimmer {
    animation:skShimmer .7s ease forwards;
  }
  .sk-card-shimmer {
    position:absolute;top:0;bottom:0;width:60%;
    background:linear-gradient(90deg,transparent,rgba(255,255,255,.04),transparent);
    pointer-events:none;
  }

  .sk-tag {
    display:inline-flex;align-items:center;gap:7px;
    padding:7px 12px;border-radius:10px;
    font-family:'DM Sans',sans-serif;font-size:.82rem;font-weight:400;
    background:rgba(255,255,255,.04);
    border:1px solid rgba(139,92,246,.18);
    color:rgba(255,255,255,.65);
    transition:all .25s ease;cursor:default;
  }
  .sk-tag:hover {
    background:rgba(139,92,246,.18);
    border-color:rgba(168,85,247,.6);
    color:rgba(220,210,255,1);
    transform:translateY(-2px) scale(1.05);
    box-shadow:0 4px 16px rgba(139,92,246,.25);
  }

  .sk-icon {
    width:18px;height:18px;border-radius:4px;
    object-fit:contain;transition:transform .25s ease;
  }
  .sk-tag:hover .sk-icon { transform:rotate(-5deg) scale(1.15); }
`;

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredGroup, setHoveredGroup] = useState(null);

  const visible = activeCategory === "all"
    ? skillGroups
    : skillGroups.filter(g => g.category === activeCategory);

  return (
    <>
      <style>{styles}</style>
      <section id="skills" className="py-24 px-4 relative overflow-hidden">

        {/* ── Background ── */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: `linear-gradient(rgba(139,92,246,.05) 1px,transparent 1px),
                           linear-gradient(90deg,rgba(139,92,246,.05) 1px,transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 0, background: "radial-gradient(ellipse 80% 60% at 50% 50%,transparent 30%,var(--background) 100%)" }} />
        <div style={{ position: "absolute", top: "-10%", left: "-5%", zIndex: 0, width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle,rgba(99,102,241,.14) 0%,transparent 65%)", animation: "skOrb1 9s ease-in-out infinite" }} />
        <div style={{ position: "absolute", bottom: "-15%", right: "-5%", zIndex: 0, width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle,rgba(168,85,247,.11) 0%,transparent 65%)", animation: "skOrb2 11s ease-in-out infinite" }} />
        {[...Array(12)].map((_, i) => (
          <div key={i} style={{
            position: "absolute", zIndex: 0,
            width: `${(i % 3) + 1}px`, height: `${(i % 3) + 1}px`, borderRadius: "50%",
            backgroundColor: i % 2 === 0 ? "rgba(168,85,247,.5)" : "rgba(99,102,241,.4)",
            left: `${(i * 43 + 9) % 95}%`, top: `${(i * 61 + 11) % 90}%`,
            animation: `skFloat ${5 + (i % 4)}s ease-in-out infinite`,
            animationDelay: `${(i % 4) * .7}s`,
          }} />
        ))}

        <div className="mx-auto max-w-6xl relative z-10">

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "48px", animation: "skFadeUp .7s ease both" }}>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: ".92rem", fontWeight: 600, letterSpacing: ".35em", textTransform: "uppercase", color: "rgba(168,85,247,.8)", marginBottom: "12px" }}>
              What I Work With
            </p>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-.5px", color: "var(--foreground)", margin: 0 }}>
              My{" "}
              <span style={{ background: "linear-gradient(135deg,#c4b5fd,#a855f7,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Skills
              </span>
            </h2>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1.10rem", color: "rgba(255,255,255,.35)", marginTop: "14px", maxWidth: "400px", marginInline: "auto" }}>
              Technologies and tools I use to build intelligent and scalable solutions.
            </p>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px", marginBottom: "44px", animation: "skFadeUp .7s ease .15s both" }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`sk-tab ${activeCategory === cat.id ? "sk-tab-active" : "sk-tab-inactive"}`}
              >
                <span>{cat.emoji}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
            gap: "20px",
            animation: "skFadeUp .7s ease .3s both",
          }}>
            {visible.map((group, gi) => (
              <div
                key={group.title}
                className="sk-card"
                style={{ animationDelay: `${gi * .08}s` }}
                onMouseEnter={() => setHoveredGroup(group.title)}
                onMouseLeave={() => setHoveredGroup(null)}
              >
                <div className="sk-card-shimmer" />

                {/* Card header */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
                  {/* Colored icon box */}
                  <div style={{
                    width: "40px", height: "40px", borderRadius: "11px", flexShrink: 0,
                    background: `linear-gradient(135deg,rgba(139,92,246,.25),rgba(168,85,247,.35))`,
                    border: "1.5px solid rgba(139,92,246,.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.15rem",
                    boxShadow: `0 0 14px rgba(139,92,246,.25)`,
                  }}>
                    {group.emoji}
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: "'Syne',sans-serif", fontSize: ".95rem", fontWeight: 700,
                      color: "var(--foreground)", margin: 0, lineHeight: 1.2,
                    }}>
                      {group.title}
                    </h3>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: ".92rem", color: "rgba(168,85,247,.7)", margin: 0, marginTop: "2px" }}>
                      {group.skills.length} {group.skills.length === 1 ? "skill" : "skills"}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: "1px", background: "linear-gradient(90deg,rgba(139,92,246,.3),transparent)", marginBottom: "16px" }} />

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {group.skills.map(skill => (
                    <span key={skill.name} className="sk-tag">
                      <img
                        src={`https://cdn.simpleicons.org/${skill.logo}/${skill.color || "FFFFFF"}`}
                        alt={skill.name}
                        className="sk-icon"
                        onError={e => { e.currentTarget.style.display = "none" }}
                      />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <p style={{
            fontFamily: "'DM Sans',sans-serif",
            textAlign: "center", marginTop: "40px",
            fontSize: ".92rem", fontStyle: "italic",
            color: "rgba(255, 255, 255, 0.7)",
            animation: "skFadeUp .7s ease .5s both",
          }}>
            ✦ Constantly expanding my skillset through new projects and learning.
          </p>
        </div>
      </section>
    </>
  );
};