"use client";
import React, { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

const GalleryHero = () => {
  const [activeImage, setActiveImage] = useState(0);
  const images = ["/images/hero2.jpg", "/images/hero3.jpg", "/images/hero.jpg"];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-[#1F1A55] text-white">
      {/* Background Image Slider */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === activeImage ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Consistent Navy-Tint Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A55] via-black/40 to-transparent z-10" />
          <div
            className="h-full w-full bg-cover bg-center transition-transform duration-[10000ms]"
            style={{
              backgroundImage: `url(${img})`,
              transform: index === activeImage ? "scale(1.05)" : "scale(1)",
            }}
          />
        </div>
      ))}

      {/* Main Container - Matched exactly to Home/About/Admission/Academics */}
      <div className="relative z-20 h-full max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-10 flex items-end pb-12 md:pb-20 lg:pb-28">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-8 lg:gap-10">
          
          {/* Left Side: Visual Identity */}
          <div className="select-none w-full lg:max-w-4xl">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
               <span className="bg-[#9C1D20] text-white px-4 py-1 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest shadow-lg">
                 Our Visual Legacy
               </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-[32px] lg:text-[42px] font-sans font-medium mb-1 md:mb-2 opacity-95 tracking-tight leading-tight">
              Capturing Every
            </h2>
            <h1 className="text-[clamp(42px,10vw,110px)] text-white font-poppins uppercase font-black leading-[0.9] sm:leading-[0.85] tracking-tighter">
              Moment Of <br /> 
              <span className="text-[#FACC15]">Success.</span>
            </h1>
          </div>

          {/* Right Side: Description & CTA */}
          <div className="w-full max-w-md"> 
            <div className="lg:border-l-4 border-[#9C1D20] lg:pl-8">
              <p className="text-sm sm:text-base md:text-[18px] leading-relaxed opacity-90 font-normal mb-6 md:mb-8 text-gray-100">
                Explore our journey through a collection of photos and videos 
                showcasing the vibrant life at Afaq School & College.
              </p>

              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6 items-start sm:items-center lg:items-start xl:items-center">
                <button 
                   onClick={() => document.getElementById('media-grid')?.scrollIntoView({ behavior: 'smooth' })}
                   className="w-full sm:w-auto bg-white text-[#1F1A55] px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 group text-xs uppercase tracking-wider shadow-xl shadow-black/20 active:scale-95"
                >
                  View Archive
                  <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform text-[#9C1D20]"/>
                </button>
                
                {/* Slider Indicators inside the right box */}
                <div className="flex gap-3">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`h-1.5 transition-all duration-500 rounded-full ${
                        i === activeImage ? "w-10 bg-[#FACC15]" : "w-3 bg-white/30"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
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

export default GalleryHero;