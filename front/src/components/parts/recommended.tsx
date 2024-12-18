
import { Clock, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { AvatarFallback, Avatar, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { PanelsTopLeft, StarHalf } from 'lucide-react'
import Loading from '@/app/loading'
import Link from 'next/link'

export default async function Recommended() {

    const data = await fetch(`${process.env.NEXT_PUBLIC_BACK_API}:${process.env.NEXT_PUBLIC_PORT}/${process.env.NEXT_PUBLIC_ROUTE}/auth/course/get-all-courses`)
    if (data.status !== 200) {
        return (<Loading />)
    }
    const rawData = await data.json()
    const courses: Course[] = await rawData.data.courses

    return (
        <div className="mt-48 px-20   ">
            {/* Recommended Courses */}
            <div className="">

                <h2 className="text-5xl font-bold mb-12 font-transforma">Recommended Courses</h2>

                {/* no-scrollbar is used to hide scrollbar and also width is increased to 110% */}

                <div className="grid  md:mt-[100px] lg:grid-cols-2 xl:grid-cols-3 gap-10 overflow-x-scroll no-scrollbar ">
                    {courses.map((data) => (

                        <Card key={data._id} className="bg-white  ">
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
                                <div className="flex items-center justify-between mb-8">
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
                                    <Button variant={'default'} className="w-full text-white hover:text-darkblue duration-300 text-xl py-4 mb-6">
                                        Enroll Now <span className=" opacity-70 line-through ">@1999</span> {data.coursePrice}
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>

    )
}

// import { Clock, Star } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { AvatarFallback, Avatar, AvatarImage } from '@/components/ui/avatar'
// import { Card, CardContent } from '@/components/ui/card'
// import { PanelsTopLeft, StarHalf } from 'lucide-react'
// import Loading from '@/app/loading'

// export default async function Recommended() {

//     const data = await fetch(`${process.env.NEXT_PUBLIC_BACK_API}:${process.env.NEXT_PUBLIC_PORT}/${process.env.NEXT_PUBLIC_ROUTE}/auth/course/get-all-courses`)
//       if (data.status !== 200) {
//         return (<Loading />)
//       }
//       const rawData = await data.json()
//       const courses: Course[] = await rawData.data.courses

//     return (
//         <div className="mt-48 px-20   ">
//             {/* Recommended Courses */}
//             <div className="">

//                 <h2 className="text-5xl font-bold mb-12 font-transforma">Recommended Courses</h2>

//                 {/* no-scrollbar is used to hide scrollbar and also width is increased to 110% */}

//                 <div className="grid grid-cols-1 md:mt-[100px] grid-col-1 md:grid-cols-3 gap-10 overflow-x-scroll no-scrollbar ">
//                     {courses.map((course) => (

//                         <Card key={course._id} className="bg-white mb-40 ">
//                             <CardContent className="p-6 ">
//                                 <div className="flex items-center space-x-4 mb-4">
//                                     <Avatar>
//                                         <AvatarImage src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=9vuq6HxeSZfhZ7Jit_2HPVLyoajffb7h_SbWssh_bME=" width={70} className=' object-fill  rounded-full' height={70} alt="Instructor" />
//                                         <AvatarFallback>MG</AvatarFallback>
//                                     </Avatar>
//                                     <div>
//                                         <h3 className="font-semibold"> {course.instructors} </h3>
//                                         <p className="text-[12px] text-[#B9B9B9]">UI/UX Designer at ABC</p>
//                                     </div>
//                                 </div>
//                                 <h4 className="text-xl text-lightblue font-semibold mb-4">{course.courseName}</h4>
//                                 <p className="text-gray-900 mb-4  text-sm">
//                                     {course.courseDescription}
//                                 </p>
//                                 <div className='flex justify-between my-8 '>
//                                     <div className="flex flex-col gap-2">
//                                         <div className='flex space-x-2'>
//                                             <Clock fill='#015AFF' color='white' />
//                                             <span className='text-sm  font-semibold'> {course.courseDuration} {" "} {course.durationUnit}</span>
//                                         </div>
//                                         <div className='flex space-x-2 '>
//                                             <PanelsTopLeft fill='#015AFF' color='white' />
//                                             <span className='text-sm  font-semibold'>live / recorded videos</span>
//                                         </div>
//                                     </div>
//                                     <div className="flex flex-col gap-2">
//                                         <div className='flex space-x-2'>
//                                             <PanelsTopLeft fill='#015AFF' color='white' />
//                                             <span className='text-sm  font-semibold'>live / recorded videos</span>
//                                         </div>
//                                         <div className='flex space-x-2'>
//                                             <Clock fill='#015AFF' color='white' />
//                                             <span className='text-sm  font-semibold'>time/dureation</span>
//                                         </div>
//                                     </div>

//                                 </div>
//                                 <div className="flex items-center justify-between mb-8">
//                                     <div className="flex items-center">
//                                         <Star color='' fill='#DFB300' />
//                                         <Star color='' fill='#DFB300' />
//                                         <Star color='' fill='#DFB300' />
//                                         <Star color='' fill='#DFB300' />
//                                         <StarHalf color='' fill='#DFB300' />

//                                         <span className="ml-1">4.5</span>
//                                     </div>
//                                     <div className="text-sm font-semibold text-lightblue border border-lightblue py-1 px-4">
//                                        {course.courseName}
//                                     </div>
//                                 </div>
// <Button variant={'default'} className="w-full text-white hover:text-darkblue duration-300 text-xl py-8 mb-8">
//     Enroll Now <span className=" opacity-70 line-through ">@1999</span> @499
// </Button>
//                             </CardContent>
//                         </Card>
//                     ))}
//                 </div>
//             </div>
//         </div>

//     )
// }