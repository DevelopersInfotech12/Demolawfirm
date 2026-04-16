import React, { useState, useEffect } from 'react';
import { Scale, Award, Target, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Award size={20} />,
      title: "Best Law Practices",
      description: "At our firm, we combine unparalleled expertise with unwavering dedication, ensuring comprehensive legal solutions tailored to each client's unique needs."
    },
    {
      icon: <Scale size={20} />,
      title: "Efficiency & Trust",
      description: "Our firm's integrity is the cornerstone of our practice, built on a legacy of trustworthiness, transparency, and steadfast reliability."
    },
    {
      icon: <Target size={20} />,
      title: "Results You Deserve",
      description: "Our firm consistently achieves impactful results through a potent combination of strategic acumen and legal prowess, securing favorable outcomes."
    },
    {
      icon: <Users size={20} />,
      title: "Client-Centered Approach",
      description: "We place our clients at the heart of everything we do, offering personalized guidance, clear communication, and unwavering support at every stage."
    }
  ];

  return (
    <section style={{ backgroundColor: "#0D0B08", padding: "100px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <p style={{ color: "#C9A84C", fontSize: "11px", letterSpacing: "0.25em", fontFamily: "Arial, sans-serif", marginBottom: "20px" }}>
            — OUR COMMITMENT
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "32px", marginBottom: "16px" }}>
            <div style={{ height: "1px", backgroundColor: "#2A2518", flex: 1, maxWidth: "160px" }}></div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: "300", color: "#E8E0D0", margin: 0 }}>
              Why Choose{" "}
              <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Us</span>
            </h2>
            <div style={{ height: "1px", backgroundColor: "#2A2518", flex: 1, maxWidth: "160px" }}></div>
          </div>
          <p style={{ color: "#5A4A30", fontSize: "15px", fontFamily: "Georgia, serif", fontStyle: "italic" }}>
            Legal Excellence
          </p>
          <p style={{ color: "#8A7A5A", fontSize: "14px", maxWidth: "480px", margin: "12px auto 0", lineHeight: "1.7", fontFamily: "Georgia, serif" }}>
            Experience the difference that comes with choosing a law firm dedicated to excellence, integrity, and results.
          </p>
        </div>

        {/* Main Content Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>

          {/* Left - Features */}
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {features.map((feature, index) => (
              <div
                key={index}
                style={{ display: "flex", gap: "24px", alignItems: "flex-start", opacity: isVisible ? 1 : 0, transform: isVisible ? "translateX(0)" : "translateX(-20px)", transition: `all 0.6s ease ${index * 0.15}s` }}
              >
                {/* Icon */}
                <div style={{
                  flexShrink: 0,
                  width: "44px",
                  height: "44px",
                  border: "1px solid #2A2518",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#C9A84C",
                  marginTop: "2px",
                }}>
                  {feature.icon}
                </div>

                {/* Content */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                    <div style={{ width: "20px", height: "1px", backgroundColor: "#C9A84C" }}></div>
                    <h3 style={{ fontFamily: "Georgia, serif", fontSize: "16px", fontWeight: "300", color: "#E8E0D0", margin: 0, fontStyle: "italic" }}>
                      {feature.title}
                    </h3>
                  </div>
                  <p style={{ color: "#5A4A30", fontSize: "14px", lineHeight: "1.8", fontFamily: "Georgia, serif", margin: 0 }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Visual Card */}
          <div style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateX(0)" : "translateX(20px)", transition: "all 0.8s ease 0.4s", position: "relative" }}>

            {/* Main Card */}
            <div style={{ border: "1px solid #2A2518", overflow: "hidden", position: "relative" }}>
              {/* Gold corner accents */}
              <div style={{ position: "absolute", top: "-6px", left: "-6px", width: "32px", height: "32px", borderTop: "2px solid #C9A84C", borderLeft: "2px solid #C9A84C", zIndex: 2 }}></div>
              <div style={{ position: "absolute", bottom: "-6px", right: "-6px", width: "32px", height: "32px", borderBottom: "2px solid #C9A84C", borderRight: "2px solid #C9A84C", zIndex: 2 }}></div>

              {/* Header */}
              <div style={{ backgroundColor: "#13110D", padding: "28px 32px", borderBottom: "1px solid #2A2518", display: "flex", alignItems: "center", gap: "16px" }}>
                <Scale size={22} color="#C9A84C" />
                <div>
                  <h3 style={{ fontFamily: "Georgia, serif", fontSize: "18px", fontWeight: "300", color: "#E8E0D0", margin: 0, fontStyle: "italic" }}>Demo Law Firm</h3>
                  <p style={{ color: "#5A4A30", fontSize: "11px", letterSpacing: "0.15em", fontFamily: "Arial, sans-serif", margin: "4px 0 0" }}>YOUR TRUSTED LEGAL PARTNER</p>
                </div>
              </div>

              {/* Image */}
              <div style={{ position: "relative", height: "320px", overflow: "hidden" }}>
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop&crop=center"
                  alt="Professional lawyers in meeting"
                  style={{ width: "100%", height: "100%", objectFit: "cover", filter: "sepia(30%) brightness(0.7)" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,8,5,0.8) 0%, transparent 50%)" }}></div>
                <div style={{ position: "absolute", bottom: "24px", left: "24px" }}>
                  <p style={{ fontFamily: "Georgia, serif", fontSize: "16px", color: "#E8E0D0", margin: 0, fontStyle: "italic" }}>Professional Legal Services</p>
                  <p style={{ color: "#8A7A5A", fontSize: "12px", fontFamily: "Arial, sans-serif", letterSpacing: "0.1em", margin: "4px 0 0" }}>EXPERT CONSULTATION & REPRESENTATION</p>
                </div>
              </div>
            </div>

            {/* Quote card */}
            <div style={{
              position: "absolute",
              top: "-20px",
              right: "-20px",
              backgroundColor: "#13110D",
              border: "1px solid #2A2518",
              borderLeft: "2px solid #C9A84C",
              padding: "20px 24px",
              maxWidth: "240px",
            }}>
              <p style={{ color: "#8A7A5A", fontSize: "12px", fontFamily: "Georgia, serif", fontStyle: "italic", lineHeight: "1.6", margin: "0 0 8px" }}>
                "Prior approval of CCI under Section 31(4) — ensuring legal compliance."
              </p>
              <span style={{ color: "#C9A84C", fontSize: "10px", letterSpacing: "0.15em", fontFamily: "Arial, sans-serif" }}>LEGAL COMPLIANCE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;