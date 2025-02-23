// import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import TopArrow from "./Vector 2.png";

const Galley = () => {
  return (
    <div className="w-screen bg-lightblue relative overflow-hidden">
      <section className=" mx-auto  py-24 ">
        <h2 className="text-3xl px-4 font-bold text-white font-transforma mb-12">
          <p>Moments of Learning and Collaboration</p>
        </h2>
        <div className=" space-y-2  ">
          <div className="bg-white bg-opacity-10 w-full">
            <div className="  overflow-hidden before-marquee">
              <div className="flex  w-fit space-x-3  animate-marquee ">
                <div className=" m-2">
                  <Image
                    width={250}
                    height={100}
                    objectFit="cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3WO2y5h7YkHljxIsvwuOxP21OE_8tnedA&s"
                    alt="1"
                  />
                </div>
                <div className=" m-2 bg-white w-64 h-[80%] my-auto"></div>
                {/* <div className=" m-2 bg-darkblue w-64 px-3 font-bold text-xl text-white flex justify-end align-middle items-center relative">
                  <div className=" absolute -left-3 -bottom-3">
                    <MoveUpRight className=" text-white " size={80} />
                  </div>
                  <div className="w-1/2 ">Collab Event</div>
                </div> */}

                <div className=" m-2 bg-darkblue w-52 font-bold text-xl text-white flex justify-between align-middle relative">
                  <div className="bottom-0 left-0 absolute">
                    <Image alt="2" src={TopArrow} width={30} height={30} />
                  </div>
                  <div className="w-full ml-10 py-4">Collab Event</div>
                </div>
                <div className=" m-2">
                  <Image
                    width={250}
                    height={100}
                    objectFit="cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3WO2y5h7YkHljxIsvwuOxP21OE_8tnedA&s"
                    alt="1"
                  />
                </div>
                <div className=" m-2 bg-white h-[80%] my-auto w-64"></div>
                {/* <div className=" m-2 bg-darkblue w-64 px-3 font-bold text-xl text-white flex justify-end align-middle items-center relative">
                  <div className=" absolute -left-3 -bottom-3">
                    <MoveUpRight className=" text-white " size={80} />
                  </div>
                  <div className="w-1/2 ">Collab Event</div>
                </div> */}

                <div className=" m-2 bg-darkblue w-52 font-bold text-xl text-white flex justify-between align-middle relative">
                  <div className="bottom-0 left-0 absolute">
                    <Image alt="2" src={TopArrow} width={30} height={30} />
                  </div>
                  <div className="w-full ml-10 py-4">Collab Event</div>
                </div>
              </div>
              <div aria-hidden="true" className="flex w-fit space-x-3  animate-marquee ">
                <div className=" m-2">
                  <Image
                    width={250}
                    height={100}
                    objectFit="cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3WO2y5h7YkHljxIsvwuOxP21OE_8tnedA&s"
                    alt="1"
                  />
                </div>
                <div className=" m-2 bg-white h-[80%] my-auto w-64"></div>
                {/* <div className=" m-2 bg-darkblue w-64 px-3 font-bold text-xl text-white flex justify-end align-middle items-center relative">
                  <div className=" absolute -left-3 -bottom-3">
                    <MoveUpRight className=" text-white " size={80} />
                  </div>
                  <div className="w-1/2 ">Collab Event</div>
                </div> */}

                <div className=" m-2 bg-darkblue w-52 font-bold text-xl text-white flex justify-between align-middle relative">
                  <div className="bottom-0 left-0 absolute">
                    <Image alt="2" src={TopArrow} width={30} height={30} />
                  </div>
                  <div className="w-full ml-10 py-4">Collab Event</div>
                </div>
                <div className=" m-2">
                  <Image
                    width={250}
                    height={100}
                    objectFit="cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3WO2y5h7YkHljxIsvwuOxP21OE_8tnedA&s"
                    alt="1"
                  />
                </div>
                <div className=" m-2 bg-white h-10/12 w-64"></div>
                {/* <div className=" m-2 bg-darkblue w-64 px-3 font-bold text-xl text-white flex justify-end align-middle items-center relative">
                  <div className=" absolute -left-3 -bottom-3">
                    <MoveUpRight className=" text-white " size={80} />
                  </div>
                  <div className="w-1/2 ">Collab Event</div>
                </div> */}

                <div className=" m-2 bg-darkblue w-52 font-bold text-xl text-white flex justify-between align-middle relative">
                  <div className="bottom-0 left-0 absolute">
                    <Image alt="2" src={TopArrow} width={30} height={30} />
                  </div>
                  <div className="w-full ml-10 py-4">Collab Event</div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="bg-white bg-opacity-10 w-full">
            <div className="  overflow-hidden before-marquee-reverse">
              <div className="  w-fit  animate-marquee-reverse ">
                <div className=" m-2">
                  <Image
                    width={250}
                    height={100}
                    objectFit="cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3WO2y5h7YkHljxIsvwuOxP21OE_8tnedA&s"
                    alt="1"
                  />
                </div>
                <div className=" m-2 bg-white h-[80%] my-auto w-64"></div>
                <div className=" m-2 bg-darkblue w-52 font-bold text-xl text-white flex justify-between align-middle relative">
                  <div className="bottom-0 left-0 absolute">
                    <Image alt="2" src={TopArrow} width={30} height={30} />
                  </div>
                  <div className="w-full ml-10 py-4">Collab Event</div>
                </div>
                <div className=" m-2">
                  <Image
                    width={250}
                    height={100}
                    objectFit="cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3WO2y5h7YkHljxIsvwuOxP21OE_8tnedA&s"
                    alt="1"
                  />
                </div>
                <div className=" m-2 bg-white h-[80%] my-auto w-64"></div>
                <div className=" m-2 bg-darkblue w-52 font-bold text-xl text-white flex justify-between align-middle relative">
                  <div className="bottom-0 left-0 absolute">
                    <Image alt="2" src={TopArrow} width={30} height={30} />
                  </div>
                  <div className="w-full ml-10 py-4">Collab Event</div>
                </div>
              </div>
              <div aria-hidden="true" className="  w-fit   animate-marquee-reverse ">
                <div className=" m-2">
                  <Image
                    width={250}
                    height={100}
                    objectFit="cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3WO2y5h7YkHljxIsvwuOxP21OE_8tnedA&s"
                    alt="1"
                  />
                </div>
                <div className=" m-2 bg-white h-[80%] my-auto w-64"></div>
                <div className=" m-2 bg-darkblue w-52 font-bold text-xl text-white flex justify-between align-middle relative">
                  <div className="bottom-0 left-0 absolute">
                    <Image alt="2" src={TopArrow} width={30} height={30} />
                  </div>
                  <div className="w-full ml-10 py-4">Collab Event</div>
                </div>
                <div className=" m-2">
                  <Image
                    width={250}
                    height={100}
                    objectFit="cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3WO2y5h7YkHljxIsvwuOxP21OE_8tnedA&s"
                    alt="1"
                  />
                </div>
                <div className=" m-2 bg-white h-[80%] my-auto w-64"></div>
                <div className=" m-2 bg-darkblue w-52 font-bold text-xl text-white flex justify-between align-middle relative">
                  <div className="bottom-0 left-0 absolute">
                    <Image alt="2" src={TopArrow} width={30} height={30} />
                  </div>
                  <div className="w-full ml-10 py-4">Collab Event</div>
                </div>
              </div>{" "}
            </div>
          </div>
          <div className="bg-white bg-opacity-10 w-full">
            <div className="  overflow-hidden before-marquee">
              <div className="flex  w-fit space-x-3  animate-marquee ">
                <div className=" m-2">
                  <Image
                    width={250}
                    height={100}
                    objectFit="cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3WO2y5h7YkHljxIsvwuOxP21OE_8tnedA&s"
                    alt="1"
                  />
                </div>
                <div className=" m-2 bg-white w-64 h-[80%] my-auto"></div>
                {/* <div className=" m-2 bg-darkblue w-64 px-3 font-bold text-xl text-white flex justify-end align-middle items-center relative">
                  <div className=" absolute -left-3 -bottom-3">
                    <MoveUpRight className=" text-white " size={80} />
                  </div>
                  <div className="w-1/2 ">Collab Event</div>
                </div> */}

                <div className=" m-2 bg-darkblue w-52 font-bold text-xl text-white flex justify-between align-middle relative">
                  <div className="bottom-0 left-0 absolute">
                    <Image alt="2" src={TopArrow} width={30} height={30} />
                  </div>
                  <div className="w-full ml-10 py-4">Collab Event</div>
                </div>
                <div className=" m-2">
                  <Image
                    width={250}
                    height={100}
                    objectFit="cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3WO2y5h7YkHljxIsvwuOxP21OE_8tnedA&s"
                    alt="1"
                  />
                </div>
                <div className=" m-2 bg-white h-[80%] my-auto w-64"></div>
                {/* <div className=" m-2 bg-darkblue w-64 px-3 font-bold text-xl text-white flex justify-end align-middle items-center relative">
                  <div className=" absolute -left-3 -bottom-3">
                    <MoveUpRight className=" text-white " size={80} />
                  </div>
                  <div className="w-1/2 ">Collab Event</div>
                </div> */}

                <div className=" m-2 bg-darkblue w-52 font-bold text-xl text-white flex justify-between align-middle relative">
                  <div className="bottom-0 left-0 absolute">
                    <Image alt="2" src={TopArrow} width={30} height={30} />
                  </div>
                  <div className="w-full ml-10 py-4">Collab Event</div>
                </div>
              </div>
              <div aria-hidden="true" className="flex w-fit space-x-3  animate-marquee ">
                <div className=" m-2">
                  <Image
                    width={250}
                    height={100}
                    objectFit="cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3WO2y5h7YkHljxIsvwuOxP21OE_8tnedA&s"
                    alt="1"
                  />
                </div>
                <div className=" m-2 bg-white h-[80%] my-auto w-64"></div>
                {/* <div className=" m-2 bg-darkblue w-64 px-3 font-bold text-xl text-white flex justify-end align-middle items-center relative">
                  <div className=" absolute -left-3 -bottom-3">
                    <MoveUpRight className=" text-white " size={80} />
                  </div>
                  <div className="w-1/2 ">Collab Event</div>
                </div> */}

                <div className=" m-2 bg-darkblue w-52 font-bold text-xl text-white flex justify-between align-middle relative">
                  <div className="bottom-0 left-0 absolute">
                    <Image alt="2" src={TopArrow} width={30} height={30} />
                  </div>
                  <div className="w-full ml-10 py-4">Collab Event</div>
                </div>
                <div className=" m-2">
                  <Image
                    width={250}
                    height={100}
                    objectFit="cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3WO2y5h7YkHljxIsvwuOxP21OE_8tnedA&s"
                    alt="1"
                  />
                </div>
                <div className=" m-2 bg-white h-10/12 w-64"></div>
                {/* <div className=" m-2 bg-darkblue w-64 px-3 font-bold text-xl text-white flex justify-end align-middle items-center relative">
                  <div className=" absolute -left-3 -bottom-3">
                    <MoveUpRight className=" text-white " size={80} />
                  </div>
                  <div className="w-1/2 ">Collab Event</div>
                </div> */}

                <div className=" m-2 bg-darkblue w-52 font-bold text-xl text-white flex justify-between align-middle relative">
                  <div className="bottom-0 left-0 absolute">
                    <Image alt="2" src={TopArrow} width={30} height={30} />
                  </div>
                  <div className="w-full ml-10 py-4">Collab Event</div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
        {/* <div className=" m-2 bg-darkblue w-44 font-bold text-xl text-white flex justify-between align-middle relative">
          <div className="bottom-0 left-0 absolute">
           <Image alt="2" src={TopArrow} width={30} height={30} />
          </div>
          <div className="w-1/2 mx-auto">Collab Event</div>
        </div> */}
      </section>
    </div>
  );
};

export default Galley;
