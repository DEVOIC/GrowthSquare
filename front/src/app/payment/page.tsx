'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Check, ChevronRight, SquareCheckBig, Clock, Star, Instagram, Twitter, Linkedin, Mail } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Navbar from '@/components/parts/navbar'
import Footer from '@/components/parts/footer'
import Recommended from '@/components/parts/recommended'
import { log } from 'console'

export default function PaymentPage() {
  const [step, setStep] = useState(1)
  const [selectedCourse, setSelectedCourse] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('card')

  console.log(selectedCourse);

  useEffect(() => {
    if (selectedCourse) setStep(2)
  }
    , [selectedCourse])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}

      <div className="px-4 sm:px-6 lg:px-8 py-12 bg-white">

        {/* Ellipses */}
        <div className="ellipse2 top-right -mr-4 opacity-50  "></div>
        <div className="ellipse2 bottom-left -mb-32 opacity-55"></div>

        <div className="flex justify-between px-12 gap-8">

          {/* Payment Steps */}

          <div className=" md:w-[700px] mt-16 ml-8">
            <h1 className="text-4xl text-darkblue font-bold mb-8">Lorem ipsum</h1>

            {/* Step 1: Course Selection */}

            <div className="mb-8 flex flex-col gap-8">
              <div className='flex gap-8 items-center justify-center'>
                { step > 1 ?
                  <div className="w-[40px] h-[40px] bg-[#00B200] rounded-full flex items-center justify-center p-2 ">
                  <Check size={48} color="#ffffff" strokeWidth={3} />
                </div>
                :
                <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center p-2 border-4 border-lightblue ">
                  <div className='rounded-full bg-lightblue w-[10px] h-[10px]'></div>
                </div>
                }
                
                <div className=" w-full flex items-center text-xl text-darkblue  border-[1px] border-lightblue px-10 bg-white z-10 relative py-4 ">

                  {/* {step > 1 ? <Check className="w-5 h-5" /> : '1'} */}

                  <span className="ml-3 font-semibold">1. Select Course</span>
                  <div className="ml-auto w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    <ChevronRight />
                  </div>
                </div>
              </div>
              <div className='flex gap-8 items-center justify-center'>
                <div className="w-[40px] invisible h-[40px] bg-[#00B200] rounded-full flex items-center justify-center p-2 ">
                  <Check size={48} color="#ffffff" strokeWidth={3} />
                </div>

                <div className=" w-full flex items-center text-xl text-darkblue  border-[1px] border-lightblue px-10 bg-white z-10 relative py-4 ">

                  {step === 1 && (
                    <div className="mt-4 space-y-6">
                      {[1, 2].map((course) => (
                        <div
                          key={course}
                          className=" flex gap-4 p-6  hover:border-blue-500 hover:shadow-md transition-all"
                        >
                          {/* course details here */}
                          <div>
                            <h3 className="text-xl font-semibold text-darkblue mb-3">
                              Course {course}: Lorem ipsum dolor sit amet
                            </h3>
                            <p className="text-sm text-gray-600">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at eros vitae augue ultrices sollicitudin.
                            </p>
                          </div>

                          {/* select course radio button */}
                          <input type="radio" className='scale-150 cursor-pointer border-lightblue fill-black'
                            checked={selectedCourse === `course-${course}`}
                            onChange={() => setSelectedCourse(`course-${course}`)} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
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
              <div className="flex items-center mb-4 ">
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

          {/* Order Summary side bar in large and medium screens */}

          <div className="lg:col-span-1 mt-6">
            <div className="bg-white  border-[1px] border-lightblue md:w-[550px] z-10 relative">
              <div>
                <h2 className="text-md pl-10 font-bold  text-darkblue py-6">ORDER SUMMARY - #07111124</h2>
              </div>

              {/* order details  */}

              <div className='border-t-[1px] border-lightblue px-10'>

                <div className='mt-8 flex gap-20 items-center text-xl font-semibold text-lightblue'>
                  <h3 className=" mb-2">Lorem ipsum dolor sit amet sit amet sit dolor</h3>
                  <span>₹999</span>
                </div>

                {/* course description */}

                <div className="mt-2  flex justify-between items-center">
                  <p className="text-sm text-darkblue">
                    Lorem ipsum dolor sit amet sit amet lorem ipsum dolor sit amet sit amet lorem ipsum dolor sit amet sit amet lorem ipsum dolor sit
                  </p>
                </div>
                <div className='flex flex-wrap gap-4 mt-6 mb-12'>
                  {
                    [1, 2, 3, 4].map((item) => (
                      <div key={item} className=" flex gap-4 items-center text-darkblue ">
                        <SquareCheckBig size={15} strokeWidth={2} className='text-[#00B200]' />
                        <span className='text-darkblue text-sm' >Lorem ipsum dolor sit</span>
                      </div>
                    ))
                  }

                </div>
              </div>

              <div className="border-t-[1px] border-lightblue px-10 py-4">
                <div className='flex justify-between'>
                  <label
                    htmlFor="coupon"
                    className="text-md font-semibold"
                  >
                    Apply Coupon
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      id="coupon"
                      type="text"
                      placeholder="Enter coupon code"
                      className="w-full border-[2px] border-lightblue px-4 py-2 text-darkblue text-sm focus:outline-none focus:ring-1 focus:ring-lightblue"
                    />
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center text-darkblue">
                  <span className="text-md font-semibold">Est. Tax 5%</span>
                  <span className="text-xl font-semibold text-lightblue">₹50</span>
                </div>
                <div className="mt-6 flex justify-between items-center text-darkblue font-bold">
                  <span className="text-md font-semibold">Total Amount</span>
                  <span className="text-xl font-semibold text-lightblue">₹1049</span>
                </div>
              </div>

              <div className="text-center text-sm mt-4 py-5 text-gray-500 border-t-[1px] border-lightblue">
                <span className='text-darkblue text-lg font-semibold'>

                  {new Date().toLocaleDateString('en-US', { weekday: 'long' })}

                </span>
                <br />
                <span className='text-darkblue font-medium'> {Date().slice(3, 16)} | {new Date().getHours()} : {new Date().getMinutes()} </span>


              </div>
              {/* <Button className="w-full" size="lg">
                  Purchase Now
                </Button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Courses imported form components/parts  */}
      <div className="h-[1px]  w-full bg-[#001233] mt-40">

      </div>
      <Recommended />

      {/* Footer is imported from components/parts */}

      <div className=" bg-darkblue">
        <Footer />
      </div>

    </div>
  )
}