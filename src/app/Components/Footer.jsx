"use client";

import React from 'react';
import { Phone, Mail, Instagram, Linkedin, MapPin, Clock, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#0D0B08" }}>

      {/* CTA Section */}
      <div style={{ backgroundColor: "#13110D", borderTop: "2px solid #C9A84C", borderBottom: "1px solid #2A2518", padding: "80px 48px", textAlign: "center" }}>
        <p style={{ color: "#C9A84C", fontSize: "11px", letterSpacing: "0.25em", fontFamily: "Arial, sans-serif", marginBottom: "20px" }}>
          — READY TO BEGIN
        </p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: "300", color: "#E8E0D0", marginBottom: "16px", lineHeight: "1.2" }}>
          Ready to Resolve Your{" "}
          <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Legal Matters?</span>
        </h2>
        <p style={{ color: "#8A7A5A", fontSize: "15px", maxWidth: "480px", margin: "0 auto 40px", lineHeight: "1.7", fontFamily: "Georgia, serif", fontStyle: "italic" }}>
          Get expert legal consultation from our experienced team of attorneys.
        </p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
          <button style={{
            backgroundColor: "#C9A84C",
            color: "#0D0B08",
            padding: "14px 36px",
            fontSize: "11px",
            letterSpacing: "0.18em",
            fontFamily: "Arial, sans-serif",
            fontWeight: "700",
            border: "none",
            cursor: "pointer",
          }}>
            SCHEDULE CONSULTATION
          </button>
          <a
            href="tel:+919811898418"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 28px",
              border: "1px solid #2A2518",
              color: "#8A7A5A",
              fontSize: "13px",
              fontFamily: "Georgia, serif",
              textDecoration: "none",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "#C9A84C"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "#2A2518"}
          >
            <Phone size={14} color="#C9A84C" />
            +91-0000000001 / +91-0000000002
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div style={{ padding: "72px 48px 40px", maxWidth: "1200px", margin: "0 auto" }}>

        {/* Top Row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "48px", paddingBottom: "48px", borderBottom: "1px solid #2A2518" }}>
          {/* Brand */}
          <div style={{ maxWidth: "340px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
              <div style={{ width: "128px" }}>
                <img src="/images/blog4.jpg" alt="Demo Legal" style={{ width: "100%" }} />
              </div>
              <div>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "18px", fontWeight: "300", color: "#E8E0D0", margin: "0 0 4px", letterSpacing: "0.05em" }}>DEMO LEGAL</h3>
                <p style={{ color: "#C9A84C", fontSize: "10px", letterSpacing: "0.2em", fontFamily: "Arial, sans-serif", margin: 0 }}>PROFESSIONAL LAW SERVICES</p>
              </div>
            </div>
            <p style={{ color: "#5A4A30", fontSize: "13px", lineHeight: "1.8", fontFamily: "Georgia, serif", fontStyle: "italic" }}>
              Demo Law Firm providing comprehensive legal solutions through expert guidance and strategic counsel for businesses and individuals.
            </p>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: "48px" }}>
            {[{ icon: <Clock size={20} />, label: "24/7 Support", sub: "Always Available" }, { icon: <MapPin size={20} />, label: "Delhi Office", sub: "Defence Colony" }].map((item, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ width: "52px", height: "52px", border: "1px solid #2A2518", display: "flex", alignItems: "center", justifyContent: "center", color: "#C9A84C", margin: "0 auto 12px" }}>
                  {item.icon}
                </div>
                <p style={{ color: "#E8E0D0", fontSize: "13px", fontFamily: "Georgia, serif", margin: "0 0 4px" }}>{item.label}</p>
                <p style={{ color: "#5A4A30", fontSize: "11px", fontFamily: "Arial, sans-serif", letterSpacing: "0.08em", margin: 0 }}>{item.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Links Row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "40px" }}>

          {/* Practice Areas */}
          <div>
            <h4 style={{ color: "#C9A84C", fontSize: "10px", letterSpacing: "0.25em", fontFamily: "Arial, sans-serif", marginBottom: "24px" }}>PRACTICE AREAS</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { name: "Bankruptcy & Insolvency Law", link: "/bankruptcyandInsolvency" },
                { name: "Banking Law", link: "/bankinglaw" },
                { name: "Commercial & Corporate Law", link: "/commercialandcorporate" },
                { name: "Arbitration Law", link: "/companieslaw" }
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.link} style={{ color: "#5A4A30", fontSize: "13px", fontFamily: "Georgia, serif", fontStyle: "italic", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#C9A84C"}
                    onMouseLeave={e => e.currentTarget.style.color = "#5A4A30"}
                  >{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: "#C9A84C", fontSize: "10px", letterSpacing: "0.25em", fontFamily: "Arial, sans-serif", marginBottom: "24px" }}>COMPANY</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {["About Us", "Our Team", "Practices", "Career"].map((item, i) => (
                <li key={i}>
                  <a href="#" style={{ color: "#5A4A30", fontSize: "13px", fontFamily: "Georgia, serif", fontStyle: "italic", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#C9A84C"}
                    onMouseLeave={e => e.currentTarget.style.color = "#5A4A30"}
                  >{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "#C9A84C", fontSize: "10px", letterSpacing: "0.25em", fontFamily: "Arial, sans-serif", marginBottom: "24px" }}>CONTACT</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <Phone size={14} color="#C9A84C" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <a href="tel:+919811898418" style={{ color: "#5A4A30", fontSize: "13px", fontFamily: "Georgia, serif", textDecoration: "none", display: "block", transition: "color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#C9A84C"}
                    onMouseLeave={e => e.currentTarget.style.color = "#5A4A30"}
                  >+91-0000000001</a>
                  <a href="tel:+919910356257" style={{ color: "#5A4A30", fontSize: "13px", fontFamily: "Georgia, serif", textDecoration: "none", display: "block", transition: "color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#C9A84C"}
                    onMouseLeave={e => e.currentTarget.style.color = "#5A4A30"}
                  >+91-0000000002</a>
                </div>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <Mail size={14} color="#C9A84C" style={{ flexShrink: 0, marginTop: "2px" }} />
                <a href="mailto:asterismslegal@gmail.com" style={{ color: "#5A4A30", fontSize: "13px", fontFamily: "Georgia, serif", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#C9A84C"}
                  onMouseLeave={e => e.currentTarget.style.color = "#5A4A30"}
                >Demolegal@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Follow */}
          <div>
            <h4 style={{ color: "#C9A84C", fontSize: "10px", letterSpacing: "0.25em", fontFamily: "Arial, sans-serif", marginBottom: "24px" }}>FOLLOW US</h4>
            <div style={{ display: "flex", gap: "12px" }}>
              {[
                { href: "https://www.instagram.com/demolegal", icon: <Instagram size={16} />, label: "Instagram" },
                { href: "https://www.linkedin.com/company/demolegal/", icon: <Linkedin size={16} />, label: "LinkedIn" }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  title={item.label}
                  style={{
                    width: "44px",
                    height: "44px",
                    border: "1px solid #2A2518",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#5A4A30",
                    textDecoration: "none",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#C9A84C"; e.currentTarget.style.color = "#C9A84C"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#2A2518"; e.currentTarget.style.color = "#5A4A30"; }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div style={{ borderTop: "1px solid #2A2518", padding: "20px 48px", textAlign: "center" }}>
        <p style={{ color: "#3A3020", fontSize: "11px", fontFamily: "Arial, sans-serif", letterSpacing: "0.08em", margin: 0 }}>
          © 2025{" "}
          <span style={{ color: "#C9A84C" }}>Demo Legal</span>
          {" "}· Designed by{" "}
          <a href="https://developersinfotech.com" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A84C", textDecoration: "none" }}>
            DEVELOPERS INFOTECH PVT LTD
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;