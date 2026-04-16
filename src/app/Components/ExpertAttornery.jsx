"use client";

import React from 'react';
import { Award, BookOpen, Mail, Phone, Linkedin, ArrowRight } from 'lucide-react';

const ExpertAttorneys = () => {
const attorneys = [
  {
    id: 1,
    name: "Demo 1",
    title: "Advocate & Insolvency Professional",
    image: "images/blog4.jpg",
    specialties: ["Commercial Law", "Banking Law", "Corporate Litigation"],
    experience: "21+ Years",
    description: "Leading expert in insolvency and bankruptcy proceedings with extensive experience in corporate restructuring.",
    contact: {
      email: "demo1@example.com",
      phone: "+91-0000000001",
      linkedin: "#"
    }
  },
  {
    id: 2,
    name: "Demo 2",
    title: "Advocate",
    image: "images/blog4.jpg",
    specialties: ["Commercial Law", "Banking Law", "Corporate Litigation"],
    experience: "8+ Years",
    description: "Specialized in banking and commercial law with a proven track record in high-stakes corporate litigation.",
    contact: {
      email: "demo2@example.com",
      phone: "+91-0000000002",
      linkedin: "#"
    }
  }
];
  return (
    <section style={{ backgroundColor: "#0D0B08", padding: "100px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 48px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <p style={{ color: "#C9A84C", fontSize: "11px", letterSpacing: "0.25em", fontFamily: "Arial, sans-serif", marginBottom: "20px" }}>
            — THE TEAM
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "32px", marginBottom: "16px" }}>
            <div style={{ height: "1px", backgroundColor: "#2A2518", flex: 1, maxWidth: "160px" }}></div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: "300", color: "#E8E0D0", margin: 0 }}>
              Meet Our Expert{" "}
              <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Attorneys</span>
            </h2>
            <div style={{ height: "1px", backgroundColor: "#2A2518", flex: 1, maxWidth: "160px" }}></div>
          </div>
          <p style={{ color: "#8A7A5A", fontSize: "14px", maxWidth: "520px", margin: "0 auto", lineHeight: "1.7", fontFamily: "Georgia, serif", fontStyle: "italic" }}>
            Our distinguished legal professionals bring decades of combined experience in complex litigation, corporate law, and specialized legal services.
          </p>
        </div>

        {/* Attorneys Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", backgroundColor: "#2A2518" }}>
          {attorneys.map((attorney) => (
            <div
              key={attorney.id}
              style={{ backgroundColor: "#0D0B08", padding: "48px 40px", position: "relative" }}
            >
              {/* Top gold line */}
              <div style={{ width: "32px", height: "2px", backgroundColor: "#C9A84C", marginBottom: "32px" }}></div>

              {/* Image + name row */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", marginBottom: "24px" }}>
                <div style={{ position: "relative", flexShrink: 0 }}>
                  <div style={{ width: "80px", height: "80px", overflow: "hidden", border: "1px solid #2A2518" }}>
                    <img
                      src={attorney.image}
                      alt={attorney.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", filter: "sepia(20%) brightness(0.85)" }}
                    />
                  </div>
                  {/* Award badge */}
                  <div style={{
                    position: "absolute",
                    top: "-8px",
                    right: "-8px",
                    width: "24px",
                    height: "24px",
                    backgroundColor: "#C9A84C",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <Award size={12} color="#0D0B08" />
                  </div>
                </div>

                <div>
                  <h3 style={{ fontFamily: "Georgia, serif", fontSize: "22px", fontWeight: "300", color: "#E8E0D0", margin: "0 0 6px", fontStyle: "italic" }}>
                    {attorney.name}
                  </h3>
                  <div style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "4px 12px",
                    border: "1px solid #2A2518",
                    backgroundColor: "#13110D",
                  }}>
                    <BookOpen size={10} color="#C9A84C" />
                    <span style={{ color: "#8A7A5A", fontSize: "10px", letterSpacing: "0.1em", fontFamily: "Arial, sans-serif" }}>{attorney.title}</span>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <span style={{ color: "#C9A84C", fontSize: "20px", fontFamily: "Georgia, serif", fontWeight: "300" }}>{attorney.experience}</span>
                <div style={{ width: "1px", height: "20px", backgroundColor: "#2A2518" }}></div>
                <span style={{ color: "#5A4A30", fontSize: "11px", letterSpacing: "0.15em", fontFamily: "Arial, sans-serif" }}>EXPERIENCE</span>
              </div>

              {/* Description */}
              <p style={{ color: "#5A4A30", fontSize: "13px", lineHeight: "1.8", fontFamily: "Georgia, serif", fontStyle: "italic", marginBottom: "24px" }}>
                {attorney.description}
              </p>

              {/* Specialties */}
              <div style={{ marginBottom: "28px" }}>
                <p style={{ color: "#3A3020", fontSize: "10px", letterSpacing: "0.2em", fontFamily: "Arial, sans-serif", marginBottom: "10px" }}>AREAS OF EXPERTISE</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {attorney.specialties.map((s, i) => (
                    <span key={i} style={{
                      padding: "4px 12px",
                      border: "1px solid #2A2518",
                      color: "#8A7A5A",
                      fontSize: "11px",
                      fontFamily: "Arial, sans-serif",
                      letterSpacing: "0.05em",
                    }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div style={{ borderTop: "1px solid #2A2518", paddingTop: "24px", display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <button
                  onClick={() => window.location.href = `tel:${attorney.contact.phone}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: "#C9A84C",
                    color: "#0D0B08",
                    padding: "10px 20px",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    fontFamily: "Arial, sans-serif",
                    fontWeight: "600",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <Phone size={12} />
                  {attorney.contact.phone}
                  <ArrowRight size={12} />
                </button>

                <button
                  onClick={() => window.location.href = `mailto:${attorney.contact.email}`}
                  title={attorney.contact.email}
                  style={{
                    width: "40px",
                    height: "40px",
                    border: "1px solid #2A2518",
                    backgroundColor: "transparent",
                    color: "#8A7A5A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#C9A84C"; e.currentTarget.style.color = "#C9A84C"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#2A2518"; e.currentTarget.style.color = "#8A7A5A"; }}
                >
                  <Mail size={14} />
                </button>

                <a
                  href={attorney.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn Profile"
                  style={{
                    width: "40px",
                    height: "40px",
                    border: "1px solid #2A2518",
                    color: "#8A7A5A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#C9A84C"; e.currentTarget.style.color = "#C9A84C"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#2A2518"; e.currentTarget.style.color = "#8A7A5A"; }}
                >
                  <Linkedin size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div style={{ marginTop: "64px", display: "flex", justifyContent: "center" }}>
          <div style={{ height: "1px", backgroundColor: "#2A2518", width: "100%", maxWidth: "400px" }}></div>
        </div>
      </div>
    </section>
  );
};

export default ExpertAttorneys;