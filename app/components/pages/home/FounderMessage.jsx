"use client";
import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const FounderMessage = () => {
  return (
    <section className="bg-white pb-20 md:py-32 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Founder Image */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl z-10"
            >
              <Image
                src="/images/director.jpg"
                alt="Anas - Founder of Afaq School"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Decorative Background Elements - Scaled for mobile */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-32 h-32 md:w-64 md:h-64 bg-[#FACC15] rounded-[2rem] md:rounded-[3rem] -z-0 opacity-20" />
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-20 h-20 md:w-32 md:h-32 border-4 border-[#9C1D20] rounded-full -z-0" />
          </div>

          {/* Right Side: Message Content */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Quote className="text-[#FACC15] w-12 h-12 md:w-16 md:h-16 mb-6 md:mb-8 opacity-40" />

              <h2 className="text-[#1F1A55] font-bold uppercase tracking-[0.2em] text-[10px] md:text-sm mb-4 md:mb-6 flex items-center gap-3">
                <span className="w-6 md:w-8 h-[1px] bg-[#1F1A55]" />
                Founder's Message
              </h2>

              <p className="text-[clamp(24px,6vw,46px)] font-bold leading-[1.15] text-[#1F1A55] tracking-tight mb-6 md:mb-10">
                “At Afaq School, our mission is not only to educate but to
                <span className="text-[#9C1D20]">
                  {" "} build character, confidence{" "}
                </span>
                and leadership in every child.”
              </p>

              <p className="text-base md:text-xl text-gray-600 leading-relaxed mb-8 md:mb-12 max-w-2xl">
                We are committed to maintaining a disciplined and nurturing
                environment where students can excel academically and morally,
                ensuring they are prepared for the challenges of tomorrow.
              </p>

              {/* Founder Signature Area */}
              <div className="flex items-center gap-6 border-t border-gray-100 pt-8 lg:border-none lg:pt-0">
                <div>
                  <h4 className="text-xl md:text-2xl font-black text-[#1F1A55] uppercase tracking-tighter">
                    Anas Shoaib
                  </h4>
                  <p className="text-[#9C1D20] font-bold text-xs uppercase tracking-widest">
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