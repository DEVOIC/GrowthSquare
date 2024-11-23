import Image from "next/image"
import Link from "next/link"
import { ArrowRight, GraduationCap, Instagram, Linkedin, Mail, Twitter } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/parts/navbar"
import Hero from "./hero"
import Courses from "./courses"
import Stats from "./Stats"
import Testimonial from "./Textimonial"
import Services from "./Services"
import Galley from "./galley"
import Gsmarque from "./gsmarque"
import Initiaitive from "./Initiaitive"

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
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-12">Lorem ipsum dolor sit amet consectetur lit FAQs</h2>
          </div>
          <div className="md:w-1/2">
            <Accordion type="single" collapsible className="w-full">
              {[
                "What is Webflow and why is it the best website builder?",
                "What is your favorite template from BRIX Templates?",
                "How do you clone a Webflow Template from the Showcase?",
                "Why is BRIX Templates the best Webflow agency out there?",
                "Why is BRIX Templates the best Webflow agency out there?",
              ].map((question, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700">
                  <AccordionTrigger className="text-white hover:text-blue-500">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

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