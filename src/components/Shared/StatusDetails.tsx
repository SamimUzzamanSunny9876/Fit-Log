"use client"

import { WorkoutContext } from "@/Context/WorkoutContext";
import { IWorkoutDataType } from "@/types/workout.type";
import { useContext } from "react";



const StatusDetails = () => {

    const {todPlan} = useContext(WorkoutContext)
    const totalMinutes = todPlan.reduce((sum:number, workout: IWorkoutDataType) => sum + (workout.duration || 0), 0);

    const totalCalories = todPlan.reduce((sum : number, workout:IWorkoutDataType) => sum + (workout.caloriesBurned || 0), 0);

    return (
         <div className="bg-[#151515] border border-[#262626] rounded-2xl py-6 px-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 mb-8">
        <div className="flex-1 flex flex-col items-center md:items-start gap-1">
          <span className="text-[#808080] text-sm md:text-base font-medium">
            Exercises
          </span>
          <span className="text-[#c6fa00] text-4xl md:text-5xl font-black uppercase tracking-tight">
            {todPlan.length}
          </span>
        </div>
        <div className="hidden md:block w-px h-16 bg-[#262626]"></div>
        <div className="flex-1 flex flex-col items-center md:items-start gap-1 md:pl-8">
          <span className="text-[#808080] text-sm md:text-base font-medium">
            Minutes
          </span>
          <span className="text-white text-4xl md:text-5xl font-black uppercase tracking-tight">
            {totalMinutes}
          </span>
        </div>
        <div className="hidden md:block w-px h-16 bg-[#262626]"></div>
        <div className="flex-1 flex flex-col items-center md:items-start gap-1 md:pl-8">
          <span className="text-[#808080] text-sm md:text-base font-medium">
            Calories
          </span>
          <span className="text-white text-4xl md:text-5xl font-black uppercase tracking-tight">
           {totalCalories}
          </span>
        </div>
      </div>
    );
};

export default StatusDetails;