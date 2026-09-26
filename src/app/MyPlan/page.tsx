import ListedWorkout from "../ListedWorkout/page";

const MyPlan = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 max-w-7xl">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-white text-3xl md:text-4xl font-black uppercase tracking-wide mb-1">
          My Plan
        </h1>
        <p className="text-[#808080] text-sm md:text-base font-medium">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="bg-[#151515] border border-[#262626] rounded-2xl py-6 px-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 mb-8">
        <div className="flex-1 flex flex-col items-center md:items-start gap-1">
          <span className="text-[#808080] text-sm md:text-base font-medium">
            Exercises
          </span>
          <span className="text-[#c6fa00] text-4xl md:text-5xl font-black uppercase tracking-tight">
            2
          </span>
        </div>
        <div className="hidden md:block w-px h-16 bg-[#262626]"></div>
        <div className="flex-1 flex flex-col items-center md:items-start gap-1 md:pl-8">
          <span className="text-[#808080] text-sm md:text-base font-medium">
            Minutes
          </span>
          <span className="text-white text-4xl md:text-5xl font-black uppercase tracking-tight">
            23
          </span>
        </div>
        <div className="hidden md:block w-px h-16 bg-[#262626]"></div>
        <div className="flex-1 flex flex-col items-center md:items-start gap-1 md:pl-8">
          <span className="text-[#808080] text-sm md:text-base font-medium">
            Calories
          </span>
          <span className="text-white text-4xl md:text-5xl font-black uppercase tracking-tight">
            190
          </span>
        </div>
      </div>

      {/* Tabs and Sort Bar Container */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        
    
       
      </div>

      {/* Workouts List (Moved outside the flex row so it drops below the tabs) */}
      <div className="flex flex-col gap-4">
        <ListedWorkout />
      </div>

    </div>
  );
};

export default MyPlan;