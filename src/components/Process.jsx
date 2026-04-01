import React from 'react'
import useFadeIn from '../hooks/useFadeIn';
import { GREEN, steps } from '../constant/constant';

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
export default Process
