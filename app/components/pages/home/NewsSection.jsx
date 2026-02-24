"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      date: "24 FEB",
      year: "2026",
      category: "Academic",
      title: "Spring 2026 Graduate Admission Guide for International Students",
      link: "#",
    },
    {
      date: "20 FEB",
      year: "2026",
      category: "Research",
      title: "University Research Team Discovers New Method for Carbon Capture",
      link: "#",
    },
    {
      date: "15 FEB",
      year: "2026",
      category: "Campus",
      title: "Renovation of the Central Library: Modernizing Digital Archive Spaces",
      link: "#",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Title & Vertical Text */}
          <div className="lg:w-1/3 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-black/50">
                  Latest Updates
                </span>
              </div>
              <h2 className="text-[50px] md:text-[70px] font-bold leading-[0.9] tracking-tighter text-black">
                News <br /> & Blog
              </h2>
            </div>

            <button className="hidden lg:flex items-center gap-4 text-black group mt-10">
              <span className="text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1">
                View All News
              </span>
              <div className="bg-blacl]k text-black rounded-full p-2 group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight size={20} />
              </div>
            </button>
          </div>

          {/* Right Side: News List */}
          <div className="lg:w-2/3 border-t-2 border-black">
            {news.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="group flex flex-col md:flex-row items-start md:items-center py-10 border-b border-black/20 transition-all hover:bg-white/5 px-4"
              >
                {/* Date Box */}
                <div className="flex flex-col mb-4 md:mb-0 md:mr-12 min-w-[80px]">
                  <span className="text-3xl font-black text-black leading-none">
                    {item.date.split(" ")[0]}
                  </span>
                  <span className="text-xs font-bold text-black/40 uppercase tracking-widest">
                    {item.date.split(" ")[1]} {item.year}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-black leading-snug group-hover:underline decoration-1 underline-offset-8">
                    {item.title}
                  </h3>
                </div>

                {/* Hover Arrow Icon */}
                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 duration-300 text-white">
                  <ArrowUpRight size={32} strokeWidth={1} />
                </div>
              </a>
            ))}

            {/* Mobile "View All" button */}
            <button className="lg:hidden w-full mt-10 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs">
              View All News
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;