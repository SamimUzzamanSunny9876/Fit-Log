import Image from "next/image";
import React from "react";
import banner from '@/assets/banner.png';

const Banner = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      
      <div className="bg-[#121212] border border-[#262626] rounded-xl flex flex-col lg:flex-row items-center justify-between p-6 lg:px-12 lg:py-8 w-full">
        
        <div className="flex-1 w-full lg:max-w-xl">
          <h2 className="text-[#c6fa00] text-[10px] md:text-xs font-bold tracking-widest uppercase mb-3">
            Workout Library
          </h2>
          
          {/* Adjusted heading spacing and line break */}
          <h1 className="text-white text-4xl md:text-5xl  font-black uppercase leading-[0.95] tracking-tight mb-4">
            Train with intent.Log  
            <br />every set.
          </h1>
          
          <p className="text-gray-400 text-sm max-w-[24rem] mb-6 leading-relaxed">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          
          <button className="bg-[#c6fa00] text-black text-xs md:text-sm font-bold px-6 py-2.5 rounded hover:bg-[#b5e500] transition-colors uppercase tracking-wide">
            Browse Workouts
          </button>
        </div>
        <div className="flex-1 w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="relative w-full max-w-[200px] lg:max-w-[260px] aspect-[3/4]">
            <Image 
              src={banner} 
              alt="Anatomy figure on workout machine" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;