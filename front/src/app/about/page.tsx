import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Instagram, Twitter, Linkedin, Mail } from 'lucide-react'

export default function AboutPage() {
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
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">Become A Member</button>
          <button className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-blue-600 transition-colors">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl font-bold text-white mb-4">
          Our Vision, Your <span className="text-blue-400">Growth</span>
        </h1>
        <p className="text-white/80 text-xl mb-8">
          We&#39;re a hub for creatives, developers, and dreamers
          <br />who believe in <span className="underline decoration-blue-400">growing together</span>
        </p>
        <div className="max-w-4xl mx-auto">
          <Image
            src="/placeholder.svg"
            alt="Team photo"
            width={1000}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* Timeline Sections */}
      <section className="bg-blue-600 py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          <div className="relative">
            <div className="absolute left-0 top-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xl">?</span>
            </div>
            <div className="ml-20">
              <h2 className="text-3xl font-bold text-white mb-4">What Are We</h2>
              <p className="text-white/80">
                GrowthSquare is a network where students, mentors, and startups combine to turn potential into real-world impact,
                fostering a culture of hands-on learning and peer support.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xl">!</span>
            </div>
            <div className="ml-20">
              <h2 className="text-3xl font-bold text-white mb-4">What We Do</h2>
              <p className="text-white/80">
                We connect students with real-world experiences and a supportive community, guiding them to become skilled
                professionals who contribute meaningfully to industry needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters & Wha&#39; Next */}
      <section className="bg-blue-600 py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          <div className="relative">
            <div className="absolute left-0 top-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xl">?</span>
            </div>
            <div className="ml-20">
              <h2 className="text-3xl font-bold text-white mb-4">Why It Matters</h2>
              <p className="text-white/80">
                For students, companies, mentors, projects, and everyone in between and job-ready skills. For startups, it offers access to talented student teams prepared to work across tech disciplines.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xl">!</span>
            </div>
            <div className="ml-20">
              <h2 className="text-3xl font-bold text-white mb-4">Wha&#39; Next</h2>
              <p className="text-white/80">
                GrowthSquare aims to build a collaborative ecosystem where students support each other and grow together, fueling a future-ready workforce for businesses nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gradient-to-b from-blue-600 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">
            Lorem ipsum dolor sit amet, adipiscing lit initiatives
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {['Square Plus', 'Square Space', 'Square Light', 'Square Champ'].map((service) => (
              <div key={service} className="bg-white p-6 rounded-lg shadow-lg relative">
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Image src="/placeholder.svg" alt={`Icon for ${service}`} width={24} height={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{service}</h3>
                <p className="text-gray-600">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Sections */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-600 mb-8">The Brains Behind the Mission</h2>
          <p className="text-xl mb-12">
            Meet the trailblazers who set the foundation and continue to guide our community
            towards growth and innovation
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((member) => (
              <div key={member} className="relative group">
                <Image
                  src="/placeholder.svg"
                  alt="Team member"
                  width={240}
                  height={320}
                  className="rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 rounded-b-lg">
                  <h3 className="font-bold">Eleanor Jane</h3>
                  <p className="text-sm">UX/UI Designer</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Next Wave of Innovators */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-600 mb-8">The Next Wave of Innovators</h2>
          <p className="text-xl mb-12">
            The dedicated team working hard to build on the foundation laid by the mentors—
            ready to take on new challenges and grow together.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((member) => (
              <div key={member} className="relative group">
                <Image
                  src="/placeholder.svg"
                  alt="Team member"
                  width={240}
                  height={320}
                  className="rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 rounded-b-lg">
                  <h3 className="font-bold">Eleanor Jane</h3>
                  <p className="text-sm">UX/UI Designer</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-b from-white to-gray-900 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-blue-600">Lorem ipsum dolor sit amet consectetur lit FAQs</h2>
          <div className="space-y-4">
            {[
              "What is Webflow and why is it the best website builder?",
              "What is your favorite template from BRIX Templates?",
              "How do you clone a Webflow Template from the Showcase?",
              "Why is BRIX Templates the best Webflow agency out there?",
              "Why is BRIX Templates the best Webflow agency out there?",
            ].map((question, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button className="flex justify-between items-center w-full text-left">
                  <span className="text-lg font-medium text-white">{question}</span>
                  <ChevronDown className="w-5 h-5 text-white" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Le&#39; work together</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold mb-2">Explore</h3>
                  <ul className="space-y-2">
                    <li><Link href="#" className="text-gray-400 hover:text-white">About</Link></li>
                    <li><Link href="#" className="text-gray-400 hover:text-white">Services</Link></li>
                    <li><Link href="#" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Courses</h3>
                  <ul className="space-y-2">
                    <li><Link href="#" className="text-gray-400 hover:text-white">UI/UX Design</Link></li>
                    <li><Link href="#" className="text-gray-400 hover:text-white">Web Dev</Link></li>
                    <li><Link href="#" className="text-gray-400 hover:text-white">App Dev</Link></li>
                    <li><Link href="#" className="text-gray-400 hover:text-white">Video Editing</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-2">FAQs</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Blog</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">©2024 Copyright - All Rights Reserved</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center md:text-left">
            <Link href="#" className="text-sm text-gray-400 hover:text-white mr-4">Terms & Conditions</Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white mr-4">Privacy Policy</Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">Refund Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}