'use client'

import { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <Image src="/placeholder.svg" alt="Devoic Logo" width={32} height={32} className="mr-2" />
          <span className="text-2xl font-bold text-white">Devoic</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/explore" className="text-gray-300 hover:text-white">Explore</Link>
          <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link href="/courses" className="text-gray-300 hover:text-white">Courses</Link>
          <Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link>
        </div>
        <div className="flex space-x-4">
          <Button className="bg-blue-600 hover:bg-blue-700">Become A Member</Button>
          <Button variant="outline" className="text-white border-white hover:bg-white/10">
            Login
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            We&#39;d Love to Hear From <span className="text-blue-400">You</span>
          </h1>
          <p className="text-gray-300 mb-2">
            Got questions? Ideas? We&#39;d love to hear from you—
            reach out and let&#39;s get the <span className="underline decoration-blue-400">conversation started</span>
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-blue-600 p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">lorem ipsum dolor set amet adipiscing</h2>
                <Image
                  src="/placeholder.svg"
                  alt="Contact illustration"
                  width={400}
                  height={300}
                  className="rounded-lg mb-6"
                />
                <div className="flex space-x-4">
                  <Link href="#" className="hover:text-blue-200">
                    <Instagram className="w-6 h-6" />
                  </Link>
                  <Link href="#" className="hover:text-blue-200">
                    <Twitter className="w-6 h-6" />
                  </Link>
                  <Link href="#" className="hover:text-blue-200">
                    <Linkedin className="w-6 h-6" />
                  </Link>
                  <Link href="#" className="hover:text-blue-200">
                    <Mail className="w-6 h-6" />
                  </Link>
                </div>
              </div>
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value})}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email ID
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="johndoe@gmail.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Hi! 👋"
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            Lorem ipsum dolor sit amet consectetur lit FAQs
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              "What is Webflow and why is it the best website builder?",
              "What is your favorite template from BRIX Templates?",
              "How do you clone a Webflow Template from the Showcase?",
              "Why is BRIX Templates the best Webflow agency out there?",
              "Why is BRIX Templates the best Webflow agency out there?",
            ].map((question, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-blue-600/20 rounded-lg border-none"
              >
                <AccordionTrigger className="px-6 py-4 text-white hover:no-underline">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-8 md:mb-0">Let&#39;s work together</h2>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-medium text-white mb-4">Explore</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white mb-4">Courses</h3>
              <ul className="space-y-2">
                <li><Link href="/courses/ui-ux" className="text-gray-400 hover:text-white">UI/UX Design</Link></li>
                <li><Link href="/courses/web-dev" className="text-gray-400 hover:text-white">Web Dev</Link></li>
                <li><Link href="/courses/app-dev" className="text-gray-400 hover:text-white">App Dev</Link></li>
                <li><Link href="/courses/video" className="text-gray-400 hover:text-white">Video Editing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white mb-4">FAQs</h3>
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
  )
}