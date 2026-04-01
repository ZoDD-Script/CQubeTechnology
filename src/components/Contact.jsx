import React, { useState, useEffect } from 'react'
import useFadeIn from '../hooks/useFadeIn';
import { GREEN } from '../constant/constant';
import Icon from './Icon';

const Contact = () => {
  const ref = useFadeIn();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      style={{
        padding: isMobile ? "60px 1rem" : "80px 1.5rem",
        background: "#fff"
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "2.5rem" : "4rem",
            alignItems: "start"
          }}
          className="contact-grid fade-in"
        >
          {/* LEFT */}
          <div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: GREEN[400],
                marginBottom: "0.8rem",
                fontWeight: 500,
                textAlign: isMobile ? "center" : "left"
              }}
            >
              Contact
            </div>

            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(24px, 5vw, 34px)",
                fontWeight: 500,
                marginBottom: "1rem",
                letterSpacing: "-0.3px",
                textAlign: isMobile ? "center" : "left"
              }}
            >
              Ready to build something?
            </h2>

            <p
              style={{
                fontSize: 15,
                color: "var(--gray-400)",
                lineHeight: 1.8,
                marginBottom: "2rem",
                textAlign: isMobile ? "center" : "left"
              }}
            >
              Tell us about your project. We will get back to you within 24
              hours with an honest assessment and a clear path forward.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                alignItems: isMobile ? "center" : "flex-start"
              }}
            >
              {[
                { label: "Email", value: "hello@cqubetechnologies.com" },
                { label: "Location", value: "Lagos & Ibadan, Nigeria" },
                { label: "Response time", value: "Within 24 hours" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                    textAlign: isMobile ? "center" : "left"
                  }}
                >
                  {/* <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: GREEN[400],
                      marginTop: 7,
                      flexShrink: 0
                    }}
                  /> */}
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "var(--gray-400)",
                        textTransform: "uppercase",
                        letterSpacing: 1,
                        marginBottom: 2
                      }}
                    >
                      {item.label}
                    </div>
                    <div style={{ fontSize: 14 }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          {sent ? (
            <div
              style={{
                background: GREEN[50],
                borderRadius: "var(--radius-lg)",
                padding: isMobile ? "2rem 1.5rem" : "3rem 2rem",
                textAlign: "center"
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: GREEN[400],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem"
                }}
              >
                <Icon name="check" size={22} stroke="#fff" />
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 20,
                  fontWeight: 500,
                  marginBottom: "0.5rem"
                }}
              >
                Message sent
              </h3>

              <p style={{ fontSize: 14, color: "var(--gray-400)" }}>
                We will be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14
              }}
            >
              {[
                { id: "name", label: "Your name", type: "text", placeholder: "John Doe" },
                { id: "email", label: "Email address", type: "email", placeholder: "john@company.com" },
              ].map((f) => (
                <div key={f.id}>
                  <label
                    style={{
                      fontSize: 12,
                      color: "var(--gray-400)",
                      display: "block",
                      marginBottom: 6,
                      letterSpacing: "0.3px"
                    }}
                  >
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    required
                    value={form[f.id]}
                    onChange={(e) =>
                      setForm({ ...form, [f.id]: e.target.value })
                    }
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      border: "0.5px solid rgba(0,0,0,0.12)",
                      borderRadius: "var(--radius-md)",
                      fontSize: 14,
                      fontFamily: "var(--font-body)",
                      outline: "none",
                      background: "#FAFAF8",
                      color: "var(--gray-900)"
                    }}
                  />
                </div>
              ))}

              <div>
                <label
                  style={{
                    fontSize: 12,
                    color: "var(--gray-400)",
                    display: "block",
                    marginBottom: 6,
                    letterSpacing: "0.3px"
                  }}
                >
                  Tell us about your project
                </label>
                <textarea
                  rows={4}
                  placeholder="We have an idea for a fintech app and need an MVP in 6 weeks..."
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    border: "0.5px solid rgba(0,0,0,0.12)",
                    borderRadius: "var(--radius-md)",
                    fontSize: 14,
                    fontFamily: "var(--font-body)",
                    outline: "none",
                    background: "#FAFAF8",
                    color: "var(--gray-900)",
                    resize: "vertical"
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: GREEN[600],
                  color: GREEN[50],
                  border: "none",
                  padding: "12px 24px",
                  borderRadius: "var(--radius-md)",
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: "var(--font-body)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  alignSelf: isMobile ? "center" : "stretch"
                }}
              >
                Send message{" "}
                <Icon name="arrow" size={16} stroke={GREEN[50]} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;