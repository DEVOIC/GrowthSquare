
import Link from "next/link"
import { ArrowRight, Instagram, Linkedin, Mail, Twitter } from 'lucide-react'

import { Button } from "@/components/ui/button"
import Navbar from "@/components/parts/navbar"
import Hero from "./hero"
import Courses from "./courses"
import Stats from "./Stats"
import Testimonial from "./Textimonial"
import Services from "./Services"
import Galley from "./galley"
import Gsmarque from "./gsmarque"
import Initiaitive from "./Initiaitive"
import Faqs from "./Faqs"

export default function Home() {
  return (
    <div className=" bg-darkblue ">


      {/* Navigation */}
      <Navbar/>
      

      {/* Hero Section */}
      <Hero/>

<Courses/>

<Stats/>

      
      {/* Testimonials */}
      <Testimonial/>

      {/* Services Section */}
      <Services/>

      {/* Event Gallery */}
    <Galley/>

      {/* Exclusive Squares */}
      <Gsmarque/>
      <Initiaitive/>

      {/* FAQ Section */}
      <Faqs/>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Let&#39;s work together</h2>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
          Get Started <ArrowRight className="ml-2" />
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-white font-semibold mb-4">Explore</h3>
              <div className="space-y-2">
                <Link href="#" className="block hover:text-white">About</Link>
                <Link href="#" className="block hover:text-white">Services</Link>
                <Link href="#" className="block hover:text-white">Contact Us</Link>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <div className="space-y-2">
                <Link href="#" className="block hover:text-white">Courses</Link>
                <Link href="#" className="block hover:text-white">FAQs</Link>
                <Link href="#" className="block hover:text-white">Blog</Link>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <div className="space-y-2">
                <Link href="#" className="block hover:text-white">UI/UX Design</Link>
                <Link href="#" className="block hover:text-white">Web Dev</Link>
                <Link href="#" className="block hover:text-white">App Dev</Link>
                <Link href="#" className="block hover:text-white">Video Editing</Link>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-white">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-white">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-white">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-white">
                  <Mail className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 Copyright. All Rights Reserved</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white">Terms & Conditions</Link>
              <Link href="#" className="hover:text-white">Privacy Policy</Link>
              <Link href="#" className="hover:text-white">Refund Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}