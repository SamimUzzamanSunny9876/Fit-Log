"use client";

import WorkoutCard from "@/components/Shared/WorkoutCard";
import { WorkoutContext } from "@/Context/WorkoutContext";
import { IWorkoutDataType } from "@/types/workout.type";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

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
        {todPlan.map((workout: IWorkoutDataType) => {
          return (
            <div
              key={workout.id}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#111111] border border-[#262626] rounded-2xl p-4 w-full"
            >
              {/* Left Side: Image & Info */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 w-full md:w-auto">
                <div className="relative w-full sm:w-40 h-48 sm:h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <h3 className="text-white text-lg font-black uppercase tracking-wide leading-tight mb-1">
                    {workout.name}
                  </h3>
                  <p className="text-[#808080] text-sm font-medium mb-3">
                    {workout.equipment}
                  </p>

                  <div className="flex items-center gap-4 text-[#808080] text-sm font-medium">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#c6fa00] text-lg leading-none mb-0.5">
                        ◷
                      </span>
                      <span>{workout.duration} min</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <svg
                        className="w-3.5 h-3.5 mb-0.5 text-[#c6fa00]"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                      </svg>
                      <span>{workout.caloriesBurned} kcal</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="text-[#c6fa00] text-lg leading-none mb-1">
                        ☆
                      </span>
                      <span>{workout.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Actions */}
              <div className="flex items-center gap-3 w-full md:w-auto mt-4 md:mt-0">
                <Link
                  href={`/WorkoutDetails/${workout.id}`}
                  className="flex-1 md:flex-none border border-[#333] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#2a2a2a] transition-colors text-center"
                >
                  View Details
                </Link>

                <button className="flex-1 md:flex-none bg-[#c6fa00] hover:bg-[#b5e500] text-black text-sm font-bold px-5 py-2.5 rounded-full flex items-center justify-center gap-2 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Mark as Done
                </button>

                <button className="text-[#808080] hover:text-white p-2 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <input
        type="radio"
        name="my_tabs_5"
        className="tab"
        aria-label="Saved"
        defaultChecked
      />
      <div className="tab-content bg-base-100 border-base-300 p-6">
        {saved.map((workout: IWorkoutDataType) => {
          return (
            <div
              key={workout.id}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#111111] border border-[#262626] rounded-2xl p-4 w-full"
            >
              {/* Left Side: Image & Info */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 w-full md:w-auto">
                <div className="relative w-full sm:w-40 h-48 sm:h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <h3 className="text-white text-lg font-black uppercase tracking-wide leading-tight mb-1">
                    {workout.name}
                  </h3>
                  <p className="text-[#808080] text-sm font-medium mb-3">
                    {workout.equipment}
                  </p>

                  <div className="flex items-center gap-4 text-[#808080] text-sm font-medium">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#c6fa00] text-lg leading-none mb-0.5">
                        ◷
                      </span>
                      <span>{workout.duration} min</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <svg
                        className="w-3.5 h-3.5 mb-0.5 text-[#c6fa00]"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                      </svg>
                      <span>{workout.caloriesBurned} kcal</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="text-[#c6fa00] text-lg leading-none mb-1">
                        ☆
                      </span>
                      <span>{workout.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Actions (Only View Details & Remove) */}
              <div className="flex items-center gap-3 w-full md:w-auto mt-4 md:mt-0">
                <Link
                  href={`/WorkoutDetails/${workout.id}`}
                  className="flex-1 md:flex-none border border-[#333] text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-[#2a2a2a] transition-colors text-center"
                >
                  View Details
                </Link>

                <button className="text-[#808080] hover:text-white p-2 ml-2 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListedWorkout;
