"use client";
import React from "react";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-10">
        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-24">
          {/* Brand Info */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-black tracking-tighter mb-8">
              UNIVERSITY.
            </h3>
            <p className="text-white/40 text-sm leading-relaxed">
              Main Campus Address <br />
              123 Education Square, pakistan <br />
              Islamic Republic of pakistan
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-white/40">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
              <li>
                <a href="#" className="hover:text-white/50 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/50 transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/50 transition-colors">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/50 transition-colors">
                  Research
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-white/40">
              Resources
            </h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
              <li>
                <a href="#" className="hover:text-white/50 transition-colors">
                  Library
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/50 transition-colors">
                  Student Portal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/50 transition-colors">
                  Faculty
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/50 transition-colors">
                  Alumni
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-white/40">
              Contact
            </h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
              <li>
                <a href="#" className="hover:text-white/50 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/50 transition-colors">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/50 transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/50 transition-colors">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-white/40">
              Follow Us
            </h4>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-50 transition-opacity">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:opacity-50 transition-opacity">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:opacity-50 transition-opacity">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:opacity-50 transition-opacity">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 gap-6">
          <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">
            © 2026 Modern University. All Rights Reserved.
          </p>
          <div className="flex gap-10 text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
