import { Button } from '@/components/ui/button'
import {  MoveUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (

        
    <section className=" bg-darkblue  ">
        <div className=' container mx-auto px-4 py-20 text-center  relative'>
      <div className="ellipse top-right"></div>
      <div className="ellipse bottom-left"></div>

        <h1 className="text-4xl md:text-6xl font-transforma font-semibold text-white mb-6">
        We&#39;d Love to Hean form<span className="text-blue-400">You</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        Got questions? Ideas? We&#39;d love to hear from you—
          <br />reach out and let&#39;s get the <span className="border-b-4 border-blue-500">conversation started</span>
        </p>
        </div>
        
      </section>
  )
}

export default Hero