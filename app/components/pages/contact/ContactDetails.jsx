"use client";
import React from "react";
import { Phone, MessageCircle, Clock, ArrowUpRight } from "lucide-react";

const ContactDetails = () => {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left: Contact Info */}
          <div className="lg:w-1/2 space-y-10 md:space-y-12 text-center lg:text-left">
            <div>
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-[#9C1D20] block mb-4">
                Visit Our Campus
              </span>
              <h2 className="text-[32px] sm:text-[45px] md:text-[55px] font-bold text-[#1F1A55] leading-[1.1] md:leading-none tracking-tighter mb-6 md:mb-8">
                Gulabad, <br className="hidden lg:block" /> Peshawar.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {/* Phone Card */}
              <div className="p-8 rounded-[2rem] md:rounded-[2.5rem] bg-[#F8F9FB] group hover:bg-[#1F1A55] transition-all duration-500 text-left">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#9C1D20]">
                  <Phone size={24} className="text-[#1F1A55] group-hover:text-white" />
                </div>
                <h4 className="text-[#1F1A55] font-black uppercase tracking-widest text-[10px] mb-2 group-hover:text-white/50">Call Us Directly</h4>
                <p className="text-lg md:text-xl font-bold text-[#1F1A55] group-hover:text-white leading-none">0340-9003875</p>
                <div className="mt-4 flex items-center gap-2 text-[#9C1D20] text-[10px] font-black group-hover:text-[#FACC15]">
                   <MessageCircle size={14} /> WHATSAPP AVAILABLE
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="p-8 rounded-[2rem] md:rounded-[2.5rem] bg-[#F8F9FB] group hover:bg-[#1F1A55] transition-all duration-500 text-left">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#9C1D20]">
                  <Clock size={24} className="text-[#1F1A55] group-hover:text-white" />
                </div>
                <h4 className="text-[#1F1A55] font-black uppercase tracking-widest text-[10px] mb-2 group-hover:text-white/50">Working Hours</h4>
                <p className="text-lg md:text-xl font-bold text-[#1F1A55] group-hover:text-white">8:00 AM — 2:00 PM</p>
                <p className="text-[10px] text-gray-400 mt-2 uppercase font-bold group-hover:text-white/30">Monday to Saturday</p>
              </div>
            </div>

            {/* Location Description */}
            <div className="border-l-0 lg:border-l-4 border-[#9C1D20] pl-0 lg:pl-8 py-2">
              <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium px-4 lg:px-0">
                Our campus is located in the heart of Gulabad, Peshawar. We welcome parents 
                and visitors to explore our facilities and meet our dedicated faculty 
                during official working hours.
              </p>
            </div>
          </div>

          {/* Right: Modern Contact Form */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-[#1F1A55] p-8 md:p-12 lg:p-16 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden">
               {/* Background Accent */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#9C1D20] rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2" />
               
               <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight relative z-10">Quick Inquiry</h3>
               
               <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                 <div className="space-y-2">
                   <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Full Name</label>
                   <input 
                    type="text" 
                    className="w-full bg-white/5 border-b-2 border-white/10 py-3 text-white outline-none focus:border-[#9C1D20] transition-colors rounded-none" 
                    placeholder="e.g. Ali Khan" 
                   />
                 </div>

                 <div className="space-y-2">
                   <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Phone Number</label>
                   <input 
                    type="tel" 
                    className="w-full bg-white/5 border-b-2 border-white/10 py-3 text-white outline-none focus:border-[#9C1D20] transition-colors rounded-none" 
                    placeholder="03XX XXXXXXX" 
                   />
                 </div>

                 <div className="space-y-2">
                   <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Your Message</label>
                   <textarea 
                    rows="3" 
                    className="w-full bg-white/5 border-b-2 border-white/10 py-3 text-white outline-none focus:border-[#9C1D20] transition-colors resize-none rounded-none" 
                    placeholder="How can we help you?"
                   ></textarea>
                 </div>

                 <button className="w-full bg-[#9C1D20] text-white py-4 md:py-5 rounded-full font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-4 hover:bg-white hover:text-[#1F1A55] transition-all group mt-8 active:scale-95 shadow-lg">
                    Send Inquiry
                    <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </button>
               </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactDetails;