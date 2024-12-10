import Navbar from '@/components/parts/navbar'
import Footer from '@/components/parts/footer'
import Faqs from '@/components/parts/faqs'
import Gsmarque from './gsmarque'
import { Mentors } from './meetmentor'
import StudentReview from './studentreview'
import { Button } from '@/components/ui/button'
import CourseHero from './coursehero'
import { ChevronDown } from 'lucide-react'

export default function CoursePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <Navbar />
      <CourseHero />

      {/* Course Content */}

      <div className="bg-gray-50 py-16 border-t-[1px] border-darkblue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            {[1, 2, 3, 4, 5].map((lesson, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 font-semibold mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Lesson {index + 1}: Lorem ipsum dolor sit amet, adipiscing lit</h3>
                    </div>
                  </div>
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
          {/* <button className="mt-8 w-full bg-blue-500 text-white py-3 px-4 rounded-md text-lg font-medium hover:bg-blue-600 transition-colors">
            Start Learning
          </button> */}

          <Button className="mt-8 px-16" variant="default">
            Start Learning
          </Button>

        </div>
      </div>

      <div>
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