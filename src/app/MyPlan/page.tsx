import StatusDetails from "@/components/Shared/StatusDetails";
import ListedWorkout from "../ListedWorkout/page";

const MyPlan = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-white text-3xl md:text-4xl font-black uppercase tracking-wide mb-1">
          My Plan
        </h1>
        <p className="text-[#808080] text-sm md:text-base font-medium">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <StatusDetails />

      <div className="flex flex-col gap-4">
        <ListedWorkout />
      </div>
    </div>
  );
};

export default MyPlan;
