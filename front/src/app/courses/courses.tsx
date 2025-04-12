'use client'

import React, { useEffect, useState } from 'react';
import CourseCard from '@/components/parts/course-card';
import Loading from '../loading';

export const Courses = () => {
  const [courses, setCourses] = useState<Course[] | null>(null);
  const [item, setItem] = useState('All');
  const [selected, setSelected] = useState<Course[] | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchCourses = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_API}/${process.env.NEXT_PUBLIC_ROUTE}/auth/course/get-all-courses`
      );

      if (response.status !== 200) {
        throw new Error('Failed to fetch courses');
      }

      const rawData = await response.json();
      const allCourses: Course[] = rawData.data.courses;
      setCourses(allCourses);
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    if (!courses) return;

    if (item === 'All') {
      setSelected(courses);
    } else {
      const filtered = courses.filter(course => course.courseName === item);
      setSelected(filtered);
    }
  }, [item, courses]);

  if (loading) return <Loading />;

  return (
    <div>
      <div className="flex gap-4 lg:gap-10 my-20 flex-wrap z-10">
        {['All', 'App Development', 'UI/UX Design', 'Video Editing', 'Web Development'].map((category, idx) => (
          <button
            key={idx}
            onClick={() => setItem(category)}
            className={`px-4 py-1 lg:text-xl font-medium rounded-none ${
              item === category
                ? 'bg-lightblue text-white'
                : 'border border-lightblue text-lightblue hover:bg-blue-50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-6">
        {selected && selected.length > 0 ? (
          selected.map(course => (
            <CourseCard key={course._id} data={course} />
          ))
        ) : (
          <div className="text-center col-span-full text-gray-500">
            No courses found for the selected category.
          </div>
        )}
      </div>
    </div>
  );
};

