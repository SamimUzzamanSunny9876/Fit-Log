import AddTodPlan from "@/components/WorkoutDetails/AddTodPlan";
import SaveForLater from "@/components/WorkoutDetails/SaveForLater";
import { IWorkoutDataType } from "@/types/workout.type";
import Image from "next/image";
import React from "react";

const getWorkouts = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const WorkoutDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const workoutsData = await getWorkouts();
  const workout = workoutsData.find(
    (w: IWorkoutDataType) => String(w.id) === String(id)
  );

  if (!workout) {
    return (
      <div className="container mx-auto px-4 py-20 text-center text-white text-xl">
        Workout not found.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        
       
        <div className="w-full lg:w-[45%] ">
          <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[32px] overflow-hidden bg-[#151515]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

       
        <div className="w-full lg:w-[55%] flex flex-col">
          
          <h1 className="text-white text-4xl md:text-5xl font-black uppercase tracking-wide leading-tight mb-4">
            {workout.name}
          </h1>
          
          <p className="text-[#a3a3a3] text-base md:text-lg mb-6 ">
            {workout.description}
          </p>

         
          <div className="flex items-center gap-3 mb-10">
            {workout.muscleGroups.map((group: string, index : number) => (
              <span
                key={index}
                className="bg-[#c6fa00] text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest"
              >
                {group}
              </span>
            ))}
          </div>

     
          <div className="bg-[#151515] border border-[#262626] rounded-2xl p-6 md:p-8 flex flex-col mb-10">
            <StatRow label="Equipment" value={workout.equipment} />
            <StatRow label="Difficulty" value={workout.difficulty} />
            <StatRow label="Sets" value={workout.sets} />
            <StatRow label="Reps" value={workout.reps} />
            <StatRow label="Duration" value={`${workout.duration} min`} />
            <StatRow label="Calories" value={`${workout.caloriesBurned} kcal`} />
            <StatRow label="Rating" value={workout.rating} isLast />
          </div>

        
          <div className="mb-10">
            <h3 className="text-white text-lg font-black uppercase tracking-widest mb-6">
              Instructions
            </h3>
            <div className="flex flex-col gap-4">
              {workout.instructions.map((step:string, index:number) => (
                <div key={index} className="flex gap-2">
                  <span className="text-[#808080] text-sm font-bold mt-0.5">
                    {index + 1}.
                  </span>
                  <p className="text-white text-sm md:text-base leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

           
          <div className="flex flex-wrap items-center gap-4 mt-auto">
            
            <AddTodPlan workout={workout}/>
            
          <SaveForLater workout = {workout}/>
          </div>

        </div>
      </div>
    </div>
  );
};

const StatRow = ({ 
  label, 
  value, 
  isLast = false 
}: { 
  label: string; 
  value: string | number;
  isLast?: boolean;
}) => (
  <div className={`flex justify-between items-center py-4 ${!isLast ? 'border-b border-[#262626]' : ''}`}>
    <span className="text-white text-xs font-bold uppercase tracking-widest">
      {label}
    </span>
    <span className="text-white text-sm font-medium">
      {value}
    </span>
  </div>
);

export default WorkoutDetails;