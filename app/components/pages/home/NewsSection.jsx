"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      date: "27 FEB",
      year: "2026",
      category: "Admissions",
      title: "Admission Open for Session 2026-27: Register Your Child Today",
      link: "/admissions",
    },
    {
      date: "10 MAR",
      year: "2026",
      category: "Events",
      title: "Annual Sports Day 2026: Celebrating Athleticism and Team Spirit",
      link: "#",
    },
    {
      date: "15 MAR",
      year: "2026",
      category: "Academic",
      title: "Parent-Teacher Meeting: Discussing Your Child's Progress & Growth",
      link: "#",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          
          {/* Left Side: Title & Info */}
          <div className="lg:w-1/3 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-8 md:w-10 h-[2px] bg-[#9C1D20]" />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#9C1D20]">
                  School Updates
                </span>
              </div>
              <h2 className="text-[clamp(40px,10vw,75px)] font-bold leading-[0.9] tracking-tighter text-[#1F1A55]">
                News <br className="hidden md:block" /> 
                <span className="md:inline-block md:mt-2"> & <span className="text-[#9C1D20]">Events</span></span>
              </h2>
            </div>

            <button className="hidden lg:flex items-center gap-4 text-[#1F1A55] group mt-10">
              <span className="text-sm font-bold uppercase tracking-widest border-b-2 border-[#1F1A55] pb-1 transition-colors group-hover:text-[#9C1D20] group-hover:border-[#9C1D20]">
                See All Posts
              </span>
              <div className="bg-[#1F1A55] text-white rounded-full p-2 group-hover:bg-[#9C1D20] group-hover:rotate-45 transition-all duration-300">
                <ArrowUpRight size={20} />
              </div>
            </button>
          </div>

          {/* Right Side: News List */}
          <div className="lg:w-2/3 border-t-2 border-[#1F1A55]">
            {news.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="group flex flex-col md:flex-row items-start md:items-center py-8 md:py-12 border-b border-gray-100 transition-all hover:bg-gray-50 px-2 md:px-6"
              >
                {/* Date Box */}
                <div className="flex flex-row md:flex-col items-baseline md:items-start mb-4 md:mb-0 md:mr-16 min-w-[120px] gap-2 md:gap-0">
                  <span className="text-3xl md:text-4xl font-black text-[#1F1A55] leading-none group-hover:text-[#9C1D20] transition-colors">
                    {item.date.split(" ")[0]}
                  </span>
                  <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
                    {item.date.split(" ")[1]} {item.year}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#9C1D20] mb-2 md:mb-3 block">
                    {item.category}
                  </span>
                  <h3 className="text-lg md:text-2xl font-bold text-[#1F1A55] leading-snug group-hover:text-[#9C1D20] transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                {/* Hover Arrow Icon - Visible only on Desktop */}
                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 duration-300 text-[#9C1D20] ml-4">
                  <ArrowUpRight size={32} strokeWidth={2} />
                </div>
              </a>
            ))}

            {/* Mobile "View All" button */}
            <button className="lg:hidden w-full mt-8 py-4 bg-[#1F1A55] text-white font-bold uppercase tracking-widest text-[10px] rounded-full flex items-center justify-center gap-2 active:scale-95 transition-transform">
              View All News <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;