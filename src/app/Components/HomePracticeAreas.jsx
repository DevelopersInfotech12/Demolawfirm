'use client';

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
      description: "Deep expertise in SARFAESI, Recovery of Debts and Bankruptcy Act. We represent banks and financial institutions with strong regulatory knowledge.",
    },
    {
      id: 3,
      icon: DollarSign,
      title: "Commercial, Corporate & Companies Law",
      description: "Comprehensive legal services in corporate transactions, business agreements, and company law matters across various forums.",
    },
    {
      id: 4,
      icon: GraduationCap,
      title: "Arbitration Law",
      description: "End-to-end arbitration services — from drafting agreements to representation in domestic and international arbitral proceedings.",
    }
  ];

  return (
    <section className="bg-[#0D0B08] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[#C9A84C] text-xs md:text-[13px] tracking-[0.25em] font-medium mb-6">
            — AREAS OF PRACTICE
          </p>

          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="h-px bg-[#2A2518] flex-1 max-w-[160px]" />
            <h2 className="text-[#E8E0D0] font-light text-[clamp(32px,5.5vw,48px)] leading-tight">
              Our Practice Areas
            </h2>
            <div className="h-px bg-[#2A2518] flex-1 max-w-[160px]" />
          </div>

          <p className="text-[#5A4A30] text-lg italic font-serif">Field of Work</p>
          
          <p className="text-[#8A7A5A] text-[15px] max-w-md mx-auto mt-4 leading-relaxed font-serif">
            Experience the difference that comes with choosing a law firm dedicated to excellence, integrity, and results.
          </p>
        </div>

        {/* Practice Areas Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#2A2518]">
          {practiceAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div
                key={area.id}
                className="group bg-[#0D0B08] p-8 md:p-10 hover:bg-[#13110D] transition-all duration-300 flex flex-col h-full"
              >
                {/* Icon */}
                <div className="w-14 h-14 border border-[#2A2518] group-hover:border-[#C9A84C] flex items-center justify-center text-[#C9A84C] transition-colors mb-8">
                  <IconComponent size={24} />
                </div>

                {/* Gold Accent Line */}
                <div className="h-px w-6 bg-[#C9A84C] group-hover:w-12 transition-all duration-300 mb-6" />

                {/* Title */}
                <h3 className="text-[#E8E0D0] text-[17px] leading-tight font-light italic mb-5">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-[#5A4A30] text-[14.5px] leading-relaxed font-serif flex-grow">
                  {area.description}
                </p>

                {/* Learn More */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#C9A84C] text-xs tracking-[0.2em] font-medium mt-8 group-hover:gap-3 transition-all border-b border-transparent hover:border-[#C9A84C] pb-1 w-fit"
                >
                  LEARN MORE
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 flex justify-center">
          <div className="h-px bg-[#2A2518] w-full max-w-md" />
        </div>
      </div>
    </section>
  );
};

export default HomePracticeAreas;