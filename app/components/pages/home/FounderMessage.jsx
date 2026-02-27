"use client";
import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const FounderMessage = () => {
  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Side: Founder Image */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl z-10"
            >
              <Image
                src="/images/director.jpg"
                alt="Anas - Founder of Afaq School"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Decorative Background Elements */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#FACC15] rounded-[3rem] -z-0 opacity-20" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-[#9C1D20] rounded-full -z-0" />
          </div>

          {/* Right Side: Message Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Quote className="text-[#FACC15] w-16 h-16 mb-8 opacity-40" />

              <h2 className="text-[#1F1A55] font-bold uppercase tracking-[0.2em] text-sm mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#1F1A55]" />
                Founder's Message
              </h2>

              <p className="text-3xl md:text-[46px] font-bold leading-[1.1] text-[#1F1A55] tracking-tight mb-10">
                “At Afaq School, our mission is not only to educate but to
                <span className="text-[#9C1D20]">
                  {" "}
                  build character, confidence{" "}
                </span>
                and leadership in every child.”
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-2xl">
                We are committed to maintaining a disciplined and nurturing
                environment where students can excel academically and morally,
                ensuring they are prepared for the challenges of tomorrow.
              </p>

              {/* Founder Signature Area */}
              <div className="flex items-center gap-6">
                <div>
                  <h4 className="text-2xl font-black text-[#1F1A55] uppercase tracking-tighter">
                    Anas Shoaib
                  </h4>
                  <p className="text-[#9C1D20] font-bold text-sm uppercase tracking-widest">
                    Founder & Director
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
