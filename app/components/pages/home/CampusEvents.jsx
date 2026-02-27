"use client";
import React from "react";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
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
    <section className="bg-[#1F1A55] py-24 md:py-32">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="max-w-3xl">
            <span className="inline-block px-6 py-2 rounded-full border border-white/20 text-[#1F1A55] bg-[#FACC15] text-[12px] font-bold uppercase tracking-[0.2em] mb-6">
              Campus Life & Events
            </span>
            <h2 className="text-[45px] md:text-[65px] font-bold leading-[1] tracking-tighter text-white">
              Nurturing talent <br /> <span className="text-[#9C1D20]">beyond the classroom.</span>
            </h2>
          </div>

          <Link href="/events" className="self-end md:mb-4">
            <button className="group flex items-center gap-3 bg-white text-[#1F1A55] px-8 py-4 rounded-full font-bold hover:bg-[#9C1D20] hover:text-white transition-all text-xs uppercase tracking-widest shadow-xl">
              <span>View All Events</span>
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </button>
          </Link>
        </div>

        {/* Events Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <div
              key={index}
              className="group bg-white overflow-hidden shadow-2xl transition-all duration-500 rounded-[2rem] flex flex-col h-full border border-white/10"
            >
              {/* Image Container */}
              <div className="relative h-[300px] overflow-hidden">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Card Content */}
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#1F1A55] mb-4 group-hover:text-[#9C1D20] transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-8 text-base">
                  {event.description}
                </p>

                {/* Footer: Date/Location & Action */}
                <div className="mt-auto pt-8 border-t border-gray-100 flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-[12px] font-bold text-[#1F1A55]/60 uppercase tracking-tighter">
                      <Calendar size={16} className="text-[#9C1D20]" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-3 text-[12px] font-bold text-[#1F1A55]/60 uppercase tracking-tighter">
                      <MapPin size={16} className="text-[#9C1D20]" />
                      {event.location}
                    </div>
                  </div>

                  <button className="w-14 h-14 rounded-full border-2 border-gray-100 flex items-center justify-center transition-all duration-500 group-hover:bg-[#1F1A55] group-hover:border-[#1F1A55] group-hover:text-white group-hover:shadow-lg">
                    <ArrowRight size={22} />
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