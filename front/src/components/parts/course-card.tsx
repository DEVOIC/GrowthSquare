import React from 'react'
import { AvatarFallback, Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Clock, PanelsTopLeft, Star, StarHalf } from 'lucide-react'
import Link from 'next/link'

const CourseCard = ({ data }: { data: Course }) => {
  
  return (
    <>
    <Card className="bg-white  ">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <Avatar>
            <AvatarImage src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=9vuq6HxeSZfhZ7Jit_2HPVLyoajffb7h_SbWssh_bME=" width={70} className=' object-fill  rounded-full' height={70} alt="Instructor" />
            <AvatarFallback>MG</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{data.instructors}</h3>
            <p className="text-sm text-gray-600">Instructor</p>
          </div>
        </div>
        <h4 className="text-xl text-lightblue font-semibold mb-4">{data.courseName}</h4>
        <p className="text-gray-900 mb-4  py-4 text-sm">
          {data.courseDescription}
        </p>
        <div className='flex justify-between mb-4'>
          <div>
            <div className='flex space-x-2'>
              <Clock fill='#015AFF' color='white' />
              <span className='text-sm  font-semibold'> {data.courseDuration} {" "} {data.durationUnit}</span>
              {/* <span className='text-sm  font-semibold'>time/duration</span> */}
            </div><div className='flex space-x-2'>
              <PanelsTopLeft fill='#015AFF' color='white' />
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
          <div>
            {/* {data.courseTags.map((tag, index) => (


              <div key={index} className="text-sm font-semibold text-lightblue border border-lightblue py-1 px-4">
                {tag}
              </div>

            ))} */}

            <div className="text-[10px] font-semibold text-lightblue border border-lightblue py-1 px-4">
              {data.courseName}
            </div>

          </div>
        </div>
        <Link href={`/courses/${data._id}`} >
        {/* <Link href={`/courses/${data._id}`} > */}
          <Button variant={'default'} className="w-full hover:bg-lightblue/80 text-white">
            Start Learning
          </Button>
        </Link>
      </CardContent>
    </Card></>
  )
}

export default CourseCard