"use client";
import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Menu,
  X,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutus" },
    { name: "Admissions", href: "/admissions" },
    { name: "Academics", href: "/academics" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out ${
          isScrolled
            ? "py-1.5 bg-white/90 backdrop-blur-md shadow-md rounded-b-3xl"
            : "py-3 bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between w-full max-w-[1800px] mx-auto px-6 lg:px-10">
          {/* Logo Section */}
          <Link href="/" className="flex items-center group">
            <div
              className={`relative transition-all duration-300 ${
                isScrolled ? "w-20 h-14" : "w-24 h-16"
              }`}
            >
              <Image
                src="/images/logo.png"
                alt="Afaq School & College Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative py-1 text-sm font-bold transition-colors duration-300 flex items-center gap-1 ${
                    isScrolled
                      ? isActive
                        ? "text-[#9C1D20]"
                        : "text-black/90 hover:text-[#9C1D20]"
                      : isActive
                        ? "text-white"
                        : "text-white/80 hover:text-[#9C1D20]"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] transition-all duration-300 bg-[#9C1D20] ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop CTA Button */}
            <Link href="/login" className="hidden sm:block">
              <button
                className={`relative cursor-pointer flex items-center gap-2 px-5 py-2 rounded-full font-bold transition-all duration-300 text-[11px] uppercase tracking-widest overflow-hidden group ${
                  isScrolled
                    ? "bg-[#9C1D20] text-white hover:bg-[#b32427]"
                    : "bg-white text-[#1F1A55] hover:bg-white/90"
                }`}
              >
                <span className="relative z-10">Student Portal</span>
                <ArrowUpRight
                  size={14}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-full transition-all active:scale-90 ${
                isScrolled
                  ? "bg-gray-100 text-black"
                  : "bg-white/10 text-white backdrop-blur-sm"
              }`}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* ---MOBILE MENU --- */}
      <div
        className={`fixed inset-0 z-[150] md:hidden transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isMobileMenuOpen ? "translate-y-0" : "translate-y-[-100%]"
        }`}
      >
        {/* Deep Navy Background with subtle texture */}
        <div className="absolute inset-0 bg-[#1F1A55] flex flex-col">
          {/* Menu Header with Close Button */}
          <div className="flex items-center justify-between px-8 py-8 border-b border-white/5">
            <div className="flex flex-col">
              <span className="text-white font-black tracking-tighter text-lg leading-none">
                AFAQ SCHOOL
              </span>
              <span className="text-[#9C1D20] text-[8px] font-bold tracking-[0.3em]">
                COLLEGE
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#9C1D20] transition-colors active:scale-90"
            >
              <X size={24} />
            </button>
          </div>

          {/* Nav Links Area */}
          <div className="flex-1 flex flex-col justify-center px-10">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    style={{ transitionDelay: `${index * 50 + 200}ms` }}
                    className={`text-4xl font-black uppercase tracking-tighter transition-all duration-500 transform ${
                      isMobileMenuOpen
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-10"
                    } ${isActive ? "text-[#FACC15]" : "text-white hover:text-[#FACC15]"}`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Socials & Portal Footer */}
          <div
            className={`p-10 transition-all duration-700 delay-500 ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex flex-col gap-8">
              <Link href="/login" className="w-full">
                <button className="w-full bg-[#9C1D20] text-white py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 active:scale-[0.98] transition-all shadow-xl shadow-black/20">
                  Enter Student Portal <ArrowUpRight size={18} />
                </button>
              </Link>

              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  {[Facebook, Instagram, Youtube].map((Icon, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50"
                    >
                      <Icon size={18} />
                    </div>
                  ))}
                </div>
                <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest">
                  Peshawar, PK
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
