

import CourseCard from '@/components/parts/course-card';

import React from 'react';
import Loading from '../loading';

export const Courses = async () => { 
  const data = await fetch(`${process.env.NEXT_PUBLIC_BACK_API}/${process.env.NEXT_PUBLIC_ROUTE}/auth/course/get-all-courses`)
    if (data.status !== 200) {
      return (<Loading />)
    }
    const rawData = await data.json()
    const courses: Course[] = await rawData.data.courses
  
  return (
    <div className="  grid xl:grid-cols-3 lg:grid-cols-2  gap-6  ">
      {courses.length === 0 ? <div>Not able to fetch mentors</div> :
        courses.map((course) => (

          <CourseCard key={course._id} data={course} />

        ))}
    </div>
  );
};
