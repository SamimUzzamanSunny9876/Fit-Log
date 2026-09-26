"use client"

import { WorkoutContext } from "@/Context/WorkoutContext";
import Link from "next/link";
import { useContext } from "react";


const PlanSaved = () => {

   
  const {todPlan, saved} = useContext(WorkoutContext)

  return (
    <div className="flex items-center gap-6">
      <Link href={"/MyPlan"}>
        <button className="flex items-center gap-2 group">
          <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
            Plan
          </span>
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#c6fa00] text-black text-xs font-bold">
            {todPlan.length}
          </span>
        </button>
      </Link>
      <Link href={"/MyPlan"}>
        <button className="flex items-center gap-2 group">
          <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
            Saved
          </span>
          <span className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-600 bg-transparent text-gray-400 text-xs font-bold group-hover:border-gray-400 group-hover:text-gray-300 transition-colors">
             {saved.length}
          </span>
        </button>
      </Link>
    </div>
  );
};

export default PlanSaved;
