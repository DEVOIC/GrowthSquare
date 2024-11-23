import { AvatarFallback,Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Clock, GraduationCap, PanelsTopLeft, Star, StarHalf } from 'lucide-react'
import React from 'react'

const Courses = () => {
  return (
    <div className='w-screen  bg-white overflow-y-clip relative'>
        <div className="ellipse top-right"></div>
      <div className="ellipse mid-left"></div>

        {/* Logo Marquee */}
    <div className="  py-8">
      <div className="flex justify-between w">
        {[1, 2, 3, 4, 5, 6,7].map((_, index) => (
          <div key={index} className="flex items-center space-x-2">
            <GraduationCap className="h-6 w-6 text-blue-500" />
            <span className="text-xl font-bold text-black">Devoic</span>
          </div>
        ))}
      </div>
    </div>
    <div className='h-[1px] bg-black'></div>

    {/* Course Cards */}
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-darkblue font-transforma mb-12">
        <p>

        Lorem ipsum dolor sit amet,
        </p>

         adipiscing lit courses</h2>
      <div className=" flex  space-x-8  ">
        {[1, 2, 3].map((item) => (
          <Card key={item} className="bg-white w-10/12 ">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Avatar>
                  <AvatarImage src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=9vuq6HxeSZfhZ7Jit_2HPVLyoajffb7h_SbWssh_bME=" width={70}  className=' object-fill  rounded-full' height={70} alt="Instructor" />
                  <AvatarFallback>MG</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">Martin Goutry</h3>
                  <p className="text-sm text-gray-600">Instructor</p>
                </div>
              </div>
              <h4 className="text-xl text-lightblue font-semibold mb-4">Lorem ipsum dolor sit amet sit amet sit</h4>
              <p className="text-gray-900 mb-4  text-sm">
                Lorem ipsum dolor sit amet sit amet lorem ipsum dolor sit amet sit amet
              </p>
              <div className='flex justify-between mb-4'>
                <div>
                    <div className='flex space-x-2'>
                    <Clock fill='#015AFF' color='white' />
                    <span className='text-sm  font-semibold'>time/dureation</span>
                    </div><div className='flex space-x-2'>
                    <PanelsTopLeft  fill='#015AFF' color='white' />
                    <span className='text-sm  font-semibold'>live / recorded</span>
                    </div>
                    
                </div> <div>
                    <div className='flex space-x-2'>
                    <PanelsTopLeft fill='#015AFF' color='white' />
                    <span className='text-sm  font-semibold'>live / recorded</span>
                    </div>
                    <div className='flex space-x-2'>
                    <Clock fill='#015AFF' color='white' />
                    <span className='text-sm  font-semibold'>time/dureation</span>
                    </div>
                </div>
                
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                <Star color='' fill='#DFB300' />
                <Star color='' fill='#DFB300' />
                <Star color='' fill='#DFB300' />
                <Star color='' fill='#DFB300' />
                <StarHalf color='' fill='#DFB300' />

                  <span className="ml-1">4.5</span>
                </div>
                <div className="text-sm font-semibold text-lightblue border border-lightblue py-1 px-4">
                  App Dev
                </div>
              </div>
              <Button variant={'default'} className="w-full text-white">
                Start Learning
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
</div>
  )
}

export default Courses