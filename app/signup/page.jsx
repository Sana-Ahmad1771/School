"use client";
import React, { useState } from "react";
import { ArrowRight, Lock, User, Mail, Eye, EyeOff } from "lucide-react";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen bg-white flex flex-col lg:flex-row">
      
      {/* Left Side: Visual/Branding (Matches Login) */}
      <div className="hidden lg:flex lg:w-1/2 bg-black relative p-16 flex-col justify-between overflow-hidden">
        <img 
          src="/images/hero2.jpg" 
          alt="Campus Architecture" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
        />
        
        <div className="relative z-10">
          <h1 className="text-white text-3xl font-black tracking-tighter uppercase">
            University. <br /> Admissions Portal
          </h1>
        </div>

        <div className="relative z-10 max-w-md">
          <h2 className="text-white text-[50px] font-bold leading-[1] tracking-tighter uppercase mb-6">
            Join the <br /> Next Generation <br /> of Leaders.
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Create your account to start your application, track your progress, and join our global academic community.
          </p>
        </div>

        <div className="relative z-10 flex gap-10 text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
          <span>© 2026 Modern University</span>
          <a href="#" className="hover:text-white transition-colors">Support</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
        </div>
      </div>

      {/* Right Side: Sign Up Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-white">
        <div className="w-full max-w-md">
          
          {/* Header */}
          <div className="mb-12">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 block mb-4">
              Registration
            </span>
            <h3 className="text-[40px] font-bold tracking-tighter text-black uppercase leading-none">
              Create Account
            </h3>
          </div>

          {/* Form */}
          <form className="space-y-8">
            {/* Student ID or Email */}
            <div className="space-y-2 group">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-black transition-colors">
                Student ID or Email
              </label>
              <div className="flex items-center border-b-2 border-gray-200 group-focus-within:border-black transition-all py-2">
                <Mail size={18} className="text-gray-400 mr-4" />
                <input 
                  type="text" 
                  placeholder="e.g. STU12345 or email"
                  className="w-full bg-transparent border-none outline-none text-black font-bold placeholder:text-gray-200"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2 group">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-black transition-colors">
                Password
              </label>
              <div className="flex items-center border-b-2 border-gray-200 group-focus-within:border-black transition-all py-2">
                <Lock size={18} className="text-gray-400 mr-4" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Create a password"
                  className="w-full bg-transparent border-none outline-none text-black font-bold placeholder:text-gray-200"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-black transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2 group">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-black transition-colors">
                Confirm Password
              </label>
              <div className="flex items-center border-b-2 border-gray-200 group-focus-within:border-black transition-all py-2">
                <Lock size={18} className="text-gray-400 mr-4" />
                <input 
                  type="password" 
                  placeholder="Repeat password"
                  className="w-full bg-transparent border-none outline-none text-black font-bold placeholder:text-gray-200"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-black text-white py-5 rounded-full font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-4 hover:bg-gray-900 transition-all group mt-4">
              Create Account
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>

          {/* Footer of Form */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
              Already have an account?{' '}
              <a href="/login" className="text-black underline underline-offset-4 hover:opacity-70 transition-all font-black">
                Login Here
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SignUpPage;