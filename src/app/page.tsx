import Banner from "@/components/Homepage/Banner";
import Workout from "@/components/Homepage/Workouts";


const page = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <Workout />
    </div>
  );
};

export default page;
