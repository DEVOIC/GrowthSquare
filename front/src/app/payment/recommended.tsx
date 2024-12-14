
import { Clock, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { AvatarFallback, Avatar, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { PanelsTopLeft, StarHalf } from 'lucide-react'

export default function Recommended() {
    return (


        <div className="lg:mt-48 mt-16  px-8 lg:px-20   ">
            {/* Recommended Courses */}
            <div className="">

                <h2 className="text-3xl lg:text-5xl font-bold mb-12 font-transforma">Recommended Courses</h2>

                {/* no-scrollbar is used to hide scrollbar and also width is increased to 110% */}

                <div className="grid grid-cols-1 md:mt-[100px] grid-col-1 md:grid-cols-2 xl:grid-cols-3 lg:gap-10 overflow-x-scroll no-scrollbar ">
                    {[1, 2, 3].map((course) => (

                        <Card key={course} className="bg-white mb-10 lg:mb-40 border-[1px]  ">
                            <CardContent className="p-6 ">
                                <div className="flex items-center space-x-4 mb-4">
                                    <Avatar>
                                        <AvatarImage src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=9vuq6HxeSZfhZ7Jit_2HPVLyoajffb7h_SbWssh_bME=" width={70} className=' object-fill  rounded-full' height={70} alt="Instructor" />
                                        <AvatarFallback>MG</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className=" text-xl text-darkblue font-semibold">Martin Goutry</h3>
                                        <p className="text-[12px] text-[#B9B9B9]">UI/UX Designer at ABC</p>
                                    </div>
                                </div>
                                <h4 className="text-xl text-lightblue font-semibold mb-4">Lorem ipsum dolor sit amet sit amet sit</h4>
                                <p className="text-darkblue mb-4  text-sm">
                                    Lorem ipsum dolor sit amet sit amet lorem ipsum dolor sit amet sit amet
                                </p>
                                <div className='flex justify-between my-8 '>
                                    <div className="flex flex-col gap-2">
                                        <div className='flex space-x-2'>
                                            <Clock fill='#015AFF' color='white' />
                                            <span className='text-sm  font-semibold '>time/dureation</span>
                                        </div>
                                        <div className='flex space-x-2 '>
                                            <PanelsTopLeft fill='#015AFF' color='white' />
                                            <span className='text-sm  font-semibold'>live / recorded videos</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className='flex space-x-2'>
                                            <PanelsTopLeft fill='#015AFF' color='white' />
                                            <span className='text-sm  font-semibold'>live / recorded videos</span>
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
                                    <div className="text-sm font-semibold text-lightblue border border-lightblue py-1 px-4">
                                        UI/UX Design
                                    </div>
                                </div>
                                <Button variant={'default'} className="w-full text-white hover:text-darkblue hover:bg-lightblue/90 duration-300 text-lg py-6 mb-8">
                                    Enroll Now <span className=" opacity-70 line-through ">@1999</span> @499
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>

    )
}