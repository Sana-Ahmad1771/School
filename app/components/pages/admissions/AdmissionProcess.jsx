"use client";
import React from "react";
import { UserPlus, FileText, CalendarCheck, CheckCircle2, ArrowRight } from "lucide-react";

const AdmissionProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Online Registration",
      desc: "Fill out the initial application form through our digital portal or visit our campus office to collect the prospectus.",
      icon: <UserPlus className="text-white" size={24} />,
      color: "bg-[#1F1A55]",
    },
    {
      number: "02",
      title: "Document Submission",
      desc: "Submit previous school records, birth certificate (B-Form), and guardian's CNIC copies for verification.",
      icon: <FileText className="text-white" size={24} />,
      color: "bg-[#9C1D20]",
    },
    {
      number: "03",
      title: "Assessment & Interview",
      desc: "Students undergo a baseline assessment followed by a friendly interview with parents to align educational goals.",
      icon: <CalendarCheck className="text-white" size={24} />,
      color: "bg-[#1F1A55]",
    },
    {
      number: "04",
      title: "Fee & Enrollment",
      desc: "Upon successful assessment, submit the admission fee to secure your seat and receive the orientation kit.",
      icon: <CheckCircle2 className="text-white" size={24} />,
      color: "bg-[#9C1D20]",
    },
  ];

  return (
    <section id="admission-process" className="bg-[#F8F9FB] py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Section Header - Responsive Alignment */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 md:mb-20 gap-8 text-center lg:text-left">
          <div className="max-w-3xl w-full">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-[#9C1D20] block mb-4">
              Step-by-Step Guide
            </span>
            <h2 className="text-[32px] sm:text-[45px] md:text-[65px] font-bold text-[#1F1A55] leading-[1.1] md:leading-[1] tracking-tighter">
              How To <span className="text-[#9C1D20]">Join Us.</span>
            </h2>
          </div>
          <div className="w-full lg:max-w-sm">
            <p className="text-gray-500 font-medium text-sm md:text-base border-l-0 lg:border-l-2 border-[#9C1D20] pl-0 lg:pl-6">
              Our admission cycle for the 2026 academic year is now active. Follow these steps to secure your child's future.
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Vertical Line for Desktop (Only for first 3 items) */}
              {index < 3 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-[2px] bg-gray-200 z-0 group-hover:bg-[#9C1D20] transition-colors duration-500" />
              )}

              <div className="relative z-10 bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-gray-200/50 hover:-translate-y-3 lg:hover:-translate-y-4 transition-all duration-500 h-full border border-transparent hover:border-[#9C1D20]/20 flex flex-col items-center text-center lg:items-start lg:text-left">
                
                {/* Step Number & Icon */}
                <div className="flex justify-between items-start mb-8 md:mb-10 w-full">
                  <div className={`${step.color} w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    {step.icon}
                  </div>
                  <span className="text-3xl md:text-4xl font-black text-gray-100 group-hover:text-[#9C1D20]/10 transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-[#1F1A55] mb-4 group-hover:text-[#9C1D20] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium flex-grow">
                  {step.desc}
                </p>

                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#1F1A55]/40 group-hover:text-[#9C1D20] transition-colors">
                  Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;