"use client";
import React from "react";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Phone,
  MapPin,
  Youtube,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1F1A55] text-white pt-16 md:pt-24 pb-8 md:pb-12 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-8 mb-16 md:mb-24">
          
          {/* School Brand Info - Full width on mobile */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-black tracking-tighter mb-4 flex flex-col">
              <span>AFAQ SCHOOL</span>
              <span className="text-[#9C1D20] text-xs tracking-[0.3em]">
                & COLLEGE
              </span>
            </h3>
            <div className="space-y-4 mt-6 md:mt-8">
              <p className="flex items-start gap-3 text-white/60 text-sm leading-relaxed">
                <MapPin size={18} className="text-[#9C1D20] shrink-0" />
                Gulabad, Peshawar, <br /> Khyber Pakhtunkhwa
              </p>
              <a 
                href="tel:03409003875" 
                className="flex items-center gap-3 text-white/60 text-sm font-bold tracking-tight hover:text-[#FACC15] transition-colors"
              >
                <Phone size={18} className="text-[#9C1D20] shrink-0" />
                0340-9003875
              </a>
            </div>
          </div>

          {/* Navigation - Column 2 */}
          <div className="col-span-1">
            <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-6 md:mb-8 text-[#9C1D20]">
              Navigation
            </h4>
            <ul className="space-y-3 md:space-y-4 text-[11px] md:text-sm font-bold uppercase tracking-widest text-white/70">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
              <li><Link href="/academics" className="hover:text-white transition-colors">Academics</Link></li>
            </ul>
          </div>

          {/* School Life - Column 3 */}
          <div className="col-span-1">
            <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-6 md:mb-8 text-[#9C1D20]">
              School Life
            </h4>
            <ul className="space-y-3 md:space-y-4 text-[11px] md:text-sm font-bold uppercase tracking-widest text-white/70">
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/events" className="hover:text-white transition-colors">Islamic Events</Link></li>
              <li><Link href="/activities" className="hover:text-white transition-colors">Activities</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Information - Column 4 (Hidden on very small, shown on md up) */}
          <div className="col-span-1">
            <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-6 md:mb-8 text-[#9C1D20]">
              Information
            </h4>
            <ul className="space-y-3 md:space-y-4 text-[11px] md:text-sm font-bold uppercase tracking-widest text-white/70">
              <li><Link href="#" className="hover:text-white transition-colors">Process</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Docs</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Timing</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
            </ul>
          </div>

          {/* Socials & CTA - Full width on mobile */}
          <div className="col-span-2 lg:col-span-1 pt-4 md:pt-0">
            <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-6 md:mb-8 text-[#9C1D20]">
              Follow Us
            </h4>
            <div className="flex gap-4 md:gap-6 mb-8 md:mb-10">
              {[Facebook, Instagram, Youtube].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FACC15] hover:border-[#FACC15] hover:text-[#1F1A55] transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <Link href="/login" className="inline-block w-full sm:w-auto">
              <button className="flex items-center justify-center gap-2 w-full sm:w-auto text-[10px] font-black uppercase tracking-[0.2em] bg-white text-[#1F1A55] px-6 py-4 rounded-full hover:bg-[#9C1D20] hover:text-white transition-all active:scale-95">
                Student Portal <ArrowUpRight size={14} />
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 md:pt-12 border-t border-white/10 gap-4 text-center md:text-left">
          <p className="text-[9px] md:text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] md:tracking-[0.3em]">
            © 2026 Afaq School & College Gulabad.
          </p>
          <p className="hidden sm:block text-[9px] md:text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
            Empowering Minds, Building Character.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;