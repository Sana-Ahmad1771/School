"use client";
import React from "react";
import { 
  Mic2, 
  Moon, 
  Flag, 
  PartyPopper, 
  Layout, 
  Sparkles,
  ArrowRight
} from "lucide-react";

const CoCurricular = () => {
  const activities = [
    {
      title: "Speech Competitions",
      desc: "Building confidence and oratory skills through bilingual debates and declamation contests.",
      icon: <Mic2 size={24} />,
      image: "/images/hero2.jpg", 
    },
    {
      title: "Islamic Events",
      desc: "Commemorating Seerat-un-Nabi and Naat competitions to instill spiritual values.",
      icon: <Moon size={24} />,
      image: "/images/hero3.jpg",
    },
    {
      title: "Independence Day",
      desc: "Celebrating 14th August with patriotic zeal, tableaus, and national songs.",
      icon: <Flag size={24} />,
      image: "/images/hero2.jpg",
    },
    {
      title: "Annual Functions",
      desc: "Showcasing student talent through drama, award ceremonies, and cultural displays.",
      icon: <PartyPopper size={24} />,
      image: "/images/hero.jpg",
    },
    {
      title: "Classroom Activities",
      desc: "Hands-on learning through projects, group discussions, and creative arts.",
      icon: <Layout size={24} />,
      image: "/images/hero3.jpg",
    },
  ];

  return (
    <section className="bg-[#F8F9FB] py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Section Header - Responsive Alignment */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 md:mb-20 gap-8 text-center lg:text-left">
          <div className="max-w-3xl w-full">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-[#9C1D20] block mb-4">
              Beyond the Books
            </span>
            <h2 className="text-[32px] sm:text-[45px] md:text-[65px] font-bold text-[#1F1A55] leading-[1.1] md:leading-[1] tracking-tighter">
              Co-Curricular <span className="text-[#9C1D20]">Growth.</span>
            </h2>
          </div>
          <div className="w-full lg:max-w-sm">
            <p className="text-gray-500 font-medium text-sm md:text-base border-l-0 lg:border-l-2 border-[#9C1D20] pl-0 lg:pl-6">
              We believe in holistic development, where every student finds a platform to shine through action and creativity.
            </p>
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {activities.map((item, index) => (
            <div 
              key={index} 
              className="group relative h-[350px] md:h-[400px] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#1F1A55]"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0 opacity-60 group-hover:scale-110 transition-transform duration-700">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A55] via-[#1F1A55]/40 to-transparent z-10" />

              {/* Content */}
              <div className="absolute inset-0 z-20 p-8 md:p-10 flex flex-col justify-end">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#9C1D20] rounded-xl flex items-center justify-center mb-4 md:mb-6 shadow-lg transform -rotate-12 lg:group-hover:rotate-0 transition-transform duration-500">
                  <div className="text-white scale-75 md:scale-100">
                    {item.icon}
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 tracking-tight">
                  {item.title}
                </h3>
                
                {/* On mobile/tablet, description is visible; on desktop it reveals on hover */}
                <p className="text-white/70 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 line-clamp-2 lg:line-clamp-none">
                  {item.desc}
                </p>
                
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#FACC15] translate-y-2 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform">
                  Participation Open <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}

          {/* Visionary Callout Card */}
          <div className="bg-[#9C1D20] rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-[#9C1D20]/20 min-h-[350px] md:min-h-[400px]">
              <Sparkles className="text-white/10 absolute -top-5 -right-5 md:-top-10 md:-right-10 w-32 h-32 md:w-[200px] md:h-[200px]" />
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  Building <br /> Character Through <br /> Action.
                </h3>
                <p className="text-white/80 text-sm font-medium">
                  At Afaq School Gulabad, we identify and polish the hidden gems within our students.
                </p>
              </div>
              <button className="relative z-10 bg-white text-[#9C1D20] py-4 px-8 rounded-full font-black uppercase tracking-widest text-[10px] self-start mt-8 hover:bg-[#1F1A55] hover:text-white transition-all active:scale-95 shadow-lg">
                View Event Gallery
              </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoCurricular;