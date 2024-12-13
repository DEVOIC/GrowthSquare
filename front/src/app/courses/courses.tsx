

import CourseCard from '@/components/parts/course-card';

import React from 'react';

export const Courses = () => {
  return (
    <div className="flex flex-wrap  gap-6  ">
    {/* <div className="flex lg:flex-row flex-col items-center gap-8 md:gap-0 md:justify-between "> */}
      {[1, 2, 3,4].map((item) => (
        <CourseCard key={item}/>
      ))}
    </div>
  );
};
