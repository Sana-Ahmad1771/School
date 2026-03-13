"use client";
import React, { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const AcademicSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const subjects = [
    {
      name: "Primary Level (Nursery - Grade 5)",
      desc: "Our primary education focuses on conceptual clarity and building a strong foundation in core subjects like English, Urdu, and Mathematics through interactive learning.",
      image: "/images/hero.jpg",
      tags: ["Foundation", "Islamic Values", "Basic Arts"]
    },
    {
      name: "Middle Level (Grade 6 - Grade 8)",
      desc: "Advanced subjects including Science, Computer Studies, and Pakistan Studies are introduced to prepare students for higher academic challenges with a focus on discipline.",
      image: "/images/hero2.jpg",
      tags: ["Conceptual Learning", "Science", "Computer"]
    },
    {
      name: "Co-Curricular Activities",
      desc: "We promote holistic development through speech competitions, Islamic events, Independence Day celebrations, and annual functions to build student confidence.",
      image: "/images/hero3.jpg",
      tags: ["Confidence", "Leadership", "Morality"]
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 md:mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-[#9C1D20]" />
              <span className="text-[#9C1D20] font-bold uppercase tracking-widest text-[10px] md:text-xs">Academic Structure</span>
            </div>
            <h2 className="text-[clamp(38px,8vw,80px)] font-bold leading-[0.9] tracking-tighter text-[#1F1A55]">
              Education that <br /> <span className="text-[#9C1D20]">empowers</span>
            </h2>
          </div>
          
          <Link href="/academics" className="w-full sm:w-auto">
            <button className="cursor-pointer md:w-full sm:w-auto flex items-center justify-center gap-2 bg-[#1F1A55] text-white w-fit px-5 py-3 md:px-8 md:py-5 rounded-full font-bold hover:bg-[#15123d] transition-all text-xs md:text-sm uppercase tracking-wider shadow-lg shadow-[#1F1A55]/20 group">
              View All Subjects <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* Accordion List */}
        <div className="border-t border-gray-200">
          {subjects.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-gray-200">
                {/* Main Row */}
                <div 
                  onClick={() => handleToggle(index)}
                  className="group flex items-center justify-between py-8 md:py-14 cursor-pointer transition-colors hover:bg-gray-50/50 px-2 md:px-4"
                >
                  <div className="flex items-center gap-4 md:gap-12">
                    <span className="text-sm md:text-lg font-bold text-[#9C1D20]/40 font-mono">0{index + 1}</span>
                    <h3 className={`text-xl md:text-[42px] font-bold tracking-tight transition-all duration-300 pr-4 ${isOpen ? 'text-[#9C1D20]' : 'text-[#1F1A55] lg:group-hover:translate-x-2'}`}>
                      {item.name}
                    </h3>
                  </div>
                  
                  <div className={`relative flex-shrink-0 flex items-center justify-center w-10 h-10 md:w-16 md:h-16 rounded-full border transition-all duration-300 ${isOpen ? 'bg-[#9C1D20] border-[#9C1D20] text-white rotate-180' : 'border-gray-300 text-[#1F1A55] group-hover:bg-[#1F1A55] group-hover:text-white'}`}>
                    {isOpen ? <Minus size={20} className="md:w-7 md:h-7" /> : <Plus size={20} className="md:w-7 md:h-7" />}
                  </div>
                </div>

                {/* Expanded Content */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[1200px] opacity-100 mb-10 md:mb-14" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 px-2 md:pl-24">
                    <div className="flex flex-col justify-center order-2 lg:order-1">
                      <p className="text-lg md:text-2xl text-gray-600 leading-relaxed mb-6 md:mb-8">
                        {item.desc}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-10">
                        {item.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 md:px-4 md:py-1.5 bg-gray-100 text-[#1F1A55] rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wide">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link href="/admissions" className="flex items-center gap-2 font-bold text-[#1F1A55] border-b-2 border-[#1F1A55] w-fit pb-1 hover:gap-4 transition-all uppercase text-[10px] md:text-xs tracking-widest">
                        Apply for this level <ArrowUpRight size={16} />
                      </Link>
                    </div>
                    
                    <div className="h-[250px] md:h-[350px] w-full overflow-hidden rounded-2xl shadow-xl md:shadow-2xl order-1 lg:order-2">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
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

export default AcademicSection;