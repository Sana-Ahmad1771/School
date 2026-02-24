"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // Set first item open by default

  const faqs = [
    {
      question: "How do I apply?",
      answer: "The application process is entirely online. You can start by creating an account on our Student Portal and uploading the required academic transcripts and identification documents."
    },
    {
      question: "What courses are offered?",
      answer: "We offer a wide range of programs including B.Sc. in Computer Science, Postgraduate research, and various Professional Studies tailored for global careers."
    },
    {
      question: "Is online learning available?",
      answer: "Yes, we offer hybrid and fully online options for most of our graduate and professional certificate programs to accommodate working professionals."
    },
    {
      question: "What are the admission requirements?",
      answer: "Requirements vary by program, but generally include a minimum GPA, letters of recommendation, and proof of English proficiency for international students."
    },
    {
      question: "Is there any scholarship program?",
      answer: "We offer both merit-based and need-based scholarships. Apply before the early bird deadline to be automatically considered for our fully funded grants."
    }
  ];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-10">
        
        {/* Header Area */}
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-block px-4 py-1 rounded-full border border-black/20 text-black text-[12px] font-bold uppercase tracking-widest mb-6">
            FAQ & Answer
          </span>
          <h2 className="text-[40px] md:text-[60px] font-bold leading-[1.1] tracking-tight text-black max-w-3xl mx-auto">
            Answers to your questions, every step of the way.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Side: Image Content */}
          <div className="lg:col-span-5 h-full">
            <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-sm group">
              <img 
                src="/images/hero2.jpg" 
                alt="Student on campus"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle dark overlay instead of green */}
              <div className="absolute inset-0 bg-black/5" />
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
                      openIndex === index ? "text-black" : "text-gray-500 group-hover:text-black"
                    }`}>
                      {faq.question}
                    </span>
                    
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                      openIndex === index 
                        ? "bg-black border-black text-white" 
                        : "border-gray-300 text-black group-hover:border-black"
                    }`}>
                      {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>

                  {/* Animated Answer Content */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? "max-h-[300px] pb-8 md:pb-10" : "max-h-0"
                  }`}>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
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