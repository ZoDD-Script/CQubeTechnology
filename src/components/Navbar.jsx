import { useEffect, useState } from "react";
import { GREEN } from "../constant/constant";

const Navbar = () => {
  // const [open, setOpen] = useState(false);
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

export default Navbar
