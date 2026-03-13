"use client";
import React from "react";
import { CheckCircle2, ShieldCheck, Users, BookOpen, Star } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Female Teaching Staff",
      desc: "Qualified and dedicated female teachers providing a comfortable and focused learning environment for all students.",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Strong Academic System",
      desc: "A curriculum designed to ensure conceptual clarity, regular assessments, and consistent academic growth.",
      icon: <BookOpen className="w-8 h-8" />,
    },
    {
      title: "Safe & Secure Environment",
      desc: "A disciplined, safe, and nurturing campus where your child’s security and well-being are our top priorities.",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
    {
      title: "Islamic Values",
      desc: "Character building rooted in moral and Islamic values to raise responsible and ethical individuals.",
      icon: <CheckCircle2 className="w-8 h-8" />,
    },
    {
      title: "Personal Attention",
      desc: "Small class sizes ensure that every student receives individual guidance and support from our staff.",
      icon: <Star className="w-8 h-8" />,
    },
  ];

  return (
    <section className="bg-[#F8F9FB] py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6"
          >
            <span className="w-8 md:w-12 h-[2px] bg-[#9C1D20]" />
            <span className="text-[#9C1D20] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-sm">
              Our Core Strengths
            </span>
            <span className="w-8 md:w-12 h-[2px] bg-[#9C1D20]" />
          </motion.div>
          
          <h2 className="text-[clamp(32px,8vw,70px)] font-bold text-[#1F1A55] leading-[1.1] tracking-tighter mb-6 ">
            Why Choose <br className="sm:hidden" /> <span className="text-[#9C1D20]">Afaq School?</span>
          </h2>
          <p className="max-w-2xl text-gray-600 text-base md:text-xl px-4">
            We provide more than just education; we provide a foundation of discipline, 
            knowledge, and moral excellence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-[#1F1A55]/10 transition-all duration-500 border border-gray-100"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#F8F9FB] rounded-xl md:rounded-2xl flex items-center justify-center text-[#9C1D20] mb-6 md:mb-8 group-hover:bg-[#1F1A55] group-hover:text-white transition-colors duration-500">
                {React.cloneElement(feature.icon, { className: "w-6 h-6 md:w-8 md:h-8" })}
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-[#1F1A55] mb-3 md:mb-4 group-hover:text-[#9C1D20] transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed text-sm md:text-lg">
                {feature.desc}
              </p>
            </motion.div>
          ))}

          {/* Special CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#1F1A55] p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] flex flex-col justify-center items-start text-white border-b-8 border-[#9C1D20] min-h-[300px]"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
              Ready to give your child the best start?
            </h3>
            <button className="w-full sm:w-auto bg-[#9C1D20] text-white px-8 py-4 rounded-full font-bold uppercase text-[10px] md:text-xs tracking-widest hover:bg-white hover:text-[#1F1A55] transition-all duration-300">
              Apply Now 2026-27
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;