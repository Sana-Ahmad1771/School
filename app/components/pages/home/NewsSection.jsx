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
    <section className="bg-white py-24">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Title & Vertical Text */}
          <div className="lg:w-1/3 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[2px] bg-[#9C1D20]" />
                <span className="text-xs font-black uppercase tracking-[0.3em] text-[#9C1D20]">
                  School Updates
                </span>
              </div>
              <h2 className="text-[50px] md:text-[75px] font-bold leading-[0.9] tracking-tighter text-[#1F1A55]">
                News <br /> & <span className="text-[#9C1D20]">Events</span>
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
                className="group flex flex-col md:flex-row items-start md:items-center py-12 border-b border-gray-100 transition-all hover:bg-gray-50 px-6"
              >
                {/* Date Box */}
                <div className="flex flex-col mb-4 md:mb-0 md:mr-16 min-w-[100px]">
                  <span className="text-4xl font-black text-[#1F1A55] leading-none group-hover:text-[#9C1D20] transition-colors">
                    {item.date.split(" ")[0]}
                  </span>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
                    {item.date.split(" ")[1]} {item.year}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#9C1D20] mb-3 block">
                    {item.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-[#1F1A55] leading-snug group-hover:text-[#9C1D20] transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                {/* Hover Arrow Icon */}
                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 duration-300 text-[#9C1D20]">
                  <ArrowUpRight size={32} strokeWidth={2} />
                </div>
              </a>
            ))}

            {/* Mobile "View All" button */}
            <button className="lg:hidden w-full mt-10 py-5 bg-[#1F1A55] text-white font-bold uppercase tracking-widest text-xs rounded-xl">
              View All News
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;