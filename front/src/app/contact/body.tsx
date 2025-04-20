"use client"
import React, { useActionState, useEffect, } from 'react'


import Link from "next/link"
import Image from 'next/image'
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from '@/hooks/use-toast'
import { createContact } from './action'

const Body = () => {
  const [state, action, pending] = useActionState(createContact, null);
  const { toast } = useToast()
  useEffect(() => {
    const showstate = () => {
      if (state){

        toast({
          description: state,
        })
      }
    }
    showstate();
  }
    , [pending])
  return (

    <>

      <section className="py-16 px-4 ">
        <div className="max-w-4xl mx-auto text-center mt-28">
          <h1 className="text-5xl  lg:text-7xl z-30 font-transforma font-bold text-white mb-4">
            We&#39;d Love to Hear From <span className="text-lightblue">You</span>
          </h1>
          <p className="text-gray-300 text-sm lg:px-0 px-8 lg:text-xl mt-10 mb-16">
            Got questions? Ideas? We&#39;d love to hear from you—
            <br />
            reach out and let&#39;s get the{" "}

            <span className="relative inline-block"><span className=" ">          conversation started
            </span><span className="absolute left-0 bottom-0 w-full h-[1px] bg-blue-500"></span></span>

          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className=" pb-16 bg-white lg:bg-transparent  lg:px-20 ">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white px-4 lg:px-8 rounded-none lg:shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:space-y-0 gap-28 lg:gap-10 lg:py-16 py-8">

              {/* social media section */}

              <div className="bg-lightblue h-[400px] lg:h-auto lg:w-[40%] my-16 mx-4 lg:m-8 text-white hidden lg:block xl:block md:block">
                <div className="relative  text-center h-[100%] lg:h-[80%]">
                  <div className="absolute inset-0 opacity-30  ">
                    <Image
                      src="https://s3-alpha-sig.figma.com/img/8cd1/5b08/7e0ae7c6261d4858ec6f1442bd293012?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fgvrFnJ228v516wiAueGPQoec4hwoVArIWJJAjMzTa4675I~hf~jFvlS97jGvHIxGkqp97~e918Dgqcd-HrsiKjHjc13NTAD7qTZRrmfZ8QmGTAyWicRXruHAopFXq8Btr39Tx14YKt-rUB5ujJPAy2QckJ2zaBFUVSjym28sjCC0CDJYu9rcIr0AdIgjVwZ009bBB3AeGXs0fl5ZwWBxsKDGbRDEBDy9JmybvEJu5xYJC2BOwanS~onHZfMBL0GpU1K2rifw9~obozYvAeY54HUGT17qIqB8ZSmTBtfzcFRnb04dcZ7zAxkFm9AlQb5nG~linE-vAL~L0s4-1GTQw__"
                      layout="fill"
                      // objectFit="cover"
                      alt="Contact Us"
                      className='object-cover'
                    />
                  </div>
                  <h2 className="relative z-10 text-2xl font-bold py-10 px-6 text-white">
                    Let's Start a Conversation

                  </h2>
                </div>
                <div className='bg-lightblue py-4 lg:py-0 w-full flex justify-center'>
                  <div className="flex space-x-8 bg-darkblue py-4 lg:my-6 justify-center px-10 ">
                    <Link href="https://www.instagram.com/growthsq/" className="hover:text-white">
                      <Instagram className="h-6 w-6" />
                    </Link>
                    <Link href="https://x.com/thegrowthsquare" className="hover:text-white">
                      <Twitter className="h-6 w-6" />
                    </Link>
                    <Link href="https://www.linkedin.com/company/growthsq/" className="hover:text-white">
                      <Linkedin className="h-6 w-6" />
                    </Link>
                    <Link href="contact@growthsq.in" className="hover:text-white">
                      <Mail className="h-6 w-6" />
                    </Link>
                  </div>
                </div>

              </div>

              {/* input fields */}

              <div className="lg:py-16 px-4 lg:w-[50%]">
                <form action={action} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-lg lg:text-sm  font-medium text-lightblue pb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name='name'
                      placeholder="John Doe"
                      className='rounded-none border-2 text-darkblue font-semibold text-md lg:text-xl border-lightblue '
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-lg lg:text-sm  font-medium text-lightblue pb-1">
                      Email ID
                    </label>
                    <Input
                      id="email"
                      type="email"
                      name='email'
                      className='rounded-none border-2 border-lightblue   text-darkblue font-semibold text-md lg:text-xl '
                      placeholder="johndoe@gmail.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="CollegeName" className="block text-lg lg:text-sm  font-medium text-lightblue pb-1">
                      Collage Name
                    </label>
                    <Input
                      id="collegeName"
                      type="text"
                      name='collegeName'
                      className='rounded-none border-2 border-lightblue   text-darkblue font-semibold text-md lg:text-xl '
                      placeholder="Uit"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contactNumber" className="block text-lg lg:text-sm  font-medium text-lightblue pb-1">
                      Contact Number
                    </label>
                    <Input
                      id="contactNumber"
                      type='number'
                      name='contactNumber'
                      className='rounded-none border-2 border-lightblue   text-darkblue font-semibold text-md lg:text-xl '
                      placeholder="9999999999"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="yearOfGraduation" className="block text-lg lg:text-sm  font-medium text-lightblue pb-1">
                      Year of Graduation
                    </label>
                    <select
                      defaultValue={new Date().getFullYear()+1}
                      id="yearOfGraduation"
                      name="yearOfGraduation"
                      className="rounded-none border-2 border-lightblue  font-semibold text-md lg:text-xl w-full p-2"
                      required
                    >
                      <option
                    
                       value="" className='text-gray-400' disabled >Select</option>
                      {Array.from({ length: 4 }, (_, i) => new Date().getFullYear() + i).map(year => (
                        <option key={year} value={year} className='text-darkblue'>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                  <Button type="submit" disabled={pending} className="py-6 bg-lightblue hover:bg-blue-700">
                    {pending ? "Sending.." : "Send"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section></>
  )
}

export default Body
