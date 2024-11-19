import Image from "next/image"
import Link from "next/link"
import { Star, Clock, Video, Instagram, Twitter, Linkedin, Mail, Check } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-600">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 bg-transparent">
        <div className="flex items-center">
          <Image src="/placeholder.svg" alt="Devoic Logo" width={32} height={32} className="mr-2" />
          <span className="text-white text-2xl font-bold">Devoic</span>
        </div>
        <div className="hidden md:flex gap-6">
          <Link href="/explore" className="text-white hover:text-blue-200">Explore</Link>
          <Link href="/about" className="text-white hover:text-blue-200">About</Link>
          <Link href="/courses" className="text-white hover:text-blue-200">Courses</Link>
          <Link href="/blog" className="text-white hover:text-blue-200">Blog</Link>
        </div>
        <div className="flex gap-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            Become A Member
          </button>
          <button className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-blue-600 transition-colors">
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl font-bold text-white mb-4">
          Your <span className="text-blue-400">Skill-Building</span> Journey
          <br />Starts Here
        </h1>
        <p className="text-white/80 text-xl mb-12">
          Practical, hands-on courses that prepare you for
          <br />what&#39;s next in <span className="underline decoration-blue-400">your career</span>
        </p>
        
        {/* Learning Features Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white p-4 rounded-lg shadow-lg">
                  <Image src="/placeholder.svg" alt="Learning feature" width={100} height={100} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center items-start text-left space-y-6">
            <h2 className="text-3xl font-bold text-white">Learn at your own pace</h2>
            {[1, 2, 3, 4].map((item) => (
              <p key={item} className="text-white/80">Lorem ipsum dolor sit</p>
            ))}
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">
            Lorem ipsum dolor sit amet,
            <br />adipiscing lit courses
          </h2>
          <div className="flex gap-4 mb-12">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full">All</button>
            <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-full hover:bg-blue-50">
              UI/UX Design
            </button>
            <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-full hover:bg-blue-50">
              App Development
            </button>
            <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-full hover:bg-blue-50">
              Web Development
            </button>
            <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-full hover:bg-blue-50">
              Video Editing
            </button>
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((course) => (
              <div key={course} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src="/placeholder.svg"
                      alt="Instructor"
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <h3 className="font-bold">Martin Goutry</h3>
                      <p className="text-sm text-gray-500">UX/UI Designer</p>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-4">Lorem ipsum dolor sit amet sit amet sit</h4>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet sit amet lorem ipsum dolor sit amet sit amet lorem ipsum dolor
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="text-sm text-gray-500">8 hours</span>
                    </div>
                    <div className="flex items-center">
                      <Video className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="text-sm text-gray-500">12 videos</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-500">4.5</span>
                    </div>
                    <Badge variant="outline" className="text-blue-500">
                      UI/UX Design
                    </Badge>
                  </div>
                </div>
                <button className="w-full bg-blue-500 text-white py-4 hover:bg-blue-600 transition-colors">
                  Start Learning
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="bg-gradient-to-b from-gray-900 to-blue-900 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">Meet your Mentors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((mentor) => (
              <div key={mentor} className="bg-gray-900/50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Image
                    src="/placeholder.svg"
                    alt="Mentor"
                    width={120}
                    height={120}
                    className="rounded-lg"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white">Eleanor Jane</h3>
                    <p className="text-gray-400 mb-2">Founder of ABC</p>
                    <p className="text-sm text-gray-400 mb-4">
                      #Digital Advantage - Shark Tank S2 | Amazon,
                      US & India | Times of India | IBM Bangalore | NIT
                      Allahabad | TEDx Speaker
                    </p>
                    <div className="flex gap-2">
                      <Badge className="bg-blue-900 text-white">UI/UX Design</Badge>
                      <Badge className="bg-blue-900 text-white">Product Design</Badge>
                    </div>
                    <div className="flex gap-3 mt-4">
                      <Link href="#" className="text-gray-400 hover:text-white">
                        <Instagram className="w-4 h-4" />
                      </Link>
                      <Link href="#" className="text-gray-400 hover:text-white">
                        <Twitter className="w-4 h-4" />
                      </Link>
                      <Link href="#" className="text-gray-400 hover:text-white">
                        <Linkedin className="w-4 h-4" />
                      </Link>
                      <Link href="#" className="text-gray-400 hover:text-white">
                        <Mail className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Advantages */}
      <section className="bg-blue-600 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">
            Lorem ipsum dolor sit amet,
            <br />lit course advantage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((advantage) => (
              <div key={advantage} className="bg-white p-6 rounded-lg">
                <Check className="w-6 h-6 text-green-500 mb-4" />
                <p className="font-medium">Lorem ipsum dolor sit amet sit amet sit</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-b from-blue-600 to-white py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            Lorem ipsum dolor sit amet
            <br />consectetur lit FAQs
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              "What is Webflow and why is it the best website builder?",
              "What is your favorite template from BRIX Templates?",
              "How do you clone a Webflow Template from the Showcase?",
              "Why is BRIX Templates the best Webflow agency out there?",
              "Why is BRIX Templates the best Webflow agency out there?",
            ].map((question, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-blue-500 rounded-lg">
                <AccordionTrigger className="px-6 py-4 text-white hover:no-underline">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-white/80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
    )   }