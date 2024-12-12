import React from "react";
import Image from "next/image";
import Shortimg from "@/components/parts/shortimg";
import UserCenter from './usercenter.svg'
import user2demo from './user2demo.svg'

const listData = [
    { text: "Lorem ipsum dolor sit", width: "w-1 h-14", ml: "ml-0" },
    { text: "Lorem ipsum dolor sit", width: "w-1 h-14", ml: "ml-12" },
    { text: "Learn at your own pace", width: "w-2 h-20", ml: "ml-24" },
    { text: "Lorem ipsum dolor sit", width: "w-1 h-14", ml: "ml-12" },
    { text: "Lorem ipsum dolor sit", width: "w-1 h-14", ml: "ml-0" },
];


const LearnAtYourPace = () => {
    return (
        <section className="flex flex-col lg:gap-0 gap-32 lg:flex-row  justify-between items-center bg-lightblue lg:py-0 py-10 lg:h-screen px-8 lg:px-28 ">
            {/* Left Side - Images */}
            <div className=" text-white  lg:flex flex-col gap-10 ">
                <div className=" text-white flex flex-col gap-8 ">

                    <div className="flex justify-end mr-16">
                        <div className=''>
                            <Shortimg  >
                                <Image
                                    width={80}
                                    height={100}
                                    src={user2demo}
                                    alt="placeholder" />
                            </Shortimg>
                        </div>
                    </div>
                    <div className="flex gap-8">
                        <div className='-mt-8'>
                            <Shortimg  >
                                <Image
                                    width={80}
                                    height={100}
                                    src={user2demo}
                                    alt="placeholder" />
                            </Shortimg>
                        </div>
                        <div className=''>

                            <Shortimg className="border-8" >
                                <Image
                                    width={150}
                                    height={600}
                                    src={UserCenter}
                                    alt="placeholder" />
                            </Shortimg>

                        </div>
                        <div className="flex items-end -mb-8">
                            <div>
                                <Shortimg  >
                                    <Image
                                        width={80}
                                        height={100}
                                        src={user2demo}
                                        alt="placeholder" />
                                </Shortimg>
                            </div>
                        </div>

                    </div>
                    <div className="flex ml-16">
                        <div className=''>
                            <Shortimg  >
                                <Image
                                    width={80}
                                    height={100}
                                    src={user2demo}
                                    alt="placeholder" />
                            </Shortimg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Text */}
            <div className="lg:w-1/2 text-white">
                <ul className="space-y-8">
                    {listData.map((item, index) => (
                        <li key={index} className={`mb-4 flex items-center ${item.ml} ${item.ml === 'ml-24' ? "text-white text-2xl lg:text-4xl" : "text-darkblue text-lg lg:text-xl"} `}>
                            <div className={`${item.width} ${item.ml === 'ml-24' ? "bg-white" : "bg-darkblue"}  mr-12`}></div>
                            <p className={`font-bold `}>{item.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default LearnAtYourPace;

