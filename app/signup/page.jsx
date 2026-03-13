"use client";
import React, { useState } from "react";
import {
  ArrowRight,
  Lock,
  User,
  Mail,
  Eye,
  EyeOff,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen bg-white flex flex-col lg:flex-row overflow-x-hidden">
      {/* Mobile Branding (Only visible on small/medium screens) */}
      <div className="lg:hidden bg-[#1F1A55] p-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-[#9C1D20] p-1.5 rounded-lg">
            <GraduationCap className="text-white" size={24} />
          </div>
          <h1 className="text-white text-lg font-black tracking-tighter uppercase leading-none">
            Afaq School <br />{" "}
            <span className="text-[#9C1D20] text-[8px] tracking-[0.3em]">
              & College
            </span>
          </h1>
        </Link>
        <Link
          href="/"
          className="text-white/40 text-[10px] font-bold uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full"
        >
          Home
        </Link>
      </div>

      {/* 2. Left Side: Branding (Visible only on Desktop) */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#1F1A55] relative p-12 xl:p-16 flex-col justify-between overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero2.jpg"
            alt="Afaq School Campus"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1F1A55]/40 to-[#1F1A55]" />
        </div>

        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-[#9C1D20] p-2 rounded-lg group-hover:rotate-12 transition-transform">
              <GraduationCap className="text-white" size={32} />
            </div>
            <h1 className="text-white text-2xl font-black tracking-tighter uppercase leading-none">
              Afaq School <br />{" "}
              <span className="text-[#9C1D20] text-sm tracking-[0.3em]">
                & College
              </span>
            </h1>
          </Link>
        </div>

        <div className="relative z-10 max-w-md">
          <h2 className="text-white text-[40px] xl:text-[55px] font-bold leading-[1.1] xl:leading-[1] tracking-tighter uppercase mb-6">
            Join Our <br /> <span className="text-[#9C1D20]">Academic</span>{" "}
            <br /> Community.
          </h2>
          <p className="text-white/70 text-base xl:text-lg leading-relaxed font-medium">
            Create an account to begin the admission process for the 2026-27
            session and track your child's application status.
          </p>
        </div>

        <div className="relative z-10 flex gap-8 text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">
          <span>© 2026 Afaq School Gulabad</span>
          <Link href="#" className="hover:text-[#9C1D20] transition-colors">
            Help
          </Link>
          <Link href="#" className="hover:text-[#9C1D20] transition-colors">
            Privacy
          </Link>
        </div>
      </div>

      {/* 3. Right Side: Sign Up Form */}
      <div className="flex-1 w-full flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-24 bg-[#F8F9FB]">
        <div className="w-full max-w-md bg-white p-7 sm:p-10 md:p-14 rounded-[1.5rem] sm:rounded-[2.5rem] shadow-xl shadow-[#1F1A55]/5 border border-gray-50 my-8">
          <div className="mb-8 md:mb-10">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#9C1D20] block mb-2 md:mb-4">
              New Registration
            </span>
            <h3 className="text-[24px] sm:text-[28px] md:text-[35px] font-bold tracking-tighter text-[#1F1A55] uppercase leading-none">
              Create Account
            </h3>
          </div>

          <form
            className="space-y-5 md:space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Full Name */}
            <div className="space-y-2 group">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-[#9C1D20] transition-colors">
                Guardian / Student Name
              </label>
              <div className="flex items-center border-b-2 border-gray-100 group-focus-within:border-[#9C1D20] transition-all py-2 md:py-3">
                <User size={18} className="text-gray-300 mr-4" />
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-full bg-transparent border-none outline-none text-[#1F1A55] font-bold placeholder:text-gray-200 text-sm md:text-base"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2 group">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-[#9C1D20] transition-colors">
                Email Address
              </label>
              <div className="flex items-center border-b-2 border-gray-100 group-focus-within:border-[#9C1D20] transition-all py-2 md:py-3">
                <Mail size={18} className="text-gray-300 mr-4" />
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full bg-transparent border-none outline-none text-[#1F1A55] font-bold placeholder:text-gray-200 text-sm md:text-base"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2 group">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-[#9C1D20] transition-colors">
                Password
              </label>
              <div className="flex items-center border-b-2 border-gray-100 group-focus-within:border-[#9C1D20] transition-all py-2 md:py-3">
                <Lock size={18} className="text-gray-300 mr-4" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create password"
                  className="w-full bg-transparent border-none outline-none text-[#1F1A55] font-bold placeholder:text-gray-200 text-sm md:text-base"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-300 hover:text-[#9C1D20] transition-colors p-1"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button className="w-full bg-[#1F1A55] text-white py-4 md:py-5 rounded-full font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-4 hover:bg-[#9C1D20] shadow-lg transition-all active:scale-95 group mt-4">
              Register Now
              <ArrowRight
                size={16}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
          </form>

          <div className="mt-8 md:mt-10 text-center border-t border-gray-50 pt-6">
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#9C1D20] underline underline-offset-4 font-black hover:opacity-70 transition-opacity"
              >
                Login Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
