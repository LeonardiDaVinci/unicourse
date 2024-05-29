import React, { useEffect, useRef, useState } from "react";
import { CourseMap } from "./course-map";
import CourseCard from "../../component/course-card";
import Dropdown from "../../component/dropdown";

const Container = () => {
  const [selectedCourse, setSelectedCourse] = useState(CourseMap[0]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const handleChangeMenu = (course) => {
    setSelectedCourse(course);
    setFilteredCourses([]);
  };
  const filterBySubCategory = async (subCategory) => {
    const filtered = await selectedCourse.data.filter(
      (course) => course.category === subCategory
    );
    setFilteredCourses(filtered);
  };

  const ref = useRef(null);
  const ref2 = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsSticky(!entry.isIntersecting);
    });
    const observer2 = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsBottom(entry.isIntersecting);
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    if (ref2.current) {
      observer2.observe(ref2.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      if (ref2.current) {
        observer2.unobserve(ref2.current);
      }
    };
  });

  return (
      <div className="relative">
        <div
          className="bg-transparent w-5 absolute h-1 top-[-122px]"
          ref={ref}
        ></div>
        <div className="flex px-8 gap-8 w-full justify-between pt-6 ">
          {/* Sidebar */}
          <div
            className={`w-64 min-h-full ${isSticky ? "block" : "hidden"}`}
          ></div>
          <div
            className={`flex flex-col gap-2 w-64 min-h-full transition-all duration-300 ${
              isSticky ? "fixed top-[150px] w-48" : ""
            } ${isBottom ? "opacity-0" : "opacity-100"}`}
          >
            <h1 className="mt-2 mb-4 font-semibold text-3xl">Categories</h1>
            {CourseMap.map((course, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => {
                  handleChangeMenu(course);
                }}
              >
                <Dropdown
                  callbackFn={filterBySubCategory}
                  heading={course.name}
                  subCategories={course.subCategories}
                ></Dropdown>
              </div>
            ))}
          </div>

          {/* Grid Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full mb-12 overflow-y-auto">
            {(filteredCourses.length > 0
              ? filteredCourses
              : selectedCourse.data
            ).map((courseData) => {
              return (
                <CourseCard
                  key={courseData.name}
                  data={courseData}
                ></CourseCard>
              );
            })}
          </div>
        </div>
        <div className="h-1 w-6 bg-transparent" ref={ref2}></div>
      </div>
  );
};

export default Container;
