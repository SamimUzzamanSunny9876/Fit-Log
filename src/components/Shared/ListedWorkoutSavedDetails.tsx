"use client";

import { WorkoutContext } from '@/Context/WorkoutContext';
import { IWorkoutDataType } from '@/types/workout.type';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ListedWorkoutSavedDetails = ({ workout }: { workout: IWorkoutDataType }) => {
  const { setTodPlan, setSaved } = useContext(WorkoutContext) as {
    setTodPlan?: React.Dispatch<React.SetStateAction<IWorkoutDataType[]>>;
    setSaved?: React.Dispatch<React.SetStateAction<IWorkoutDataType[]>>;
  };

  const handleCrossButton = () => {
    if (setTodPlan) {
      setTodPlan((prev: IWorkoutDataType[]) => prev.filter(item => item.id !== workout.id));
    }
    if (setSaved) {
      setSaved((prev: IWorkoutDataType[]) => prev.filter(item => item.id !== workout.id));
    }

   toast.success("Workout Deleted");
  };

  return (
    <div
      key={workout.id}
      className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#111111] border border-[#262626] rounded-2xl p-4 w-full"
    >
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

      <div className="flex items-center gap-3 w-full md:w-auto mt-4 md:mt-0">
        <Link
          href={`/WorkoutDetails/${workout.id}`}
          className="flex-1 md:flex-none border border-[#333] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#2a2a2a] transition-colors text-center"
        >
          View Details
        </Link>

     

        <button
          onClick={handleCrossButton}
          className="text-[#808080] hover:text-white p-2 transition-colors"
        >
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
};

export default ListedWorkoutSavedDetails;