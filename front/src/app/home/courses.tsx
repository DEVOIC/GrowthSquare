"use client"
// import CourseCard from '@/components/parts/course-card'
// import { GraduationCap } from 'lucide-react'
import Image from 'next/image'
// import React, { useEffect, useState } from 'react'
// import Loading from '../loading'
interface Collab{
  image:string,
  name:string,
} 
const collabs:Collab[] = [
  {
    image:"https://sneaky-anteater-377.notion.site/image/attachment%3A88a46d0b-3671-480b-8cc5-5176fc3ec36b%3Abhopal_dao.png?table=block&id=19c4c2d4-f054-8080-81a9-ea45943a4a76&spaceId=12677323-936c-41ff-8423-93a954215ff1&width=2000&userId=&cache=v2",
    name:"Bhopal Dao"
  },{
    name:"EPYC",
    image:"https://sneaky-anteater-377.notion.site/image/attachment%3A65b9ee81-452f-4388-9956-72a4e5a11156%3Aimage_460.png?table=block&id=19c4c2d4-f054-809a-aca9-d0e592a06a11&spaceId=12677323-936c-41ff-8423-93a954215ff1&width=2000&userId=&cache=v2"
  },
  {name:"MachBuddy",image:"https://sneaky-anteater-377.notion.site/image/attachment%3A886a68ab-a9db-406f-95e0-3858c0a5fd64%3Amechbuddy_(1).png?table=block&id=19c4c2d4-f054-8044-8978-db88b3966d25&spaceId=12677323-936c-41ff-8423-93a954215ff1&width=2000&userId=&cache=v2"},{
    name:"Pixcel Panda",
    image:"https://sneaky-anteater-377.notion.site/image/attachment%3A22db14c9-92cf-4669-9d19-3fa6420c0c1a%3Apixel_pand.png?table=block&id=19c4c2d4-f054-80c6-8399-d52504a0bd0b&spaceId=12677323-936c-41ff-8423-93a954215ff1&width=2000&userId=&cache=v2"
  },{
    name:"Campusly",
    image:"https://sneaky-anteater-377.notion.site/image/attachment%3Acfd11198-e58b-4425-b649-ed9d1cd7ff85%3Aimage_461.png?table=block&id=19c4c2d4-f054-80ae-9a71-d0d3c7fea409&spaceId=12677323-936c-41ff-8423-93a954215ff1&width=2000&userId=&cache=v2"
  },{
    name:"Wizz",
    image:"https://sneaky-anteater-377.notion.site/image/attachment%3A2926c41a-4334-48cb-8809-8005374632af%3Awizz.png?table=block&id=19c4c2d4-f054-8016-a79a-fe1b846b4aa2&spaceId=12677323-936c-41ff-8423-93a954215ff1&width=2000&userId=&cache=v2"
  }
]
const Courses =  () => {
  // const [courses, setCourses] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     try {
  //       const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_API}:${process.env.NEXT_PUBLIC_PORT}/${process.env.NEXT_PUBLIC_ROUTE}/auth/course/get-all-courses`);
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const result = await response.json();
  //       setCourses(result.data.courses);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchCourses();
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }
  return (
    <div className='w-screen  bg-white overflow-hidden relative'>
      <div className="ellipse top-right"></div>
      <div className="ellipse mid-left"></div>

      {/* Logo Marquee */}
      <div className=" px-4 py-8">
        <div className="flex justify-between md:space-x-0 space-x-12  animate-marquee">
          {collabs.map((_, index) => (
            <div key={index} className="flex items-center space-x-2">
<Image src={_.image} className='' width={30} height={30} alt={_.name} />
              <span className="text-lg font-bold text-black">{_.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className='h-[1px] bg-black'></div>
{/* 
      
      <section className="container mx-auto px-6 md:px-12 py-20">
        <h2 className="text-3xl font-bold text-darkblue font-transforma mb-12">
          <p>

          All You Need to Grow Is Here
          </p>

        </h2>
        <div className="   grid xl:grid-cols-3 lg:grid-cols-2  gap-6  ">

          {courses.length === 0 ? <div>Not able to fetch mentors</div> :
            courses.map((course) => (
              <CourseCard key={course._id} data={course} />
            ))}
        </div>
      </section> */}
    </div>
  )
}

export default Courses