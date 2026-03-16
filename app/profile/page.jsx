"use client";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  BookOpen,
  Award,
  Settings,
  LogOut,
  Camera,
  ShieldCheck,
  ChevronRight,
  GraduationCap,
  Save,
  X,
} from "lucide-react";
import Link from "next/link";

const ProfilePage = () => {
  const router = useRouter();
  const fileInputRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);

  // Initial State
  const [student, setStudent] = useState({
    name: "Muhammad Ibrahim",
    role: "Student",
    id: "ASC-2026-0842",
    email: "ibrahim.afaq@example.com",
    class: "10th Grade (Section A)",
    phone: "+92 300 1234567",
    address: "Gulabad, Peshawar, PK",
    joinedDate: "August 2024",
    attendance: "94%",
    gpa: "3.8",
    profileImage: "/images/director.jpg",
  });

  // Load data from LocalStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loggedIn = localStorage.getItem("isLoggedIn") === "true";
      if (!loggedIn) {
        router.push("/login");
        return;
      }

      const stored = localStorage.getItem("student");
      if (stored) {
        try {
          setStudent(JSON.parse(stored));
        } catch (e) {
          console.error("Error parsing student data");
        }
      }
    }
  }, [router]);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Profile Picture Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setStudent((prev) => ({ ...prev, profileImage: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Save Data
  const handleSave = () => {
    localStorage.setItem("student", JSON.stringify(student));
    setIsEditing(false);
    // You could add a toast notification here
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] pb-20">
      {/* 1. Profile Header */}
      <div className="h-48 md:h-64 bg-[#1F1A55] relative">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/hero2.jpg"
            className="w-full h-full object-cover opacity-20"
            alt="Pattern"
          />
        </div>

        <div className="relative z-10 flex justify-between items-center px-6 py-4 lg:px-12">
          <Link
            href="/"
            className="text-white/80 hover:text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 transition-colors"
          >
            Back to Home
          </Link>
          <button className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all">
            <Settings size={20} />
          </button>
        </div>
      </div>

      {/* 2. Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 -mt-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-[#1F1A55]/5 text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="w-full h-full rounded-full border-4 border-[#F8F9FB] overflow-hidden bg-gray-100 relative group">
                  <Image
                    src={student.profileImage || "/images/director.jpg"}
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                  {isEditing && (
                    <div 
                      onClick={() => fileInputRef.current.click()}
                      className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Camera className="text-white" size={24} />
                    </div>
                  )}
                </div>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleImageUpload} 
                  className="hidden" 
                  accept="image/*" 
                />
                {!isEditing && (
                   <button 
                    onClick={() => setIsEditing(true)}
                    className="absolute bottom-1 right-1 bg-[#9C1D20] text-white p-2 rounded-full border-4 border-white hover:scale-110 transition-transform"
                   >
                    <Camera size={16} />
                  </button>
                )}
              </div>

              {isEditing ? (
                <input
                  name="name"
                  value={student.name}
                  onChange={handleChange}
                  className="w-full text-center text-xl font-black text-[#1F1A55] border-b-2 border-[#9C1D20] focus:outline-none bg-transparent uppercase"
                />
              ) : (
                <h2 className="text-2xl font-black text-[#1F1A55] uppercase tracking-tight leading-none">
                  {student.name}
                </h2>
              )}
              
              <p className="text-[#9C1D20] text-[10px] font-black uppercase tracking-[0.2em] mt-2">
                ID: {student.id}
              </p>

              <div className="mt-8 pt-8 border-t border-gray-50 flex justify-around">
                <div className="text-center">
                  <p className="text-[20px] font-black text-[#1F1A55]">{student.gpa}</p>
                  <p className="text-[9px] font-bold text-gray-400 uppercase">GPA</p>
                </div>
                <div className="w-[1px] bg-gray-100" />
                <div className="text-center">
                  <p className="text-[20px] font-black text-[#1F1A55]">{student.attendance}</p>
                  <p className="text-[9px] font-bold text-gray-400 uppercase">Attendance</p>
                </div>
              </div>
            </div>

            {/* Quick Actions (Same as before) */}
            <div className="bg-white rounded-[2rem] p-6 shadow-xl shadow-[#1F1A55]/5">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 px-2 text-left">
                Student Menu
              </h4>
              <nav className="space-y-1">
                {[{ label: "Academic Records", icon: BookOpen }, { label: "Fee Challans", icon: Award }, { label: "Security Settings", icon: ShieldCheck }].map((item, i) => (
                  <button key={i} className="w-full flex items-center justify-between p-4 hover:bg-[#F8F9FB] rounded-2xl transition-all group">
                    <div className="flex items-center gap-3">
                      <item.icon size={18} className="text-[#1F1A55] group-hover:text-[#9C1D20] transition-colors" />
                      <span className="text-sm font-bold text-[#1F1A55]">{item.label}</span>
                    </div>
                    <ChevronRight size={16} className="text-gray-300 group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
                <button onClick={handleLogout} className="w-full flex items-center gap-3 p-4 text-[#9C1D20] hover:bg-red-50 rounded-2xl transition-all font-bold text-sm mt-4">
                  <LogOut size={18} /> Logout
                </button>
              </nav>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-[#1F1A55]/5 relative">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-xl font-black text-[#1F1A55] uppercase tracking-tight">
                  Personal Information
                </h3>
                {isEditing ? (
                  <div className="flex gap-4">
                    <button onClick={() => setIsEditing(false)} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors">
                      <X size={14} /> Cancel
                    </button>
                    <button onClick={handleSave} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#9C1D20] bg-red-50 px-4 py-2 rounded-full hover:bg-[#9C1D20] hover:text-white transition-all">
                      <Save size={14} /> Save Changes
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => setIsEditing(true)}
                    className="text-[10px] font-black uppercase tracking-widest text-[#9C1D20] border-b-2 border-[#9C1D20] hover:opacity-50 transition-opacity"
                  >
                    Edit Details
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                <EditableInfoBlock isEditing={isEditing} name="email" onChange={handleChange} icon={Mail} label="Email Address" value={student.email} />
                <EditableInfoBlock isEditing={isEditing} name="phone" onChange={handleChange} icon={Phone} label="Phone Number" value={student.phone} />
                <EditableInfoBlock isEditing={isEditing} name="class" onChange={handleChange} icon={GraduationCap} label="Current Class" value={student.class} />
                <EditableInfoBlock isEditing={isEditing} name="joinedDate" onChange={handleChange} icon={Calendar} label="Date Joined" value={student.joinedDate} />
                <div className="md:col-span-2">
                  <EditableInfoBlock isEditing={isEditing} name="address" onChange={handleChange} icon={MapPin} label="Home Address" value={student.address} />
                </div>
              </div>
            </div>

            {/* Recent Updates (Non-editable) */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-[#1F1A55]/5 border border-[#1F1A55]/5">
              <h3 className="text-lg font-black text-[#1F1A55] uppercase tracking-tight mb-6">Recent Updates</h3>
              <div className="space-y-4">
                <NotificationItem title="Monthly Test Results Uploaded" date="2 hours ago" type="academic" />
                <NotificationItem title="Library Book Due Reminder" date="Yesterday" type="alert" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- HELPER COMPONENTS ---

const EditableInfoBlock = ({ icon: Icon, label, value, isEditing, name, onChange }) => (
  <div className="flex gap-4">
    <div className="flex-none w-10 h-10 rounded-xl bg-[#F8F9FB] flex items-center justify-center text-[#1F1A55]">
      <Icon size={18} />
    </div>
    <div className="flex-1">
      <p className="text-[9px] font-black uppercase tracking-[0.1em] text-gray-400 mb-0.5 text-left">
        {label}
      </p>
      {isEditing ? (
        <input
          name={name}
          value={value}
          onChange={onChange}
          className="w-full text-sm font-bold text-[#1F1A55] border-b border-gray-200 focus:border-[#9C1D20] focus:outline-none bg-transparent py-1"
        />
      ) : (
        <p className="text-sm font-bold text-[#1F1A55] text-left">{value}</p>
      )}
    </div>
  </div>
);

const NotificationItem = ({ title, date, type }) => (
  <div className="flex items-center justify-between p-4 rounded-2xl border border-gray-50 hover:bg-[#F8F9FB] transition-colors cursor-pointer group">
    <div className="flex items-center gap-4 text-left">
      <div className={`w-2 h-2 rounded-full ${type === "academic" ? "bg-blue-500" : type === "alert" ? "bg-[#9C1D20]" : "bg-green-500"}`} />
      <div>
        <p className="text-sm font-bold text-[#1F1A55] group-hover:text-[#9C1D20] transition-colors">{title}</p>
        <p className="text-[10px] text-gray-400 font-medium">{date}</p>
      </div>
    </div>
    <ChevronRight size={14} className="text-gray-300" />
  </div>
);

export default ProfilePage;