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
      icon: <Languages className="w-7 h-7" />,
    },
    {
      name: "Urdu",
      desc: "Focusing on national language mastery, creative writing, and classical Urdu literature.",
      icon: <LibraryBig className="w-7 h-7" />,
    },
    {
      name: "Mathematics",
      desc: "Building strong analytical foundations from basic arithmetic to advanced algebra and geometry.",
      icon: <Calculator className="w-7 h-7" />,
    },
    {
      name: "Science",
      desc: "Exploring Physics, Chemistry, and Biology through conceptual theory and practical lab work.",
      icon: <Beaker className="w-7 h-7" />,
    },
    {
      name: "Islamiat",
      desc: "Nurturing spiritual growth through the study of Quran, Hadith, and Islamic history.",
      icon: <MoonStar className="w-7 h-7" />,
    },
    {
      name: "Pakistan Studies",
      desc: "Understanding our history, geography, and the struggle for an independent nation.",
      icon: <Map className="w-7 h-7" />,
    },
    {
      name: "Computer Science",
      desc: "Equipping students with digital literacy, programming basics, and modern IT skills.",
      icon: <Monitor className="w-7 h-7" />,
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Section Header - Responsive Alignment */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 md:mb-20 gap-8 text-center lg:text-left">
          <div className="max-w-3xl w-full">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-[#9C1D20] block mb-4">
              Core Curriculum
            </span>
            <h2 className="text-[32px] sm:text-[45px] md:text-[65px] font-bold text-[#1F1A55] leading-[1.1] md:leading-[1] tracking-tighter">
              Academic <span className="text-[#9C1D20]">Focus Areas.</span>
            </h2>
          </div>
          <div className="w-full lg:max-w-sm">
            <p className="text-gray-500 font-medium text-sm md:text-base border-l-0 lg:border-l-2 border-[#9C1D20] pl-0 lg:pl-6">
              Our comprehensive curriculum is aligned with the latest educational standards to ensure a competitive edge.
            </p>
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject, index) => (
            <div 
              key={index} 
              className="group p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-[#F8F9FB] border border-transparent hover:border-[#1F1A55]/10 hover:bg-white hover:shadow-2xl hover:shadow-[#1F1A55]/10 transition-all duration-500 flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-sm group-hover:bg-[#1F1A55] group-hover:shadow-lg transition-all duration-500">
                <div className="text-[#9C1D20] group-hover:text-white transition-colors">
                  {subject.icon}
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-[#1F1A55] mb-4 group-hover:text-[#9C1D20] transition-colors">
                {subject.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
                {subject.desc}
              </p>

              <div className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#1F1A55]/20 group-hover:text-[#1F1A55] transition-colors">
                <CheckCircle2 size={14} className="text-[#9C1D20]" />
                Board Syllabus
              </div>
            </div>
          ))}

          {/* Special Feature Card */}
          <div className="p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-[#1F1A55] flex flex-col justify-center items-center text-center lg:items-start lg:text-left relative overflow-hidden group min-h-[300px]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#9C1D20] rounded-full blur-[60px] opacity-20 -translate-y-1/2 translate-x-1/2" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10 leading-tight">
              Balanced <br className="hidden lg:block" /> Learning
            </h3>
            <p className="text-white/60 text-sm mb-8 relative z-10 font-medium">
              We integrate character building with every subject to ensure moral and mental growth.
            </p>
            <div className="w-12 h-12 bg-[#9C1D20] rounded-full flex items-center justify-center text-white relative z-10 group-hover:scale-110 transition-transform shadow-lg">
               <LibraryBig size={20} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AcademicSubjects;