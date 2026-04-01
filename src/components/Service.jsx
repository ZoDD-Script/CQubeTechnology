import { useState } from "react";
import { GREEN, services } from "../constant/constant";
import useFadeIn from "../hooks/useFadeIn";
import Icon from "./Icon";

const Services = () => {
  const ref = useFadeIn();
  return (
    <section id="services" style={{ padding: "80px 1.5rem", background: "#fff" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div ref={ref} className="fade-in" style={{ marginBottom: "3rem" }}>
          <div style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: GREEN[400], marginBottom: "0.8rem", fontWeight: 500 }}>What we do</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 4vw, 34px)", fontWeight: 500, marginBottom: "1rem", letterSpacing: "-0.3px" }}>Our services</h2>
          <p style={{ fontSize: 15, color: "var(--gray-400)", lineHeight: 1.8, maxWidth: 520, margin: "0 auto", textAlign: "center" }}>
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

export default Services
