import React from 'react'
import useFadeIn from '../hooks/useFadeIn';
import { GREEN, team } from '../constant/constant';

const Team = () => {
  const ref = useFadeIn();
  return (
    <section id="team" style={{ padding: "80px 1.5rem", background: "#fff" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div ref={ref} className="fade-in" style={{ marginBottom: "2.5rem" }}>
          <div style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: GREEN[400], marginBottom: "0.8rem", fontWeight: 500 }}>Our team</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 4vw, 34px)", fontWeight: 500, marginBottom: "1rem", letterSpacing: "-0.3px" }}>Senior engineers, not generalists</h2>
          <p style={{ fontSize: 15, color: "var(--gray-400)", lineHeight: 1.8, maxWidth: 520, margin: "0 auto", textAlign: "center" }}>
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

export default Team
