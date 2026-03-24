import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const contactStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

  @keyframes contactOrb1 {
    0%,100% { transform: translate(0,0) scale(1); opacity:0.6; }
    50%      { transform: translate(30px,-20px) scale(1.1); opacity:0.9; }
  }
  @keyframes contactOrb2 {
    0%,100% { transform: translate(0,0) scale(1); opacity:0.5; }
    50%      { transform: translate(-25px,30px) scale(1.12); opacity:0.8; }
  }
  @keyframes floatP {
    0%,100% { transform:translateY(0); opacity:0.5; }
    50%      { transform:translateY(-18px); opacity:1; }
  }
  @keyframes fadeUp {
    from { opacity:0; transform:translateY(28px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes inputGlow {
    0%,100% { box-shadow: 0 0 0 0 rgba(139,92,246,0); }
    50%      { box-shadow: 0 0 16px 2px rgba(139,92,246,0.25); }
  }
  @keyframes shimmerBtn {
    0%   { left:-100%; }
    100% { left:100%; }
  }
  @keyframes badgePop {
    0%,100% { box-shadow: 0 0 0 0 rgba(139,92,246,0.4); }
    50%      { box-shadow: 0 0 0 6px rgba(139,92,246,0); }
  }

  .contact-input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 12px;
    border: 1.5px solid rgba(139,92,246,0.2);
    background: rgba(139,92,246,0.04);
    color: var(--foreground);
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    outline: none;
    transition: border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
    box-sizing: border-box;
  }
  .contact-input::placeholder { color: rgba(255,255,255,0.25); }
  .contact-input:focus {
    border-color: rgba(168,85,247,0.7);
    background: rgba(139,92,246,0.08);
    box-shadow: 0 0 20px rgba(139,92,246,0.2);
  }

  .contact-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.78rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(196,181,253,0.7);
    display: block;
    margin-bottom: 8px;
  }

  .send-btn {
    width: 100%;
    display: flex; align-items: center; justify-content: center; gap: 10px;
    padding: 14px 24px;
    border-radius: 12px;
    border: none; cursor: pointer;
    font-family: 'Syne', sans-serif;
    font-size: 0.95rem; font-weight: 700;
    color: #fff; letter-spacing: 0.05em;
    background: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #6366f1 100%);
    background-size: 200% auto;
    position: relative; overflow: hidden;
    box-shadow: 0 0 24px rgba(139,92,246,0.45);
    transition: all 0.3s ease;
  }
  .send-btn::after {
    content:''; position:absolute; top:0; left:-100%;
    width:100%; height:100%;
    background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);
    transition: left 0.5s ease;
  }
  .send-btn:hover::after { left:100%; }
  .send-btn:hover {
    background-position: right center;
    box-shadow: 0 0 40px rgba(139,92,246,0.7), 0 8px 30px rgba(109,40,217,0.4);
    transform: translateY(-2px);
  }
  .send-btn:disabled { opacity:0.6; cursor:not-allowed; transform:none; }

  .social-link {
    width:44px; height:44px; border-radius:12px;
    display:flex; align-items:center; justify-content:center;
    border: 1.5px solid rgba(139,92,246,0.25);
    background: rgba(139,92,246,0.06);
    color: rgba(196,181,253,0.7);
    transition: all 0.3s ease; text-decoration:none;
  }
  .social-link:hover {
    border-color: rgba(168,85,247,0.8);
    background: rgba(139,92,246,0.18);
    color: rgba(220,210,255,1);
    transform: translateY(-3px);
    box-shadow: 0 0 20px rgba(139,92,246,0.4);
  }

  .info-card {
    display:flex; align-items:center; gap:16px;
    padding: 16px 20px;
    border-radius: 16px;
    border: 1.5px solid rgba(139,92,246,0.15);
    background: rgba(139,92,246,0.05);
    transition: all 0.3s ease;
    text-decoration: none;
  }
  .info-card:hover {
    border-color: rgba(168,85,247,0.5);
    background: rgba(139,92,246,0.1);
    transform: translateX(6px);
    box-shadow: 0 0 24px rgba(139,92,246,0.2);
  }
