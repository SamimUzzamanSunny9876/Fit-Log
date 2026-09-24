"use client";

import Link from "next/link";
import React, { useState } from "react";

const WorkoutButton = () => {
  const [isActive, setIsActive] = useState("workouts");
  return (
    <>
     <Link href={'/'}> <button
        onClick={() => setIsActive("workouts")}
        className={`px-5 py-1.5 text-sm font-semibold rounded-full transition-colors ${
          isActive === "workouts"
            ? "bg-[#1b2605] text-[#c6fa00] hover:bg-[#233207]"
            : "text-gray-400 hover:text-white bg-transparent"
        }`}
      >
        Workouts
      </button>
      </Link>

      <Link href={"/MyPlan"}> 
      <button
        onClick={() => setIsActive("myPlan")}
        className={`px-5 py-1.5 text-sm font-semibold rounded-full transition-colors ${
          isActive === "myPlan"
            ? "bg-[#1b2605] text-[#c6fa00] hover:bg-[#233207]"
            : "text-gray-400 hover:text-white bg-transparent"
        }`}
      >
        My Plan
      </button>
      </Link>
    </>
  );
};

export default WorkoutButton;
