"use client";

import React from 'react';
import { Award, BookOpen, Mail, Phone, Linkedin, ArrowRight } from 'lucide-react';

const ExpertAttorneys = () => {
  const attorneys = [
    {
      id: 1,
      name: "Demo 1",
      title: "Advocate & Insolvency Professional",
      image: "/images/blog4.jpg",
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
      image: "/images/blog4.jpg",
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
    <section className="bg-[#0D0B08] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[#C9A84C] text-xs md:text-[13px] tracking-[0.25em] font-medium mb-6">
            — THE TEAM
          </p>
          
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="h-px bg-[#2A2518] flex-1 max-w-[160px]" />
            <h2 className="text-[#E8E0D0] font-light text-[clamp(32px,5.5vw,48px)] leading-tight">
              Meet Our Expert <span className="text-[#C9A84C] italic">Attorneys</span>
            </h2>
            <div className="h-px bg-[#2A2518] flex-1 max-w-[160px]" />
          </div>

          <p className="text-[#8A7A5A] text-[15px] max-w-lg mx-auto leading-relaxed font-serif italic">
            Our distinguished legal professionals bring decades of combined experience in complex litigation, corporate law, and specialized legal services.
          </p>
        </div>

        {/* Attorneys Grid - Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#2A2518]">
          {attorneys.map((attorney) => (
            <div
              key={attorney.id}
              className="bg-[#0D0B08] p-8 md:p-12 lg:p-14 group"
            >
              {/* Gold Top Accent */}
              <div className="w-8 h-0.5 bg-[#C9A84C] mb-8" />

              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Image */}
                <div className="relative flex-shrink-0 mx-auto md:mx-0">
                  <div className="w-24 h-24 md:w-28 md:h-28 overflow-hidden border border-[#2A2518]">
                    <img
                      src={attorney.image}
                      alt={attorney.name}
                      className="w-full h-full object-cover filter brightness-90 sepia-[0.2]"
                    />
                  </div>
                  {/* Award Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#C9A84C] flex items-center justify-center shadow-lg">
                    <Award size={16} className="text-[#0D0B08]" />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-[#E8E0D0] text-2xl md:text-3xl font-light italic mb-2">
                    {attorney.name}
                  </h3>
                  
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#13110D] border border-[#2A2518] mb-6">
                    <BookOpen size={14} className="text-[#C9A84C]" />
                    <span className="text-[#8A7A5A] text-xs tracking-widest font-medium">
                      {attorney.title}
                    </span>
                  </div>

                  {/* Experience */}
                  <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                    <span className="text-[#C9A84C] text-3xl font-light">{attorney.experience}</span>
                    <div className="h-5 w-px bg-[#2A2518]" />
                    <span className="text-[#5A4A30] text-xs tracking-[0.15em] uppercase">Experience</span>
                  </div>

                  {/* Description */}
                  <p className="text-[#5A4A30] text-[15px] leading-relaxed font-serif italic mb-8">
                    {attorney.description}
                  </p>

                  {/* Specialties */}
                  <div className="mb-10">
                    <p className="text-[#3A3020] text-xs tracking-widest mb-3">AREAS OF EXPERTISE</p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {attorney.specialties.map((specialty, i) => (
                        <span
                          key={i}
                          className="px-4 py-1.5 text-xs border border-[#2A2518] text-[#8A7A5A]"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="pt-8 border-t border-[#2A2518] flex flex-wrap gap-4 justify-center md:justify-start">
                <button
                  onClick={() => window.location.href = `tel:${attorney.contact.phone}`}
                  className="flex items-center gap-3 bg-[#C9A84C] hover:bg-[#B8973E] text-[#0D0B08] px-6 py-3.5 text-xs tracking-widest font-semibold transition-all active:scale-95"
                >
                  <Phone size={16} />
                  {attorney.contact.phone}
                  <ArrowRight size={14} />
                </button>

                <button
                  onClick={() => window.location.href = `mailto:${attorney.contact.email}`}
                  className="w-12 h-12 border border-[#2A2518] hover:border-[#C9A84C] text-[#8A7A5A] hover:text-[#C9A84C] flex items-center justify-center transition-all"
                >
                  <Mail size={18} />
                </button>

                <a
                  href={attorney.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-[#2A2518] hover:border-[#C9A84C] text-[#8A7A5A] hover:text-[#C9A84C] flex items-center justify-center transition-all"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 flex justify-center">
          <div className="h-px bg-[#2A2518] w-full max-w-md" />
        </div>
      </div>
    </section>
  );
};

export default ExpertAttorneys;