import { useState } from "react";
import { Briefcase, BookOpen, Calendar, GraduationCap, School } from "lucide-react";

const educationItems = [
  {
    id: 1,
    title: "Bachelor of Technology in Computer Science & Engineering",
    subtitle: "Lovely Professional University",
    period: "2023 - Present",
    description: "Studying Data Science, Machine Learning and Web architecture solutions with high honors.",
    icon: GraduationCap,
    badge: "B.Tech",
    color: "#a855f7",
    glow: "rgba(168,85,247,0.4)",
  },
  {
    id: 2,
    title: "Higher Secondary Education (12th)",
    subtitle: "D. C. Lewis Memorial School",
    period: "2022 - 2023",
    description: "Completed 12th grade with PCM stream.",
    icon: BookOpen,
    badge: "12th",
    color: "#6366f1",
    glow: "rgba(99,102,241,0.4)",
  },
  {
    id: 3,
    title: "Secondary Education (10th)",
    subtitle: "D. C. Lewis Memorial School",
    period: "2020 - 2021",
    description: "Completed matriculation with strong academic performance.",
    icon: School,
    badge: "10th",
    color: "#38bdf8",
    glow: "rgba(56,189,248,0.4)",
  },
];

const experienceItems = [
  {
    id: 1,
    title: "Trainee / Learner",
    subtitle: "Infosys Springboard",
    period: "2025",
    description: "Completed self-paced learning modules on Infosys Springboard, a digital education initiative by Infosys. Gained knowledge in areas like programming, data science, and professional skills through curated courses, hands-on exercises, and assessments. Enhanced problem-solving abilities and built a strong foundation in industry-relevant technologies.",
    icon: Briefcase,
    badge: "Training",
    color: "#a855f7",
    glow: "rgba(168,85,247,0.4)",
  },
  {
    id: 2,
    title: "Industrial Exposure",
    subtitle: "Hindalco Industries Limited",
    period: "2025",
    description: "Gained exposure to industrial processes, real-world operations and learned about large-scale production and management systems.",
    icon: Calendar,
    badge: "Industrial",
    color: "#6366f1",
    glow: "rgba(99,102,241,0.4)",
  },
  {
    id: 3,
    title: "Trainee / Learner",
    subtitle: "Lovely Professional University",
    period: "2025",
    description: "Completed training in Machine Learning with Python at Lovely Professional University, where I learned the complete ML workflow. Gained hands-on experience in data preprocessing, feature engineering, and building pipelines for efficient model development. Worked on training and evaluating multiple machine learning models, understanding their performance and use-cases. Strengthened practical skills in Python, along with concepts like data cleaning, model selection, and end-to-end project implementation.",
    icon: GraduationCap,
    badge: "Education",
    color: "#38bdf8",
    glow: "rgba(56,189,248,0.4)",
  },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

  @keyframes tlOrb1 {
    0%,100% { transform:translate(0,0) scale(1); opacity:0.5; }
    50%      { transform:translate(30px,-20px) scale(1.1); opacity:0.8; }
  }
  @keyframes tlOrb2 {
    0%,100% { transform:translate(0,0) scale(1); opacity:0.4; }
    50%      { transform:translate(-25px,30px) scale(1.12); opacity:0.7; }
  }
  @keyframes tlFloat {
    0%,100% { transform:translateY(0); opacity:0.5; }
    50%      { transform:translateY(-18px); opacity:1; }
  }
  @keyframes tlFadeUp {
    from { opacity:0; transform:translateY(24px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes tlPulse {
    0%,100% { box-shadow: 0 0 0 0 rgba(139,92,246,0.5); }
    50%      { box-shadow: 0 0 0 8px rgba(139,92,246,0); }
  }
  @keyframes tlLineDraw {
    from { height:0; }
    to   { height:100%; }
  }
  @keyframes tlCardIn {
    from { opacity:0; transform:translateX(-20px); }
    to   { opacity:1; transform:translateX(0); }
  }
  @keyframes tlCardInRight {
    from { opacity:0; transform:translateX(20px); }
    to   { opacity:1; transform:translateX(0); }
  }
  @keyframes dotGlow {
    0%,100% { box-shadow: 0 0 6px 2px var(--dot-color,rgba(168,85,247,0.6)); }
    50%      { box-shadow: 0 0 16px 4px var(--dot-color,rgba(168,85,247,0.9)); }
  }

  .tl-tab {
    padding: 10px 28px;
    border-radius: 9999px;
    font-family: 'Syne', sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    border: 1.5px solid transparent;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .tl-tab-active {
    background: linear-gradient(135deg, #6366f1, #a855f7);
    color: #fff;
    border-color: rgba(168,85,247,0.5);
    box-shadow: 0 0 24px rgba(139,92,246,0.5);
  }
  .tl-tab-inactive {
    background: rgba(139,92,246,0.06);
    color: rgba(196,181,253,0.7);
    border-color: rgba(139,92,246,0.2);
  }
  .tl-tab-inactive:hover {
    background: rgba(139,92,246,0.12);
    border-color: rgba(168,85,247,0.5);
    color: rgba(220,210,255,0.9);
  }

  .tl-card {
    background: rgba(139,92,246,0.04);
    border: 1.5px solid rgba(139,92,246,0.15);
    border-radius: 20px;
    padding: 24px;
    backdrop-filter: blur(8px);
    transition: all 0.35s ease;
    position: relative;
    overflow: hidden;
  }
  .tl-card::before {
    content: '';
    position: absolute; top:0; left:0; right:0; height:1px;
    background: linear-gradient(90deg, transparent, rgba(139,92,246,0.4), transparent);
  }
  .tl-card:hover {
    border-color: rgba(168,85,247,0.45);
    background: rgba(139,92,246,0.09);
    box-shadow: 0 0 32px rgba(139,92,246,0.15);
    transform: translateY(-3px);
  }
`;

const Timeline = ({ items }) => (
  <div style={{ position: "relative", padding: "8px 0" }}>
    {/* Center vertical line */}
    <div style={{
      position: "absolute",
      left: "50%",
      top: 0, bottom: 0,
      width: "1px",
      transform: "translateX(-50%)",
      background: "linear-gradient(to bottom, transparent, rgba(139,92,246,0.5) 10%, rgba(139,92,246,0.3) 90%, transparent)",
      zIndex: 0,
    }} className="hidden md:block" />

    {/* Mobile line */}
    <div style={{
      position: "absolute", left: "20px", top: 0, bottom: 0, width: "1px",
      background: "linear-gradient(to bottom, transparent, rgba(139,92,246,0.5) 10%, rgba(139,92,246,0.3) 90%, transparent)",
      zIndex: 0,
    }} className="block md:hidden" />

    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      {items.map((item, index) => {
        const ItemIcon = item.icon;
        const isLeft = index % 2 === 0;

        return (
          <div key={item.id} style={{ position: "relative", display: "grid", zIndex: 1 }}
            className="grid-cols-1 md:grid-cols-[1fr_auto_1fr] grid gap-0 md:gap-6 pl-12 md:pl-0"
          >
            {/* LEFT card (even) or empty */}
            <div className="hidden md:flex items-center justify-end">
              {isLeft && (
                <div className="tl-card w-full max-w-sm" style={{ animation: `tlCardIn 0.6s ease ${index * 0.15}s both` }}>
                  <CardContent item={item} ItemIcon={ItemIcon} />
                </div>
              )}
            </div>

            {/* Center dot */}
            <div className="hidden md:flex items-center justify-center flex-col" style={{ width: "0px" }}>
              <div style={{
                width: "14px", height: "14px", borderRadius: "50%",
                background: item.color,
                boxShadow: `0 0 12px ${item.glow}`,
                border: "2px solid var(--background)",
                animation: "dotGlow 2.5s ease-in-out infinite",
                "--dot-color": item.glow,
                flexShrink: 0,
                zIndex: 2,
              }} />
            </div>

            {/* RIGHT card (odd) or empty */}
            <div className="hidden md:flex items-center justify-start">
              {!isLeft && (
                <div className="tl-card w-full max-w-sm" style={{ animation: `tlCardInRight 0.6s ease ${index * 0.15}s both` }}>
                  <CardContent item={item} ItemIcon={ItemIcon} />
                </div>
              )}
            </div>

            {/* Mobile: always show card */}
            <div className="block md:hidden relative">
              {/* Mobile dot */}
              <div style={{
                position: "absolute", left: "-32px", top: "20px",
                width: "12px", height: "12px", borderRadius: "50%",
                background: item.color,
                boxShadow: `0 0 10px ${item.glow}`,
                border: "2px solid var(--background)",
                zIndex: 2,
              }} />
              <div className="tl-card" style={{ animation: `tlCardIn 0.6s ease ${index * 0.15}s both` }}>
                <CardContent item={item} ItemIcon={ItemIcon} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const CardContent = ({ item, ItemIcon }) => (
  <>
    {/* Top row: icon + badge + period */}
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{
          width: "38px", height: "38px", borderRadius: "10px", flexShrink: 0,
          background: `linear-gradient(135deg, ${item.color}33, ${item.color}66)`,
          border: `1.5px solid ${item.color}55`,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: `0 0 12px ${item.glow}`,
        }}>
          <ItemIcon size={16} color={item.color} />
        </div>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.82rem", fontWeight: 600,
          letterSpacing: "0.08em", textTransform: "uppercase",
          padding: "3px 10px", borderRadius: "9999px",
          background: `${item.color}22`,
          border: `1px solid ${item.color}44`,
          color: item.color,
        }}>
          {item.badge}
        </span>
      </div>
      <span style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.89rem", fontWeight: 500,
        color: "rgba(255,255,255,0.35)",
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.08)",
        padding: "3px 10px", borderRadius: "9999px",
        whiteSpace: "nowrap",
      }}>
        {item.period}
      </span>
    </div>

    {/* Title */}
    <h3 style={{
      fontFamily: "'Syne', sans-serif",
      fontSize: "0.95rem", fontWeight: 700,
      color: "var(--foreground)",
      margin: "0 0 6px", lineHeight: 1.3,
    }}>
      {item.title}
    </h3>

    {/* Subtitle */}
    <p style={{
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "0.89rem", fontWeight: 500,
      color: item.color,
      margin: "0 0 10px",
      opacity: 0.9,
    }}>
      {item.subtitle}
    </p>

    {/* Divider */}
    <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", margin: "10px 0" }} />

    {/* Description */}
    <p style={{
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "1.1rem", fontWeight: 300,
      color: "rgba(255,255,255,0.45)",
      lineHeight: 1.7, margin: 0,
    }}>
      {item.description}
    </p>
  </>
);

export const EducationExperienceSection = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <>
      <style>{styles}</style>
      <section id="experience" className="py-24 px-4 relative overflow-hidden">

        {/* ── Background ── */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: `linear-gradient(rgba(139,92,246,0.05) 1px,transparent 1px),
                            linear-gradient(90deg,rgba(139,92,246,0.05) 1px,transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 0, background: "radial-gradient(ellipse 80% 60% at 50% 50%,transparent 30%,var(--background) 100%)" }} />
        <div style={{ position: "absolute", top: "-10%", left: "-5%", zIndex: 0, width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle,rgba(99,102,241,0.12) 0%,transparent 65%)", animation: "tlOrb1 9s ease-in-out infinite" }} />
        <div style={{ position: "absolute", bottom: "-15%", right: "-5%", zIndex: 0, width: "550px", height: "550px", borderRadius: "50%", background: "radial-gradient(circle,rgba(168,85,247,0.1) 0%,transparent 65%)", animation: "tlOrb2 11s ease-in-out infinite" }} />
        {[...Array(10)].map((_, i) => (
          <div key={i} style={{
            position: "absolute", zIndex: 0,
            width: `${(i % 2) + 1}px`, height: `${(i % 2) + 1}px`, borderRadius: "50%",
            backgroundColor: i % 2 === 0 ? "rgba(168,85,247,0.5)" : "rgba(99,102,241,0.4)",
            left: `${(i * 43 + 9) % 95}%`, top: `${(i * 61 + 11) % 90}%`,
            animation: `tlFloat ${5 + (i % 4)}s ease-in-out infinite`,
            animationDelay: `${(i % 4) * 0.7}s`,
          }} />
        ))}

        <div className="max-w-5xl mx-auto relative z-10">

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "48px", animation: "tlFadeUp 0.7s ease both" }}>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1.2rem", fontWeight: 600, letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(168,85,247,0.8)", marginBottom: "12px" }}>
              My Journey
            </p>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-0.5px", color: "var(--foreground)", margin: 0 }}>
              Education &{" "}
              <span style={{ background: "linear-gradient(135deg,#c4b5fd,#a855f7,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Experience
              </span>
            </h2>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1.1rem", color: "rgba(255, 255, 255, 0.74)", marginTop: "14px", maxWidth: "400px", marginInline: "auto" }}>
              My academic background and professional exposure so far.
            </p>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "52px", animation: "tlFadeUp 0.7s ease 0.15s both" }}>
            <button
              onClick={() => setActiveTab("education")}
              className={`tl-tab ${activeTab === "education" ? "tl-tab-active" : "tl-tab-inactive"}`}
            >
              🎓 Education
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={`tl-tab ${activeTab === "experience" ? "tl-tab-active" : "tl-tab-inactive"}`}
            >
              💼 Experience
            </button>
          </div>

          {/* Timeline */}
          <div style={{ animation: "tlFadeUp 0.7s ease 0.3s both" }}>
            <Timeline items={activeTab === "education" ? educationItems : experienceItems} />
          </div>
        </div>
      </section>
    </>
  );
};