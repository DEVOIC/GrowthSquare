import Image from 'next/image'
import React from 'react'
// import image from '../courses/mentor.jpg';
import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';
import Loading from '../loading';

const Founding = async() => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BACK_API}:${process.env.NEXT_PUBLIC_PORT}/${process.env.NEXT_PUBLIC_ROUTE}/auth/get-team-data`)
  if(data.status !==200){
    return (<Loading/>)
  }
  
  const memeber:teams[] = await data.json()
  return (

        <section className="bg-white py-12 px-4 relative">
           <div className="ellipse top-right"></div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-lightblue mb-8">The Brains Behind the Mission</h2>
          <p className="text-xl mb-12">
            Meet the trailblazers who set the foundation and continue to guide our community
            towards growth and innovation
          </p>
          <div className="flex space-x-4 animate-marquee">
            {memeber.map((member) => (
              
              <div key={member.name} className=" relative group transform transition-transform duration-300 hover:scale-110">
                <Link href={member.social}>

                <Image
                  src={member.image}
                  alt="Team member"
                  width={240}
                  height={320}
                  className=""
                />
                <div className="absolute bottom-8 left-0  px-8 opacity-0 group-hover:opacity-100 bg-black/50 text-white p-2 ">
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-sm">{member.role}</p>
                </div>
                <div className='w-10 h-10 absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 bg-darkblue border-2'>
                <MoveUpRight className="mt-2 " color='white' size={30} />
                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

  )
}

export default Founding