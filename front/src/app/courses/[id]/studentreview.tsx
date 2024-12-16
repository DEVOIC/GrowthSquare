import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import student from './mentor.jpg'

const StudentReview = () => {
    return (
        <div className="bg-lightblue">
            <div className=" mx-auto px-8 pb-8 sm:px-6 lg:px-20  md:py-28 gap-20 flex flex-col lg:flex-row">
                <h2 className="text-3xl md:text-5xl font-semibold text-white mt-16 lg:w-[45%] font-transforma  ">Lorem ipsum dolor sit amet consectetur lit amet</h2>
                <div className="space-y-6">
                    {[1, 2, 3].map((review, index) => (
                        <div key={index} className="bg-white rounded-none p-6 shadow-sm">

                            <div className="flex items-center mb-4 justify-between ">
                                <div className="flex ">
                                    <div className="h-10 w-10 mr-4 overflow-hidden rounded-full">
                                        <Image
                                            src={student}
                                            alt="Student"
                                            width={64}
                                            height={64}
                                            className="object-fill rounded-full "
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Martin Goutry</h3>
                                        <p className="text-sm text-gray-500">UI/UX Designer</p>
                                    </div>
                                </div>
                                <div className="flex items-center ">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                                    ))}
                                    <span className="ml-2 text-sm text-gray-500">5.0</span>
                                </div>

                            </div>


                            <p className="text-gray-600 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default StudentReview;