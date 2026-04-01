import React from 'react'
import { GREEN } from '../constant/constant';

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

export default Footer
