import { Button } from '@/components/ui/button'
import {  MoveUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (

        
    <section className=" bg-darkblue  pb-10  ">
        <div className=' container mx-auto px-4 py-20 text-center  relative'>
      <div className="ellipse top-right"></div>
      <div className="ellipse bottom-left"></div>

        <h1 className="text-4xl md:text-6xl font-transforma font-semibold text-white mb-6">
        Our Vision, Your <span className="text-blue-400">Growth</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
        We&#39;re a hub for creatives, developers, and dreamers
          <br />who believe in <span className="border-b-4 border-blue-500">growing together</span>
        </p>
        <Button variant={'default'}>
          <p className='text-xl font-bold'>
            let&#39;s grow together
          </p>
          <div>
            <MoveUpRight  className="ml-2 " size={60}  />
            </div>
        </Button>
        <div className='absolute  -bottom-24'>

        
            <Image
            width={60}
            height={10}
            objectFit='contain'
            
            src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=9vuq6HxeSZfhZ7Jit_2HPVLyoajffb7h_SbWssh_bME=" alt="placeholder" />
       
            </div>

            </div>
      </section>
  )
}

export default Hero