"use client";
import React, { useState, useEffect } from "react";
import { Phone, MapPin, MessageCircle, Clock, ArrowUpRight } from "lucide-react";

const ContactHero = () => {
  const [activeImage, setActiveImage] = useState(0);
  const images = ["/images/hero.jpg", "/images/hero2.jpg", "/images/hero3.jpg"];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-[80vh] w-full overflow-hidden bg-[#1F1A55] text-white">
      {/* Background Image Slider */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === activeImage ? "opacity-100" : "opacity-0"
          }`}
        >
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

      {/* Main Container */}
      <div className="relative z-20 h-full max-w-[1800px] mx-auto px-8 lg:px-10 flex items-end pb-20">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-10">
          <div className="max-w-4xl">
            <span className="bg-[#9C1D20] text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">
              Get In Touch
            </span>
            <h1 className="text-[clamp(50px,8vw,100px)] text-white font-poppins uppercase font-black leading-[0.85] tracking-tighter">
              Let's Start A <br /> 
              <span className="text-[#FACC15]">Conversation.</span>
            </h1>
          </div>
          
          <div className="max-w-sm mb-4">
             <div className="flex gap-3">
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
  );
};
export default ContactHero;