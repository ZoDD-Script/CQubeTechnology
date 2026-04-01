import React, { useState, useEffect } from 'react'
import useFadeIn from '../hooks/useFadeIn';
import { GREEN } from "../constant/constant";
import Icon from './Icon';

const Hero = () => {
  const ref = useFadeIn();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      style={{
        paddingTop: isMobile ? 100 : 120,
        paddingBottom: isMobile ? 60 : 80,
        padding: isMobile ? "100px 1rem 60px" : "120px 1.5rem 80px"
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "2.5rem" : "4rem",
          alignItems: "center"
        }}
      >
        {/* LEFT */}
        <div ref={ref} className="fade-in">
          <div
            style={{
              fontSize: 11,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: GREEN[400],
              marginBottom: "1.2rem",
              fontWeight: 500
            }}
          >
            Engineering studio · Nigeria
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(30px, 6vw, 48px)",
              fontWeight: 500,
              lineHeight: 1.15,
              marginBottom: "1.5rem",
              letterSpacing: "-0.5px"
            }}
          >
            We build software that{" "}
            <em style={{ fontStyle: "italic", color: GREEN[400] }}>
              scales
            </em>{" "}
            with your business
          </h1>

          <p
            style={{
              fontSize: 15,
              color: "var(--gray-400)",
              lineHeight: 1.85,
              marginBottom: "2rem",
              maxWidth: isMobile ? "100%" : 440
            }}
          >
            Cqube Technologies is a boutique engineering studio specialising
            in backend systems, full-stack web applications, and digital
            products for startups and growing businesses.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "center" : "flex-start"
            }}
          >
            <a
              href="#contact"
              style={{
                background: GREEN[600],
                color: GREEN[50],
                padding: "11px 24px",
                borderRadius: "var(--radius-md)",
                fontSize: 14,
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8
              }}
            >
              Start a project{" "}
              <Icon name="arrow" size={16} stroke={GREEN[50]} />
            </a>

            <a
              href="#services"
              style={{
                border: "0.5px solid rgba(0,0,0,0.15)",
                color: "var(--gray-700)",
                padding: "11px 24px",
                borderRadius: "var(--radius-md)",
                fontSize: 14,
                textAlign: "center"
              }}
            >
              Our services
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div
          style={{
            background: "var(--gray-50)",
            borderRadius: "var(--radius-xl)",
            border: "0.5px solid rgba(0,0,0,0.07)",
            padding: isMobile ? "1.2rem" : "1.8rem"
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              marginBottom: 16
            }}
          >
            {[
              { num: "5+", label: "Engineers on call" },
              { num: "3", label: "Core disciplines" },
              { num: "MVP", label: "to production ready" },
              { num: "Fast", label: "turnaround delivery" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  background: "#fff",
                  border: "0.5px solid rgba(0,0,0,0.07)",
                  borderRadius: "var(--radius-md)",
                  padding: isMobile ? "0.8rem" : "1rem"
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: isMobile ? 22 : 26,
                    fontWeight: 500
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--gray-400)",
                    marginTop: 2
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 6
            }}
          >
            {["Node.js", "Express", "React", "MongoDB", "TypeScript", "REST APIs"].map((t) => (
              <span
                key={t}
                style={{
                  background: GREEN[50],
                  color: GREEN[600],
                  fontSize: 11,
                  fontWeight: 500,
                  padding: "4px 12px",
                  borderRadius: 20
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;