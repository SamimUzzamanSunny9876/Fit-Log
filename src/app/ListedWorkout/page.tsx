"use client";

import ListedWorkoutDetails from "@/components/Shared/ListedWorkoutDetails";

import { WorkoutContext } from "@/Context/WorkoutContext";
import { IWorkoutDataType } from "@/types/workout.type";
import Image from "next/image";
import Link from "next/link";
import  { useContext } from "react";

const ListedWorkout = () => {
  const { todPlan, saved } = useContext(WorkoutContext);
  return (
    <div className="tabs tabs-box ">
      <input
        type="radio"
        name="my_tabs_5"
        className="tab"
        aria-label="Today's Plan"
      />
      <div className="tab-content bg-base-100 border-base-300 p-6">
        {todPlan.length > 0 ? todPlan.map((workout: IWorkoutDataType) => {
          return (
               <ListedWorkoutDetails key={workout.id} workout={workout}/>
          ) 
        }): (
            <div className="flex flex-col items-center justify-center w-full py-24 md:py-32 bg-[#111111] border-2 border-dashed border-[#262626] rounded-2xl text-center">
              <h1 className="text-white text-2xl md:text-3xl font-black uppercase tracking-wide mb-2">
                NOTHING HERE YET
              </h1>

              <p className="text-[#808080] text-sm md:text-base font-medium mb-8">
                Browse the library and add a lift to get today moving.
              </p>

              <Link href={"/"}>
                <button className="bg-[#c6fa00] hover:bg-[#b5e500] text-black text-sm font-bold px-8 py-3 rounded-full shadow-[0_0_20px_rgba(198,250,0,0.15)] transition-all">
                  Go to workouts
                </button>
              </Link>
            </div>
          )}
      </div>

      <input
        type="radio"
        name="my_tabs_5"
        className="tab"
        aria-label="Saved"
        defaultChecked
      />
      <div className="tab-content bg-base-100 border-base-300 p-6">
        {saved.length>0 ? saved.map((workout: IWorkoutDataType) => {
          return (
             <ListedWorkoutDetails key={workout.id} workout={workout}/>
          );
        }): (
            <div className="flex flex-col items-center justify-center w-full py-24 md:py-32 bg-[#111111] border-2 border-dashed border-[#262626] rounded-2xl text-center">
              <h1 className="text-white text-2xl md:text-3xl font-black uppercase tracking-wide mb-2">
                NOTHING HERE YET
              </h1>

              <p className="text-[#808080] text-sm md:text-base font-medium mb-8">
                Browse the library and add a lift to get today moving.
              </p>

              <Link href={"/"}>
                <button className="bg-[#c6fa00] hover:bg-[#b5e500] text-black text-sm font-bold px-8 py-3 rounded-full shadow-[0_0_20px_rgba(198,250,0,0.15)] transition-all">
                  Go to workouts
                </button>
              </Link>
            </div>
          )}
      </div>
    </div>
  );
};

export default ListedWorkout;
