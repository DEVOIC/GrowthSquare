import Navbar from '@/components/parts/navbar'
import Footer from '@/components/parts/footer'
import Faqs from './faqs'
import Gsmarque from './gsmarque'
import { Mentors } from './meetmentor'
import StudentReview from './studentreview'
import { Button } from '@/components/ui/button'
import CourseHero from './coursehero'
import CourseContent from './coursecontent'

export default function CoursePage() {
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Navigation */}
      <Navbar />
      <CourseHero />
      {/* Course Content */}

      <div className=" bg-white py-16 border-t-[1px] border-darkblue">
        <div className=" sm:px-6 lg:px-28  md:py-12 px-4">

          <CourseContent />

          <Button className="mt-8 px-16 py-6 z-30 text-xl font-bold  hover:bg-lightblue/80 text-white" variant="default">
            Start Learning
          </Button>

        </div>
      </div>

      <div className='relative overflow-hidden bg-darkblue '>
        <Mentors />
      </div>

      {/* Student Reviews */}
      <StudentReview />
      {/* marque  */}
      <Gsmarque />
      {/* FAQ Section */}
      <div className='lg:px-10  lg:py-20'>
        <Faqs />
      </div>
      {/* Footer */}
      <div className="bg-darkblue">
        <Footer />
      </div>
    </div>
  )
}