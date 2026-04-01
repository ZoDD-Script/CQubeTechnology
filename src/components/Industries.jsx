import React from 'react'
import { GREEN, industries } from '../constant/constant';
import useFadeIn from '../hooks/useFadeIn';


const Industries = () => {
  const ref = useFadeIn();
  return (
    <section id="industries" style={{ padding: "80px 1.5rem" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div ref={ref} className="fade-in">
          <div style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: GREEN[400], marginBottom: "0.8rem", fontWeight: 500 }}>Who we serve</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 4vw, 34px)", fontWeight: 500, marginBottom: "1rem", letterSpacing: "-0.3px" }}>Industries we work in</h2>
          <p style={{ fontSize: 15, color: "var(--gray-400)", lineHeight: 1.8, maxWidth: 520, margin: "0 auto", textAlign: "center" }}>
            We partner with founders and teams across sectors that need reliable, well-engineered software.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10, width: "fit-content", margin: "2rem auto 0", textAlign: "center" }}>
            {industries.map((ind) => (
              <span key={ind} style={{ border: "0.5px solid rgba(0,0,0,0.12)", borderRadius: 24, padding: "7px 18px", fontSize: 13, color: "var(--gray-700)" }}>{ind}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries
