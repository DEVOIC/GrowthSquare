// import Shortimg from '@/components/parts/shortimg'
import { Button } from '@/components/ui/button'
import { MoveUpRight } from 'lucide-react'
// import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (

    <section className=" h-full bg-darkblue  pb-10  ">
      <div className=' container mx-auto px-4 py-10 lg:py-20 text-center  relative'>
        <div className="ellipse top-right"></div>
        <div className="ellipse bottom-left"></div>

        <h1 className=" lg:text-6xl text-3xl md:text-4xl font-transforma font-semibold text-white mb-6">
          Unlock Your <span className="text-blue-500">Potential</span> with a Community
          <br />
          That&#39;s Got Your <span className="border-b-4 border-blue-500">Back</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Collaborate, innovate, and level up with experts in design,
          development, content, and more
        </p>
        <Link href="/contact">
        <Button variant={'default'}>
          <p className='text-xl font-bold'>
            let&#39;s grow together
          </p>
          <div>
            <MoveUpRight className="ml-2 " size={60} />
          </div>
        </Button>
        </Link>
        {/* <div className='hidden lg:inline-block  absolute left-12 bottom-36'>

          <Shortimg >
            <Image
              width={80}
              height={80}
              src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=9vuq6HxeSZfhZ7Jit_2HPVLyoajffb7h_SbWssh_bME=" alt="placeholder" />
          </Shortimg>
        </div>

        <div className='hidden lg:inline-block absolute right-12 bottom-36'>

          <Shortimg>
            <Image
              width={80}
              height={80}
              src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=9vuq6HxeSZfhZ7Jit_2HPVLyoajffb7h_SbWssh_bME=" alt="placeholder" />
          </Shortimg>
        </div>
        <div className='hidden lg:inline-block absolute left-56 '>

          <Shortimg>
            <Image
              width={80}
              height={80}
              src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=9vuq6HxeSZfhZ7Jit_2HPVLyoajffb7h_SbWssh_bME=" alt="placeholder" />
          </Shortimg>
        </div> <div className='hidden lg:inline-block absolute right-56 '>

          <Shortimg>
            <Image
              width={80}
              height={80}
              src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=9vuq6HxeSZfhZ7Jit_2HPVLyoajffb7h_SbWssh_bME=" alt="placeholder" />
          </Shortimg>
        </div>
         */}
         </div>
        
    </section>
  )
}

export default Hero