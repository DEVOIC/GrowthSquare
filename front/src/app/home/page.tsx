import Image from "next/image"
import Link from "next/link"
import { ArrowRight, GraduationCap, Instagram, Linkedin, Mail, Star, Twitter } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-6 w-6 text-blue-500" />
            <span className="text-xl font-bold text-white">Devoic</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6 text-gray-300">
            <Link href="#" className="hover:text-white">Explore</Link>
            <Link href="#" className="hover:text-white">About</Link>
            <Link href="#" className="hover:text-white">Courses</Link>
            <Link href="#" className="hover:text-white">Blog</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="text-white border-gray-700 hover:bg-gray-800">
              Login
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Become A Member
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Unlock Your <span className="text-blue-500">Potential</span> with a Community
          <br />
          That&#39;s Got Your <span className="border-b-4 border-blue-500">Back</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Collaborate, innovate, and level up with experts in design,
          development, content, and more
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
          let&#39;s grow together <ArrowRight className="ml-2" />
        </Button>
        <div className="mt-12 flex justify-center space-x-4">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="relative w-24 h-24 bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt={`Community member ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Logo Marquee */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-8 overflow-hidden">
        <div className="flex space-x-12 animate-marquee">
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <div key={index} className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold text-white">Devoic</span>
            </div>
          ))}
        </div>
      </div>

      {/* Course Cards */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-white mb-12">Lorem ipsum dolor sit amet, adipiscing lit courses</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" alt="Instructor" />
                    <AvatarFallback>MG</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">Martin Goutry</h3>
                    <p className="text-sm text-gray-600">Instructor</p>
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-4">Lorem ipsum dolor sit amet sit amet sit</h4>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet sit amet lorem ipsum dolor sit amet sit amet
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1">4.5</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    live / recorded videos
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Start Learning
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20 bg-gray-900">
        <h2 className="text-3xl font-bold text-white mb-12">Lorem ipsum dolor sit amet, lit testimonial</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <Card key={index} className={`bg-white p-6 ${index === 1 ? 'md:col-span-2' : ''}`}>
              <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback>MG</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">Martin Goutry</h3>
                    <p className="text-sm text-gray-600">Back-end developer at MyDodow</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Dico is finally addressing a long time problem we had when building UIs. It&#39;s ease of use and workflow seems really intuitive. Promising!
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-white mb-12">Lorem ipsum dolor sit amet, lit services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Skill Building",
            "Design & Content Services",
            "Web & App Development",
            "Customized Training Programs",
            "SME & Startup Support",
            "Institutional Partnerships",
          ].map((service) => (
            <Card key={service} className="bg-white/5 hover:bg-white/10 transition-colors">
              <CardContent className="p-6 flex items-center justify-between">
                <span className="text-white">{service}</span>
                <GraduationCap className="h-6 w-6 text-blue-500" />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Event Gallery */}
      <section className="container mx-auto px-4 py-20 bg-blue-600">
        <h2 className="text-3xl font-bold text-white mb-12">Lorem ipsum dolor sit amet, lit event gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
            <div key={index} className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
              {index === 1 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold">
                  First offline meet up
                </div>
              )}
              {index === 2 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold">
                  Collab Events
                </div>
              )}
              <Image
                src={index % 3 === 0 ? "/placeholder.svg" : "/placeholder.svg"}
                alt={`Event ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Exclusive Squares */}
      <section className="container mx-auto px-4 py-20 bg-gray-900">
        <h2 className="text-3xl font-bold text-white mb-12">Lorem ipsum dolor sit amet, lit exclusive squares</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Square Space', 'Square Plus', 'Square Light', 'Square Champ'].map((square, index) => (
            <Card key={index} className="bg-gray-800 p-6">
              <CardContent className="flex flex-col items-center justify-center h-full">
                <GraduationCap className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-white text-lg font-semibold text-center">{square}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

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