import { IWorkoutDataType } from "@/types/workout.type";
import Image from "next/image";
import Link from "next/link";


const WorkoutCard = ({ workout }: { workout: IWorkoutDataType }) => {
  return (
    <Link href={`/WorkoutDetails/${workout.id}`}> 
    <div className="bg-[#151515] border border-[#262626] rounded-2xl overflow-hidden flex flex-col w-full h-full">
      <div className="relative w-full aspect-[16/10]">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
        
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-4">
          {workout.muscleGroups.map((group, index) => (
            <span
              key={index}
              className="bg-[#c6fa00] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
            >
              {group}
            </span>
          ))}
        </div>

        <h2 className="text-white text-2xl font-black uppercase tracking-wide leading-tight mb-1">
          {workout.name}
        </h2>
        <p className="text-[#808080] text-sm font-medium mb-8">
          {workout.equipment}
        </p>

        <div className="flex items-center gap-5 text-[#808080] text-sm font-medium mt-auto pt-5 border-t border-[#262626]">
          <div className="flex items-center gap-1.5">
            <span className="text-lg leading-none mb-0.5">◷</span>
            <span>{workout.duration} min</span>
          </div>

          <div className="flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5 mb-0.5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            </svg>
            <span>{workout.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-lg leading-none mb-1">☆</span>
            <span>{workout.rating}</span>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default WorkoutCard;
