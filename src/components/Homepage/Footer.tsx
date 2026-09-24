import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full mt-12 border-t border-[#262626]">
      <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <button className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-6 h-6 md:w-8 md:h-8 relative ">
            <Image
              src={logo}
              alt="FITLOG Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-lg md:text-xl font-black uppercase mt-1 text-white tracking-widest">
            FITLOG
          </span>
        </button>

        <p className="text-[#808080]  md:text-sm  ">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
