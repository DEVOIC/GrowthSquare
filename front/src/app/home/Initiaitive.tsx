import { Card, CardContent } from '@/components/ui/card'
import { GraduationCap } from 'lucide-react'
import React from 'react'
import gsqlogo from "../../../public/whiteLogo.png";
import Image from 'next/image';


const Initiaitive = () => {
  return (
    <div className='w-screen relative'

    >
      <div className=" ellipse top-right"></div>
      <div className=" ellipse mid-left"></div>

      <section className=" py-20 bg-darkblue">
        <h2 className="container text-3xl font-bold text-white mx-auto px-2 lg:px-4 font-transforma mb-12">
          <p>Experience GrowthSquare's Signature Programs</p>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 px-6 relative z-20">
          {['Square Space', 'Square Plus', 'Square Light', 'Square Champ'].map((square, index) => (
            <Card key={index} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 border-2 border-lightblue shadow-lg ">
              <CardContent className="flex flex-col items-center justify-center h-full">
              {index % 2 === 0 ? <GraduationCap size={40} className=" text-white mb-4" /> :
                <Image
                src={gsqlogo}
                alt="Logo"
                width={65}
                height={45}
                className=" mb-4"
                />
              }
              <h3 className="text-white text-lg font-semibold text-center">{square}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section></div>
  )
}

export default Initiaitive