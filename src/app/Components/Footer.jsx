"use client";

import React from 'react';
import { Phone, Mail, Instagram, Linkedin, MapPin, Clock, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0D0B08]">
      
      {/* CTA Section */}
      <div className="bg-[#13110D] border-t-2 border-[#C9A84C] border-b border-[#2A2518] py-16 md:py-20 px-6 md:px-12 text-center">
        <p className="text-[#C9A84C] text-xs md:text-[13px] tracking-[0.25em] font-medium mb-6">
          — READY TO BEGIN
        </p>
        
        <h2 className="text-[#E8E0D0] font-light text-[clamp(28px,5vw,44px)] leading-tight mb-6">
          Ready to Resolve Your{" "}
          <span className="text-[#C9A84C] italic">Legal Matters?</span>
        </h2>
        
        <p className="text-[#8A7A5A] text-[15px] max-w-md mx-auto leading-relaxed font-serif italic mb-10">
          Get expert legal consultation from our experienced team of attorneys.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-[#C9A84C] hover:bg-[#B8973E] text-[#0D0B08] px-10 py-4 text-xs tracking-[0.18em] font-semibold transition-all w-full sm:w-auto">
            SCHEDULE CONSULTATION
          </button>
          
          <a
            href="tel:+910000000001"
            className="flex items-center justify-center gap-3 border border-[#2A2518] hover:border-[#C9A84C] text-[#8A7A5A] hover:text-[#C9A84C] px-8 py-4 text-sm font-serif transition-all w-full sm:w-auto"
          >
            <Phone size={18} className="text-[#C9A84C]" />
            +91-0000000001 / +91-0000000002
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-20">
        
        {/* Top Row - Logo + Stats */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 border-b border-[#2A2518] pb-12 mb-12">
          
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-28">
                <img 
                  src="/images/blog4.jpg" 
                  alt="Demo Legal" 
                  className="w-full" 
                />
              </div>
              <div>
                <h3 className="text-[#E8E0D0] text-xl font-light tracking-wide">DEMO LEGAL</h3>
                <p className="text-[#C9A84C] text-[10px] tracking-[0.2em] font-medium">PROFESSIONAL LAW SERVICES</p>
              </div>
            </div>
            
            <p className="text-[#5A4A30] text-[15px] leading-relaxed font-serif italic">
              Providing comprehensive legal solutions through expert guidance and strategic counsel for businesses and individuals.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 md:gap-16">
            <div className="text-center">
              <div className="w-14 h-14 border border-[#2A2518] flex items-center justify-center text-[#C9A84C] mx-auto mb-4">
                <Clock size={24} />
              </div>
              <p className="text-[#E8E0D0] text-sm">24/7 Support</p>
              <p className="text-[#5A4A30] text-xs tracking-widest mt-1">ALWAYS AVAILABLE</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 border border-[#2A2518] flex items-center justify-center text-[#C9A84C] mx-auto mb-4">
                <MapPin size={24} />
              </div>
              <p className="text-[#E8E0D0] text-sm">Delhi Office</p>
              <p className="text-[#5A4A30] text-xs tracking-widest mt-1">DEFENCE COLONY</p>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
          
          {/* Practice Areas */}
          <div>
            <h4 className="text-[#C9A84C] text-xs tracking-[0.25em] font-medium mb-6">PRACTICE AREAS</h4>
            <ul className="space-y-3">
              {[
                { name: "Bankruptcy & Insolvency Law", link: "/bankruptcyandInsolvency" },
                { name: "Banking Law", link: "/bankinglaw" },
                { name: "Commercial & Corporate Law", link: "/commercialandcorporate" },
                { name: "Arbitration Law", link: "/arbitrationlaw" }
              ].map((item, i) => (
                <li key={i}>
                  <a 
                    href={item.link}
                    className="text-[#5A4A30] hover:text-[#C9A84C] text-[15px] font-serif italic transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#C9A84C] text-xs tracking-[0.25em] font-medium mb-6">COMPANY</h4>
            <ul className="space-y-3">
              {["About Us", "Our Team", "Practice Areas", "Careers"].map((item, i) => (
                <li key={i}>
                  <a 
                    href="#"
                    className="text-[#5A4A30] hover:text-[#C9A84C] text-[15px] font-serif italic transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#C9A84C] text-xs tracking-[0.25em] font-medium mb-6">CONTACT</h4>
            <div className="space-y-6">
              <div className="flex gap-3">
                <Phone size={18} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+910000000001" className="block text-[#5A4A30] hover:text-[#C9A84C] text-[15px] transition-colors">+91-0000000001</a>
                  <a href="tel:+910000000002" className="block text-[#5A4A30] hover:text-[#C9A84C] text-[15px] transition-colors">+91-0000000002</a>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail size={18} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:demolegal@gmail.com" 
                  className="text-[#5A4A30] hover:text-[#C9A84C] text-[15px] transition-colors"
                >
                  demolegal@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-[#C9A84C] text-xs tracking-[0.25em] font-medium mb-6">FOLLOW US</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/demolegal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-[#2A2518] hover:border-[#C9A84C] text-[#5A4A30] hover:text-[#C9A84C] flex items-center justify-center transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/demolegal/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-[#2A2518] hover:border-[#C9A84C] text-[#5A4A30] hover:text-[#C9A84C] flex items-center justify-center transition-all"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-[#2A2518] py-6 px-6 md:px-12 text-center">
        <p className="text-[#3A3020] text-xs tracking-widest">
          © 2025 <span className="text-[#C9A84C]">Demo Legal</span> · 
          Designed by{" "}
          <a 
            href="https://developersinfotech.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#C9A84C] hover:underline"
          >
            DEVELOPERS INFOTECH PVT LTD
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;