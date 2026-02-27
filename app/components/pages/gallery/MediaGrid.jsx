"use client";
import React, { useState } from "react";
import { Play, Camera, Maximize2, X } from "lucide-react";

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
    <section id="media-grid" className="bg-white py-24 md:py-32">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-10">
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-16 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMedia.map((item) => (
            <div 
              key={item.id} 
              className="group relative h-[450px] rounded-[2.5rem] overflow-hidden bg-gray-200 cursor-pointer shadow-xl shadow-gray-200/50"
            >
              {/* Media Preview */}
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A55] via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Icon Indicators */}
              <div className="absolute top-8 right-8 z-20">
                {item.type === "video" ? (
                  <div className="w-12 h-12 bg-[#9C1D20] rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <Play size={20} fill="currentColor" />
                  </div>
                ) : (
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1F1A55] shadow-lg group-hover:scale-110 transition-transform">
                    <Maximize2 size={20} />
                  </div>
                )}
              </div>

              {/* Text Info */}
              <div className="absolute bottom-10 left-10 z-20">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FACC15] block mb-2">
                  {item.category}
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight uppercase group-hover:text-[#9C1D20] transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination/Load More */}
        <div className="mt-20 text-center">
           <button className="bg-[#1F1A55] text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-[#9C1D20] transition-all shadow-2xl">
              Load More Memories
           </button>
        </div>
      </div>
    </section>
  );
};

export default MediaGrid;