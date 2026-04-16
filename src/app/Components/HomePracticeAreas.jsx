import React from 'react';
import { Building, Users, DollarSign, GraduationCap, ArrowRight } from 'lucide-react';

const HomePracticeAreas = () => {
  const practiceAreas = [
    {
      id: 1,
      icon: Building,
      title: "Bankruptcy & Insolvency Laws",
      description: "Demo Law Firm primarily provides advisory and litigation services relating to the Insolvency and Bankruptcy Code, 2016. Our team is involved in comprehensive legal support for insolvency proceedings.",
    },
    {
      id: 2,
      icon: Users,
      title: "Banking Law",
      description: "Our team at Demo Law Firm has deep knowledge of SARFAESI & Recovery of Debts and Bankruptcy Act. We represent Banks with extensive expertise in financial regulations.",
    },
    {
      id: 3,
      icon: DollarSign,
      title: "Commercial, Corporate and Companies Law",
      description: "Demo Law Firm provides comprehensive legal services in Commercial & Corporate Law, representing clients across various forums with specialized expertise in business transactions.",
    },
    {
      id: 4,
      icon: GraduationCap,
      title: "Arbitration Law",
      description: "Our team handles all aspects of Arbitration Law, from drafting agreements to representing clients in arbitral proceedings, including enforcement of awards in domestic and international matters.",
    }
  ];

  return (
    <section style={{ backgroundColor: "#0D0B08", padding: "100px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 48px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <p style={{
            color: "#C9A84C",
            fontSize: "11px",
            letterSpacing: "0.25em",
            fontFamily: "Arial, sans-serif",
            marginBottom: "20px",
          }}>
            — AREAS OF PRACTICE
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "32px", marginBottom: "16px" }}>
            <div style={{ height: "1px", backgroundColor: "#2A2518", flex: 1, maxWidth: "160px" }}></div>
            <h2 style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: "300",
              color: "#E8E0D0",
              margin: 0,
              lineHeight: "1.1",
            }}>
              Our Practice Areas
            </h2>
            <div style={{ height: "1px", backgroundColor: "#2A2518", flex: 1, maxWidth: "160px" }}></div>
          </div>

          <p style={{
            color: "#5A4A30",
            fontSize: "15px",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            marginTop: "4px",
          }}>
            Field of Work
          </p>

          <p style={{
            color: "#8A7A5A",
            fontSize: "14px",
            maxWidth: "520px",
            margin: "16px auto 0",
            lineHeight: "1.7",
            fontFamily: "Georgia, serif",
          }}>
            Experience the difference that comes with choosing a law firm dedicated to excellence, integrity, and results.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", backgroundColor: "#2A2518" }}>
          {practiceAreas.map((area) => {
            const IconComponent = area.icon;
            return (
              <div
                key={area.id}
                style={{
                  backgroundColor: "#0D0B08",
                  padding: "40px 32px",
                  position: "relative",
                  cursor: "default",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = "#13110D";
                  e.currentTarget.querySelector('.gold-line').style.width = "48px";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = "#0D0B08";
                  e.currentTarget.querySelector('.gold-line').style.width = "24px";
                }}
              >
                {/* Icon */}
                <div style={{
                  width: "48px",
                  height: "48px",
                  border: "1px solid #2A2518",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                  color: "#C9A84C",
                }}>
                  <IconComponent size={20} />
                </div>

                {/* Gold accent line */}
                <div
                  className="gold-line"
                  style={{
                    height: "1px",
                    backgroundColor: "#C9A84C",
                    width: "24px",
                    marginBottom: "20px",
                    transition: "width 0.3s ease",
                  }}
                ></div>

                {/* Title */}
                <h3 style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "16px",
                  fontWeight: "300",
                  color: "#E8E0D0",
                  marginBottom: "16px",
                  lineHeight: "1.4",
                  fontStyle: "italic",
                }}>
                  {area.title}
                </h3>

                {/* Description */}
                <p style={{
                  color: "#5A4A30",
                  fontSize: "13px",
                  lineHeight: "1.8",
                  fontFamily: "Georgia, serif",
                  marginBottom: "28px",
                }}>
                  {area.description}
                </p>

                {/* Learn More */}
                <a
                  href="#"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#C9A84C",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    fontFamily: "Arial, sans-serif",
                    textDecoration: "none",
                    borderBottom: "1px solid #2A2518",
                    paddingBottom: "2px",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "#C9A84C"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "#2A2518"}
                >
                  LEARN MORE
                  <ArrowRight size={12} />
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom decoration */}
        <div style={{ marginTop: "64px", display: "flex", justifyContent: "center" }}>
          <div style={{ height: "1px", backgroundColor: "#2A2518", width: "100%", maxWidth: "400px" }}></div>
        </div>
      </div>
    </section>
  );
};

export default HomePracticeAreas;