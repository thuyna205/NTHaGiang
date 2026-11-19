'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  brandName?: string;
}

export default function Navbar({ brandName = "Hà Giang" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Trang chủ", href: "#hero" },
    { label: "Về tôi", href: "#about" },
    { label: "Điểm nổi bật", href: "#services" },
    { label: "Học vấn", href: "#education" },
    { label: "Dự án", href: "#projects" },
    { label: "Liên hệ", href: "#contact", isCta: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF4EB]/90 backdrop-blur-md shadow-sm border-b border-[#EBDCCB]"
          : "bg-[#FAF4EB]/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 group text-xl md:text-2xl font-bold tracking-tight text-[#2D241E]"
        >
          <span className="p-1.5 rounded-lg bg-[#FFEDD5] text-[#F97316] group-hover:rotate-12 transition-transform">
            <Sparkles className="w-5 h-5" />
          </span>
          <span className="font-['Plus_Jakarta_Sans']">{brandName}</span>
        </a>

        {/* Desktop Nav: Pill Buttons with Thin Border */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-3">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                item.isCta
                  ? "bg-[#F97316] text-white border-[#F97316] hover:bg-[#EA580C] shadow-sm hover:shadow"
                  : "border-[#EBDCCB] text-[#4A3E36] bg-white/60 hover:bg-white hover:border-[#F97316] hover:text-[#F97316]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl border border-[#EBDCCB] text-[#2D241E] hover:text-[#F97316] hover:bg-white/80"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF4EB] border-b border-[#EBDCCB] px-4 pt-2 pb-6 shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-2.5">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium text-center border ${
                  item.isCta
                    ? "bg-[#F97316] text-white border-[#F97316]"
                    : "border-[#EBDCCB] text-[#4A3E36] bg-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
