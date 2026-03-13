"use client";
import React from "react";
import { CheckCircle, Phone, Image as ImageIcon, FileBadge, Contact2, FileCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const RequiredDocuments = () => {
  const documents = [
    {
      title: "Student B-Form",
      desc: "A clear photocopy of the NADRA B-Form for age verification.",
      icon: <FileBadge size={24} className="text-[#9C1D20]" />,
    },
    {
      title: "Father's CNIC",
      desc: "Attested photocopy of the Father's or Guardian's valid CNIC.",
      icon: <Contact2 size={24} className="text-[#9C1D20]" />,
    },
    {
      title: "Passport Photos",
      desc: "2 recent passport-size photographs with a blue background.",
      icon: <ImageIcon size={24} className="text-[#9C1D20]" />,
    },
    {
      title: "Previous Result",
      desc: "Original School Leaving Certificate and last result card (for transfers).",
      icon: <FileCheck size={24} className="text-[#9C1D20]" />,
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Text and Contact Card */}
          {/* Added 'lg:sticky' so it only sticks on large screens */}
          <div className="lg:w-1/3 w-full lg:sticky lg:top-32 text-center lg:text-left">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-[#9C1D20] block mb-4">
              Documentation
            </span>
            <h2 className="text-[32px] md:text-[55px] font-bold text-[#1F1A55] leading-[1.1] md:leading-[1] tracking-tighter mb-8">
              What You <br className="hidden lg:block" /> 
              <span className="text-[#9C1D20]">Need To</span> Prepare.
            </h2>
            
            {/* Contact Support Box */}
            <div className="bg-[#F8F9FB] p-6 md:p-8 rounded-[2rem] border border-gray-100 text-left">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                  <Phone size={20} className="text-[#1F1A55]" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Direct Inquiries</p>
                  <p className="text-base md:text-lg font-bold text-[#1F1A55]">0340-9003875</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">
                If you are missing any document, please contact our support team for guidance on provisional admission.
              </p>
              
              <Link href="/signup">
                <button className="w-full bg-[#1F1A55] text-white py-4 rounded-full font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-[#9C1D20] transition-all group shadow-lg shadow-[#1F1A55]/20 active:scale-95">
                  Apply Online Now
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side: Documents Grid */}
          <div className="lg:w-2/3 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {documents.map((doc, index) => (
                <div 
                  key={index} 
                  className="group p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border-2 border-gray-50 hover:border-[#9C1D20]/10 hover:bg-gray-50 transition-all duration-500"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
                      {doc.icon}
                    </div>
                    <CheckCircle size={20} className="text-gray-200 group-hover:text-[#9C1D20] transition-colors" />
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-[#1F1A55] mb-3 uppercase tracking-tight">
                    {doc.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">
                    {doc.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Note Area */}
            <div className="mt-8 md:mt-10 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border-2 border-dashed border-gray-200 flex items-start gap-4">
               <div className="min-w-[4px] h-10 bg-[#FACC15] rounded-full mt-1 shrink-0" />
               <p className="text-xs md:text-sm text-gray-500 font-medium">
                 <span className="text-[#1F1A55] font-bold uppercase text-[10px] md:text-xs block mb-1">Important Note:</span> 
                 All photocopies must be clearly legible. Original documents must be presented at the time of the final interview for physical verification.
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RequiredDocuments;