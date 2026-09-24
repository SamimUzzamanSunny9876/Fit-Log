import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <div className="container mx-auto">
    <nav className="flex items-center justify-between  px-6 py-4 bg-black text-white border-b border-[#1f1f1f] ">
       
      <button className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <div className="w-8 h-8 relative flex-shrink-0">
          <Image src={logo} alt="FITLOG Logo" fill className="object-contain" />
        </div>
        <span className="text-xl font-black  uppercase mt-1">
          FITLOG
        </span>
      </button>

      
      <div className="hidden md:flex items-center gap-1">
        <button className="px-5 py-1.5 bg-[#1b2605] text-[#c6fa00] text-sm font-semibold rounded-full hover:bg-[#233207] transition-colors">
          Workouts
        </button>
        <button className="px-5 py-1.5 text-gray-400 text-sm font-medium hover:text-white transition-colors rounded-full">
          My Plan
        </button>
      </div>

      
      <div className="flex items-center gap-6">
      
        <button className="flex items-center gap-2 group">
          <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
            Plan
          </span>
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#c6fa00] text-black text-xs font-bold">
            0
          </span>
        </button>

        <button className="flex items-center gap-2 group">
          <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
            Saved
          </span>
          <span className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-600 bg-transparent text-gray-400 text-xs font-bold group-hover:border-gray-400 group-hover:text-gray-300 transition-colors">
            0
          </span>
        </button>
      </div>
    </nav>
         </div>
  );
};

export default Navbar;
