"use client";
import React, { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

const ProgramsSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const programs = [
    {
      name: "B.Sc. in Computer Science",
      desc: "Our Computer Science program is designed for future innovators, focusing on software engineering, artificial intelligence, and cybersecurity.",
      image: "/images/hero.jpg",
    },
    {
      name: "Postgraduate",
      desc: "Advance your expertise with our research-intensive postgraduate programs, led by world-class faculty in state-of-the-art laboratory environments.",
      image: "/images/hero2.jpg",
    },
    {
      name: "Professional Studies",
      desc: "Tailored for working professionals, these flexible programs provide practical skills and industry certifications to accelerate your career growth.",
      image: "/images/hero3.jpg",
    },
    {
      name: "Certificate & Courses",
      desc: "Focused, short-term courses designed to master specific skills, from digital marketing to data analytics, perfect for lifelong learners.",
      image: "/images/hero.jpg",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-10">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <h2 className="text-[50px] md:text-[80px] font-bold leading-[0.9] tracking-tighter text-black">
            Our university <br /> programs
          </h2>
          
          <button className="flex items-center gap-2 bg-[#111] text-white px-8 py-4 rounded-full font-semibold hover:bg-black transition-all text-sm uppercase tracking-wider">
            View Programs <ArrowUpRight size={20} />
          </button>
        </div>

        {/* Accordion List */}
        <div className="border-t border-gray-200">
          {programs.map((program, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-gray-200">
                {/* Main Row */}
                <div 
                  onClick={() => handleToggle(index)}
                  className="group flex items-center justify-between py-10 md:py-14 cursor-pointer transition-colors hover:bg-gray-50/50 px-4"
                >
                  <h3 className="text-3xl md:text-[42px] font-bold tracking-tight text-black transition-transform duration-300 group-hover:translate-x-2">
                    {program.name}
                  </h3>
                  
                  <div className={`relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border transition-all duration-300 ${isOpen ? 'bg-black border-black text-white' : 'border-gray-300 text-black group-hover:bg-black group-hover:text-white'}`}>
                    {isOpen ? (
                      <Minus size={28} />
                    ) : (
                      <Plus size={28} className="transition-all duration-300 group-hover:rotate-90" />
                    )}
                  </div>
                </div>

                {/* Expanded Content */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[600px] opacity-100 mb-10" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
                    <div className="flex flex-col justify-center">
                      <p className="text-xl text-gray-700 leading-relaxed mb-6">
                        {program.desc}
                      </p>
                      <button className="flex items-center gap-2 font-bold text-black border-b-2 border-black w-fit pb-1 hover:gap-4 transition-all uppercase text-xs tracking-widest">
                        Explore More <ArrowUpRight size={16} />
                      </button>
                    </div>
                    <div className="h-[300px] w-full overflow-hidden rounded-sm">
                      <img 
                        src={program.image} 
                        alt={program.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;