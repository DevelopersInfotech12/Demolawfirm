import React, { useState } from 'react';
import { ChevronDown, Scale, HelpCircle, MessageCircle, Phone } from 'lucide-react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

 const faqs = [
  {
    question: "What types of legal services do you provide?",
    answer: "Our firm offers a wide range of legal services including corporate law, commercial litigation, banking law, and legal advisory. We assist individuals, startups, and enterprises with tailored legal solutions."
  },
  {
    question: "How much do legal consultations cost?",
    answer: "We offer an initial consultation to understand your legal requirements. Fees vary depending on the complexity and scope of the matter. Our pricing is transparent with no hidden charges."
  },
  {
    question: "How long does it take to resolve a legal case?",
    answer: "The timeline depends on the nature of the case, legal procedures, and court schedules. Some matters may be resolved quickly, while others can take longer. We provide an estimated timeline after evaluating your case."
  },
  {
    question: "What should I bring to my first consultation?",
    answer: "Please bring all relevant documents such as contracts, agreements, notices, identification, and any communication related to your case. This helps us understand your situation better."
  }
];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{ backgroundColor: "#0D0B08", padding: "100px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <p style={{ color: "#C9A84C", fontSize: "11px", letterSpacing: "0.25em", fontFamily: "Arial, sans-serif", marginBottom: "20px" }}>
            — GET YOUR ANSWERS
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "32px", marginBottom: "16px" }}>
            <div style={{ height: "1px", backgroundColor: "#2A2518", flex: 1, maxWidth: "160px" }}></div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: "300", color: "#E8E0D0", margin: 0 }}>
              Frequently Asked{" "}
              <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Questions</span>
            </h2>
            <div style={{ height: "1px", backgroundColor: "#2A2518", flex: 1, maxWidth: "160px" }}></div>
          </div>
          <p style={{ color: "#8A7A5A", fontSize: "14px", maxWidth: "480px", margin: "0 auto", lineHeight: "1.7", fontFamily: "Georgia, serif", fontStyle: "italic" }}>
            Everything you need to know about our legal services, processes, and how we can protect your interests.
          </p>
        </div>

        {/* Main Content - Two Column */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: "80px", alignItems: "start" }}>

          {/* Left Sidebar */}
          <div style={{ position: "sticky", top: "32px" }}>
            <div style={{ border: "1px solid #2A2518", backgroundColor: "#13110D", padding: "40px" }}>
              {/* Gold corner */}
              <div style={{ width: "32px", height: "2px", backgroundColor: "#C9A84C", marginBottom: "24px" }}></div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "24px" }}>
                <div style={{ width: "44px", height: "44px", border: "1px solid #2A2518", display: "flex", alignItems: "center", justifyContent: "center", color: "#C9A84C", flexShrink: 0 }}>
                  <MessageCircle size={18} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "Georgia, serif", fontSize: "20px", fontWeight: "300", color: "#E8E0D0", margin: "0 0 4px", fontStyle: "italic" }}>Need Legal Advice?</h3>
                  <p style={{ color: "#5A4A30", fontSize: "11px", letterSpacing: "0.1em", fontFamily: "Arial, sans-serif", margin: 0 }}>EXPERT GUIDANCE AWAITS</p>
                </div>
              </div>

              <p style={{ color: "#5A4A30", fontSize: "13px", lineHeight: "1.8", fontFamily: "Georgia, serif", marginBottom: "32px" }}>
                Can't find what you're looking for? Our experienced legal team is ready to provide personalized consultation tailored to your specific needs.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <button style={{
                  backgroundColor: "#C9A84C",
                  color: "#0D0B08",
                  padding: "14px 24px",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  fontFamily: "Arial, sans-serif",
                  fontWeight: "600",
                  border: "none",
                  cursor: "pointer",
                  width: "100%",
                }}>
                  SCHEDULE CONSULTATION
                </button>
                <button style={{
                  backgroundColor: "transparent",
                  color: "#8A7A5A",
                  padding: "14px 24px",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  fontFamily: "Arial, sans-serif",
                  border: "1px solid #2A2518",
                  cursor: "pointer",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}>
                  <Phone size={12} />
                  +91-0000000001
                </button>
              </div>
            </div>
          </div>

          {/* FAQ List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2px", backgroundColor: "#2A2518" }}>
            {faqs.map((faq, index) => (
              <div key={index} style={{ backgroundColor: "#0D0B08" }}>
                <button
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: "100%",
                    padding: "28px 32px",
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "background-color 0.2s",
                    backgroundColor: openIndex === index ? "#13110D" : "transparent",
                  }}
                >
                  {/* Icon */}
                  <div style={{
                    width: "36px",
                    height: "36px",
                    border: "1px solid",
                    borderColor: openIndex === index ? "#C9A84C" : "#2A2518",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: openIndex === index ? "#C9A84C" : "#3A3020",
                    flexShrink: 0,
                    transition: "all 0.2s",
                  }}>
                    <Scale size={14} />
                  </div>

                  <h3 style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "15px",
                    fontWeight: "300",
                    color: openIndex === index ? "#E8E0D0" : "#8A7A5A",
                    margin: 0,
                    flex: 1,
                    lineHeight: "1.5",
                    transition: "color 0.2s",
                  }}>
                    {faq.question}
                  </h3>

                  <div style={{
                    width: "28px",
                    height: "28px",
                    border: "1px solid",
                    borderColor: openIndex === index ? "#C9A84C" : "#2A2518",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: openIndex === index ? "#C9A84C" : "#3A3020",
                    flexShrink: 0,
                    transition: "all 0.2s",
                    transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}>
                    <ChevronDown size={14} />
                  </div>
                </button>

                {/* Answer */}
                <div style={{
                  maxHeight: openIndex === index ? "300px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.4s ease",
                  backgroundColor: "#13110D",
                }}>
                  <div style={{ padding: "0 32px 28px 88px" }}>
                    <div style={{ height: "1px", backgroundColor: "#2A2518", marginBottom: "20px" }}></div>
                    <p style={{ color: "#5A4A30", fontSize: "14px", lineHeight: "1.8", fontFamily: "Georgia, serif", fontStyle: "italic", margin: 0 }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;