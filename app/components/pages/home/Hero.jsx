"use client";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [activeImage, setActiveImage] = useState(0);

  const images = ["/images/hero.jpg", "/images/hero2.jpg", "/images/hero3.jpg"];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Image Slider */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === activeImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/35 z-10" />
          <div
            className="h-full w-full bg-cover bg-center transition-transform duration-[10000ms]"
            style={{
              backgroundImage: `url(${img})`,
              transform: index === activeImage ? "scale(1)" : "scale(1.1)",
            }}
          />
        </div>
      ))}

      {/* Main Container: Constrained to max-w-[1600px] and centered */}
      <div className="relative z-20 h-full max-w-[1800px] mx-auto px-8 lg:px-10 flex items-end pb-24 md:pb-32">
        
        {/* Wrapper to align left and right content */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-12">
          
          {/* Left Side: Main Heading */}
          <div className="select-none">
            <h2 className="text-3xl md:text-[64px] font-sans font-bold mb-1 md:mb-4 opacity-90 tracking-tight leading-tight">
              Welcome to
            </h2>
            <h1 className="text-[clamp(70px,14vw,180px)] font-poppins uppercase font-bold leading-[0.75] tracking-tighter">
              University
            </h1>
          </div>

          {/* Right Side: Description - Positioned "higher" beside the heading */}
          <div className="max-w-sm mb-4 lg:mb-16"> 
            {/* mb-16 lifts this box up so it's not flush with the bottom of 'University' */}
            <div className="border-l-2 border-white/30 pl-6">
              <p className="text-base md:text-[19px] leading-relaxed opacity-90 font-light">
                Apply now for 2025–2026 fully funded graduate programs and advance
                your education on a global scale.
              </p>

              {/* Slider Indicators */}
              <div className="flex gap-2 mt-8">
                {images.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 transition-all duration-500 rounded-full ${
                      i === activeImage ? "w-12 bg-white" : "w-2 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;