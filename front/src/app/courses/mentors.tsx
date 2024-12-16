import MentorCard from "@/components/parts/mentor-card";
import Loading from "../loading";


export const Mentors = async() => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BACK_API}:${process.env.NEXT_PUBLIC_PORT}/auth/team/get-team-data`)
    if(data.status !==200){
      return (<Loading/>)
    }
    const mentors:teams[] = await data.json()
    console.log("team",mentors[0]);
  return (
    <>
      <div className="bg-darkblue lg:py-16 px-8 sm:px-16 md:px-28 pb-28 relative">
        <div className="ellipse2 top-right "></div>
        <div className="ellipse2 mid-left  "></div>
        <div className="ellipse2 bottom-right "></div>

        <div>
          <h2 className="text-3xl font-transforma sm:text-4xl md:text-5xl font-bold text-white mt-16 mb-12">
            Meet your Mentors
          </h2>

          <div className="flex flex-wrap lg:gap-4  mt-24">
            {[1, 2, 3, 4, 5, 6].map((mentor) => (
              <MentorCard key={mentor}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
