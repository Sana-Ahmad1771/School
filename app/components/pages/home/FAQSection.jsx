"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Which classes are currently open for admission?",
      answer: "We are currently welcoming admissions for the 2026–27 academic year for Nursery, KG, and Grade 1 through Grade 8."
    },
    {
      question: "What documents are required for admission?",
      answer: "To complete the process, you will need a copy of the student's B-Form, a copy of the Father's CNIC, 2 passport-size photos, and the previous school result card if applicable."
    },
    {
      question: "Is the teaching staff qualified?",
      answer: "Yes, we pride ourselves on having a highly qualified and dedicated female teaching staff who provide personal attention to every student in a disciplined environment."
    },
    {
      question: "How does the school ensure student security?",
      answer: "Afaq School & College provides a safe and secure environment with strictly monitored campus entry and a disciplined atmosphere focused on the well-being of our students."
    },
    {
      question: "Does the school focus on religious education?",
      answer: "Absolutely. Character building and Islamic values are core parts of our mission. We aim to nurture morally strong individuals alongside their academic studies."
    }
  ];

  return (
    <section className="bg-[#FBFBFB] py-24 md:py-32">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-10">
        
        {/* Header Area */}
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-block px-6 py-2 rounded-full border border-[#9C1D20]/20 text-[#1F1A55] bg-[#FACC15]  text-[12px] font-bold uppercase tracking-widest mb-6">
            Admission Help Desk
          </span>
          <h2 className="text-[40px] md:text-[60px] font-bold leading-[1.1] tracking-tight text-[#1F1A55] max-w-3xl mx-auto">
            Everything you need to know about <span className="text-[#9C1D20]">Admissions.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Side: School Image */}
          <div className="lg:col-span-5">
            <div className="relative h-full min-h-[500px] overflow-hidden rounded-[2.5rem] group shadow-2xl">
              <img 
                src="/images/hero2.jpg" 
                alt="Afaq School Campus"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Blue Tint Overlay */}
              <div className="absolute inset-0 bg-[#1F1A55]/20 group-hover:bg-[#1F1A55]/10 transition-colors duration-500" />
              
              {/* Contact Badge */}
              <div className="absolute bottom-10 left-10 right-10 bg-white p-8 rounded-2xl shadow-xl">
                <p className="text-[#1F1A55] font-bold text-lg mb-1">Still have questions?</p>
                <p className="text-gray-500 text-sm mb-4">Call us during school hours</p>
                <a href="tel:03409003875" className="text-[#9C1D20] font-black text-2xl tracking-tight">
                  0340-9003875
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="border-t border-gray-200">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full py-8 md:py-10 flex items-center justify-between text-left group"
                  >
                    <span className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                      openIndex === index ? "text-[#9C1D20]" : "text-[#1F1A55] group-hover:text-[#9C1D20]"
                    }`}>
                      {faq.question}
                    </span>
                    
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                      openIndex === index 
                        ? "bg-[#9C1D20] border-[#9C1D20] text-white rotate-180" 
                        : "border-gray-200 text-[#1F1A55] group-hover:border-[#9C1D20] group-hover:text-[#9C1D20]"
                    }`}>
                      {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>

                  {/* Animated Answer Content */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? "max-h-[300px] pb-8 md:pb-10" : "max-h-0"
                  }`}>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl border-l-4 border-[#9C1D20]/20 pl-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;