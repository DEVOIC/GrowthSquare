import React from "react";

const Gsmarque = () => {
  return (

    <div className="w-screen bg-darkblue py-10 relative">
      <div className="ellipse top-right"></div>
      <div className="ellipse bottom-left"></div>
      <div className="  space-y-2">
        <div className="bg-lightblue bg-opacity-20 before-marquee">

          <div className="  flex  justify-between  animate-marquee">

            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex ">
                <p className="text-white  text-4xl lg:text-8xl py-1  font-semibold">
                  GrowthSquare{"  "}
                </p>{" "}
                <p className="text-white text-4xl lg:text-8xl py-1 font-semibold">•</p>{" "}
              </div>

            ))}
          </div>
          <div className="  flex  justify-between  animate-marquee">

            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex ">
                <p className="text-white text-4xl lg:text-8xl py-1  font-semibold">
                  GrowthSquare{"  "}
                </p>{" "}
                <p className="text-white text-4xl lg:text-8xl   py-1 font-semibold">•</p>{" "}
              </div>

            ))}
          </div>
        </div>
        <div className=" bg-lightblue bg-opacity-20 before-marquee-reverse">
          <div className=" flex  justify-between  animate-marquee-reverse">
            <p className="text-white text-lg px-1 py-1 font-semibold">
              Somthing Cooking Up
            </p>
            <p className="text-white text-lg px-1 py-1 font-semibold">•</p>
            <p className="text-white text-lg px-1 py-1 font-semibold">
              75+ Members
            </p>
            <p className="text-white text-lg px-1 py-1 font-semibold">•</p>
            <p className="text-white text-lg px-1 py-1 font-semibold">
              Somthing Cooking Up
            </p>
            <p className="text-white text-lg px-1 py-1 font-semibold">•</p>
            <p className="text-white text-lg px-1 py-1 font-semibold">
              75+ Members
            </p>
            <p className="text-white text-lg px-1 py-1 font-semibold">•</p>
            <p className="text-white text-lg px-1 py-1 font-semibold">
              Somthing Cooking Up
            </p>
            <p className="text-white text-lg px-1 py-1 font-semibold">•</p>
            <p className="text-white text-lg px-1 py-1 font-semibold">
              75+ Members
            </p>
            <p className="text-white text-lg px-1 py-1 font-semibold">•</p>
          </div><div className=" flex  justify-between animate-marquee-reverse">
            <p className="text-white text-lg px-1 py-1 font-semibold">
              Somthing Cooking Up
            </p>
            <p className="text-white text-lg px-1 py-1 font-semibold">•</p>
            <p className="text-white text-lg px-1 py-1 font-semibold">
              75+ Members
            </p>
            <p className="text-white text-lg px-1 py-1 font-semibold">•</p>
            <p className="text-white text-lg px-1 py-1 font-semibold">
              Somthing Cooking Up
            </p>
            <p className="text-white text-lg px-1 py-1 font-semibold">•</p>
            <p className="text-white text-lg px-1 py-1 font-semibold">
              75+ Members
            </p>
            <p className="text-white text-lg px-1 py-1 font-semibold">•</p>
            <p className="text-white text-lg px-1 py-1 font-semibold">
              Somthing Cooking Up
            </p>
            <p className="text-white text-lg px-1 py-1 font-semibold">•</p>
            <p className="text-white text-lg px-1 py-1 font-semibold">
              75+ Members
            </p>
            <p className="text-white text-lg px-1 py-1 font-semibold">•</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gsmarque;
