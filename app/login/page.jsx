"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Lock,
  User,
  Eye,
  EyeOff,
  GraduationCap,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

const LoginPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  
  // 1. Add state for inputs
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); // Reset error

    // 2. Validation Check
    if (!identifier.trim() || !password.trim()) {
      setError("Please enter both your ID and Password to continue.");
      return;
    }

    // 3. If valid, proceed
    localStorage.setItem("isLoggedIn", "true");
    
    // Optional: Save the student name/email to localStorage for the profile page
    localStorage.setItem("student", JSON.stringify({ 
      name: identifier.includes("@") ? identifier.split('@')[0] : "Muhammad Ibrahim",
      email: identifier.includes("@") ? identifier : "ibrahim.afaq@example.com"
    }));

    router.push("/profile");
  };

  return (
    <section className="min-h-screen bg-white flex flex-col lg:flex-row">
      {/* Left Side: Branding (Desktop Only) */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#1F1A55] relative p-16 flex-col justify-between overflow-hidden">
        <img
          src="/images/hero2.jpg"
          alt="Afaq School Campus"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-[#9C1D20] p-2 rounded-lg">
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
          <h2 className="text-white text-[45px] xl:text-[55px] font-bold leading-[1] tracking-tighter uppercase mb-6">
            Welcome <br /> <span className="text-[#9C1D20]">Back</span> to{" "}
            <br /> Excellence.
          </h2>
          <p className="text-white/70 text-lg leading-relaxed font-medium">
            Log in to access the student dashboard, view academic records, and
            stay updated with campus news.
          </p>
        </div>

        <div className="relative z-10 flex gap-10 text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">
          <span>© 2026 Afaq School Gulabad</span>
          <Link href="#" className="hover:text-[#9C1D20] transition-colors">
            Support
          </Link>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-24 bg-[#F8F9FB]">
        <div className="w-full max-w-md bg-white p-8 md:p-14 rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-[#1F1A55]/5">
          <div className="mb-10 md:mb-12">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#9C1D20] block mb-3 md:mb-4">
              Secure Access
            </span>
            <h3 className="text-[28px] md:text-[35px] font-bold tracking-tighter text-[#1F1A55] uppercase leading-none">
              Portal Login
            </h3>
          </div>

          {/* Error Message Display */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-[#9C1D20] flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
              <AlertCircle size={18} className="text-[#9C1D20] shrink-0" />
              <p className="text-[11px] font-bold text-[#9C1D20] uppercase tracking-wider leading-tight">
                {error}
              </p>
            </div>
          )}

          <form className="space-y-6 md:space-y-8" onSubmit={handleLogin}>
            {/* Input: ID */}
            <div className="space-y-2 group">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-[#9C1D20] transition-colors">
                Registration ID / Email
              </label>
              <div className="flex items-center border-b-2 border-gray-100 group-focus-within:border-[#9C1D20] transition-all py-3">
                <User size={18} className="text-gray-300 mr-4 group-focus-within:text-[#9C1D20]" />
                <input
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="Enter your ID"
                  className="w-full bg-transparent border-none outline-none text-[#1F1A55] font-bold placeholder:text-gray-200 text-sm md:text-base"
                />
              </div>
            </div>

            {/* Input: Password */}
            <div className="space-y-2 group">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-[#9C1D20] transition-colors">
                Password
              </label>
              <div className="flex items-center border-b-2 border-gray-100 group-focus-within:border-[#9C1D20] transition-all py-3">
                <Lock size={18} className="text-gray-300 mr-4 group-focus-within:text-[#9C1D20]" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
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

            <div className="flex items-center justify-between gap-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-[#1F1A55] border-gray-300 rounded cursor-pointer"
                />
                <span className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider group-hover:text-gray-600">
                  Remember Me
                </span>
              </label>
              <a
                href="#"
                className="text-[9px] md:text-[10px] font-bold text-[#9C1D20] border-b border-[#9C1D20] uppercase tracking-wider hover:opacity-50 transition-all"
              >
                Forgot?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1F1A55] text-white py-4 md:py-5 rounded-full font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-4 hover:bg-[#9C1D20] shadow-lg transition-all group active:scale-95"
            >
              Sign In
              <ArrowRight
                size={16}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
          </form>

          {/* New Sign Up Section */}
          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-400 text-[9px] md:text-[11px] font-bold uppercase tracking-widest mb-3 md:mb-4">
              Don't have an account yet?
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 text-[#1F1A55] font-black uppercase tracking-widest text-[11px] md:text-[12px] hover:text-[#9C1D20] transition-colors group"
            >
              Create New Account
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;