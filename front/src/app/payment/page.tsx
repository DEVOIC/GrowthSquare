'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/parts/navbar'
import Footer from '@/components/parts/footer'
import Recommended from './recommended'
import { Confirmationsummary } from '@/app/payment/confirmationsummary'
import { Courseselection } from './courseselection'
import { Acknowledgement } from './acknowledgement'
import { Method } from './method'

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

    <div className="min-h-screen bg-white relative overflow-x-hidden">

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}

      <div className="px-4 sm:px-6 lg:px-8 py-12 bg-white">

        {/* Ellipses */}
        <div className="ellipse2 top-right -mr-4 opacity-50  "></div>
        <div className="ellipse2 bottom-left -mb-56 opacity-55"></div>

        <div className="flex xl:flex-row flex-col justify-between px-2 lg:px-12 gap-8">
          {/* Payment Steps */}
          <div className=" md:w-[700px] mt-16 lg:ml-8">
            <h1 className="text-4xl text-darkblue font-bold font-transforma mb-8">Lorem ipsum</h1>

            {/* Step 1: Course Selection */}

            <Courseselection step={step}  selectedCourse={selectedCourse} setSelectedCourse={setSelectedCourse} />


            {/* Step 2: Payment Method */}

            <Method step={step}  paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} paymentMethods={paymentMethods} />

            {/* Step 3: Confirmation */}
            <Acknowledgement step={step} />
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




