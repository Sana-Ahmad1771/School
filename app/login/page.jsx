"use client";
import React, { useState } from "react";
import { ArrowRight, Lock, User, Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen bg-white flex flex-col lg:flex-row">
      
      {/* Left Side: Visual/Branding (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-black relative p-16 flex-col justify-between overflow-hidden">
        {/* Background Image with Grayscale and Overlay */}
        <img 
          src="/images/hero2.jpg" 
          alt="Campus Architecture" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
        />
        
        <div className="relative z-10">
          <h1 className="text-white text-3xl font-black tracking-tighter uppercase">
            University. <br /> Student Portal
          </h1>
        </div>

        <div className="relative z-10 max-w-md">
          <h2 className="text-white text-[50px] font-bold leading-[1] tracking-tighter uppercase mb-6">
            Access your <br /> Academic <br /> Future.
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Manage your courses, check your grades, and connect with faculty in one centralized space.
          </p>
        </div>

        <div className="relative z-10 flex gap-10 text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
          <span>© 2026 Modern University</span>
          <a href="#" className="hover:text-white transition-colors">Support</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-white">
        <div className="w-full max-w-md">
          
          {/* Header */}
          <div className="mb-12">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 block mb-4">
              Secure Login
            </span>
            <h3 className="text-[40px] font-bold tracking-tighter text-black uppercase leading-none">
              Welcome Back
            </h3>
          </div>

          {/* Form */}
          <form className="space-y-8">
            {/* Student ID / Email */}
            <div className="space-y-2 group">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-black transition-colors">
                Student ID or Email
              </label>
              <div className="flex items-center border-b-2 border-gray-200 group-focus-within:border-black transition-all py-2">
                <User size={18} className="text-gray-400 mr-4" />
                <input 
                  type="text" 
                  placeholder="e.g. STU12345"
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
                  placeholder="••••••••"
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

            {/* Options */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-black border-gray-300 rounded" />
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Remember Me</span>
              </label>
              <a href="#" className="text-xs font-bold text-black border-b border-black uppercase tracking-wider hover:opacity-50 transition-all">
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-black text-white py-5 rounded-full font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-4 hover:bg-gray-900 transition-all group">
              Login to Portal
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>

          {/* Footer of Form */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
              Need assistance? <a href="#" className="text-black underline underline-offset-4">Contact IT Helpdesk</a>
            </p>
              <p className="mt-6 text-xs text-gray-500 font-bold uppercase tracking-widest">
                Don't have an account?{' '}
                <a href="/signup" className="text-black underline underline-offset-4 hover:opacity-70 transition-all">Sign Up</a>
              </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LoginPage;