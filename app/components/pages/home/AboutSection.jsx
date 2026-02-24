import React from "react";
import { ArrowUpRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Side: Title */}
          <div className="lg:col-span-5">
            <h2 className="text-[50px] md:text-[80px] font-bold leading-[0.9] tracking-tighter text-black">
              About our <br /> university
            </h2>
          </div>

          {/* Right Side: Description & CTA */}
          <div className="lg:col-span-7">
            <p className="text-2xl md:text-[38px] font-semibold leading-[1.2] text-black tracking-tight mb-10">
              Our University provides world-class education, drives innovation, 
              and prepares future leaders. With modern facilities and a vibrant 
              community, we empower students to succeed and make lasting impact.
            </p>

            <button className="group flex items-center gap-3 bg-[#111] text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-black hover:scale-105">
              <span className="text-lg">Discover More</span>
              <div className="bg-white/10 rounded-full p-1 group-hover:bg-white/20 transition-colors">
                <ArrowUpRight size={22} />
              </div>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;