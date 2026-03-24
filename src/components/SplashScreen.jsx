import { useEffect, useState } from "react";

const FULL_NAME = "Satyam Jaiswal";

export const SplashScreen = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [typingDone, setTypingDone] = useState(false);

  const dismiss = () => {
    setVisible(false);
    setTimeout(onComplete, 800);
  };

  // ✅ Typewriter effect
  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < FULL_NAME.length) {
        setDisplayedText(FULL_NAME.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
        setTypingDone(true);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  // ✅ Cursor blinking
  useEffect(() => {
    if (typingDone) {
      const t = setTimeout(() => setShowCursor(false), 1200);
      return () => clearTimeout(t);
    }

    const cursorInterval = setInterval(() => {
      setShowCursor((c) => !c);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [typingDone]);

  // ✅ Progress bar + dismiss logic
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Enter") dismiss();
    };
    window.addEventListener("keydown", handleKey);

    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + (100 / 35);
      });
    }, 100);

    const timer = setTimeout(dismiss, 3500);

    return () => {
      window.removeEventListener("keydown", handleKey);
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      onClick={dismiss}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#030014",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "opacity 0.8s ease",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        overflow: "hidden",
      }}
    >
      {/* Grid */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `linear-gradient(rgba(139,92,246,0.07) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(139,92,246,0.07) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      {/* Vignette */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, #030014 100%)",
      }} />

      {/* Orbs */}
      <div style={{
        position: "absolute",
        top: "-10%",
        left: "-5%",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)",
        animation: "pulse1 4s ease-in-out infinite",
      }} />

      <div style={{
        position: "absolute",
        bottom: "-15%",
        right: "-5%",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)",
        animation: "pulse2 5s ease-in-out infinite",
      }} />

      <div style={{
        position: "absolute",
        width: "700px",
        height: "300px",
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(139,92,246,0.12) 0%, transparent 70%)",
        animation: "pulse1 3s ease-in-out infinite",
      }} />

      {/* Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: `${(i % 3) + 1}px`,
            height: `${(i % 3) + 1}px`,
            borderRadius: "50%",
            backgroundColor:
              i % 3 === 0
                ? "rgba(168,85,247,0.7)"
                : i % 3 === 1
                ? "rgba(99,102,241,0.6)"
                : "rgba(56,189,248,0.5)",
            left: `${(i * 37 + 11) % 100}%`,
            top: `${(i * 53 + 7) % 100}%`,
            animation: `float${(i % 3) + 1} ${4 + (i % 6)}s ease-in-out infinite`,
            animationDelay: `${(i % 4) * 0.8}s`,
          }}
        />
      ))}

      {/* Main Content */}
      <div style={{
        position: "relative",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}>

        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.7rem",
          fontWeight: 600,
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          color: "rgba(168,85,247,0.8)",
          animation: "fadeInDown 1s ease 0.2s both",
        }}>
          {/* Portfolio */}
        </p>

        <h1 style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: "clamp(3.5rem, 11vw, 8rem)",
          fontWeight: 700,
          background: "linear-gradient(135deg, #c4b5fd, #ffffff, #a855f7, #818cf8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
        }}>
          {displayedText}
          <span style={{
            display: "inline-block",
            width: "3px",
            height: "0.8em",
            background: "#a855f7",
            marginLeft: "4px",
            opacity: showCursor ? 1 : 0,
          }} />
        </h1>

        <div style={{
          width: "120px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, #a855f7, transparent)",
        }} />

        <p style={{
          color: "rgba(255,255,255,0.35)",
          fontSize: "1.85rem",
        }}>
          Data Science · Machine Learning Engineer · Developer
        </p>

        <div style={{
          marginTop: "24px",
          width: "200px",
          height: "2px",
          backgroundColor: "rgba(255,255,255,0.08)",
        }}>
          <div style={{
            width: `${progress}%`,
            height: "100%",
            background: "linear-gradient(90deg, #6366f1, #a855f7)",
          }} />
        </div>

        <p style={{
          color: "rgba(255,255,255,0.25)",
          fontSize: "1.25rem",
        }}>
          Click anywhere or press <strong>Enter</strong> to skip
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Inter:wght@400;600&display=swap');

        @keyframes pulse1 {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes pulse2 {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes float1 {
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(-20px)}
        }
        @keyframes float2 {
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(-30px)}
        }
        @keyframes float3 {
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(-25px)}
        }
      `}</style>
    </div>
  );
};