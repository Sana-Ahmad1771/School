"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          
          {/* Left Side: Title */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="w-10 h-[2px] bg-[#9C1D20] mb-6" />
            <h2 className="text-[clamp(40px,10vw,80px)] font-bold leading-[0.9] tracking-tighter text-[#1F1A55] uppercase">
              About our <br /> 
              <span className="text-[#9C1D20]">School</span>
            </h2>
          </div>

          {/* Right Side: Description & CTA */}
          <div className="lg:col-span-7 mt-4 lg:mt-0">
            <p className="text-xl sm:text-2xl md:text-[36px] font-semibold leading-[1.2] text-[#1F1A55] tracking-tight mb-8 md:mb-10">
              Afaq School & College Gulabad is committed to providing quality
              education in a secure and disciplined environment. We believe in
              building strong academic foundations along with moral and personal
              development.
            </p>

            <p className="text-base md:text-xl text-gray-600 mb-10 md:mb-12 max-w-2xl leading-relaxed">
              Our dedicated female teaching staff ensures personal attention and
              continuous guidance for every student, nurturing unique potential
              and preparing them for future success.
            </p>

            <Link href="/about" className="inline-block w-full sm:w-auto">
              <button className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-[#1F1A55] text-white px-2 py-3 md:px-8 md:py-5 rounded-full font-bold transition-all hover:bg-[#15123d] hover:scale-105 shadow-xl shadow-[#1F1A55]/20">
                <span className="text-sm md:text-lg uppercase tracking-wider">
                  Learn More About Us
                </span>
                <div className="bg-white/10 rounded-full p-1 group-hover:bg-white/20 transition-colors">
                  <ArrowUpRight size={22} className="w-4 h-4 md:w-5 md:h-5" />
                </div>
              </button>
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;