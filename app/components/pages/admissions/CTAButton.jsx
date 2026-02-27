"use client";
import React from "react";
import { ArrowRight } from "lucide-react";


const CTAButton = () => {
  return (
    <section className="max-w-[1800px] mx-auto px-8 lg:px-10 bg-white pb-24">
      {/* Call to Action Footer */}
      <div className="mt-24 bg-[#1F1A55] rounded-[3rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#9C1D20] rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10">
          <h4 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tighter">
            Have questions about admissions?
          </h4>
          <p className="text-white/60 text-lg font-medium">
            Our helpdesk is available from 8:00 AM to 2:00 PM (Mon-Sat).
          </p>
        </div>

        <button className="relative z-10 bg-white text-[#1F1A55] px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-[#9C1D20] hover:text-white transition-all shadow-2xl group">
          Download Prospectus
          <ArrowRight
            size={16}
            className="inline ml-2 group-hover:translate-x-2 transition-transform"
          />
        </button>
      </div>
    </section>
  );
};

export default CTAButton;
{
  /* Call to Action Footer */
}
<div className="mt-24 bg-[#1F1A55] rounded-[3rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative">
  {/* Background Accent */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-[#9C1D20] rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2" />

  <div className="relative z-10">
    <h4 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tighter">
      Have questions about admissions?
    </h4>
    <p className="text-white/60 text-lg font-medium">
      Our helpdesk is available from 8:00 AM to 2:00 PM (Mon-Sat).
    </p>
  </div>

  <button className="relative z-10 bg-white text-[#1F1A55] px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-[#9C1D20] hover:text-white transition-all shadow-2xl group">
    Download Prospectus
    <ArrowRight
      size={16}
      className="inline ml-2 group-hover:translate-x-2 transition-transform"
    />
  </button>
</div>;
