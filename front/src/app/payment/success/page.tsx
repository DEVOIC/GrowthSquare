import Link from "next/link"
import { Clock, Star, Check } from 'lucide-react'
import Navbar from "@/components/parts/navbar"       //navbar imported from parts folder
import Footer from "@/components/parts/footer"       //footer imported from parts folder
import { Button } from "@/components/ui/button"
import { AvatarFallback, Avatar, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { PanelsTopLeft, StarHalf } from 'lucide-react'

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="ellipse2 top-right mt-28 opacity-50 "></div>
      <div className="ellipse2 -bottom-52 opacity-55"></div>

      {/* Success Message */}
      <div className="max-w-4xl mx-auto md:mt-[170px] px-4 text-center">

        <div className="flex items-center justify-center gap-10">

          <div className="w-[72px] h-[72px] bg-[#00B200] rounded-full flex items-center justify-center ">
            <Check size={48} color="#ffffff" strokeWidth={3} />
          </div>

          <h1 className="text-[2.53rem] font-bold text-[#00B200]">Payment Successful</h1>

        </div>

        <p className="text-[#001233] font-medium  text-xl mt-[60px]">
          Lorem ipsum dolor sit amet sit amet lorem ipsum dolor sit amet sit amet lorem ipsum dolor sit amet
          lorem ipsum dolor sit amet
        </p>
        <div className="mt-20 flex flex-col gap-8 items-center justify-center">

          {/* button for going back to homepage  */}

          <Link href="/home">
            <Button variant={'outline'} className="border-[1px] border-[#015AFF] w-[430px] text-[1.2rem] hover:text-[#015AFF] py-7  text-[#015AFF] font-bold ">
              <p className="">Go To Homepage</p>
            </Button>
          </Link>

          <Link href="/courses">
            <Button variant={'default'} className="text-2xl w-[430px] py-7  font-semibold">
              <p className="">Start Learning</p>
            </Button>
          </Link>

        </div>
      </div>
      <div className="h-[1px]  w-full bg-[#001233] mt-40">

      </div>
      {/* Recommended Courses */}
      <section className="mt-48 px-0 ">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold mb-12">Recommended Courses</h2>

          {/* no-scrollbar is used to hide scrollbar */}

          <div className="grid grid-cols-1 md:mt-[100px] md:grid-cols-3 overflow-x-scroll no-scrollbar  gap-10 w-[110%] ">
            {[1, 2, 3].map((course) => (

              <Card key={course} className="bg-white mb-40 ">
                <CardContent className="p-6 ">
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar>
                      <AvatarImage src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=9vuq6HxeSZfhZ7Jit_2HPVLyoajffb7h_SbWssh_bME=" width={70} className=' object-fill  rounded-full' height={70} alt="Instructor" />
                      <AvatarFallback>MG</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">Martin Goutry</h3>
                      <p className="text-[12px] text-[#B9B9B9]">UI/UX Designer at ABC</p>
                    </div>
                  </div>
                  <h4 className="text-xl text-lightblue font-semibold mb-4">Lorem ipsum dolor sit amet sit amet sit</h4>
                  <p className="text-gray-900 mb-4  text-sm">
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
                  <Button variant={'default'} className="w-full text-white hover:text-darkblue duration-300 text-xl py-8 mb-8">
                    Enroll Now <span className=" opacity-70 line-through ">@1999</span> @499
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className=" bg-darkblue">
        <Footer />
      </div>
    </div>
  )
}