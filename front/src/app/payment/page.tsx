'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Check, ChevronRight, Clock, Star, Instagram, Twitter, Linkedin, Mail } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export default function PaymentPage() {
  const [step, setStep] = useState(1)
  const [selectedCourse, setSelectedCourse] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('card')
console.log(selectedCourse);
useEffect(() => {
    if (selectedCourse) setStep(2)
    }
    ,[selectedCourse])
    
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Image src="/placeholder.svg" alt="Devoic Logo" width={32} height={32} />
                <span className="ml-2 text-2xl font-bold text-blue-600">Devoic</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link href="/explore" className="border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Explore
                </Link>
                <Link href="/about" className="border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  About
                </Link>
                <Link href="/courses" className="border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Courses
                </Link>
                <Link href="/blog" className="border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Blog
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <Button variant="ghost" className="flex items-center">
                <Image src="/placeholder.svg" alt="Profile" width={32} height={32} className="rounded-full" />
                <span className="ml-2">Name</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Steps */}
          <div className="lg:col-span-2">
            <h1 className="text-2xl font-bold mb-8">Lorem ipsum</h1>

            {/* Step 1: Course Selection */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  {step > 1 ? <Check className="w-5 h-5" /> : '1'}
                </div>
                <span className="ml-3 font-medium">Select Course</span>
                <ChevronRight className="ml-auto w-5 h-5 text-gray-400" />
              </div>
              {step === 1 && (
                <div className="space-y-4">
                  {[1, 2].map((course) => (
                    <div
                      key={course}
                      className="border rounded-lg p-4 cursor-pointer hover:border-blue-500"
                      onClick={() => setSelectedCourse(`course-${course}`)}
                    >
                      <h3 className="font-medium mb-2">Lorem ipsum dolor sit amet sit amet sit dolor</h3>
                      <p className="text-sm text-gray-500">
                        Lorem ipsum dolor sit amet sit amet lorem ipsum dolor sit amet sit amet lorem ipsum dolor
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Step 2: Payment Method */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  {step > 2 ? <Check className="w-5 h-5" /> : '2'}
                </div>
                <span className="ml-3 font-medium">Select Payment Method</span>
                <ChevronRight className="ml-auto w-5 h-5 text-gray-400" />
              </div>
              {step === 2 && (
                <div className="space-y-4">
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="wallet" id="wallet" />
                      <Label htmlFor="wallet">Wallets (Paytm, Google Pay, etc.)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card">Credit/Debit Card (Visa, Mastercard, etc.)</Label>
                    </div>
                    {paymentMethod === 'card' && (
                      <div className="mt-4 space-y-4">
                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                        </div>
                        <div>
                          <Label htmlFor="cardName">Card Holder Name</Label>
                          <Input id="cardName" placeholder="John Doe" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV Number</Label>
                            <Input id="cvv" placeholder="123" />
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="upi" id="upi" />
                      <Label htmlFor="upi">UPI</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="netbanking" id="netbanking" />
                      <Label htmlFor="netbanking">Net Banking</Label>
                    </div>
                  </RadioGroup>
                </div>
              )}
            </div>

            {/* Step 3: Confirmation */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  {step > 3 ? <Check className="w-5 h-5" /> : '3'}
                </div>
                <span className="ml-3 font-medium">Confirmation</span>
                <ChevronRight className="ml-auto w-5 h-5 text-gray-400" />
              </div>
              {step === 3 && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label htmlFor="terms" className="text-sm">
                      I agree to the Terms & Conditions and Refund Policy
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="secure" />
                    <label htmlFor="secure" className="text-sm">
                      Your payment is 100% secured with ABC encryption
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-bold mb-4">ORDER SUMMARY - #07111124</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Lorem ipsum dolor sit amet sit amet sit dolor</h3>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet sit amet lorem ipsum dolor sit amet sit amet lorem ipsum dolor
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <span>Course Price</span>
                  <span>₹999</span>
                </div>
                <div>
                  <Label htmlFor="coupon">Apply Coupon</Label>
                  <div className="flex gap-2">
                    <Input id="coupon" placeholder="Enter coupon code" />
                    <Button>Apply</Button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Est. Tax 5%</span>
                  <span>₹50</span>
                </div>
                <div className="flex justify-between items-center font-bold">
                  <span>Total Amount</span>
                  <span>₹1049</span>
                </div>
                <div className="text-center text-sm text-gray-500">
                  Sunday
                  <br />
                  10 November 2024 | 4:00 pm
                </div>
                <Button className="w-full" size="lg">
                  Purchase Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Courses */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Recommended Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((course) => (
              <div key={course} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src="/placeholder.svg"
                      alt="Instructor"
                      width={40}
                      height={40}
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
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-500">Time duration</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-500">4.5</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-sm line-through text-gray-400">@1999</span>
                      <span className="ml-2 font-medium">@499</span>
                    </div>
                    <Button variant="outline">Enroll Now</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Let&#39;s work together</h2>
              <div className="grid grid-cols-2 gap-8">
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
              </div>
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
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400 mb-4 md:mb-0">©2024 Copyright - All Rights Reserved</p>
              <div className="flex space-x-4">
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
            <div className="mt-4 flex flex-col md:flex-row justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-4">
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white">Terms & Conditions</Link>
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link>
              <Link href="/refund" className="text-sm text-gray-400 hover:text-white">Refund Policy</Link>
            </div>
          </div>
        </div>
            
        </footer>
        </div>
        )
        }