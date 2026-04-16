'use client';

import { useState, useEffect } from 'react';
import { Scale, Users, Award, BookOpen, ArrowRight, Star, CheckCircle, Shield, Gavel, TrendingUp } from 'lucide-react';

const LearnAbout = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    { icon: <Scale size={18} />, title: 'IBC & Restructuring Experts', desc: 'Proven excellence in insolvency' },
    { icon: <Shield size={18} />, title: 'Strategic Litigation Practice', desc: 'Supreme Court and NCLTs' },
    { icon: <Gavel size={18} />, title: 'Focused Expertise', desc: 'Demo Law Firm, personalized strategies' },
    { icon: <TrendingUp size={18} />, title: 'Client-Centric Solutions', desc: 'Business-driven, pragmatic advice' }
  ];

  return (
    <section style={{ backgroundColor: "#0D0B08", padding: "100px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>

        {/* Header */}
        <div style={{
          textAlign: "center",
          marginBottom: "72px",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}>
          {/* Eyebrow */}
          <p style={{
            color: "#C9A84C",
            fontSize: "11px",
            letterSpacing: "0.25em",
            fontFamily: "Arial, sans-serif",
            marginBottom: "20px",
          }}>
            — TRUSTED LEGAL EXCELLENCE
          </p>

          {/* Divider line + heading */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "32px", marginBottom: "16px" }}>
            <div style={{ height: "1px", backgroundColor: "#2A2518", flex: 1, maxWidth: "200px" }}></div>
            <h2 style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(36px, 4vw, 52px)",
              fontWeight: "300",
              color: "#E8E0D0",
              margin: 0,
              lineHeight: "1.1",
            }}>
              Why{" "}
              <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Demo Law Firm</span>
              {"?"}
            </h2>
            <div style={{ height: "1px", backgroundColor: "#2A2518", flex: 1, maxWidth: "200px" }}></div>
          </div>

          <p style={{
            color: "#5A4A30",
            fontSize: "15px",
            maxWidth: "540px",
            margin: "0 auto",
            lineHeight: "1.7",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
          }}>
            Specialized in IBC, corporate restructuring, and strategic litigation with precision, integrity, and outcome-oriented advocacy
          </p>
        </div>

        {/* Two-column layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>

          {/* Left - Image */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(-20px)",
            transition: "all 0.8s ease 0.3s",
            position: "relative",
          }}>
            <div style={{
              position: "relative",
              border: "1px solid #2A2518",
            }}>
              {/* Gold accent top-left corner */}
              <div style={{
                position: "absolute",
                top: "-8px",
                left: "-8px",
                width: "40px",
                height: "40px",
                borderTop: "2px solid #C9A84C",
                borderLeft: "2px solid #C9A84C",
                zIndex: 2,
              }}></div>
              {/* Gold accent bottom-right corner */}
              <div style={{
                position: "absolute",
                bottom: "-8px",
                right: "-8px",
                width: "40px",
                height: "40px",
                borderBottom: "2px solid #C9A84C",
                borderRight: "2px solid #C9A84C",
                zIndex: 2,
              }}></div>

              <img
                src="/images/img1.jpg"
                alt="Demo Law Firm Team"
                style={{ width: "100%", aspectRatio: "1 / 1", objectFit: "cover", display: "block", filter: "sepia(20%) brightness(0.85)" }}
              />

              {/* Years badge */}
              <div style={{
                position: "absolute",
                bottom: "-24px",
                left: "-24px",
                backgroundColor: "#C9A84C",
                padding: "16px 20px",
                textAlign: "center",
              }}>
                <div style={{ fontSize: "28px", fontWeight: "700", color: "#0D0B08", fontFamily: "Georgia, serif", lineHeight: 1 }}>21+</div>
                <div style={{ fontSize: "10px", color: "#0D0B08", letterSpacing: "0.15em", fontFamily: "Arial, sans-serif", marginTop: "4px" }}>YEARS</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(20px)",
            transition: "all 0.8s ease 0.5s",
          }}>
            <p style={{
              color: "#8A7A5A",
              fontSize: "15px",
              lineHeight: "1.8",
              fontFamily: "Georgia, serif",
              marginBottom: "20px",
            }}>
              <span style={{ color: "#C9A84C", fontStyle: "italic", fontSize: "18px" }}>Demo Law Firm</span>{" "}
              is a law firm specializing in Insolvency and Bankruptcy Code (IBC), corporate restructuring, and commercial litigation. Our seasoned advocates combine strategic insight with deep legal acumen to deliver tailored, results-driven solutions across the Supreme Court, High Courts, NCLTs, and Tribunals.
            </p>

            <p style={{
              color: "#8A7A5A",
              fontSize: "15px",
              lineHeight: "1.8",
              fontFamily: "Georgia, serif",
              marginBottom: "40px",
            }}>
              We are known for our focused expertise in IBC and restructuring matters, offering personalized legal strategies backed by our strong presence before the Supreme Court and NCLTs.
            </p>

            {/* Features Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {features.map((feature, index) => (
                <div key={index} style={{
                  padding: "20px",
                  border: "1px solid #2A2518",
                  backgroundColor: "#13110D",
                  transition: "border-color 0.2s",
                  cursor: "default",
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "#C9A84C"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "#2A2518"}
                >
                  <div style={{ color: "#C9A84C", marginBottom: "12px" }}>{feature.icon}</div>
                  <h4 style={{
                    color: "#E8E0D0",
                    fontSize: "13px",
                    fontFamily: "Arial, sans-serif",
                    letterSpacing: "0.05em",
                    marginBottom: "6px",
                    fontWeight: "500",
                  }}>
                    {feature.title}
                  </h4>
                  <p style={{
                    color: "#5A4A30",
                    fontSize: "12px",
                    fontFamily: "Georgia, serif",
                    fontStyle: "italic",
                    margin: 0,
                  }}>
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnAbout;