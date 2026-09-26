"use client";

import { WorkoutContext } from "@/Context/WorkoutContext";
import { IWorkoutDataType } from "@/types/workout.type";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

const SaveForLater = ({ workout }: { workout: IWorkoutDataType }) => {
  const { saved, setSaved } = useContext(WorkoutContext) as {
    saved: IWorkoutDataType[];
    setSaved: React.Dispatch<React.SetStateAction<IWorkoutDataType[]>>;
  };

  const [isSaved, setIsSaved] = useState(false);

  const handleSavedButton = () => {
    setSaved([...saved, workout]);
    setIsSaved(true);
    toast.success(`You have saved ${workout.name}`);
  };

  return (
    <div>
      <button
        onClick={handleSavedButton}
        disabled={isSaved}
        className={`transition-colors border border-[#333] text-sm font-medium px-6 py-3.5 rounded-xl flex items-center gap-2 ${
          isSaved
            ? "bg-[#151515] text-gray-500 opacity-70 cursor-not-allowed"
            : "bg-transparent hover:bg-[#151515] text-white"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={isSaved ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
        {isSaved ? "Saved" : "Save for later"}
      </button>
    </div>
  );
};

export default SaveForLater;
