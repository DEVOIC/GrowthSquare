'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react'

const Form = () => {
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
    <div> <section className="px-4 mb-2">
    <div className="max-w-4xl mx-auto">
      <div className="bg-white  shadow-xl p-8 overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="bg-lightblue  text-white">
            <h2 className="text-2xl font-bold ">lorem ipsum dolor set amet adipiscing</h2>
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
              <Button type="submit" className="w-full bg-lightblue hover:bg-blue-700">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Form