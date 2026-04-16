"use client";

import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("HOME");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const aboutDropdownRef = useRef(null);
  const router = useRouter();

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about", hasDropdown: true },
    { name: "EXPERTISE", href: "#", hasDropdown: true },
    { name: "OUR TEAM", href: "/ourpeople" },
    { name: "CAREERS", href: "/careers" },
    { name: "CONTACT US", href: "/contactus" },
  ];

  const aboutDropdownItems = [
    { name: "Our Attorneys", href: "/attorneys" },
    { name: "Asterisms Legal", href: "/about" }
  ];

  const practiceAreaItems = [
    { name: "Insolvency and Bankruptcy", href: "/bankruptcyandInsolvency" },
    { name: "Banking Law", href: "/bankinglaw" },
    { name: "Commercial, Corporate & Company Law", href: "/commercialandcorporate" },
    { name: "Matrimonial / Family Law", href: "/familylaw" },
    { name: "Criminal", href: "/criminallaw" },
    { name: "Civil", href: "/civillaw" },
    { name: "Arbitration", href: "/companieslaw" }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isDesktop = window.innerWidth >= 1024;
      if (isDesktop) {
        const clickedInside =
          (dropdownRef.current && dropdownRef.current.contains(event.target)) ||
          (aboutDropdownRef.current && aboutDropdownRef.current.contains(event.target));
        if (!clickedInside) setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (menuName, e) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
    setActiveTab(menuName);
  };

  const handleDropdownItemClick = (href) => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
    router.push(href);
  };

  const handleNavItemClick = (itemName) => {
    setActiveTab(itemName);
    setActiveDropdown(null);
  };

  const getDropdownItems = (menuName) => {
    if (menuName === "ABOUT US") return aboutDropdownItems;
    if (menuName === "EXPERTISE") return practiceAreaItems;
    return [];
  };

  return (
    <div className="w-full">
      {/* Top tagline bar */}
      {/* <div style={{ backgroundColor: "#0D0B08", borderBottom: "1px solid #2A2518" }}>
        <div className="max-w-8xl mx-auto px-8">
          <p style={{ color: "#8A7A5A", fontSize: "11px", letterSpacing: "0.15em", padding: "8px 0" }}>
            — ASTERISMS LAW FIRM · NEW DELHI
          </p>
        </div>
      </div> */}

      <nav style={{ backgroundColor: "#0D0B08", borderBottom: "1px solid #2A2518" }}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="flex flex-col items-center cursor-pointer">
                <Image
                  src="/images/logo.png"
                  alt="Asterisms Legal Logo"
                  width={160}
                  height={360}
                  className="rounded-md"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  ref={item.name === "EXPERTISE" ? dropdownRef : item.name === "ABOUT US" ? aboutDropdownRef : null}
                >
                  {item.hasDropdown ? (
                    <button
                      onClick={(e) => toggleDropdown(item.name, e)}
                      style={{
                        color: activeDropdown === item.name ? "#C9A84C" : "#A89880",
                        backgroundColor: "transparent",
                        border: "none",
                        fontSize: "11px",
                        letterSpacing: "0.12em",
                        fontWeight: "500",
                        padding: "8px 16px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = "#C9A84C"}
                      onMouseLeave={e => { if (activeDropdown !== item.name) e.currentTarget.style.color = "#A89880"; }}
                    >
                      {item.name}
                      <ChevronDown
                        style={{
                          width: "12px",
                          height: "12px",
                          color: "#C9A84C",
                          transform: activeDropdown === item.name ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s"
                        }}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => handleNavItemClick(item.name)}
                      style={{
                        color: activeTab === item.name ? "#C9A84C" : "#A89880",
                        fontSize: "11px",
                        letterSpacing: "0.12em",
                        fontWeight: "500",
                        padding: "8px 16px",
                        textDecoration: "none",
                        display: "block",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = "#C9A84C"}
                      onMouseLeave={e => { if (activeTab !== item.name) e.currentTarget.style.color = "#A89880"; }}
                    >
                      {item.name}
                    </Link>
                  )}

                  {item.hasDropdown && activeDropdown === item.name && (
                    <div style={{
                      position: "absolute",
                      top: "100%",
                      left: "0",
                      marginTop: "8px",
                      backgroundColor: "#13110D",
                      border: "1px solid #2A2518",
                      borderTop: "2px solid #C9A84C",
                      padding: "8px 0",
                      zIndex: 50,
                      minWidth: "220px",
                    }}>
                      {getDropdownItems(item.name).map((dropdownItem, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleDropdownItemClick(dropdownItem.href)}
                          style={{
                            display: "block",
                            width: "100%",
                            textAlign: "left",
                            padding: "10px 20px",
                            fontSize: "11px",
                            letterSpacing: "0.1em",
                            color: "#A89880",
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            transition: "color 0.2s, background 0.2s",
                          }}
                          onMouseEnter={e => { e.currentTarget.style.color = "#C9A84C"; e.currentTarget.style.backgroundColor = "#1A1814"; }}
                          onMouseLeave={e => { e.currentTarget.style.color = "#A89880"; e.currentTarget.style.backgroundColor = "transparent"; }}
                        >
                          {dropdownItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link href="/contactus" className="hidden lg:block">
              <button
                style={{
                  backgroundColor: "#C9A84C",
                  color: "#0D0B08",
                  padding: "10px 28px",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  fontWeight: "600",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "#B8973E"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "#C9A84C"}
              >
                GET CONSULTATION
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ color: "#A89880", background: "transparent", border: "1px solid #2A2518", padding: "8px" }}
              className="lg:hidden"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div style={{ backgroundColor: "#0D0B08", borderTop: "2px solid #C9A84C", padding: "24px" }}>
            {navItems.map((item, idx) => (
              <div key={idx} style={{ marginBottom: "4px" }}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={(e) => toggleDropdown(item.name, e)}
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "14px 16px",
                        fontSize: "11px",
                        letterSpacing: "0.12em",
                        color: activeDropdown === item.name ? "#C9A84C" : "#A89880",
                        background: "transparent",
                        border: "1px solid #2A2518",
                        cursor: "pointer",
                      }}
                    >
                      {item.name}
                      <ChevronDown style={{ width: "12px", height: "12px", color: "#C9A84C", transform: activeDropdown === item.name ? "rotate(180deg)" : "rotate(0)" }} />
                    </button>
                    {activeDropdown === item.name && (
                      <div style={{ marginLeft: "16px", marginTop: "4px" }}>
                        {getDropdownItems(item.name).map((dropdownItem, i) => (
                          <button
                            key={i}
                            onClick={() => handleDropdownItemClick(dropdownItem.href)}
                            style={{
                              display: "block",
                              width: "100%",
                              textAlign: "left",
                              padding: "10px 16px",
                              fontSize: "11px",
                              letterSpacing: "0.1em",
                              color: "#8A7A5A",
                              background: "transparent",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            {dropdownItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => { handleNavItemClick(item.name); setIsMenuOpen(false); }}
                    style={{
                      display: "block",
                      padding: "14px 16px",
                      fontSize: "11px",
                      letterSpacing: "0.12em",
                      color: activeTab === item.name ? "#C9A84C" : "#A89880",
                      border: "1px solid #2A2518",
                      textDecoration: "none",
                      marginBottom: "4px",
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link href="/contactus" style={{ display: "block", marginTop: "16px" }}>
              <button style={{
                width: "100%",
                backgroundColor: "#C9A84C",
                color: "#0D0B08",
                padding: "14px",
                fontSize: "11px",
                letterSpacing: "0.15em",
                fontWeight: "600",
                border: "none",
                cursor: "pointer",
              }}>
                GET CONSULTATION
              </button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;