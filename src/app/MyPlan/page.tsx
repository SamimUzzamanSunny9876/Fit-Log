import React from "react";

const MyPlan = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 max-w-7xl">
      
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-white text-3xl md:text-4xl font-black uppercase tracking-wide mb-1">
          My Plan
        </h1>
        <p className="text-[#808080] text-sm md:text-base font-medium">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Stats Bar (Missing wrapper added here) */}
      <div className="bg-[#151515] border border-[#262626] rounded-2xl py-6 px-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 mb-8">
        
        {/* Exercises */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-1">
          <span className="text-[#808080] text-sm md:text-base font-medium">
            Exercises
          </span>
          <span className="text-[#c6fa00] text-4xl md:text-5xl font-black uppercase tracking-tight">
            2
          </span>
        </div>

        {/* Vertical Divider (Hidden on mobile, visible on md+) */}
        <div className="hidden md:block w-px h-16 bg-[#262626]"></div>

        {/* Minutes */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-1 md:pl-8">
          <span className="text-[#808080] text-sm md:text-base font-medium">
            Minutes
          </span>
          <span className="text-white text-4xl md:text-5xl font-black uppercase tracking-tight">
            23
          </span>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-px h-16 bg-[#262626]"></div>

        {/* Calories */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-1 md:pl-8">
          <span className="text-[#808080] text-sm md:text-base font-medium">
            Calories
          </span>
          <span className="text-white text-4xl md:text-5xl font-black uppercase tracking-tight">
            190
          </span>
        </div>
      </div>

      {/* Custom Tabs / Sort Bar */}
      <div className="flex items-center justify-between mb-8">
        <div className="bg-[#151515] border border-[#262626] p-1.5 rounded-xl flex items-center">
          <button className="bg-[#2a2a2a] text-white px-5 py-2 rounded-lg text-sm font-semibold shadow-sm transition-colors">
            Today&apos;s Plan
          </button>
          <button className="text-[#808080] px-5 py-2 rounded-lg text-sm font-semibold hover:text-white transition-colors">
            Saved
          </button>
        </div>

        <button className="text-[#808080] text-sm font-medium hover:text-white transition-colors">
          Sort By
        </button>
        {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
{/* For TSX uncomment the commented types below */}
<button className="btn" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
  Button
</button>

<ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
  popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
</ul>
      </div>

      {/* Grid for your WorkoutCards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Map over your selected workouts here */}
      </div>

    </div>
  );
};

export default MyPlan;