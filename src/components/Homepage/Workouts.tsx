import { IWorkoutDataType } from "@/types/workout.type";
import Workout from "../Shared/WorkoutCard";


const getWorkouts = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};
const Workouts = async () => {
  const workoutsData = await getWorkouts();

  console.log(workoutsData);
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-white text-3xl md:text-4xl font-black uppercase tracking-wide mb-1">
          The Library
        </h1>
        <p className="text-[#808080] text-sm md:text-base font-medium">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

    <div className="grid grid-cols-3 gap-10">
     

      {workoutsData.map((workout : IWorkoutDataType) => {
        return  <Workout key={workout.id} workout ={workout}/>;
      })}
    </div>
      </div>
  );
};

export default Workouts;
