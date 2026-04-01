import { useState, useEffect, useRef } from "react";

const GREEN = {
  50: "#E1F5EE",
  100: "#9FE1CB",
  400: "#1D9E75",
  600: "#0F6E56",
  800: "#085041",
};

const styles = {
  "@import":
    "url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,400&family=Playfair+Display:wght@500;600&display=swap')",
};

const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500&family=Playfair+Display:wght@500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --green-50: #E1F5EE;
    --green-100: #9FE1CB;
    --green-400: #1D9E75;
    --green-600: #0F6E56;
    --green-800: #085041;
    --gray-50: #F7F6F3;
    --gray-100: #EEEDE8;
    --gray-200: #D3D1C7;
    --gray-400: #888780;
    --gray-700: #444441;
    --gray-900: #1A1A18;
    --font-display: 'Playfair Display', Georgia, serif;
    --font-body: 'DM Sans', system-ui, sans-serif;
    --radius-md: 8px;
    --radius-lg: 14px;
    --radius-xl: 20px;
    --border: 0.5px solid rgba(0,0,0,0.1);
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: var(--font-body);
    background: #FAFAF8;
    color: var(--gray-900);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  a { text-decoration: none; color: inherit; }

  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

/* ─── ICONS ─── */
const Icon = ({ name, size = 18, stroke = "currentColor" }) => {
  const icons = {
    server: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
    layers: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    zap: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    cpu: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
    box: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    file: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    check: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    arrow: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
      </svg>
    ),
    menu: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round">
        <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    ),
    close: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round">
        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    ),
  };
  return icons[name] || null;
};

/* ─── FADE IN HOOK ─── */
const useFadeIn = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
};

