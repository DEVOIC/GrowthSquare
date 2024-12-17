import { MoveUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import image from '../courses/mentor.jpg';
import Loading from '../loading';

const Inovators = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BACK_API}:${process.env.NEXT_PUBLIC_PORT}/${process.env.NEXT_PUBLIC_ROUTE}/auth/team/get-team-data`)
  if (data.status !== 200) {
    return (<Loading />)
  }

  const result = await data.json()
  const memeber: teams[] = result.data.team
  const part1 = memeber.filter((member, index) => index % 2 === 0)
  const part2 = memeber.filter((member, index) => index % 2 !== 0)
  return (
    <section className="bg-white py-20 px-4 relative">
      <div className="ellipse top-left"></div>
      <div className="ellipse bottom-right"></div>



      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-lightblue mb-8">The Next Wave of Innovators</h2>
        <p className="text-xl mb-12">
          The dedicated team working hard to build on the foundation laid by the mentors—
          ready to take on new challenges and grow together.
        </p>
        <div className="flex my-6 space-x-4 animate-marquee">
          {part1.map((member) => (

            <div key={member._id} className=" relative group transform transition-transform duration-300 hover:scale-110">
              <Link href="/about">

                <Image
                  src={image}
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


        <div className="flex my-6 space-x-4 animate-marquee-reverse">
          {part2.map((member) => (

            <div key={member._id} className=" relative group transform transition-transform duration-300 hover:scale-110">
              <Link href="/about">

                <Image
                  src={image}
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

export default Inovators