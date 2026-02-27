"use client";
import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
// 1. Import usePathname to detect current location
import { usePathname } from "next/navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // 2. Get the current URL path

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutus" },
    { name: "Admissions", href: "/admissions" },
    { name: "Academics", href: "/academics" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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

        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            // 3. Check if this link is the current active page
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative py-1 text-sm font-bold transition-colors duration-300 flex items-center gap-1 ${
                  isScrolled
                    ? isActive ? "text-[#9C1D20]" : "text-black/90 hover:text-[#9C1D20]"
                    : isActive ? "text-white" : "text-white/80 hover:text-[#9C1D20]"
                }`}
              >
                {item.name}
                {/* 4. Logic for the Underline: w-full if active, w-0 but group-hover:w-full if not */}
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] transition-all duration-300 bg-[#9C1D20] ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <Link href="/login">
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
      </div>
    </nav>
  );
};

export default Header;