"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  const navItems = [
    { name: "HOME", href: "/", sectionId: "hero" },
    { name: "ABOUT US", href: "/about", sectionId: "about" },
    { name: "EXPERTISE", href: "/expertise", sectionId: "expertise" },
    { name: "OUR TEAM", href: "/ourpeople", sectionId: "team" },
    { name: "FAQ", href: "/faq", sectionId: "faq" },
    { name: "CONTACT US", href: "/contactus", sectionId: "contact" },
  ];

  const scrollToSection = (sectionId) => {
    if (!sectionId) return;
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const y = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleNavClick = (item) => {
    setIsMenuOpen(false);
    if (isHomePage && item.sectionId) {
      scrollToSection(item.sectionId);
    } else {
      router.push(item.href);
    }
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div className="w-full sticky top-0 z-50">
      <nav className="bg-[#0D0B08] border-b border-[#2A2518]">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 py-2">
              <Image
                src="/images/logonew.png"
                alt="Asterisms Legal"
                width={150}
                height={90}
                className="cursor-pointer w-[140px] sm:w-[155px] lg:w-[160px] h-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="text-[#A89880] text-[11.5px] tracking-[0.12em] font-medium py-2 px-3 hover:text-[#C9A84C] transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-6">
              <Link href="/contactus" className="group">
                <button className="bg-[#C9A84C] hover:bg-[#B8973E] text-[#0D0B08] px-5 py-3 text-xs font-semibold tracking-[0.15em] transition-all duration-200 flex flex-col items-center rounded-sm">
                  GET CONSULTATION
                  <span className="text-[13px] font-medium mt-0.5 tracking-wider">
                    +91-0000000001
                  </span>
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 text-[#A89880] hover:text-[#C9A84C] transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Slide Down Animation */}
        <div
          className={`lg:hidden bg-[#0D0B08] border-t border-[#C9A84C] overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-8 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="block w-full text-left px-6 py-5 text-base font-medium text-[#A89880] hover:bg-[#1F1B14] hover:text-[#C9A84C] transition-all border border-transparent hover:border-[#2A2518] rounded-lg active:scale-[0.985]"
              >
                {item.name}
              </button>
            ))}

            {/* Mobile Contact Section */}
            <div className="pt-8 border-t border-[#2A2518]">
              <a
                href="tel:+910000000001"
                className="flex items-center gap-3 text-[#C9A84C] py-4 px-6 bg-[#1F1B14] rounded-lg mb-4 hover:bg-[#2A2518] transition-colors"
              >
                <Phone size={22} />
                <div>
                  <p className="text-sm text-[#A89880]">Call us directly</p>
                  <p className="font-semibold text-lg">+91-0000000001</p>
                </div>
              </a>

              <Link href="/contactus" className="block">
                <button className="w-full bg-[#C9A84C] hover:bg-[#B8973E] text-[#0D0B08] py-5 font-semibold tracking-widest text-base rounded-sm transition-all active:scale-[0.985]">
                  GET CONSULTATION
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;