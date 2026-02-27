"use client";
import React from "react";
import { Target, Eye, ShieldCheck, Globe } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-10">
        
        {/* Section Title */}
        <div className="mb-20">
          <span className="text-xs font-black uppercase tracking-[0.4em] text-[#9C1D20] block mb-4">
            Purpose & Direction
          </span>
          <h2 className="text-[40px] md:text-[60px] font-bold text-[#1F1A55] leading-none tracking-tighter">
            Our Core <span className="text-[#9C1D20]">Philosophy.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 rounded-[3rem] overflow-hidden shadow-2xl">
          
          {/* Mission Block */}
          <div className="bg-[#1F1A55] p-12 md:p-20 relative group">
            <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
              <Target size={150} className="text-white" />
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#9C1D20] rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-4xl font-bold text-white mb-6 uppercase tracking-tight">
                Our Mission
              </h3>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                To provide a high-quality, inclusive educational environment that 
                empowers students with critical thinking, academic excellence, 
                and strong moral character rooted in Islamic and local cultural values.
              </p>
              <ul className="space-y-4">
                {["Academic Excellence", "Character Building", "Social Responsibility"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/50 font-bold uppercase text-xs tracking-widest">
                    <ShieldCheck size={16} className="text-[#9C1D20]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Vision Block */}
          <div className="bg-[#F8F9FB] p-12 md:p-20 relative group border-y lg:border-y-0 lg:border-l border-gray-100">
            <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <Eye size={150} className="text-[#1F1A55]" />
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                <Eye className="text-[#1F1A55]" size={32} />
              </div>
              <h3 className="text-4xl font-bold text-[#1F1A55] mb-6 uppercase tracking-tight">
                Our Vision
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                To be a leading institution in Peshawar recognized for producing 
                enlightened citizens who are globally competitive, technologically 
                proficient, and ethically grounded.
              </p>
              <ul className="space-y-4">
                {["Global Perspective", "Future-Ready Skills", "Ethical Leadership"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#1F1A55]/40 font-bold uppercase text-xs tracking-widest">
                    <Globe size={16} className="text-[#9C1D20]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Quote / Tagline */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <p className="text-2xl italic font-medium text-gray-400 leading-relaxed">
            "We don't just teach students how to make a living, <br className="hidden md:block"/> 
            we teach them <span className="text-[#1F1A55] font-bold">how to make a difference.</span>"
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;