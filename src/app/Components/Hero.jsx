"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const slides = [
    {
      background: '/images/carousel1.jpg',
      titleRegular: 'Precision.',
      titleItalic: 'Integrity.',
      titleLast: 'Outcome-Driven',
      subtitle: 'Legal Counsel.',
      quote: 'Guiding clients through bankruptcy & insolvency with strategic solutions and steadfast representation.'
    },
    {
      background: 'images/carousel2.jpg',
      titleRegular: 'Safeguarding',
      titleItalic: 'Banking',
      titleLast: 'Interests.',
      subtitle: '',
      quote: 'Trusted legal counsel in banking law, ensuring compliance, security, and dispute resolution.'
    },
    {
      background: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      titleRegular: 'Driving',
      titleItalic: 'Corporate',
      titleLast: 'Growth.',
      subtitle: '',
      quote: 'Empowering businesses with pragmatic advice in commercial & corporate law.'
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden", backgroundColor: "#0D0B08" }}>

      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            inset: 0,
            opacity: index === currentSlide ? 1 : 0,
            transition: "opacity 1.2s ease-in-out",
            backgroundImage: `url(${slide.background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(10, 8, 5, 0.72)" }}></div>
        </div>
      ))}

      {/* Main Content */}
      <div style={{
        position: "relative",
        zIndex: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "0 6rem",
        maxWidth: "900px",
      }}>

        {/* Main Heading */}
        <div style={{ marginBottom: "32px" }}>
          <h1 style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: "300",
            lineHeight: "1.08",
            margin: 0,
          }}>
            <span style={{
              display: "block",
              fontSize: "clamp(48px, 7vw, 88px)",
              color: "#E8E0D0",
              letterSpacing: "-0.01em",
              transition: "opacity 0.8s",
            }}>
              {slides[currentSlide].titleRegular}
            </span>

            <span style={{
              display: "block",
              fontSize: "clamp(48px, 7vw, 88px)",
              color: "#C9A84C",
              fontStyle: "italic",
              fontWeight: "300",
              letterSpacing: "-0.01em",
              transition: "opacity 0.8s",
            }}>
              {slides[currentSlide].titleItalic}
            </span>

            <span style={{
              display: "block",
              fontSize: "clamp(48px, 7vw, 88px)",
              color: "#E8E0D0",
              letterSpacing: "-0.01em",
              transition: "opacity 0.8s",
            }}>
              {slides[currentSlide].titleLast}
            </span>

            {slides[currentSlide].subtitle && (
              <span style={{
                display: "block",
                fontSize: "clamp(48px, 7vw, 88px)",
                color: "#E8E0D0",
                letterSpacing: "-0.01em",
              }}>
                {slides[currentSlide].subtitle}
              </span>
            )}
          </h1>
        </div>

        {/* Description */}
        <p style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "clamp(14px, 1.4vw, 17px)",
          color: "#8A7A5A",
          maxWidth: "520px",
          lineHeight: "1.7",
          marginBottom: "40px",
          fontStyle: "italic",
          transition: "opacity 0.8s",
        }}>
          Demo Law Firm is a full-service practice delivering strategic legal counsel across litigation, corporate law, real estate, and family matters — committed to protecting your rights and advancing your interests.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "32px", marginBottom: "48px" }}>
          <a href="/practice-areas" style={{
            backgroundColor: "#C9A84C",
            color: "#0D0B08",
            padding: "14px 32px",
            fontSize: "11px",
            letterSpacing: "0.18em",
            fontWeight: "600",
            textDecoration: "none",
            fontFamily: "Arial, sans-serif",
            display: "inline-block",
            transition: "background-color 0.2s",
          }}>
            OUR PRACTICE AREAS
          </a>
          <a href="/about" style={{
            color: "#A89880",
            fontSize: "13px",
            letterSpacing: "0.08em",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            transition: "color 0.2s",
          }}>
            Learn about us
            <span style={{ color: "#C9A84C" }}>→</span>
          </a>
        </div>

        {/* Slide indicators */}
        <div style={{ display: "flex", gap: "8px" }}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: index === currentSlide ? "28px" : "8px",
                height: "2px",
                backgroundColor: index === currentSlide ? "#C9A84C" : "#3A3020",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: "absolute",
        bottom: "32px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        zIndex: 30,
        animation: "bounce 2s infinite",
      }}>
        <span style={{ color: "#5A4A30", fontSize: "10px", letterSpacing: "0.15em", fontFamily: "Arial, sans-serif" }}>SCROLL</span>
        <ChevronDown size={14} color="#C9A84C" />
      </div>
    </div>
  );
};

export default Hero;