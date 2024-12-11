import React from "react";
import { Star, Clock, Video } from 'lucide-react';
import { Courseadvan } from './courseadv';
import { Button } from "@/components/ui/button";

const CourseHero = () => {
    return (
        <>
            {/* Course Hero */}

            <div className="bg-white pt-28 relative">
                <div className="ellipse2 top-right"></div>
                <div className="ellipse2 mid-left"></div>
                <div className="sm:px-6 lg:px-28 py-12 px-4 z-30">
                    <h1 className="text-6xl font-bold text-lightblue mb-4">
                        Lorem ipsum dolor sit amet,
                        <br />
                        adipiscing lit lit
                    </h1>
                    <div className="flex items-center mb-4">
                        <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-5  w-5 text-yellow-400" fill="currentColor" />
                            ))} <span className="font-semibold ml-2">5</span>
                        </div>
                        <span className="ml-2 text-sm text-lightblue">(123 reviews)</span>
                    </div>
                    <p className="text-lg text-darkblue font-medium mb-6 lg:w-[80%]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>


                    <Courseadvan />


                    <div className="flex items-center gap-10 mt-10 font-medium text-lg text-darkblue">
                        <div className="flex items-center">
                            <Clock strokeWidth={3} absoluteStrokeWidth className="h-6 w-6 mr-2 text-lightblue" />
                            <span>Time duration</span>
                        </div>
                        <div className="flex items-center">
                            <Video strokeWidth={3} absoluteStrokeWidth className="h-6 text-lightblue w-6 mr-2" />
                            <span>live / recorded videos</span>
                        </div>
                    </div>

                    <div className="mt-20 z-50 flex flex-col w-fit  ">
                        <Button variant={'default'} className=" text-white hover:text-darkblue duration-300 text-xl px-20 py-8">
                            Enroll Now <span className=" opacity-70 line-through ">@1999</span> @499
                        </Button>
                        <span className="mt-4 font-semibold text-start md:text-center text-lightblue text-lg">
                            Limited time deal
                        </span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CourseHero;