import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Galley = () => {
  return (
    <div className="w-screen bg-lightblue">
      <section className="container mx-auto px-4 py-24 ">
        <h2 className="text-3xl font-bold text-white font-transforma mb-12">
          <p>Lorem ipsum dolor sit amet,</p>
          adipiscing lit Gallary
        </h2>
        <div className=" space-y-2">
          <div className="flex bg-white w-fit space-x-3 bg-opacity-10 animate-marquee ">
            <div className=" m-2">
              <Image
                width={250}
                height={100}
                objectFit="cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3WO2y5h7YkHljxIsvwuOxP21OE_8tnedA&s"
                alt="1"
              />
            </div>
            <div className=" m-2 bg-white w-64"></div>
            <div className=" m-2 bg-darkblue w-64 px-3 font-bold text-xl text-white flex justify-end align-middle items-center relative">
              <div className=" absolute -left-3 -bottom-3">
                <MoveUpRight className=" text-white " size={80} />
              </div>
              <div className="w-1/2 ">Collab Event</div>
            </div><div className=" m-2">
              <Image
                width={250}
                height={100}
                objectFit="cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3WO2y5h7YkHljxIsvwuOxP21OE_8tnedA&s"
                alt="1"
              />
            </div>
            <div className=" m-2 bg-white w-64"></div>
            <div className=" m-2 bg-darkblue w-64 px-3 font-bold text-xl text-white flex justify-end align-middle items-center relative">
              <div className=" absolute -left-3 -bottom-3">
                <MoveUpRight className=" text-white " size={80} />
              </div>
              <div className="w-1/2 ">Collab Event</div>
            </div>
          </div>  <div className="flex bg-white w-fit space-x-3 bg-opacity-10 animate-marquee-reverse ">
            <div className=" m-2">
              <Image
                width={250}
                height={100}
                objectFit="cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3WO2y5h7YkHljxIsvwuOxP21OE_8tnedA&s"
                alt="1"
              />
            </div>
            <div className=" m-2 bg-white w-64"></div>
            <div className=" m-2 bg-darkblue w-64 px-3 font-bold text-xl text-white flex justify-end align-middle items-center relative">
              <div className=" absolute -left-3 -bottom-3">
                <MoveUpRight className=" text-white " size={80} />
              </div>
              <div className="w-1/2 ">First online Meetup</div>
            </div><div className=" m-2">
              <Image
                width={250}
                height={100}
                objectFit="cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3WO2y5h7YkHljxIsvwuOxP21OE_8tnedA&s"
                alt="1"
              />
            </div>
            <div className=" m-2 bg-white w-64"></div>
            <div className=" m-2 bg-darkblue w-64 px-3 font-bold text-xl text-white flex justify-end align-middle items-center relative">
              <div className=" absolute -left-3 -bottom-3">
                <MoveUpRight className=" text-white " size={80} />
              </div>
              <div className="w-1/2 ">First online Meetup</div>
            </div>
          </div>  <div className="flex bg-white w-fit space-x-3 bg-opacity-10 animate-marquee ">
            <div className=" m-2">
              <Image
                width={250}
                height={100}
                objectFit="cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3WO2y5h7YkHljxIsvwuOxP21OE_8tnedA&s"
                alt="1"
              />
            </div>
            <div className=" m-2 bg-white w-64"></div>
            <div className=" m-2 bg-darkblue w-64 px-3 font-bold text-xl text-white flex justify-end align-middle items-center relative">
              <div className=" absolute -left-3 -bottom-3">
                <MoveUpRight className=" text-white " size={80} />
              </div>
              <div className="w-1/2 ">Collab Event</div>
            </div><div className=" m-2">
              <Image
                width={250}
                height={100}
                objectFit="cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3WO2y5h7YkHljxIsvwuOxP21OE_8tnedA&s"
                alt="1"
              />
            </div>
            <div className=" m-2 bg-white w-64"></div>
            <div className=" m-2 bg-darkblue w-64 px-3 font-bold text-xl text-white flex justify-end align-middle items-center relative">
              <div className=" absolute -left-3 -bottom-3">
                <MoveUpRight className=" text-white " size={80} />
              </div>
              <div className="w-1/2 ">Collab Event</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Galley;
