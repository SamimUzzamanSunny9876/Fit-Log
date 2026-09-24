import Link from "next/link";
import React from "react";

const PlanSaved = () => {
  return (
    <div className="flex items-center gap-6">
      <Link href={"/MyPlan"}>
        <button className="flex items-center gap-2 group">
          <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
            Plan
          </span>
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#c6fa00] text-black text-xs font-bold">
            0
          </span>
        </button>
      </Link>
      <Link href={"/MyPlan"}>
        <button className="flex items-center gap-2 group">
          <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
            Saved
          </span>
          <span className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-600 bg-transparent text-gray-400 text-xs font-bold group-hover:border-gray-400 group-hover:text-gray-300 transition-colors">
            0
          </span>
        </button>
      </Link>
    </div>
  );
};

export default PlanSaved;
