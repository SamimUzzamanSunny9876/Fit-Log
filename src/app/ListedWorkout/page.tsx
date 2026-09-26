"use client";

import ListedWorkoutDetails from "@/components/Shared/ListedWorkoutDetails";
import ListedWorkoutSavedDetails from "@/components/Shared/ListedWorkoutSavedDetails";
import { WorkoutContext } from "@/Context/WorkoutContext";
import { IWorkoutDataType } from "@/types/workout.type";
import Link from "next/link";
import { useContext, useState } from "react";

const ListedWorkout = () => {
  const { todPlan, saved } = useContext(WorkoutContext) as {
    todPlan: IWorkoutDataType[];
    saved: IWorkoutDataType[];
  };

  const [sortBy, setSortBy] = useState<string>("Duration");

  const sortArray = (arr: IWorkoutDataType[]) => {
    const copy = [...arr];
    if (sortBy === "Duration") {
      return copy.sort((a, b) => a.duration - b.duration);
    } else if (sortBy === "Calories") {
      return copy.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortBy === "Rating") {
      return copy.sort((a, b) => b.rating - a.rating);
    }
    return copy;
  };

  const sortedTodPlan = sortArray(todPlan);
  const sortedSaved = sortArray(saved);

  return (
    <div className="relative w-full mt-4">
      <div className="absolute top-0 right-0 z-20 flex items-center gap-3">
        <span className="text-[#808080] text-sm font-medium">Sort By</span>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-transparent text-white border border-[#262626] text-sm font-medium px-3 py-1.5 rounded-lg focus:outline-none focus:border-[#c6fa00] cursor-pointer hover:bg-[#151515] transition-colors"
        >
          <option value="Duration" className="bg-[#151515]">
            Duration
          </option>
          <option value="Calories" className="bg-[#151515]">
            Calories
          </option>
          <option value="Rating" className="bg-[#151515]">
            Rating
          </option>
        </select>
      </div>

      <div className="tabs tabs-box pt-1">
        <input
          type="radio"
          name="my_tabs_5"
          className="tab"
          aria-label="Today's Plan"
          defaultChecked
        />

        <div className="tab-content bg-base-100 border-base-300 p-6 pt-12">
          {sortedTodPlan.length > 0 ? (
            sortedTodPlan.map((workout: IWorkoutDataType) => {
              return (
                <ListedWorkoutDetails key={workout.id} workout={workout} />
              );
            })
          ) : (
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
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 pt-12">
          {sortedSaved.length > 0 ? (
            sortedSaved.map((workout: IWorkoutDataType) => {
              return (
                <ListedWorkoutSavedDetails key={workout.id} workout={workout} />
              );
            })
          ) : (
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
    </div>
  );
};

export default ListedWorkout;
