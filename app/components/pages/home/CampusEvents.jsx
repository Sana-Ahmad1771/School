"use client";
import React from "react";
import { ArrowRight, ArrowUpRight, Calendar, MapPin } from "lucide-react";
import Link from "next/link";

const CampusEvents = () => {
  const events = [
    {
      title: "Annual Science Exhibition",
      category: "Academic",
      description:
        "Our students showcase their creativity and scientific inquiry through innovative projects and live experiments.",
      date: "May 15, 2026",
      location: "Main Assembly Hall",
      image: "/images/hero.jpg",
    },
    {
      title: "Independence Day Gala",
      category: "Cultural",
      description:
        "A celebration of patriotism featuring speeches, national songs, and performances by our talented students.",
      date: "Aug 14, 2026",
      location: "School Grounds",
      image: "/images/hero2.jpg",
    },
    {
      title: "Inter-Class Quran Recitation",
      category: "Islamic",
      description:
        "Promoting spiritual growth and Tajweed excellence through our annual Qirat and Naat competition.",
      date: "Sep 10, 2026",
      location: "Campus Mosque/Hall",
      image: "/images/hero3.jpg",
    },
  ];

  return (
    <section className="bg-[#1F1A55] py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8">
          <div className="max-w-3xl">
            <span className="inline-block px-5 py-2 rounded-full border border-white/20 text-[#1F1A55] bg-[#FACC15] text-[10px] md:text-[12px] font-bold uppercase tracking-[0.2em] mb-4 md:mb-6">
              Campus Life & Events
            </span>
            <h2 className="text-[clamp(36px,8vw,65px)] font-bold leading-[1] tracking-tighter text-white">
              Nurturing talent <br />{" "}
              <span className="text-[#9C1D20]">beyond the classroom.</span>
            </h2>
          </div>

          <Link href="/events" className="w-full md:w-auto">
            <button className="cursor-pointer w-full sm:w-auto bg-white hover:bg-[#b32427] hover:text-white text-[#1F1A55] px-8 py-5 rounded-full font-bold transition-all flex items-center justify-center gap-2 group text-xs uppercase tracking-wider shadow-xl shadow-black/20">
              View All Events
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </Link>
        </div>

        {/* Events Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {events.map((event, index) => (
            <div
              key={index}
              className={`group bg-white overflow-hidden shadow-2xl transition-all duration-500 rounded-[2rem] flex flex-col h-full border border-white/10 ${
                index === 2 ? "sm:col-span-2 lg:col-span-1" : "" // Centers the 3rd card on tablet
              }`}
            >
              {/* Image Container */}
              <div className="relative h-[240px] md:h-[300px] overflow-hidden">
                <div className="absolute top-5 left-5 z-20">
                  <span className="bg-[#9C1D20] text-white text-[10px] font-bold uppercase py-1.5 px-4 tracking-widest rounded-full shadow-lg">
                    {event.category}
                  </span>
                </div>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
              </div>

              {/* Card Content */}
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-[#1F1A55] mb-3 md:mb-4 group-hover:text-[#9C1D20] transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-6 md:mb-8 text-sm md:text-base line-clamp-3">
                  {event.description}
                </p>

                {/* Footer: Date/Location & Action */}
                <div className="mt-auto pt-6 md:pt-8 border-t border-gray-100 flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[10px] md:text-[11px] font-bold text-[#1F1A55]/60 uppercase tracking-tighter">
                      <Calendar size={14} className="text-[#9C1D20]" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] md:text-[11px] font-bold text-[#1F1A55]/60 uppercase tracking-tighter">
                      <MapPin size={14} className="text-[#9C1D20]" />
                      {event.location}
                    </div>
                  </div>

                  <button className="w-12 h-12 md:w-14 md:h-14 text-[#9C1D20] bg-[#FACC15] rounded-full border-2 border-gray-100 flex items-center justify-center transition-all duration-500 group-hover:bg-[#1F1A55] group-hover:border-[#1F1A55] group-hover:text-white group-hover:shadow-lg">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusEvents;
