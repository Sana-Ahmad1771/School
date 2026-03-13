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

  const socialLinks = [
    { Icon: Facebook, href: "#" },
    { Icon: Instagram, href: "#" },
    { Icon: Youtube, href: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        className={`fixed top-0 left-0 right-0 z-[200] isolate transition-all duration-300 ease-in-out ${
          isScrolled
            ? "py-1.5 bg-white shadow-md rounded-b-3xl"
            : "py-3 bg-transparent"
        }`}
      >
        {isScrolled && (
          <div className="absolute inset-0 backdrop-blur-md rounded-b-3xl -z-10" />
        )}

        <div className="flex items-center justify-between w-full max-w-[1800px] mx-auto px-6 lg:px-10 pointer-events-auto">
          {/* Logo Section */}
          <Link href="/" className="flex items-center group relative z-[210]">
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

          <div className="flex items-center gap-4 relative z-[210]">
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

            {/* Mobile Toggle */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(true);
              }}
              className={`md:hidden relative z-[220] p-3 rounded-full transition-all active:scale-90 flex items-center justify-center cursor-pointer pointer-events-auto touch-manipulation ${
                isScrolled
                  ? "bg-[#1F1A55] text-white shadow-lg"
                  : "bg-white/20 text-white border border-white/20"
              }`}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div
        className={`fixed inset-0 z-[300] md:hidden transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Changed to overflow-y-auto to allow scrolling on small phones */}
        <div className="absolute inset-0 bg-[#1F1A55] flex flex-col overflow-y-auto overflow-x-hidden">
          
          {/* Menu Header (Sticky-like behavior) */}
          <div className="flex-none flex items-center justify-between px-8 py-8 border-b border-white/5">
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

          {/* Nav Links Area (Flex-1 ensures it pushes footer down) */}
          <div className="flex-1 flex flex-col justify-center px-10 py-10">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ transitionDelay: `${index * 50 + 200}ms` }}
                    className={`text-4xl font-black uppercase tracking-tighter transition-all duration-500 transform ${
                      isMobileMenuOpen
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-10"
                    } ${isActive ? "text-[#FACC15]" : "text-white"}`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Socials & Portal Footer (Flex-none prevents it from shrinking) */}
          <div
            className={`flex-none p-10 transition-all duration-700 delay-500 ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex flex-col gap-8">
              <Link
                href="/login"
                className="w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <button className="w-full bg-[#9C1D20] text-white py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 active:scale-[0.98] transition-all shadow-xl shadow-black/20">
                  Enter Student Portal <ArrowUpRight size={18} />
                </button>
              </Link>

              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  {socialLinks.map(({ Icon }, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-all cursor-pointer"
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