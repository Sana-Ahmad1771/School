"use client";
import React from "react";
import { 
  Languages, 
  Calculator, 
  Beaker, 
  MoonStar, 
  Map, 
  Monitor, 
  LibraryBig,
  CheckCircle2
} from "lucide-react";

const AcademicSubjects = () => {
  const subjects = [
    {
      name: "English",
      desc: "Developing linguistic proficiency, literature appreciation, and effective communication skills.",
      icon: <Languages size={28} className="text-[#9C1D20]" />,
    },
    {
      name: "Urdu",
      desc: "Focusing on national language mastery, creative writing, and classical Urdu literature.",
      icon: <LibraryBig size={28} className="text-[#9C1D20]" />,
    },
    {
      name: "Mathematics",
      desc: "Building strong analytical foundations from basic arithmetic to advanced algebra and geometry.",
      icon: <Calculator size={28} className="text-[#9C1D20]" />,
    },
    {
      name: "Science",
      desc: "Exploring Physics, Chemistry, and Biology through conceptual theory and practical lab work.",
      icon: <Beaker size={28} className="text-[#9C1D20]" />,
    },
    {
      name: "Islamiat",
      desc: "Nurturing spiritual growth through the study of Quran, Hadith, and Islamic history.",
      icon: <MoonStar size={28} className="text-[#9C1D20]" />,
    },
    {
      name: "Pakistan Studies",
      desc: "Understanding our history, geography, and the struggle for an independent nation.",
      icon: <Map size={28} className="text-[#9C1D20]" />,
    },
    {
      name: "Computer Science",
      desc: "Equipping students with digital literacy, programming basics, and modern IT skills.",
      icon: <Monitor size={28} className="text-[#9C1D20]" />,
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-[#9C1D20] block mb-4">
              Core Curriculum
            </span>
            <h2 className="text-[45px] md:text-[65px] font-bold text-[#1F1A55] leading-[1] tracking-tighter">
              Academic <span className="text-[#9C1D20]">Focus Areas.</span>
            </h2>
          </div>
          <div className="md:mb-4">
            <p className="text-gray-500 font-medium max-w-sm border-l-2 border-[#9C1D20] pl-6">
              Our comprehensive curriculum is aligned with the latest educational standards to ensure competitive edge.
            </p>
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject, index) => (
            <div 
              key={index} 
              className="group p-10 rounded-[2.5rem] bg-[#F8F9FB] border border-transparent hover:border-[#1F1A55]/10 hover:bg-white hover:shadow-2xl hover:shadow-[#1F1A55]/10 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#1F1A55] group-hover:shadow-lg transition-all duration-500">
                <div className="group-hover:text-white transition-colors">
                  {subject.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#1F1A55] mb-4 group-hover:text-[#9C1D20] transition-colors">
                {subject.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {subject.desc}
              </p>

              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#1F1A55]/20 group-hover:text-[#1F1A55] transition-colors">
                <CheckCircle2 size={14} className="text-[#9C1D20]" />
                Board Syllabus
              </div>
            </div>
          ))}

          {/* Special Feature Card */}
          <div className="p-10 rounded-[2.5rem] bg-[#1F1A55] flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#9C1D20] rounded-full blur-[60px] opacity-20 -translate-y-1/2 translate-x-1/2" />
            <h3 className="text-3xl font-bold text-white mb-4 relative z-10">
              Balanced <br /> Learning
            </h3>
            <p className="text-white/60 text-sm mb-8 relative z-10">
              We integrate character building with every subject to ensure moral and mental growth.
            </p>
            <div className="w-12 h-12 bg-[#9C1D20] rounded-full flex items-center justify-center text-white relative z-10 group-hover:scale-110 transition-transform">
               <LibraryBig size={20} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AcademicSubjects;