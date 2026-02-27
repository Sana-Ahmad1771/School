"use client";
import React, { useState, useEffect } from "react";
import { ArrowUpRight, BookOpen } from "lucide-react";
import Link from "next/link";

const AcademicsHero = () => {
  const [activeImage, setActiveImage] = useState(0);

  // Images representing science labs, library, and focused classroom learning
  const images = ["/images/hero3.jpg", "/images/hero.jpg", "/images/hero2.jpg"];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#1F1A55] text-white">
      {/* Background Image Slider (Consistent with Home/About/Admissions) */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === activeImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A55] via-black/50 to-transparent z-10" />
          <div
            className="h-full w-full bg-cover bg-center transition-transform duration-[10000ms]"
            style={{
              backgroundImage: `url(${img})`,
              transform: index === activeImage ? "scale(1.05)" : "scale(1)",
            }}
          />
        </div>
      ))}

      {/* Main Container */}
      <div className="relative z-20 h-full max-w-[1800px] mx-auto px-8 lg:px-10 flex items-end pb-20 md:pb-28">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-10">
          
          {/* Left Side: Academic Identity */}
          <div className="select-none max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
               <span className="bg-[#9C1D20] text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                  Excellence in Education
               </span>
            </div>
            <h2 className="text-2xl md:text-[42px] font-sans font-medium mb-2 opacity-95 tracking-tight leading-tight">
              A System Built for
            </h2>
            <h1 className="text-[clamp(50px,10vw,110px)] text-white font-poppins uppercase font-black leading-[0.85] tracking-tighter">
              Conceptual <br /> 
              <span className="text-[#FACC15]">Clarity.</span>
            </h1>
          </div>

          {/* Right Side: Academic Structure & CTA */}
          <div className="max-w-md mb-4 lg:mb-12"> 
            <div className="border-l-4 border-[#FACC15] pl-8">
              <p className="text-base md:text-[18px] leading-relaxed opacity-90 font-normal mb-8 text-gray-100">
                Our academic structure is designed to ensure discipline, 
                consistent performance, and a deep understanding of core 
                subjects from Primary to College level.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <Link href="#academic-structure">
                   <button className="bg-[#9C1D20] hover:bg-[#b32427] text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 group text-sm uppercase tracking-wider shadow-xl shadow-black/20">
                     Explore Curriculum
                     <BookOpen size={18} className="group-hover:scale-110 transition-transform"/>
                   </button>
                </Link>
                
                {/* Slider Indicators */}
                <div className="flex gap-3 ml-2">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`h-1.5 transition-all duration-500 rounded-full ${
                        i === activeImage ? "w-10 bg-[#FACC15]" : "w-3 bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AcademicsHero;