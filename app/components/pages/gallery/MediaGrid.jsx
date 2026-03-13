"use client";
import React, { useState } from "react";
import { Play, Maximize2 } from "lucide-react";

const MediaGrid = () => {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Media" },
    { id: "events", label: "School Events" },
    { id: "classroom", label: "Classroom" },
    { id: "annual", label: "Annual Day" },
    { id: "islamic", label: "Islamic Programs" },
  ];

  const mediaItems = [
    { id: 1, type: "image", category: "events", src: "/images/event1.jpg", title: "Independence Day" },
    { id: 2, type: "video", category: "annual", src: "/images/hero3.jpg", title: "Annual Function Highlights" },
    { id: 3, type: "image", category: "classroom", src: "/images/hero.jpg", title: "Science Lab Activity" },
    { id: 4, type: "image", category: "islamic", src: "/images/hero2.jpg", title: "Naat Competition" },
    { id: 5, type: "image", category: "events", src: "/images/hero3.jpg", title: "Student Achievement Awards" },
    { id: 6, type: "video", category: "classroom", src: "/images/hero.jpg", title: "Interactive Learning" },
  ];

  const filteredMedia = filter === "all" ? mediaItems : mediaItems.filter(item => item.category === filter);

  return (
    <section id="media-grid" className="bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Category Filter - Optimized for mobile scrolling */}
        <div className="flex overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 gap-3 md:gap-4 mb-12 md:mb-16 no-scrollbar lg:justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`whitespace-nowrap px-6 md:px-8 py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest transition-all shrink-0 ${
                filter === cat.id 
                ? "bg-[#9C1D20] text-white shadow-lg" 
                : "bg-gray-100 text-gray-400 hover:bg-[#1F1A55] hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredMedia.map((item) => (
            <div 
              key={item.id} 
              className="group relative h-[350px] md:h-[450px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-gray-200 cursor-pointer shadow-xl shadow-gray-200/50"
            >
              {/* Media Preview */}
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale lg:group-hover:grayscale-0 lg:group-hover:scale-110 transition-all duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A55] via-[#1F1A55]/20 to-transparent opacity-80 lg:group-hover:opacity-90 transition-opacity" />

              {/* Icon Indicators */}
              <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20">
                {item.type === "video" ? (
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#9C1D20] rounded-full flex items-center justify-center text-white shadow-lg lg:group-hover:scale-110 transition-transform">
                    <Play size={18} fill="currentColor" className="ml-1" />
                  </div>
                ) : (
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-[#1F1A55] shadow-lg lg:group-hover:scale-110 transition-transform">
                    <Maximize2 size={18} />
                  </div>
                )}
              </div>

              {/* Text Info */}
              <div className="absolute bottom-8 left-8 md:bottom-10 md:left-10 z-20 pr-8">
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-[#FACC15] block mb-2">
                  {item.category}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight uppercase group-hover:text-[#9C1D20] transition-colors line-clamp-2 leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination/Load More */}
        <div className="mt-12 md:mt-20 text-center">
           <button className="w-full sm:w-auto bg-[#1F1A55] text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-[#9C1D20] transition-all shadow-2xl active:scale-95">
             Load More Memories
           </button>
        </div>
      </div>
    </section>
  );
};

export default MediaGrid;