/* ─── COMPONENTS ─── */

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    background: scrolled ? "rgba(250,250,248,0.92)" : "transparent",
    backdropFilter: scrolled ? "blur(12px)" : "none",
    borderBottom: scrolled ? "0.5px solid rgba(0,0,0,0.08)" : "none",
    transition: "all 0.3s ease",
    padding: "0 1.5rem",
  };

  const inner = {
    maxWidth: 1000, margin: "0 auto",
    display: "flex", alignItems: "center", justifyContent: "space-between",
    height: 64,
  };

  const logo = {
    fontFamily: "var(--font-display)",
    fontSize: 20, fontWeight: 600, letterSpacing: "-0.3px",
    cursor: "pointer",
  };

  const links = ["Services", "Industries", "Team", "Process", "Contact"];

  return (
    <nav style={navStyle}>
      <div style={inner}>
        <div style={logo}>
          Cqube <span style={{ color: GREEN[400] }}>Technologies</span>
        </div>
        <ul style={{ display: "flex", gap: "2rem", listStyle: "none", alignItems: "center" }}
          className="nav-links">
          {links.map((l) => (
            <li key={l} style={{ display: window.innerWidth < 768 ? "none" : "block" }}>
              <a href={`#${l.toLowerCase()}`}
                style={{ fontSize: 13, color: "var(--gray-400)", letterSpacing: "0.3px", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "var(--gray-900)"}
                onMouseLeave={e => e.target.style.color = "var(--gray-400)"}
              >{l}</a>
            </li>
          ))}
          <li>
            <a href="#contact"
              style={{
                background: GREEN[600], color: GREEN[50],
                padding: "8px 18px", borderRadius: "var(--radius-md)",
                fontSize: 13, fontWeight: 500,
              }}>
              Get in touch
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Hero = () => {
  const ref = useFadeIn();
  return (
    <section style={{ paddingTop: 120, paddingBottom: 80, padding: "120px 1.5rem 80px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}
        className="hero-grid">
        <div ref={ref} className="fade-in">
          <div style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: GREEN[400], marginBottom: "1.2rem", fontWeight: 500 }}>
            Engineering studio · Nigeria
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(34px, 5vw, 48px)", fontWeight: 500, lineHeight: 1.15, marginBottom: "1.5rem", letterSpacing: "-0.5px" }}>
            We build software that <em style={{ fontStyle: "italic", color: GREEN[400] }}>scales</em> with your business
          </h1>
          <p style={{ fontSize: 15, color: "var(--gray-400)", lineHeight: 1.85, marginBottom: "2rem", maxWidth: 440 }}>
            Cqube Technologies is a boutique engineering studio specialising in backend systems, full-stack web applications, and digital products for startups and growing businesses.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#contact" style={{ background: GREEN[600], color: GREEN[50], padding: "11px 24px", borderRadius: "var(--radius-md)", fontSize: 14, fontWeight: 500, display: "flex", alignItems: "center", gap: 8 }}>
              Start a project <Icon name="arrow" size={16} stroke={GREEN[50]} />
            </a>
            <a href="#services" style={{ border: "0.5px solid rgba(0,0,0,0.15)", color: "var(--gray-700)", padding: "11px 24px", borderRadius: "var(--radius-md)", fontSize: 14 }}>
              Our services
            </a>
          </div>
        </div>

        <div style={{ background: "var(--gray-50)", borderRadius: "var(--radius-xl)", border: "0.5px solid rgba(0,0,0,0.07)", padding: "1.8rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
            {[
              { num: "5+", label: "Engineers on call" },
              { num: "3", label: "Core disciplines" },
              { num: "MVP", label: "to production ready" },
              { num: "Fast", label: "turnaround delivery" },
            ].map((s) => (
              <div key={s.label} style={{ background: "#fff", border: "0.5px solid rgba(0,0,0,0.07)", borderRadius: "var(--radius-md)", padding: "1rem" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 500 }}>{s.num}</div>
                <div style={{ fontSize: 12, color: "var(--gray-400)", marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {["Node.js", "Express", "React", "MongoDB", "TypeScript", "REST APIs"].map((t) => (
              <span key={t} style={{ background: GREEN[50], color: GREEN[600], fontSize: 11, fontWeight: 500, padding: "4px 12px", borderRadius: 20 }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const services = [
  { icon: "server", title: "Backend & API development", desc: "Scalable REST and GraphQL APIs built on Node.js and Express, with MongoDB for robust data modeling." },
  { icon: "layers", title: "Full-stack web applications", desc: "End-to-end product development from database schema to React frontend, shipped with clean, documented code." },
  { icon: "zap", title: "MVP builds", desc: "Launch your idea fast. We scope, architect, and ship production-ready MVPs tailored for early validation." },
  { icon: "cpu", title: "System architecture consulting", desc: "Technical guidance on system design, database optimisation, and infrastructure decisions before you build." },
  { icon: "box", title: "Third-party integrations", desc: "Payments (Paystack, Stripe), auth, notifications, and external APIs integrated cleanly into your product." },
  { icon: "file", title: "Technical project management", desc: "Clear timelines, milestone tracking, and consistent communication. We manage delivery so you stay focused." },
];

const Services = () => {
  const ref = useFadeIn();
  return (
    <section id="services" style={{ padding: "80px 1.5rem", background: "#fff" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div ref={ref} className="fade-in" style={{ marginBottom: "3rem" }}>
          <div style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: GREEN[400], marginBottom: "0.8rem", fontWeight: 500 }}>What we do</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 4vw, 34px)", fontWeight: 500, marginBottom: "1rem", letterSpacing: "-0.3px" }}>Our services</h2>
          <p style={{ fontSize: 15, color: "var(--gray-400)", lineHeight: 1.8, maxWidth: 520 }}>
            We cover the full engineering lifecycle — from architecture and APIs to frontend delivery and ongoing support.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, desc, delay }) => {
  const ref = useFadeIn();
  const [hovered, setHovered] = useState(false);
  return (
    <div ref={ref} className="fade-in"
      style={{ transitionDelay: `${delay}ms`, background: "#FAFAF8", border: hovered ? "0.5px solid rgba(0,0,0,0.18)" : "0.5px solid rgba(0,0,0,0.07)", borderRadius: "var(--radius-lg)", padding: "1.5rem", transition: "border-color 0.2s, transform 0.2s", transform: hovered ? "translateY(-2px)" : "none", cursor: "default" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <div style={{ width: 38, height: 38, borderRadius: "var(--radius-md)", background: GREEN[50], display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
        <Icon name={icon} size={18} stroke={GREEN[600]} />
      </div>
      <h3 style={{ fontSize: 14, fontWeight: 500, marginBottom: "0.5rem" }}>{title}</h3>
      <p style={{ fontSize: 13, color: "var(--gray-400)", lineHeight: 1.75 }}>{desc}</p>
    </div>
  );
};

const industries = ["Fintech & payments", "Healthcare & MedTech", "E-commerce & retail", "Startups & MVPs", "SaaS products", "Logistics & operations", "EdTech", "Enterprise tools"];

const Industries = () => {
  const ref = useFadeIn();
  return (
    <section id="industries" style={{ padding: "80px 1.5rem" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div ref={ref} className="fade-in">
          <div style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: GREEN[400], marginBottom: "0.8rem", fontWeight: 500 }}>Who we serve</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 4vw, 34px)", fontWeight: 500, marginBottom: "1rem", letterSpacing: "-0.3px" }}>Industries we work in</h2>
          <p style={{ fontSize: 15, color: "var(--gray-400)", lineHeight: 1.8, maxWidth: 520, marginBottom: "2rem" }}>
            We partner with founders and teams across sectors that need reliable, well-engineered software.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {industries.map((ind) => (
              <span key={ind} style={{ border: "0.5px solid rgba(0,0,0,0.12)", borderRadius: 24, padding: "7px 18px", fontSize: 13, color: "var(--gray-700)" }}>{ind}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const team = [
  { initials: "TL", name: "Technical Lead", role: "Backend & systems architecture" },
  { initials: "FE", name: "Frontend Engineer", role: "React & UI development" },
  { initials: "PM", name: "Project Manager", role: "Delivery & client coordination" },
];

const Team = () => {
  const ref = useFadeIn();
  return (
    <section id="team" style={{ padding: "80px 1.5rem", background: "#fff" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div ref={ref} className="fade-in" style={{ marginBottom: "2.5rem" }}>
          <div style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: GREEN[400], marginBottom: "0.8rem", fontWeight: 500 }}>Our team</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 4vw, 34px)", fontWeight: 500, marginBottom: "1rem", letterSpacing: "-0.3px" }}>Senior engineers, not generalists</h2>
          <p style={{ fontSize: 15, color: "var(--gray-400)", lineHeight: 1.8, maxWidth: 520 }}>
            We are a small, focused team of engineers with deep expertise in our respective disciplines. Every project is handled by someone who has done it before.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {team.map((t, i) => (
            <div key={i} style={{ background: "var(--gray-50)", borderRadius: "var(--radius-lg)", padding: "2rem 1.5rem", textAlign: "center" }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", background: GREEN[50], display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 500, fontSize: 14, color: GREEN[600], margin: "0 auto 1rem" }}>{t.initials}</div>
              <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 4 }}>{t.name}</div>
              <div style={{ fontSize: 12, color: "var(--gray-400)" }}>{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const steps = [
  { num: "01", title: "Discovery", desc: "We understand your goals, constraints, and users before writing a line of code." },
  { num: "02", title: "Scoping", desc: "We define deliverables, timelines, and costs with full transparency upfront." },
  { num: "03", title: "Build", desc: "Iterative development with regular check-ins and demos at each milestone." },
  { num: "04", title: "Handoff", desc: "Clean code, documentation, and support to get you fully operational." },
];

const Process = () => {
  const ref = useFadeIn();
  return (
    <section id="process" style={{ padding: "80px 1.5rem" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div ref={ref} className="fade-in" style={{ marginBottom: "2.5rem" }}>
          <div style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: GREEN[400], marginBottom: "0.8rem", fontWeight: 500 }}>How we work</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 4vw, 34px)", fontWeight: 500, letterSpacing: "-0.3px" }}>Our process</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 1, background: "rgba(0,0,0,0.06)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
          {steps.map((s, i) => (
            <div key={i} style={{ background: "#FAFAF8", padding: "1.8rem 1.5rem" }}>
              <div style={{ fontSize: 11, color: GREEN[400], fontWeight: 500, marginBottom: "0.8rem", letterSpacing: 1 }}>{s.num}</div>
              <h4 style={{ fontSize: 15, fontWeight: 500, marginBottom: "0.5rem" }}>{s.title}</h4>
              <p style={{ fontSize: 13, color: "var(--gray-400)", lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const ref = useFadeIn();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire up to your backend / email service here
    setSent(true);
  };

  return (
    <section id="contact" style={{ padding: "80px 1.5rem", background: "#fff" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div ref={ref} className="fade-in" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}
          className="contact-grid fade-in">
          <div>
            <div style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: GREEN[400], marginBottom: "0.8rem", fontWeight: 500 }}>Contact</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 4vw, 34px)", fontWeight: 500, marginBottom: "1rem", letterSpacing: "-0.3px" }}>Ready to build something?</h2>
            <p style={{ fontSize: 15, color: "var(--gray-400)", lineHeight: 1.8, marginBottom: "2rem" }}>
              Tell us about your project. We will get back to you within 24 hours with an honest assessment and a clear path forward.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "Email", value: "hello@cqubetechnologies.com" },
                { label: "Location", value: "Lagos & Ibadan, Nigeria" },
                { label: "Response time", value: "Within 24 hours" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: GREEN[400], marginTop: 7, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 11, color: "var(--gray-400)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: 14 }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {sent ? (
            <div style={{ background: GREEN[50], borderRadius: "var(--radius-lg)", padding: "3rem 2rem", textAlign: "center" }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: GREEN[400], display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
                <Icon name="check" size={22} stroke="#fff" />
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 500, marginBottom: "0.5rem" }}>Message sent</h3>
              <p style={{ fontSize: 14, color: "var(--gray-400)" }}>We will be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { id: "name", label: "Your name", type: "text", placeholder: "John Doe" },
                { id: "email", label: "Email address", type: "email", placeholder: "john@company.com" },
              ].map((f) => (
                <div key={f.id}>
                  <label style={{ fontSize: 12, color: "var(--gray-400)", display: "block", marginBottom: 6, letterSpacing: "0.3px" }}>{f.label}</label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    required
                    value={form[f.id]}
                    onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                    style={{ width: "100%", padding: "10px 14px", border: "0.5px solid rgba(0,0,0,0.12)", borderRadius: "var(--radius-md)", fontSize: 14, fontFamily: "var(--font-body)", outline: "none", background: "#FAFAF8", color: "var(--gray-900)" }}
                  />
                </div>
              ))}
              <div>
                <label style={{ fontSize: 12, color: "var(--gray-400)", display: "block", marginBottom: 6, letterSpacing: "0.3px" }}>Tell us about your project</label>
                <textarea
                  rows={4}
                  placeholder="We have an idea for a fintech app and need an MVP in 6 weeks..."
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ width: "100%", padding: "10px 14px", border: "0.5px solid rgba(0,0,0,0.12)", borderRadius: "var(--radius-md)", fontSize: 14, fontFamily: "var(--font-body)", outline: "none", background: "#FAFAF8", color: "var(--gray-900)", resize: "vertical" }}
                />
              </div>
              <button type="submit"
                style={{ background: GREEN[600], color: GREEN[50], border: "none", padding: "12px 24px", borderRadius: "var(--radius-md)", fontSize: 14, fontWeight: 500, fontFamily: "var(--font-body)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                Send message <Icon name="arrow" size={16} stroke={GREEN[50]} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer style={{ borderTop: "0.5px solid rgba(0,0,0,0.08)", padding: "2rem 1.5rem" }}>
    <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 600 }}>
        Cqube <span style={{ color: GREEN[400] }}>Technologies</span>
      </div>
      <div style={{ fontSize: 12, color: "var(--gray-400)" }}>hello@cqubetechnologies.com</div>
      <div style={{ fontSize: 12, color: "var(--gray-400)" }}>© {new Date().getFullYear()} Cqube Technologies. All rights reserved.</div>
    </div>
  </footer>
);

/* ─── APP ─── */
export default function App() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = globalCSS;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Industries />
        <Team />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
