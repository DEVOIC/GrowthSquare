import Image from "next/image";
import React from "react";
import photo from "../courses/user2demo.svg";
// import { MoveUpRight } from "lucide-react";

const What = () => {
  return (
    <section className="bg-lightblue py-16 md:py-20 px-8 md:px-4 relative">
      <div className="absolute md:inline-block hidden  left-1/2 top-0 w-1 h-full bg-white "></div>
      <div className="absolute md:inline-block hidden  left-[48.5%] p-4 top-[25%] w-12 h-12 bg-white ">
        {/* <div className="realtive border-4 border-lightblue">
        <MoveUpRight className=" " color='blue' size={30} />

        </div> */}
      </div>
      <div className="absolute md:inline-block hidden  left-[48.5%] bottom-[25%] w-12 h-12 bg-white "></div>

      <div className="max-w-6xl  lg:py-10 mx-auto align-middle grid md:grid-cols-2 gap-20">
        <div className=" hidden md:flex mx-5 items-center justify-end ">
          <Image
            src={photo}
            alt="Team member"
            width={80}
            height={30}
            className="border-4 "
          />
        </div>

        <div className="">
          <h2 className="text-3xl font-bold text-white mb-4">
            What&#39;s Next
          </h2>
          <p className="text-white/80">
            At GrowthSquare, we&#39;re continuously evolving to create a dynamic
            upskilling ecosystem where learning meets execution. Our focus
            remains on mentorship, real-world projects, and career support,
            ensuring that every learner gains the skills they need to thrive in
            their careers.
          </p>
        </div>
      </div>
      <div className="max-w-6xl py-10 mx-auto grid md:grid-cols-2 gap-20">
        <div className="">
          <h2 className="text-3xl font-bold text-white mb-4">Why It Matters</h2>
          <p className="text-white/80">
            The traditional approach to learning often falls short when it comes
            to practical execution. GrowthSquare bridges this gap by turning
            learners into doers—helping individuals apply their skills in
            real-world scenarios.{" "}
          </p>
        </div>

        <div className="hidden md:flex items-center mx-5 justify-start">
          <Image
            src={photo}
            alt="Team member"
            width={80}
            height={80}
            className="border-4 "
          />
        </div>
      </div>
    </section>
  );
};

export default What;
