'use client';

import { useState, useEffect } from 'react';
import { Scale, Shield, Gavel, TrendingUp } from 'lucide-react';

const LearnAbout = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    { icon: <Scale size={20} />, title: 'IBC & Restructuring Experts', desc: 'Proven excellence in insolvency' },
    { icon: <Shield size={20} />, title: 'Strategic Litigation Practice', desc: 'Supreme Court and NCLTs' },
    { icon: <Gavel size={20} />, title: 'Focused Expertise', desc: 'Personalized strategies' },
    { icon: <TrendingUp size={20} />, title: 'Client-Centric Solutions', desc: 'Business-driven advice' }
  ];

  return (
    <section className="bg-[#0D0B08] py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        
        {/* Header */}
        <div 
          className={`text-center mb-16 md:mb-20 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-[#C9A84C] text-xs md:text-[13px] tracking-[0.25em] font-medium mb-6">
            — TRUSTED LEGAL EXCELLENCE
          </p>

          <div className="flex items-center justify-center gap-6 md:gap-8 mb-4">
            <div className="h-px bg-[#2A2518] flex-1 max-w-[180px]" />
            <h2 className="text-[#E8E0D0] font-light text-[clamp(32px,5.5vw,52px)] leading-tight">
              Why <span className="text-[#C9A84C] italic">Demo Law Firm</span>?
            </h2>
            <div className="h-px bg-[#2A2518] flex-1 max-w-[180px]" />
          </div>

          <p className="text-[#5A4A30] text-[15px] md:text-base max-w-xl mx-auto leading-relaxed font-serif italic">
            Specialized in IBC, corporate restructuring, and strategic litigation with precision, integrity, and outcome-oriented advocacy
          </p>
        </div>

        {/* Two Column Layout - Stacks on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left - Image Section */}
          <div className={`relative transition-all duration-800 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            
            <div className="relative border border-[#2A2518] aspect-[4/4] md:aspect-square overflow-hidden">
              {/* Gold corner accents */}
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-[#C9A84C] z-10" />
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-[#C9A84C] z-10" />

              <img
                src="/images/img1.jpg"
                alt="Demo Law Firm Team"
                className="w-full h-full object-cover filter brightness-90 sepia-[0.15]"
              />

              {/* Years Badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#C9A84C] px-7 py-5 text-center shadow-xl">
                <div className="text-4xl md:text-5xl font-bold text-[#0D0B08] leading-none">21+</div>
                <div className="text-[10px] md:text-xs font-medium tracking-widest text-[#0D0B08] mt-1">YEARS</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className={`transition-all duration-800 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            
            <div className="space-y-8 text-[#8A7A5A]">
              <p className="text-[15.5px] leading-relaxed">
                <span className="text-[#C9A84C] italic font-medium">Demo Law Firm</span> is a specialized law firm focused on Insolvency and Bankruptcy Code (IBC), corporate restructuring, and high-stakes commercial litigation. 
              </p>

              <p className="text-[15.5px] leading-relaxed">
                Our experienced advocates deliver strategic, results-driven solutions before the Supreme Court, High Courts, NCLTs, and various Tribunals.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-7 bg-[#13110D] border border-[#2A2518] hover:border-[#C9A84C] transition-all duration-300 hover:bg-[#1A170F]"
                >
                  <div className="text-[#C9A84C] mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h4 className="text-[#E8E0D0] font-medium text-[14.5px] tracking-wide mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-[#5A4A30] text-sm font-serif italic">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnAbout;