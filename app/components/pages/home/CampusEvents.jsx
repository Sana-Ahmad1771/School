"use client";
import React from "react";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

const CampusEvents = () => {
  const events = [
    {
      title: "Global Tech Workshop",
      category: "Innovation",
      description:
        "An intensive hands-on session focusing on the future of AI, sustainable technology, and cloud computing.",
      date: "Oct 24, 2026",
      location: "Tech Hub Room 4",
      image: "/images/hero.jpg", 
    },
    {
      title: "Championship Finals",
      category: "Sports",
      description:
        "Join us at the university stadium for the annual inter-college basketball and track championship finals.",
      date: "Nov 12, 2026",
      location: "Main Stadium",
      image: "/images/hero2.jpg",
    },
    {
      title: "Leadership Seminar",
      category: "Seminars",
      description:
        "Developing the next generation of global leaders through ethical decision making and strategic management.",
      date: "Dec 05, 2026",
      location: "Grand Auditorium",
      image: "/images/hero3.jpg",
    },
  ];

  return (
    <section className="bg-black/50 py-24 md:py-32">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 text-white py-1 rounded-full border border-white/20 text-[12px] font-bold uppercase tracking-widest mb-6">
              Campus Life
            </span>
            <h2 className="text-[45px] md:text-[60px] font-bold leading-[1.1] tracking-tight text-white">
              Experience more than <br /> just education.
            </h2>
          </div>

          <button className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-[#2D4A43] hover:text-white transition-all text-sm uppercase tracking-wider self-end md:mb-4">
            <span className="relative z-10">All Events</span>
            <ArrowRight
              size={16}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Events Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 rounded-sm flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-[280px] overflow-hidden">
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-[#2D4A43] text-white text-[10px] font-bold uppercase py-1 px-3 tracking-widest rounded-sm">
                    {event.category}
                  </span>
                </div>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-[#2D4A43] transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
                  {event.description}
                </p>

                {/* Footer: Date/Location & Action */}
                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                      <Calendar size={14} className="text-[#2D4A43]" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                      <MapPin size={14} className="text-[#2D4A43]" />
                      {event.location}
                    </div>
                  </div>

                  <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 group-hover:bg-black group-hover:text-white">
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