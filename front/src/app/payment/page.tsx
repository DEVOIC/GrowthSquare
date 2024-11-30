'use client'

import { useEffect, useState } from 'react'
import { Check, ChevronRight } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import Navbar from '@/components/parts/navbar'
import Footer from '@/components/parts/footer'
import Recommended from '@/components/parts/recommended'
import { Confirmationsummary } from '@/components/ui/confirmationsummary'
import { CheckMark, PendingMark } from '@/components/ui/checkmark'

export default function PaymentPage() {
  const [step, setStep] = useState(1)
  const [selectedCourse, setSelectedCourse] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('card')


  // Payment Methods
  const paymentMethods = [
    { value: "wallet", label: "Wallets (Paytm, Google Pay, etc.)" },
    { value: "card", label: "Credit/Debit Card (Visa, Mastercard, etc.)" },
    { value: "upi", label: "UPI" },
    { value: "netbanking", label: "Net Banking" }
  ]

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
              <div className='flex gap-8 justify-center'>
                {step > 1 ?

                  //mark checked symbol
                  <CheckMark className='mt-2' >
                    <Check size={48} color="#ffffff" strokeWidth={3} />
                  </CheckMark>
                  :
                  //mark pending symbol
                  <PendingMark className='mt-2'>
                    <div className='rounded-full bg-lightblue w-[10px] h-[10px]'></div>
                  </PendingMark>
                }

                <div className=" w-full flex items-center text-xl text-darkblue  border-[1px] border-lightblue px-10 bg-white z-10 relative py-4 ">
                  <span className=" font-semibold">1. Select Course</span>
                  <div className="ml-auto w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    <ChevronRight />
                  </div>
                </div>
              </div>

              <div className='flex gap-8 items-center justify-center'>
                <div className="w-[40px] invisible h-[40px] bg-[#00B200] rounded-full flex items-center justify-center p-2 ">
                  <Check size={48} color="#ffffff" strokeWidth={3} />
                </div>

                {step === 1 ? (
                  <div className=" w-full flex items-center text-xl text-darkblue  border-[1px] border-lightblue px-10 bg-white z-10 relative py-4 ">
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

                  </div>
                )
                  :
                  <div className='hidden'></div>
                }
              </div>
            </div>

            {/* Step 2: Payment Method */}

            <div>
              <div className='flex gap-8 mb-8'>
                {step > 1 ? (
                  // Mark checked symbol
                  <CheckMark className='mt-2'>
                    <Check size={48} color="#ffffff" strokeWidth={3} />
                  </CheckMark>
                ) : (
                  // Mark pending symbol
                  <PendingMark className='mt-2'>
                    <div className='rounded-full bg-lightblue w-[10px] h-[10px]' />
                  </PendingMark>
                )}

                <div className="w-full flex flex-col text-xl text-darkblue border-[1px] border-lightblue px-10 bg-white z-10 relative py-4">
                  <div className='flex items-center justify-between'>
                    <span className="font-semibold">2. Select Payment Method</span>
                    <div className="ml-auto w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
                      <ChevronRight />
                    </div>
                  </div>

                  {step === 2 && (
                    <div className="mt-8 space-y-4">
                      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                        {/* Mapping through the payment methods array */}
                        {paymentMethods.map((payment) => (
                          <div key={payment.value} className="flex items-center space-x-4 mb-4">
                            <RadioGroupItem value={payment.value} id={payment.value} />
                            <Label htmlFor={payment.value} className="text-lg text-darkblue">{payment.label}</Label>
                          </div>
                        ))}

                        {/* Conditionally rendering card payment details */}
                        {paymentMethod === "card" && (
                          <div className="py-4 mb-8 px-8 space-y-8 border-[1px] border-lightblue">
                            <div className='flex gap-4 w-full'>
                              <Label htmlFor="cardNumber" className="text-lg w-[70%] font-medium">Card Number</Label>
                              <Input id="cardNumber" placeholder="1234 - 5678 - 9012 - 3456" className="border-[2px] border-lightblue  rounded-none  pl-4 font-semibold" />
                            </div>
                            <div className='flex gap-4 w-full'>
                              <Label htmlFor="cardName" className="text-lg w-[70%] font-medium">Card Holder Name</Label>
                              <Input id="cardName" placeholder="John Doe" className="border-[2px] border-lightblue  rounded-none  pl-4  font-semibold" />
                            </div>

                            <div className='flex gap-4 w-full'>
                              <Label htmlFor="expiry" className="text-lg w-[70%] font-medium">Expiry Date</Label>
                              <Input id="expiry" placeholder="MM/YY" className="border-[2px] border-lightblue  rounded-none  pl-4  font-semibold" />
                            </div>
                            <div className='flex gap-4 w-full'>
                              <Label htmlFor="cvv" className="text-lg w-[70%] font-medium">CVV Number</Label>
                              <Input id="cvv" placeholder="123" className="border-[2px] border-lightblue  rounded-none  pl-4  font-semibold" />
                            </div>


                            {/* Save & Continue Button using custom Button component */}
                            <div className="">
                              <Button
                                variant="default"  // You can change this based on your design preference
                                size="default"     // You can choose the button size as well (e.g., 'sm', 'lg')
                                className="w-full mt-4"
                              >
                                Save & Continue
                              </Button>
                            </div>
                          </div>

                        )}
                      </RadioGroup>
                    </div>
                  )}
                </div>
              </div>
            </div>


            {/* Step 3: Confirmation */}
            <div>
              <div className='flex gap-8'>
                {step > 1 ?
                  //mark checked symbol
                  <CheckMark className='mt-2' >
                    <Check size={48} color="#ffffff" strokeWidth={3} />
                  </CheckMark>
                  :
                  //mark pending symbol
                  <PendingMark className='mt-2'>
                    <div className='rounded-full bg-lightblue w-[10px] h-[10px]'></div>
                  </PendingMark>
                }

                <div className=" w-full flex flex-col text-xl text-darkblue  border-[1px] border-lightblue px-10 bg-white z-10 relative py-4 ">
                  <div className='flex items-center justify-between'>
                    <span className="font-semibold">3. Confirmation</span>
                    <div className="ml-auto w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
                      <ChevronRight />
                    </div>
                  </div>
                  {step > 1 && (
                    <div className="mt-8 space-y-4">
                      <div className="flex items-center gap-4">
                        <Checkbox
                          id="terms"
                          className="appearance-none h-4 w-4 border-2  bg-white checked:border-0 checked:z-10  checked:content-['✔']  flex items-center justify-center"
                        />
                        <label htmlFor="terms" className="text-sm">
                          I agree to the Terms & Conditions and Refund Policy
                        </label>
                      </div>
                      <div className='flex  items-center gap-4 pb-4'>
                        <div className="w-[20px] h-[20px] bg-[#00B200] rounded-full flex items-center justify-center">
                          <Check size={12} color="#ffffff" strokeWidth={4} />
                        </div>
                        <p className='text-lg'>Your payment is 100% secured with ABC encryption
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary side bar in large and medium screens */}

          <Confirmationsummary />
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




