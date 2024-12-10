import Image from 'next/image'
import Link from 'next/link'
import { Star, Clock, Video, ChevronDown, Instagram, Twitter, Linkedin, Mail } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
// import { Progress } from "@/components/ui/progress"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Navbar from '@/components/parts/navbar'
import Footer from '@/components/parts/footer'
import Faqs from '@/components/parts/faqs'

export default function CoursePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <Navbar />
      {/* Course Hero */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Lorem ipsum dolor sit amet, adipiscing lit lit
          </h1>
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-500">(123 reviews)</span>
          </div>
          <p className="text-lg text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <Badge variant="secondary" className="text-sm">
              Lorem ipsum dolor sit
            </Badge>
            <Badge variant="secondary" className="text-sm">
              Lorem ipsum dolor sit
            </Badge>
            <Badge variant="secondary" className="text-sm">
              Lorem ipsum dolor sit
            </Badge>
            <Badge variant="secondary" className="text-sm">
              Lorem ipsum dolor sit
            </Badge>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-1" />
              <span>Time duration</span>
            </div>
            <div className="flex items-center">
              <Video className="h-5 w-5 mr-1" />
              <span>live / recorded videos</span>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 mr-1" />
              <span>live / recorded videos</span>
            </div>
            <div className="flex items-center">
              <Video className="h-5 w-5 mr-1" />
              <span>Time duration</span>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Enroll Now</h2>
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
          <button className="mt-8 w-full bg-blue-500 text-white py-3 px-4 rounded-md text-lg font-medium hover:bg-blue-600 transition-colors">
            Start Learning
          </button>
        </div>
      </div>

      {/* Meet Your Mentor */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-white mb-8">Meet your Mentor</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <Image
              src="/placeholder.svg"
              alt="Mentor"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Eleanor Jane</h3>
              <p className="text-blue-400 mb-4">Founder of ABC</p>
              <p className="text-gray-300 mb-6">
                #Digital Advantage - Shark Tank S2 | Amazon, US & India | Times of India | IBM Bangalore | NIT Allahabad | TEDx Speaker
              </p>
              <div className="flex space-x-4">
                <Badge className="bg-blue-500 text-white">UI/UX Design</Badge>
                <Badge className="bg-blue-500 text-white">Product Design</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Student Reviews */}
      <div className="bg-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-white mb-8">Lorem ipsum dolor sit amet consectetur lit amet</h2>
          <div className="space-y-6">
            {[1, 2, 3].map((review, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <Image
                    src="/placeholder.svg"
                    alt="Student"
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">Martin Goutry</h3>
                    <p className="text-sm text-gray-500">UI/UX Designer</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                  ))}
                  <span className="ml-2 text-sm text-gray-500">5.0</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className='px-10 py-20'>
        <Faqs />
      </div>
      {/* Footer */}
      <div className="bg-darkblue">
        <Footer />
      </div>
    </div>
  )
}