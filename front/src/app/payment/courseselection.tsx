'use client'
import React from 'react'
import { Check, ChevronRight } from 'lucide-react'
import { CheckMark, PendingMark } from '@/components/ui/checkmark'

export const Courseselection = ({ step, selectedCourse, setSelectedCourse }) => {
    return (
        <div className="mb-8 flex flex-col gap-8">
            <div className='flex gap-4 lg:gap-8 justify-center'>
                {step > 1 ?

                    //mark checked symbol
                    <CheckMark className='lg:mt-2 scale-75 lg:scale-100' >
                        <Check size={48} color="#ffffff" strokeWidth={3} />
                    </CheckMark>
                    :
                    //mark pending symbol
                    <PendingMark className='lg:mt-2  scale-75 lg:scale-100'>
                        <div className='rounded-full bg-lightblue w-[10px] h-[10px]'></div>
                    </PendingMark>
                }

                <div className=" w-full flex items-center text-md  lg:text-xl text-darkblue  border-[1px] border-lightblue px-4 lg:px-10 bg-white z-10 relative py-2 lg:py-4 ">
                    <span className=" font-semibold">1. Select Course</span>
                    <div className="ml-auto lg:w-12 h-8 w-8 lg:h-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
                        <ChevronRight />
                    </div>
                </div>
            </div>

            <div className='flex gap-4 lg:gap-8 items-center justify-center'>

                <div className="w-[38px] invisible scale-75 lg:scale-100 h-[40px] bg-[#00B200] rounded-full flex items-center justify-center lg:p-2 ">
                    <Check size={48} color="#ffffff" strokeWidth={3} />
                </div>

                {step === 1 ? (
                    <div className=" w-full flex items-center text-xl text-darkblue  border-[1px] border-lightblue  lg:px-10 bg-white z-10 relative lg:py-4 ">
                        <div className=" lg:mt-4 lg:space-y-6">
                            {[1, 2].map((course) => (
                                <div
                                    key={course}
                                    className=" flex gap-4 lg:p-6 py-2 px-4  hover:border-blue-500 hover:shadow-md transition-all"
                                >
                                    {/* course details here */}
                                    <div>
                                        <span className=" text-[17px] lg:text-xl font-semibold text-darkblue mb-3">
                                            Course {course}: Lorem ipsum dolor sit amet
                                        </span>
                                        <p className="text-sm text-gray-600">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at eros vitae augue ultrices sollicitudin.
                                        </p>
                                    </div>

                                    {/* select course radio button */}

                                    <input type="radio" className='scale-150 cursor-pointer border-lightblue fill-black'
                                        checked={selectedCourse === `course-${course}`}
                                        onChange={() => setSelectedCourse(`course-${course}`)} />
                                </div>
                            ))}
                        </div>

                    </div>
                )
                    :
                    <div className='hidden'></div>
                }
            </div>
        </div>
    )
}
