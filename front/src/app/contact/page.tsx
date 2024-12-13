'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from 'next/image'
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Footer from '@/components/parts/footer'
import Navbar from '@/components/parts/navbar'
import Gsmarque from './gsmarque'
import Faqs from '@/components/parts/faqs'


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
    <div className="min-h-screen bg-darkblue">
      {/* Navigation */}


      <Navbar />

      <div className="ellipse2 top-right"></div>
      <div className="ellipse2 mid-left"></div>

      {/* Hero Section */}
      
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center mt-28">
          <h1 className="text-8xl md:text-5xl z-30 font-bold text-white mb-4">
            We&#39;d Love to Hear From <span className="text-lightblue">You</span>
          </h1>
          <p className="text-gray-300 text-2xl mt-10 mb-16">
            Got questions? Ideas? We&#39;d love to hear from you—
            <br />
            reach out and let&#39;s get the{" "}
            <span className="underline underline-offset-8 decoration-lightblue decoration-8">
              conversation started
            </span>
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-none px-16 shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">

              <div className="bg-lightblue w-[80%] m-8 text-white">
                <div className="relative  text-center h-[80%]">
                  <div className="absolute inset-0 opacity-30">
                    <Image
                      src="https://s3-alpha-sig.figma.com/img/8cd1/5b08/7e0ae7c6261d4858ec6f1442bd293012?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fgvrFnJ228v516wiAueGPQoec4hwoVArIWJJAjMzTa4675I~hf~jFvlS97jGvHIxGkqp97~e918Dgqcd-HrsiKjHjc13NTAD7qTZRrmfZ8QmGTAyWicRXruHAopFXq8Btr39Tx14YKt-rUB5ujJPAy2QckJ2zaBFUVSjym28sjCC0CDJYu9rcIr0AdIgjVwZ009bBB3AeGXs0fl5ZwWBxsKDGbRDEBDy9JmybvEJu5xYJC2BOwanS~onHZfMBL0GpU1K2rifw9~obozYvAeY54HUGT17qIqB8ZSmTBtfzcFRnb04dcZ7zAxkFm9AlQb5nG~linE-vAL~L0s4-1GTQw__"
                      layout="fill"
                      objectFit="cover"
                      alt="Contact Us"
                    />
                  </div>
                  <h2 className="relative z-10 text-2xl font-bold py-10 px-6 text-white">
                    lorem ipsum dolor set amet
                    <span className="text-darkblue"> adipiscing</span>
                  </h2>
                </div>

                <div className="flex space-x-8 bg-darkblue py-4 my-6 justify-center max-w-2xl mx-10">
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

              <div className="py-16 px-4">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-lightblue pb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className='rounded-none border-2 text-darkblue font-semibold text-xl border-lightblue '
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-lightblue pb-1">
                      Email ID
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      className='rounded-none border-2 border-lightblue   text-darkblue font-semibold text-xl '
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="johndoe@gmail.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-lightblue pb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi! 👋"
                      className="min-h-[150px] rounded-none border-2 border-lightblue  text-darkblue font-semibold text-xl "
                      required
                    />
                  </div>
                  <Button type="submit" className="py-6 bg-lightblue hover:bg-blue-700">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* gsmarque  */}
      <div>
        <Gsmarque />
      </div>

      {/* FAQ Section */}


      <Faqs />
      {/* Footer */}

      <div className='bg-darkblue'>
        <Footer />
      </div>

    </div>
  )
}