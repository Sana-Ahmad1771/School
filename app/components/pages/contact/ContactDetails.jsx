"use client";
import React from "react";
import { Phone, MessageCircle, Clock, ArrowUpRight } from "lucide-react";

const ContactDetails = () => {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left: Contact Info */}
          <div className="lg:w-1/2 space-y-12">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.4em] text-[#9C1D20] block mb-4">
                Visit Our Campus
              </span>
              <h2 className="text-[40px] md:text-[55px] font-bold text-[#1F1A55] leading-none tracking-tighter mb-8">
                Gulabad, <br />Peshawar.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Phone Card */}
              <div className="p-8 rounded-[2.5rem] bg-[#F8F9FB] group hover:bg-[#1F1A55] transition-all duration-500">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#9C1D20]">
                  <Phone size={24} className="text-[#1F1A55] group-hover:text-white" />
                </div>
                <h4 className="text-[#1F1A55] font-black uppercase tracking-widest text-[10px] mb-2 group-hover:text-white/50">Call Us Directly</h4>
                <p className="text-xl font-bold text-[#1F1A55] group-hover:text-white leading-none">0340-9003875</p>
                <div className="mt-4 flex items-center gap-2 text-[#9C1D20] text-[10px] font-black group-hover:text-[#FACC15]">
                   <MessageCircle size={14} /> WHATSAPP AVAILABLE
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="p-8 rounded-[2.5rem] bg-[#F8F9FB] group hover:bg-[#1F1A55] transition-all duration-500">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#9C1D20]">
                  <Clock size={24} className="text-[#1F1A55] group-hover:text-white" />
                </div>
                <h4 className="text-[#1F1A55] font-black uppercase tracking-widest text-[10px] mb-2 group-hover:text-white/50">Working Hours</h4>
                <p className="text-xl font-bold text-[#1F1A55] group-hover:text-white">8:00 AM — 2:00 PM</p>
                <p className="text-[10px] text-gray-400 mt-2 uppercase font-bold group-hover:text-white/30">Monday to Saturday</p>
              </div>
            </div>

            {/* Location Description */}
            <div className="border-l-4 border-[#9C1D20] pl-8 py-2">
              <p className="text-gray-500 text-lg leading-relaxed font-medium">
                Our campus is located in the heart of Gulabad, Peshawar. We welcome parents 
                and visitors to explore our facilities and meet our dedicated faculty 
                during official working hours.
              </p>
            </div>
          </div>

          {/* Right: Modern Contact Form */}
          <div className="lg:w-1/2">
            <div className="bg-[#1F1A55] p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#9C1D20] rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2" />
               
               <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">Quick Inquiry</h3>
               
               <form className="space-y-6 relative z-10">
                 <div className="space-y-2">
                   <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Full Name</label>
                   <input type="text" className="w-full bg-white/5 border-b-2 border-white/10 py-3 text-white outline-none focus:border-[#9C1D20] transition-colors" placeholder="e.g. Ali Khan" />
                 </div>

                 <div className="space-y-2">
                   <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Phone Number</label>
                   <input type="tel" className="w-full bg-white/5 border-b-2 border-white/10 py-3 text-white outline-none focus:border-[#9C1D20] transition-colors" placeholder="03XX XXXXXXX" />
                 </div>

                 <div className="space-y-2">
                   <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Your Message</label>
                   <textarea rows="4" className="w-full bg-white/5 border-b-2 border-white/10 py-3 text-white outline-none focus:border-[#9C1D20] transition-colors resize-none" placeholder="How can we help you?"></textarea>
                 </div>

                 <button className="w-full bg-[#9C1D20] text-white py-5 rounded-full font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-4 hover:bg-white hover:text-[#1F1A55] transition-all group mt-8">
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