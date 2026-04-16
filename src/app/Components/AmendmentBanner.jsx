"use client";

import Link from "next/link";
import Image from "next/image";

export default function AmendmentBanner() {
  return (
    <section style={{ backgroundColor: "#0D0B08", padding: "0", position: "relative", overflow: "hidden" }}>
      {/* Top gold accent line */}
      <div style={{ height: "2px", backgroundColor: "#C9A84C", width: "100%" }}></div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 48px" }}>

        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
          <div style={{ width: "28px", height: "1px", backgroundColor: "#C9A84C" }}></div>
          <span style={{ color: "#C9A84C", fontSize: "11px", letterSpacing: "0.25em", fontFamily: "Arial, sans-serif" }}>
            IBC · PROPOSED AMENDMENTS
          </span>
        </div>

        {/* Card */}
        <Link href="/lbclaw" style={{ display: "block", textDecoration: "none" }}>
          <div
            style={{
              display: "flex",
              border: "1px solid #2A2518",
              overflow: "hidden",
              transition: "border-color 0.3s",
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "#C9A84C"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "#2A2518"}
          >
            {/* Image */}
            <div style={{ position: "relative", width: "44%", minHeight: "280px", flexShrink: 0 }}>
              <Image
                src="/images/lbc1.jpg"
                alt="IBC Amendment 2026"
                fill
                style={{ objectFit: "cover", filter: "sepia(30%) brightness(0.65)" }}
              />
              <div style={{ position: "absolute", top: "12px", left: "12px", backgroundColor: "#C9A84C", padding: "4px 12px" }}>
                <span style={{ color: "#0D0B08", fontSize: "10px", letterSpacing: "0.15em", fontFamily: "Arial, sans-serif", fontWeight: "700" }}>
                  IBC 2026
                </span>
              </div>
            </div>

            {/* Content */}
            <div style={{ flex: 1, padding: "40px 48px", backgroundColor: "#0D0B08", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                {/* Tag */}
                <p style={{ color: "#5A4A30", fontSize: "11px", letterSpacing: "0.2em", fontFamily: "Arial, sans-serif", marginBottom: "16px" }}>
                  INSOLVENCY & BANKRUPTCY CODE UPDATE
                </p>

                {/* Title */}
                <h2 style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(18px, 2vw, 26px)",
                  fontWeight: "300",
                  color: "#E8E0D0",
                  marginBottom: "20px",
                  lineHeight: "1.3",
                  fontStyle: "italic",
                }}>
                  The Insolvency and Bankruptcy Code{" "}
                  <span style={{ color: "#C9A84C" }}>(Amendment) Act, 2026</span>
                </h2>

                {/* Description */}
                <p style={{ color: "#5A4A30", fontSize: "14px", lineHeight: "1.8", fontFamily: "Georgia, serif", maxWidth: "520px" }}>
                  Proposed amendments to the Insolvency and Bankruptcy Code, 2016 aim to enhance the efficiency of the corporate insolvency resolution process (CIRP), strengthen creditor rights, and introduce faster resolution mechanisms including pre-packaged insolvency frameworks and improved cross-border provisions.
                </p>
              </div>

              <div>
                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px", marginTop: "24px" }}>
                  {["Pre-Pack Insolvency Expansion", "Cross-Border Framework", "Faster Resolution Timelines"].map((tag) => (
                    <span key={tag} style={{
                      padding: "4px 12px",
                      border: "1px solid #2A2518",
                      color: "#8A7A5A",
                      fontSize: "10px",
                      letterSpacing: "0.12em",
                      fontFamily: "Arial, sans-serif",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #2A2518", paddingTop: "20px" }}>
                  <span style={{ color: "#C9A84C", fontSize: "12px", letterSpacing: "0.15em", fontFamily: "Arial, sans-serif" }}>
                    EXPLORE DETAILS →
                  </span>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ color: "#3A3020", fontSize: "10px", fontFamily: "Arial, sans-serif", margin: 0 }}>Source</p>
                    <p style={{ color: "#5A4A30", fontSize: "10px", fontFamily: "Georgia, serif", fontStyle: "italic", margin: "2px 0 0" }}>Discussion Papers / MCA / IBBI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}