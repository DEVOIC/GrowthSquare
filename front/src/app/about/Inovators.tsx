"use client";
// import { MoveUpRight } from 'lucide-react'
import Image from 'next/image'
// import React,{useEffect, useState} from 'react'

// import image from '../courses/mentor.jpg';
import members from '@/data/members';

//temporary things




const Inovators = () => {
  // const [members, setMembers] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchMembers = async () => {
  //     try {
  //       const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_API}:${process.env.NEXT_PUBLIC_PORT}/${process.env.NEXT_PUBLIC_ROUTE}/auth/team/get-team-data`);
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const result = await response.json();
  //       setMembers(result.data.team);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchMembers();
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  const part1 = members.filter((member, index) => index % 2 === 0);
  const part2 = members.filter((member, index) => index % 2 !== 0);
  return (
    <section className="bg-white py-20 px-4 relative">
      <div className="ellipse top-left"></div>
      <div className="ellipse bottom-right"></div>



      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-lightblue mb-8">The Euphoric Intellectuals behind Growth Square</h2>
        <p className="text-xl mb-12">
          The dedicated team working hard to build on the foundation laid by the mentors—
          ready to take on new challenges and grow together.
        </p>
        <div className='before-marquee'>


          <div className="flex  my-6 animate-marquee">
            {part1.map((member, index) => (

              <div key={index} className=" relative group transform transition-transform duration-300 hover:scale-110">


                <div className="  md:w-[240px] md:h-[320px] w-[140px] h-[180px]">
                  <Image
                    src={member.image}
                    alt="Team member"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="w-full absolute bottom-0 left-0 px-8 opacity-0 group-hover:opacity-100 bg-black/50 text-white p-2">
                  <h3 className="font-bold text-[1vmax]">{member.name}</h3>
                  <p className="text-[1vmax]">{member.role}</p>
                </div>
                {/* <div className="w-10 h-10 absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 bg-darkblue border-2">
                  <MoveUpRight className="mt-2" color="white" size={30} />
                </div> */}

              </div>
            ))}
          </div>
          <div className="flex  my-6  animate-marquee">
            {part1.map((member, index) => (

              <div key={index} className=" relative group transform transition-transform duration-300 hover:scale-110">


                <div className="  md:w-[240px] md:h-[320px] w-[140px] h-[180px]">
                  <Image
                    src={member.image}
                    alt="Team member"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute bottom-0 w-full left-0 px-8 opacity-0 group-hover:opacity-100 bg-black/50 text-white p-2">
                  <h3 className="font-bold text-[1vmax]">{member.name}</h3>
                  <p className="text-[1vmax]">{member.role}</p>
                </div>
                {/* <div className="w-10 h-10 absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 bg-darkblue border-2">
                  <MoveUpRight className="mt-2" color="white" size={30} />
                </div> */}

              </div>
            ))}
          </div>
        </div>
        <div className='before-marquee-reverse'>
          <div className="flex my-6  animate-marquee-reverse">
            {part2.map((member, index) => (

              <div key={index} className=" relative group transform transition-transform duration-300 hover:scale-110">

                <div className=" md:w-[240px] md:h-[320px] w-[140px] h-[180px]">
                  <Image
                    src={member.image}
                    alt="Team member"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute bottom-0 w-full left-0 px-8 opacity-0 group-hover:opacity-100 bg-black/50 text-white p-2">
                  <h3 className="font-bold text-[1vmax]">{member.name}</h3>
                  <p className="text-[1vmax]">{member.role}</p>
                </div>
                {/* <div className="lg:w-10 w-6 h-6 lg:h-10 absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 bg-darkblue border-2">
                  <MoveUpRight className="mt-2" color="white" size={30} />
                </div> */}

              </div>
            ))}
          </div>
          <div className="flex my-6  animate-marquee-reverse">
            {part2.map((member, index) => (

              <div key={index} className=" relative group transform transition-transform duration-300 hover:scale-110">

                <div className=" md:w-[240px] md:h-[320px] w-[140px] h-[180px]">
                  <Image
                    src={member.image}
                    alt="Team member"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute bottom-0 w-full left-0 px-8 opacity-0 group-hover:opacity-100 bg-black/50 text-white p-2">
                  <h3 className="font-bold text-[1vmax]">{member.name}</h3>
                  <p className="text-[1vmax]">{member.role}</p>
                </div>
                {/* <div className="lg:w-10 lg:h-10 absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 bg-darkblue border-2">
                  <MoveUpRight className="mt-2" color="white" size={30} />
                </div> */}

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Inovators