import Image from "next/image"
import Link from "next/link"
import { Clock, Star, Instagram, Twitter, Linkedin, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 bg-white border-b">
        <div className="flex items-center">
          <Image src="/placeholder.svg" alt="Devoic Logo" width={32} height={32} className="mr-2" />
          <span className="text-2xl font-bold">Devoic</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/explore" className="text-gray-600 hover:text-gray-900">Explore</Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
          <Link href="/courses" className="text-gray-600 hover:text-gray-900">Courses</Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
        </div>
        <div className="flex items-center">
          <Button variant="ghost" className="flex items-center">
            <Image src="/placeholder.svg" alt="Profile" width={32} height={32} className="rounded-full" />
            <span className="ml-2">Name</span>
          </Button>
        </div>
      </nav>

      {/* Success Message */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold mb-4">Payment Successful</h1>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet sit amet lorem ipsum dolor sit amet sit amet lorem ipsum dolor sit amet
          lorem ipsum dolor sit amet
        </p>
        <div className="space-y-4">
          <Link href="/" className="inline-block w-full sm:w-auto px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
            Go To Homepage
          </Link>
          <Link href="/learn" className="block w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Start Learning
          </Link>
        </div>
      </div>

      {/* Recommended Courses */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Recommended Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((course) => (
              <div key={course} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src="/placeholder.svg"
                      alt="Martin Goutry"
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div className="ml-3">
                      <h3 className="font-medium">Martin Goutry</h3>
                      <p className="text-sm text-gray-500">UI/UX Designer</p>
                    </div>
                  </div>
                  <h4 className="font-medium mb-2">Lorem ipsum dolor sit amet sit</h4>
                  <p className="text-sm text-gray-500 mb-4">
                    Lorem ipsum dolor sit amet sit amet lorem ipsum dolor sit amet sit amet
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>Time duration</span>
                    </div>
                    <Badge variant="secondary">live / recorded videos</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-500">4.5</span>
                    </div>
                    <Badge>UI/UX Design</Badge>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-400 line-through">@1999</span>
                      <span className="ml-2 font-medium">@499</span>
                    </div>
                    <Button variant="outline">Enroll Now</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold mb-8 md:mb-0">Let&#39;s work together</h2>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Mail className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-medium mb-4">Explore</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Courses</h3>
              <ul className="space-y-2">
                <li><Link href="/courses/ui-ux" className="text-gray-400 hover:text-white">UI/UX Design</Link></li>
                <li><Link href="/courses/web-dev" className="text-gray-400 hover:text-white">Web Dev</Link></li>
                <li><Link href="/courses/app-dev" className="text-gray-400 hover:text-white">App Dev</Link></li>
                <li><Link href="/courses/video" className="text-gray-400 hover:text-white">Video Editing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">FAQs</h3>
              <ul className="space-y-2">
                <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-gray-400 italic">
                Most Quote To Inspire Ppl Lorem ipsum Dolor Sit Amet Amet, Consectetur Adipiscing elit
                <br />~ Lorem ipsum
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400">©2024 Copyright - All Rights Reserved</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link href="/terms" className="text-sm text-gray-400 hover:text-white">Terms & Conditions</Link>
                <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link>
                <Link href="/refund" className="text-sm text-gray-400 hover:text-white">Refund Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )}