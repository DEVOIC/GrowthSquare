
'use client'
import { useState, useEffect } from 'react'
import Footer from '@/components/parts/footer'

import Gsmarque from './gsmarque'
import { Mentors } from './meetmentor'
import StudentReview from './studentreview'
import { Button } from '@/components/ui/button'
import CourseHero from './coursehero'
import Loading from '@/app/loading'

export default function CoursePage() {
  const [courseData, setCourseData] = useState<Course[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // const id = window.location.pathname.split('/')[2]

    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_API}:${process.env.NEXT_PUBLIC_PORT}/${process.env.NEXT_PUBLIC_ROUTE}/auth/course/get-course/67606f38380af83652ae5c6f`)
        // const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_API}:${process.env.NEXT_PUBLIC_PORT}/${process.env.NEXT_PUBLIC_ROUTE}/auth/course/get-course/?=${id}`)

        if (res.status !== 200) {
          setIsLoading(false)
          return
        }
        const rawData = await res.json()
        const courses: Course[] = rawData.data.courses
        console.log(courses);


        setCourseData(courses)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching course data:', error)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (isLoading || !courseData) {
    return <Loading />
  }

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Navigation */}
      <CourseHero />
      {/* Course Content */}
      <div className=" bg-white py-16 border-t-[1px] border-darkblue">
        <div className=" sm:px-6 lg:px-28  md:py-12 px-4">
          {/* {courseData && <CourseContent courses={courseData} />} */}
          <Button className="mt-8 px-16 py-6 z-30 text-xl font-bold  hover:bg-lightblue/80 text-white" variant="default">
            Start Learning
          </Button>
        </div>
      </div>
      <div className="relative overflow-hidden bg-darkblue">
        <Mentors />
      </div>
      {/* Student Reviews */}
      <StudentReview />
      {/* marque  */}
      <Gsmarque />
      {/* FAQ Section */}

      {/* faq is causing error in the console it shows continuously increasing error in the console */}

      {/* <Faqs /> */}



      {/* Footer */}
      <div className="bg-darkblue">
        <Footer />
      </div>
    </div>
  )
}
