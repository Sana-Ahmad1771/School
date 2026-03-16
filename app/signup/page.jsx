"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  Lock,
  User,
  Mail,
  Eye,
  EyeOff,
  GraduationCap,
  Phone,
  MapPin,
  Calendar,
  Camera,
  Upload,
} from "lucide-react";
import Link from "next/link";

const SignUpPage = () => {
  const router = useRouter();
  const fileInputRef = useRef(null);

  // Flow State
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  // Form Data State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    dob: "",
    address: "",
    class: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Inside SignUpPage handleFinalSubmit
const handleFinalSubmit = (e) => {
  e.preventDefault();
  const studentData = {
    ...formData, // name, email, phone, dob, address, class
    id: `ASC-${Math.floor(1000 + Math.random() * 9000)}`,
    profileImage: imagePreview || "/images/director.jpg", // Use uploaded image or fallback
    joinedDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    attendance: "100%",
    gpa: "N/A",
  };

  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("student", JSON.stringify(studentData));
  
  // Force a window refresh or custom event if needed, but router.push is usually enough
  router.push("/profile");
};

  return (
    <section className="min-h-screen bg-white flex flex-col lg:flex-row overflow-x-hidden">
      {/* Branding Side (Desktop) */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#1F1A55] relative p-12 xl:p-16 flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero2.jpg"
            alt="Afaq School"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1F1A55]/40 to-[#1F1A55]" />
        </div>

        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-[#9C1D20] p-2 rounded-lg">
              <GraduationCap className="text-white" size={32} />
            </div>
            <h1 className="text-white text-2xl font-black tracking-tighter uppercase leading-none">
              Afaq School <br /> <span className="text-[#9C1D20] text-sm tracking-[0.3em]">& College</span>
            </h1>
          </Link>
        </div>

        <div className="relative z-10 max-w-md">
          {/* Progress Indicator */}
          <div className="flex gap-2 mb-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`h-1 w-12 rounded-full transition-all duration-500 ${step >= i ? "bg-[#9C1D20]" : "bg-white/10"}`} />
            ))}
          </div>
          <h2 className="text-white text-[40px] xl:text-[50px] font-bold leading-tight tracking-tighter uppercase mb-4">
            {step === 1 && "Start Your Journey."}
            {step === 2 && "Tell us about yourself."}
            {step === 3 && "Complete your profile."}
          </h2>
          <p className="text-white/60 text-lg">Step {step} of 3</p>
        </div>

        <div className="relative z-10 text-[10px] font-bold text-white/40 uppercase tracking-widest">
          © 2026 Afaq School Gulabad
        </div>
      </div>

      {/* Form Side */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-24 bg-[#F8F9FB]">
        <div className="w-full max-w-md bg-white p-8 md:p-14 rounded-[2.5rem] shadow-xl shadow-[#1F1A55]/5 border border-gray-50">
          
          {step > 1 && (
            <button onClick={() => setStep(step - 1)} className="mb-6 flex items-center gap-2 text-[10px] font-black uppercase text-gray-400 hover:text-[#9C1D20] transition-colors">
              <ArrowLeft size={14} /> Back
            </button>
          )}

          <div className="mb-10">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#9C1D20] block mb-2">Student Portal</span>
            <h3 className="text-3xl font-bold tracking-tighter text-[#1F1A55] uppercase">
              {step === 1 ? "Credentials" : step === 2 ? "Student Info" : "Identity"}
            </h3>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            
            {/* STEP 1: ACCOUNT */}
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <InputField icon={User} label="Full Name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" />
                <InputField icon={Mail} label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="name@example.com" />
                <div className="space-y-2 group">
                  <label className="text-[10px] font-black uppercase text-gray-400 group-focus-within:text-[#9C1D20]">Password</label>
                  <div className="flex items-center border-b-2 border-gray-100 group-focus-within:border-[#9C1D20] py-3">
                    <Lock size={18} className="text-gray-300 mr-4" />
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full bg-transparent outline-none text-[#1F1A55] font-bold text-sm"
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-gray-300 hover:text-[#9C1D20]">
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
                <PrimaryButton onClick={() => setStep(2)}>Continue <ArrowRight size={16} /></PrimaryButton>
              </div>
            )}

            {/* STEP 2: DETAILS */}
            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <InputField icon={Phone} label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} placeholder="+92 000 0000000" />
                <InputField icon={Calendar} label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleChange} />
                <InputField icon={GraduationCap} label="Admission Class" name="class" value={formData.class} onChange={handleChange} placeholder="e.g. 10th Grade" />
                <InputField icon={MapPin} label="Home Address" name="address" value={formData.address} onChange={handleChange} placeholder="Full address details" />
                <PrimaryButton onClick={() => setStep(3)}>Almost Done <ArrowRight size={16} /></PrimaryButton>
              </div>
            )}

            {/* STEP 3: PHOTO */}
            {step === 3 && (
              <div className="space-y-8 text-center animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="relative w-32 h-32 mx-auto group">
                  <div className="w-full h-full rounded-full border-4 border-gray-50 overflow-hidden bg-gray-100 relative shadow-inner">
                    {imagePreview ? (
                      <img src={imagePreview} className="w-full h-full object-cover" alt="Preview" />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-300">
                        <User size={48} />
                      </div>
                    )}
                  </div>
                  <button 
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                    className="absolute bottom-0 right-0 bg-[#9C1D20] text-white p-3 rounded-full border-4 border-white hover:scale-110 transition-transform shadow-lg"
                  >
                    <Camera size={18} />
                  </button>
                  <input type="file" ref={fileInputRef} hidden accept="image/*" onChange={handleImageChange} />
                </div>
                
                <div className="bg-[#F8F9FB] p-4 rounded-2xl border border-dashed border-gray-200">
                  <p className="text-[10px] font-bold text-gray-400 uppercase leading-relaxed">
                    Upload a clear passport-sized photo for your digital student ID.
                  </p>
                </div>

                <PrimaryButton onClick={handleFinalSubmit}>Complete Registration <ArrowRight size={16} /></PrimaryButton>
              </div>
            )}
          </form>

          {step === 1 && (
            <div className="mt-8 text-center pt-6 border-t border-gray-50">
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                Already registered? <Link href="/login" className="text-[#9C1D20] font-black underline underline-offset-4 ml-1">Login</Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Internal Helper Components
const InputField = ({ icon: Icon, label, ...props }) => (
  <div className="space-y-2 group">
    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-[#9C1D20] transition-colors">{label}</label>
    <div className="flex items-center border-b-2 border-gray-100 group-focus-within:border-[#9C1D20] transition-all py-3">
      <Icon size={18} className="text-gray-300 mr-4" />
      <input {...props} className="w-full bg-transparent border-none outline-none text-[#1F1A55] font-bold placeholder:text-gray-200 text-sm" />
    </div>
  </div>
);

const PrimaryButton = ({ children, ...props }) => (
  <button {...props} className="w-full bg-[#1F1A55] text-white py-5 rounded-full font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-4 hover:bg-[#9C1D20] shadow-lg transition-all active:scale-95 group">
    {children}
  </button>
);

export default SignUpPage;