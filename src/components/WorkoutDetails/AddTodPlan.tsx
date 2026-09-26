"use client";

import { WorkoutContext } from "@/Context/WorkoutContext";
import { IWorkoutDataType } from "@/types/workout.type";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

const AddTodPlan = ({ workout }: { workout: IWorkoutDataType }) => {
  const { todPlan, setTodPlan } = useContext(WorkoutContext) as {
    todPlan: IWorkoutDataType[];
    setTodPlan: React.Dispatch<React.SetStateAction<IWorkoutDataType[]>>;
  };

  const [isAdded, setIsAdded] = useState(false);

  const handleAddTodPlan = () => {
    setTodPlan([...todPlan, workout]);
    setIsAdded(true);
    toast.success(`You Have added ${workout.name} in your today's plan`);
  };

  return (
    <div>
      <button
        onClick={handleAddTodPlan}
        disabled={isAdded}
        className={`transition-colors text-black text-sm font-bold px-6 py-3.5 rounded-xl flex items-center gap-2 ${
          isAdded
            ? "bg-gray-400 opacity-70 cursor-not-allowed"
            : "bg-[#c6fa00] hover:bg-[#b5e500]"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <line x1="10" y1="16" x2="14" y2="16" />
          <line x1="12" y1="14" x2="12" y2="18" />
        </svg>
        {isAdded ? "Added to plan" : "Add to today's plan"}
      </button>
    </div>
  );
};

export default AddTodPlan;
