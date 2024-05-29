import React, { useState, useMemo } from 'react';
import { CourseMap } from '../page/course/course-map';

const CourseHeader = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const totalCourses = useMemo(() => {
    return CourseMap.reduce((acc, category) => {
      if (category.data) {
        acc += category.data.length;
      }
      return acc;
    }, []);
  }, []);

  const filteredCoursesCount = useMemo(() => {
    if (!searchTerm) return totalCourses;
    return CourseMap.reduce((acc, category) => {
      if (category.data) {
        const filteredData = category.data.filter(course =>
          course.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        acc += filteredData.length;
      }
      return acc;
    }, 0);
  }, [searchTerm]);

  return (
    <div className="flex justify-between p-2.5 mt-4 bg-white shadow-md rounded-lg">
      <div>
        {searchTerm ? `Filtered Courses: ${filteredCoursesCount}` : `Total Courses: ${totalCourses}`}
      </div>
      <div>
        <input
          type="text"
          placeholder="Search courses..."
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}

export default CourseHeader;
