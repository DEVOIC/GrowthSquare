
import CourseCard from '@/components/parts/course-card'
import { GraduationCap } from 'lucide-react'
import React from 'react'
import Loading from '../loading'

const Courses = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BACK_API}:${process.env.NEXT_PUBLIC_PORT}/${process.env.NEXT_PUBLIC_ROUTE}/auth/course/get-all-courses`)
  if (data.status !== 200) {
    return (<Loading />)
  }
  const rawData = await data.json()
  const courses: Course[] = await rawData.data.courses

  return (
    <div className='w-screen  bg-white overflow-hidden relative'>
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
      <section className="container mx-auto px-6 md:px-12 py-20">
        <h2 className="text-3xl font-bold text-darkblue font-transforma mb-12">
          <p>

            Lorem ipsum dolor sit amet,
          </p>

          adipiscing lit courses</h2>
        <div className="   grid xl:grid-cols-3 lg:grid-cols-2  gap-6  ">

          {courses.length === 0 ? <div>Not able to fetch mentors</div> :
            courses.map((course) => (
              <CourseCard key={course._id} data={course} />
            ))}
        </div>
      </section>
    </div>
  )
}

export default Courses