`;

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        toast({ title: "Message sent! 🚀", description: "I'll get back to you soon." });
        setIsSubmitting(false);
        formRef.current.reset();
      })
      .catch(() => {
        toast({ title: "Error ❌", description: "Something went wrong!" });
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <style>{contactStyles}</style>
      <section id="contact" className="py-24 px-4 relative overflow-hidden">

        {/* ── Background effects ── */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: `linear-gradient(rgba(139,92,246,0.05) 1px,transparent 1px),
                           linear-gradient(90deg,rgba(139,92,246,0.05) 1px,transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 0, background: "radial-gradient(ellipse 80% 60% at 50% 50%,transparent 30%,var(--background) 100%)" }} />
        <div style={{ position: "absolute", top: "-10%", left: "-5%", zIndex: 0, width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle,rgba(99,102,241,0.15) 0%,transparent 65%)", animation: "contactOrb1 9s ease-in-out infinite" }} />
        <div style={{ position: "absolute", bottom: "-15%", right: "-5%", zIndex: 0, width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle,rgba(168,85,247,0.12) 0%,transparent 65%)", animation: "contactOrb2 11s ease-in-out infinite" }} />
        {[...Array(12)].map((_, i) => (
          <div key={i} style={{
            position: "absolute", zIndex: 0,
            width: `${(i % 3) + 1}px`, height: `${(i % 3) + 1}px`, borderRadius: "50%",
            backgroundColor: i % 2 === 0 ? "rgba(168,85,247,0.5)" : "rgba(99,102,241,0.4)",
            left: `${(i * 43 + 9) % 95}%`, top: `${(i * 61 + 11) % 90}%`,
            animation: `floatP ${5 + (i % 4)}s ease-in-out infinite`,
            animationDelay: `${(i % 4) * 0.6}s`,
          }} />
        ))}

        <div className="container mx-auto max-w-5xl relative z-10">

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "56px", animation: "fadeUp 0.7s ease both" }}>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.95rem", fontWeight: 600, letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(168,85,247,0.8)", marginBottom: "12px" }}>
              Let's Connect
            </p>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.5px", color: "var(--foreground)", margin: 0 }}>
              Get In{" "}
              <span style={{ background: "linear-gradient(135deg,#c4b5fd,#a855f7,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Touch
              </span>
            </h2>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.4)", marginTop: "16px", maxWidth: "480px", marginInline: "auto", lineHeight: 1.7 }}>
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }} className="grid grid-cols-1 md:grid-cols-2">

            {/* ── LEFT: Info ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", animation: "fadeUp 0.7s ease 0.15s both" }}>

              {/* Section label */}
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--foreground)", margin: 0 }}>
                Contact Information
              </h3>

              {/* Info cards */}
              <a href="mailto:satyamjai19@gmail.com" className="info-card">
                <div style={{ width: "44px", height: "44px", borderRadius: "12px", flexShrink: 0, background: "linear-gradient(135deg,rgba(99,102,241,0.8),rgba(139,92,246,0.9))", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 16px rgba(99,102,241,0.4)" }}>
                  <Mail size={18} color="#fff" />
                </div>
                <div>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(196,181,253,0.6)", margin: "0 0 3px" }}>Email</p>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.92rem", color: "rgba(255,255,255,0.8)", margin: 0 }}>satyamjai19@gmail.com</p>
                </div>
              </a>

              <a href="tel:+917355450342" className="info-card">
                <div style={{ width: "44px", height: "44px", borderRadius: "12px", flexShrink: 0, background: "linear-gradient(135deg,rgba(6,182,212,0.8),rgba(59,130,246,0.9))", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 16px rgba(6,182,212,0.4)" }}>
                  <Phone size={18} color="#fff" />
                </div>
                <div>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(196,181,253,0.6)", margin: "0 0 3px" }}>Phone</p>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.92rem", color: "rgba(255,255,255,0.8)", margin: 0 }}>+91-  7355450342</p>
                </div>
              </a>

              <div className="info-card" style={{ cursor: "default" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "12px", flexShrink: 0, background: "linear-gradient(135deg,rgba(16,185,129,0.8),rgba(5,150,105,0.9))", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 16px rgba(16,185,129,0.4)" }}>
                  <MapPin size={18} color="#fff" />
                </div>
                <div>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(196,181,253,0.6)", margin: "0 0 3px" }}>Location</p>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.92rem", color: "rgba(255,255,255,0.8)", margin: 0 }}>Varanasi, Uttar Pradesh, India</p>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: "1px", background: "linear-gradient(90deg,transparent,rgba(139,92,246,0.4),transparent)" }} />

              {/* Socials */}
              <div>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(196,181,253,0.5)", marginBottom: "14px" }}>
                  Find Me On
                </p>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                  <a href="https://www.linkedin.com/in/satyamjaiswal02" target="_blank" rel="noreferrer" className="social-link" title="LinkedIn"><Linkedin size={18} /></a>
                  <a href="https://github.com/Satyamjai1003" target="_blank" rel="noreferrer" className="social-link" title="GitHub"><Github size={18} /></a>
                  <a href="https://www.instagram.com/satyamjaiswal0342/" target="_blank" rel="noreferrer" className="social-link" title="Instagram"><Instagram size={18} /></a>
                  <a href="https://x.com/SatyamJais4098" className="social-link" title="Twitter"><Twitter size={18} /></a>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Form ── */}
            <div style={{
              padding: "32px",
              borderRadius: "24px",
              border: "1.5px solid rgba(139,92,246,0.2)",
              background: "rgba(139,92,246,0.04)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 0 40px rgba(139,92,246,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
              animation: "fadeUp 0.7s ease 0.3s both",
            }}>
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--foreground)", margin: "0 0 28px" }}>
                Send a Message
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                <div>
                  <label className="contact-label">Your Name</label>
                  <input type="text" name="name" required className="contact-input" placeholder="Satyam Jaiswal" />
                </div>

                <div>
                  <label className="contact-label">Email Address</label>
                  <input type="email" name="email" required className="contact-input" placeholder="your@email.com" />
                </div>

                <div>
                  <label className="contact-label">Message</label>
                  <textarea
                    name="message" required rows={5}
                    className="contact-input"
                    style={{ resize: "none", lineHeight: 1.6 }}
                    placeholder="Tell me about your project or just say hi..."
                  />
                </div>

                <button type="submit" disabled={isSubmitting} className="send-btn">
                  {isSubmitting ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: "spin 1s linear infinite" }}>
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>
        </div>

        <style>{`@keyframes spin { to { transform:rotate(360deg); } }`}</style>
      </section>
    </>
  );
};