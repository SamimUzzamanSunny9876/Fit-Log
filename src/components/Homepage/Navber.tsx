import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import WorkoutButton from "../Shared/WorkoutButton";
import Link from "next/link";
import PlanSaved from "../Shared/PlanSaved";


const Navbar = () => {
  return (
    <div className="container mx-auto sticky top-0 z-50">
      <nav className="flex items-center justify-between  px-6 py-4 bg-black text-white border-b border-[#1f1f1f]  ">
        <button className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 relative flex-shrink-0">
            <Image
              src={logo}
              alt="FITLOG Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xl font-black  uppercase mt-1">FITLOG</span>
        </button>

        <div className="hidden md:flex items-center gap-1">

          <WorkoutButton/>
          
          
        </div>

     
          
       <PlanSaved/>
          
     
      </nav>
    </div>
  );
};

export default Navbar;
