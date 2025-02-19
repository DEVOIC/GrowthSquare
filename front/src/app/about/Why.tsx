import Image from "next/image";
import React from "react";
// import photo from '../courses/user2demo.svg'
// import { MoveUpRight } from "lucide-react";
import gsqlogo from "../../../public/whiteLogo.png";

const Why = () => {
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
            src={gsqlogo}
            alt="Team member"
            width={80}
            height={30}
            className="border-4 "
          />
        </div>

        <div className="">
          <h2 className="text-3xl font-bold text-white mb-4">Wha&#39;s Next</h2>
          <p className="text-white/80">
            GrowthSquare aims to build a collaborative ecosystem where students
            support each other and grow together, fueling a future-ready
            workforce for businesses nationwide.
          </p>
        </div>
      </div>
      <div className="max-w-6xl py-10 mx-auto grid md:grid-cols-2 gap-20">
        <div className="">
          <h2 className="text-3xl font-bold text-white mb-4">
            Why It Matters
          </h2>
          <p className="text-white/80">
            For students, companies, mentors, projects, and everyone in
            between and job-ready skills. For startups, it offers access to
            talented student teams prepared to work across tech disciplines.
          </p>
        </div>

        <div className="hidden md:flex items-center mx-5 justify-start">
          <Image
            src={gsqlogo}
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

export default Why;
