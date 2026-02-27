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
    <section id="admission-process" className="bg-[#F8F9FB] py-24 md:py-32">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-[#9C1D20] block mb-4">
              Step-by-Step Guide
            </span>
            <h2 className="text-[45px] md:text-[65px] font-bold text-[#1F1A55] leading-[1] tracking-tighter">
              How To <span className="text-[#9C1D20]">Join Us.</span>
            </h2>
          </div>
          <div className="md:mb-4">
            <p className="text-gray-500 font-medium max-w-sm border-l-2 border-[#9C1D20] pl-6">
              Our admission cycle for the 2026 academic year is now active. Follow these steps to secure your child's future.
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Vertical Line for Desktop (Only for first 3 items) */}
              {index < 3 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-[2px] bg-gray-200 z-0 group-hover:bg-[#9C1D20] transition-colors duration-500" />
              )}

              <div className="relative z-10 bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 hover:-translate-y-4 transition-all duration-500 h-full border border-transparent hover:border-[#9C1D20]/20">
                {/* Step Number & Icon */}
                <div className="flex justify-between items-start mb-10">
                  <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    {step.icon}
                  </div>
                  <span className="text-4xl font-black text-gray-100 group-hover:text-[#9C1D20]/10 transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#1F1A55] mb-4 group-hover:text-[#9C1D20] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
                  {step.desc}
                </p>

                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#1F1A55]/40 group-hover:text-[#9C1D20] transition-colors">
                  Learn More <ArrowRight size={14} />
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