"use client";
import React, { useState, useEffect } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = ["Home", "About Us", "Pages", "Programs"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out ${
        isScrolled
          ? "py-3 bg-white/70 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.05)] border-b border-black/5"
          : "py-8 bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between w-full max-w-[1800px] mx-auto px-8 lg:px-10">
        {/* Logo */}
        <div
          className={`text-2xl font-bold tracking-tighter transition-all duration-500 ${
            isScrolled ? "text-black scale-95" : "text-white scale-100"
          }`}
        >
          UNIVERSITY.
        </div>

        {/* Minimalist Navigation (No Capsules) */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <button
              key={item}
              className={`group relative py-2 text-md font-bold transition-colors duration-500 flex items-center gap-1 ${
                isScrolled
                  ? "text-black/80 hover:text-black"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item}
              {item === "Pages" && (
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 group-hover:rotate-180 ${isScrolled ? "text-black/50" : "text-white/50"}`}
                />
              )}
              {/* Animated Underline */}
              <span
                className={`absolute bottom-0 left-0 h-[1.5px] w-0 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? "bg-black" : "bg-white"
                }`}
              />
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <Link href="/login">
          <button
            className={`relative cursor-pointer flex items-center gap-2 px-7 py-3 rounded-full font-bold transition-all duration-500 text-xs uppercase tracking-widest overflow-hidden group ${
              isScrolled
                ? "bg-black text-white hover:bg-black/90 shadow-lg"
                : "bg-white text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            }`}
          >
            <span className="relative z-10">Student Portal</span>
            <ArrowUpRight
              size={16}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
