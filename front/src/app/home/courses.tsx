"use client";
import collabs from "@/data/collab";
// import CourseCard from '@/components/parts/course-card'
// import { GraduationCap } from 'lucide-react'
import Image from "next/image";
// import React, { useEffect, useState } from 'react'
// import Loading from '../loading'

const Courses = () => {
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
    <div className="w-screen  bg-white overflow-hidden relative">
      <div className="ellipse top-right"></div>
      <div className="ellipse mid-left"></div>

      {/* Logo Marquee */}
      <div className=" px-4 py-8">
        <div className="flex justify-between md:space-x-0 space-x-12  animate-marquee">
          {collabs.map((_, index) => (
            <div key={index} className="flex  items-center ">
              <div className="flex space-x-2">
                <Image
                  src={_.image}
                  className=""
                  width={30}
                  height={30}
                  alt={_.name}
                />
                <span className="text-lg font-bold text-black">{_.name}</span>
              </div>
             
            </div>
          ))} 
          {collabs.map((_, index) => (
            <div aria-hidden="true" key={index} className="flex flex-shrink-0 items-center ">
              <div className="flex space-x-2">
                <Image
                  src={_.image}
                  className=""
                  width={30}
                  height={30}
                  alt={_.name}
                />
                <span className="text-lg font-bold text-black">{_.name}</span>
              </div>
             
            </div>
          ))}
        </div>
      </div>
      <div className="h-[1px] bg-black"></div>
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
  );
};

export default Courses;
