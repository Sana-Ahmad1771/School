"use client";
import React from "react";
import { Target, Eye, ShieldCheck, Globe } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Section Title */}
        <div className="mb-12 md:mb-20 text-center lg:text-left">
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-[#9C1D20] block mb-4">
            Purpose & Direction
          </span>
          <h2 className="text-[32px] md:text-[50px] lg:text-[60px] font-bold text-[#1F1A55] leading-tight md:leading-none tracking-tighter">
            Our Core <span className="text-[#9C1D20]">Philosophy.</span>
          </h2>
        </div>

        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
          
          {/* Mission Block */}
          <div className="bg-[#1F1A55] p-8 md:p-16 lg:p-20 relative group overflow-hidden">
            {/* Background Icon */}
            <div className="absolute -top-5 -right-5 md:top-10 md:right-10 opacity-10 group-hover:opacity-20 transition-opacity">
              <Target size={120} className="text-white md:w-[150px] md:h-[150px]" />
            </div>
            
            <div className="relative z-10">
              {/* Fixed Icon: Used className for responsive size instead of md:size */}
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#9C1D20] rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-lg">
                <Target className="text-white w-7 h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 uppercase tracking-tight">
                Our Mission
              </h3>
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
                To provide a high-quality, inclusive educational environment that 
                empowers students with critical thinking, academic excellence, 
                and strong moral character rooted in Islamic and local cultural values.
              </p>
              <ul className="space-y-4">
                {["Academic Excellence", "Character Building", "Social Responsibility"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/50 font-bold uppercase text-[10px] md:text-xs tracking-widest">
                    <ShieldCheck size={16} className="text-[#9C1D20] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Vision Block */}
          <div className="bg-[#F8F9FB] p-8 md:p-16 lg:p-20 relative group border-t lg:border-t-0 lg:border-l border-gray-100 overflow-hidden">
            {/* Background Icon */}
            <div className="absolute -top-5 -right-5 md:top-10 md:right-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <Eye size={120} className="text-[#1F1A55] md:w-[150px] md:h-[150px]" />
            </div>

            <div className="relative z-10">
              {/* Fixed Icon: Removed md:size and used className */}
              <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-xl border border-gray-100">
                <Eye className="text-[#1F1A55] w-7 h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#1F1A55] mb-4 md:mb-6 uppercase tracking-tight">
                Our Vision
              </h3>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8">
                To be a leading institution in Peshawar recognized for producing 
                enlightened citizens who are globally competitive, technologically 
                proficient, and ethically grounded.
              </p>
              <ul className="space-y-4">
                {["Global Perspective", "Future-Ready Skills", "Ethical Leadership"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#1F1A55]/40 font-bold uppercase text-[10px] md:text-xs tracking-widest">
                    <Globe size={16} className="text-[#9C1D20] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Quote / Tagline */}
        <div className="mt-12 md:mt-20 text-center max-w-3xl mx-auto">
          <p className="text-lg md:text-2xl italic font-medium text-gray-400 leading-relaxed px-4">
            "We don't just teach students how to make a living, <br className="hidden md:block"/> 
            we teach them <span className="text-[#1F1A55] font-bold">how to make a difference.</span>"
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;