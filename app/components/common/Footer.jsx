"use client";
import React from "react";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Phone,
  MapPin,
  Mail,
  Youtube,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1F1A55] text-white pt-24 pb-12">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-24">
          {/* School Brand Info */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-black tracking-tighter mb-4 flex flex-col">
              <span>AFAQ SCHOOL</span>
              <span className="text-[#9C1D20] text-xs tracking-[0.3em]">
                & COLLEGE
              </span>
            </h3>
            <div className="space-y-4 mt-8">
              <p className="flex items-start gap-3 text-white/60 text-sm leading-relaxed">
                <MapPin size={18} className="text-[#9C1D20] shrink-0" />
                Gulabad, Peshawar, <br /> Khyber Pakhtunkhwa
              </p>
              <p className="flex items-center gap-3 text-white/60 text-sm font-bold tracking-tight">
                <Phone size={18} className="text-[#9C1D20] shrink-0" />
                0340-9003875
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-[#9C1D20]">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="hover:text-white transition-colors"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="/academics"
                  className="hover:text-white transition-colors"
                >
                  Academics
                </Link>
              </li>
            </ul>
          </div>

          {/* School Life */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-[#9C1D20]">
              School Life
            </h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-white/70">
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="hover:text-white transition-colors"
                >
                  Islamic Events
                </Link>
              </li>
              <li>
                <Link
                  href="/activities"
                  className="hover:text-white transition-colors"
                >
                  Activities
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-[#9C1D20]">
              Information
            </h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-white/70">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Admission Process
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Required Docs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  School Timing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials & CTA */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-[#9C1D20]">
              Follow Us
            </h4>
            <div className="flex gap-6 mb-10">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FACC15] hover:border-[#FACC15] transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FACC15] hover:border-[#FACC15] transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FACC15] hover:border-[#FACC15] transition-all"
              >
                <Youtube size={18} />
              </a>
            </div>
            <Link href="/login">
              {" "}
              <button className="flex items-center gap-2 cursor-pointer text-[10px] font-black uppercase tracking-[0.2em] bg-white text-[#1F1A55] px-5 py-3 rounded-full hover:bg-[#9C1D20] hover:text-white transition-all">
                Student Portal <ArrowUpRight size={14} />
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 gap-6">
          <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">
            © 2026 Afaq School & College Gulabad. All Rights Reserved.
          </p>
          <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
            Empowering Minds, Building Character.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
