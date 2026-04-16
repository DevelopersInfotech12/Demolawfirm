"use client";

import React, { useState } from 'react';
import { ChevronDown, Scale, MessageCircle, Phone } from 'lucide-react';

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
    <section className="bg-[#0D0B08] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[#C9A84C] text-xs md:text-[13px] tracking-[0.25em] font-medium mb-6">
            — GET YOUR ANSWERS
          </p>
          
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="h-px bg-[#2A2518] flex-1 max-w-[160px]" />
            <h2 className="text-[#E8E0D0] font-light text-[clamp(32px,5.5vw,48px)] leading-tight">
              Frequently Asked <span className="text-[#C9A84C] italic">Questions</span>
            </h2>
            <div className="h-px bg-[#2A2518] flex-1 max-w-[160px]" />
          </div>

          <p className="text-[#8A7A5A] text-[15px] max-w-lg mx-auto leading-relaxed font-serif italic">
            Everything you need to know about our legal services, processes, and how we can protect your interests.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Sidebar - Contact Box */}
          <div className="lg:col-span-5 lg:sticky lg:top-8">
            <div className="border border-[#2A2518] bg-[#13110D] p-8 md:p-10">
              {/* Gold Accent */}
              <div className="w-8 h-0.5 bg-[#C9A84C] mb-8" />

              <div className="flex items-start gap-5 mb-8">
                <div className="w-12 h-12 border border-[#2A2518] flex items-center justify-center text-[#C9A84C] flex-shrink-0">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <h3 className="text-[#E8E0D0] text-2xl font-light italic">Need Legal Advice?</h3>
                  <p className="text-[#5A4A30] text-xs tracking-widest mt-1">EXPERT GUIDANCE AWAITS</p>
                </div>
              </div>

              <p className="text-[#5A4A30] text-[15px] leading-relaxed font-serif mb-10">
                Can't find what you're looking for? Our experienced legal team is ready to provide personalized consultation tailored to your specific needs.
              </p>

              <div className="space-y-4">
                <button className="w-full bg-[#C9A84C] hover:bg-[#B8973E] text-[#0D0B08] py-4 text-xs tracking-[0.15em] font-semibold transition-all">
                  SCHEDULE CONSULTATION
                </button>
                
                <button 
                  onClick={() => window.location.href = 'tel:+910000000001'}
                  className="w-full border border-[#2A2518] hover:border-[#C9A84C] text-[#8A7A5A] hover:text-[#C9A84C] py-4 flex items-center justify-center gap-3 transition-all"
                >
                  <Phone size={18} />
                  <span>+91-0000000001</span>
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="lg:col-span-7">
            <div className="space-y-px bg-[#2A2518]">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#0D0B08]">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 md:px-10 py-7 md:py-8 flex items-center gap-6 text-left group hover:bg-[#13110D] transition-all"
                  >
                    {/* Icon */}
                    <div className={`w-10 h-10 md:w-11 md:h-11 border flex items-center justify-center flex-shrink-0 transition-all
                      ${openIndex === index 
                        ? 'border-[#C9A84C] text-[#C9A84C]' 
                        : 'border-[#2A2518] text-[#3A3020] group-hover:border-[#C9A84C]/60'}`}
                    >
                      <Scale size={18} />
                    </div>

                    {/* Question */}
                    <h3 className={`flex-1 text-[15.5px] md:text-[16.5px] leading-tight font-light transition-colors
                      ${openIndex === index ? 'text-[#E8E0D0]' : 'text-[#8A7A5A]'}`}>
                      {faq.question}
                    </h3>

                    {/* Chevron */}
                    <div className={`w-8 h-8 border flex items-center justify-center transition-all duration-300
                      ${openIndex === index 
                        ? 'border-[#C9A84C] text-[#C9A84C] rotate-180' 
                        : 'border-[#2A2518] text-[#3A3020] group-hover:border-[#C9A84C]/60'}`}
                    >
                      <ChevronDown size={16} />
                    </div>
                  </button>

                  {/* Answer */}
                  <div 
                    className={`overflow-hidden transition-all duration-400 bg-[#13110D]
                      ${openIndex === index ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-6 md:px-10 pb-8 md:pb-10 pt-2">
                      <div className="h-px bg-[#2A2518] mb-6" />
                      <p className="text-[#5A4A30] text-[15px] leading-relaxed font-serif italic">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;