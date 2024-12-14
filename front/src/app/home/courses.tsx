
import CourseCard from '@/components/parts/course-card'
import {  GraduationCap } from 'lucide-react'
import React from 'react'

const Courses = () => {
  return (
    <div className='w-screen  bg-white overflow-y-clip relative'>
      <div className="ellipse top-right"></div>
      <div className="ellipse mid-left"></div>

      {/* Logo Marquee */}
      <div className="  py-8">
        <div className="flex justify-between w">
          {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
            <div key={index} className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold text-black">Devoic</span>
            </div>
          ))}
        </div>
      </div>
      <div className='h-[1px] bg-black'></div>

      {/* Course Cards */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-darkblue font-transforma mb-12">
          <p>

            Lorem ipsum dolor sit amet,
          </p>

          adipiscing lit courses</h2>
        <div className="   flex flex-wrap  gap-6  ">
          {[1, 2, 3].map((item) => (

<CourseCard key={item}/>

          ))}
        </div>
      </section>
    </div>
  )
}

export default Courses