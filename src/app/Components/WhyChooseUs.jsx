'use client';

import React, { useState, useEffect } from 'react';
import { Scale, Award, Target, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Award size={22} />,
      title: "Best Law Practices",
      description: "We combine unparalleled expertise with unwavering dedication, delivering comprehensive legal solutions tailored to each client's unique needs."
    },
    {
      icon: <Scale size={22} />,
      title: "Efficiency & Trust",
      description: "Our integrity is the cornerstone of our practice — built on transparency, trustworthiness, and steadfast reliability."
    },
    {
      icon: <Target size={22} />,
      title: "Results You Deserve",
      description: "We consistently achieve impactful results through strategic acumen and sharp legal prowess."
    },
    {
      icon: <Users size={22} />,
      title: "Client-Centered Approach",
      description: "Clients are at the heart of everything we do — offering personalized guidance and unwavering support."
    }
  ];

  return (
    <section className="bg-[#0D0B08] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[#C9A84C] text-xs md:text-[13px] tracking-[0.25em] font-medium mb-6">
            — OUR COMMITMENT
          </p>
          
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="h-px bg-[#2A2518] flex-1 max-w-[160px]" />
            <h2 className="text-[#E8E0D0] font-light text-[clamp(32px,5.5vw,48px)] leading-tight">
              Why Choose <span className="text-[#C9A84C] italic">Us</span>
            </h2>
            <div className="h-px bg-[#2A2518] flex-1 max-w-[160px]" />
          </div>

          <p className="text-[#5A4A30] text-lg italic font-serif">Legal Excellence</p>
          <p className="text-[#8A7A5A] text-[15px] max-w-md mx-auto mt-4 leading-relaxed">
            Experience the difference that comes with choosing a law firm dedicated to excellence, integrity, and results.
          </p>
        </div>

        {/* Main Content - Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left - Features List */}
          <div className="space-y-10 md:space-y-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex gap-6 transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Icon Box */}
                <div className="flex-shrink-0 w-12 h-12 border border-[#2A2518] flex items-center justify-center text-[#C9A84C] mt-1 hover:border-[#C9A84C] transition-colors">
                  {feature.icon}
                </div>

                {/* Text Content */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-5 h-px bg-[#C9A84C]" />
                    <h3 className="text-[#E8E0D0] text-[17px] font-light italic">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-[#5A4A30] text-[15px] leading-relaxed font-serif">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Visual Card */}
          <div className={`relative transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            
            {/* Main Card */}
            <div className="border border-[#2A2518] overflow-hidden relative bg-[#0D0B08]">
              {/* Gold Corner Accents */}
              <div className="absolute -top-2 -left-2 w-9 h-9 border-t-2 border-l-2 border-[#C9A84C] z-10" />
              <div className="absolute -bottom-2 -right-2 w-9 h-9 border-b-2 border-r-2 border-[#C9A84C] z-10" />

              {/* Card Header */}
              <div className="bg-[#13110D] px-8 py-7 flex items-center gap-4 border-b border-[#2A2518]">
                <Scale size={26} className="text-[#C9A84C]" />
                <div>
                  <h3 className="text-[#E8E0D0] text-xl font-light italic">Demo Law Firm</h3>
                  <p className="text-[#5A4A30] text-xs tracking-widest mt-1">YOUR TRUSTED LEGAL PARTNER</p>
                </div>
              </div>

              {/* Image Section */}
              <div className="relative h-[340px] md:h-[380px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop"
                  alt="Legal team in meeting"
                  className="w-full h-full object-cover filter brightness-75 sepia-[0.2]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0805] via-[#0A0805]/70 to-transparent" />
                
                <div className="absolute bottom-8 left-8">
                  <p className="text-[#E8E0D0] text-lg font-light italic">Professional Legal Services</p>
                  <p className="text-[#8A7A5A] text-xs tracking-widest mt-1">EXPERT CONSULTATION & REPRESENTATION</p>
                </div>
              </div>
            </div>

            {/* Floating Quote Card */}
            <div className="absolute -top-8 -right-4 md:-right-8 bg-[#13110D] border border-[#2A2518] border-l-2 border-l-[#C9A84C] p-6 max-w-[260px] shadow-2xl">
              <p className="text-[#8A7A5A] text-[13.5px] leading-relaxed font-serif italic">
                "Prior approval of CCI under Section 31(4) — ensuring legal compliance."
              </p>
              <span className="block mt-4 text-[#C9A84C] text-[10px] tracking-[0.12em] font-medium">
                LEGAL COMPLIANCE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;