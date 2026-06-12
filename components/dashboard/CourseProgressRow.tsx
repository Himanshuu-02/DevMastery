"use client";

import Link from "next/link";
import Image from "next/image";
import { EnrolledCourse } from "./Dashboard";

interface CourseProgressRowProps {
  course: EnrolledCourse;
}

export default function CourseProgressRow({ course }: CourseProgressRowProps) {
  return (
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start md:items-center hover:shadow-md transition-shadow">
      
      {/* Course Image */}
      <div className="relative w-full md:w-48 h-32 rounded-lg overflow-hidden shrink-0">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Course Info & Progress */}
      <div className="flex-1 w-full">
        <div className="mb-2">
          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
            {course.category}
          </span>
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-1">
            {course.title}
          </h3>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600 font-medium">Progress</span>
            <span className="text-gray-900 font-bold">{course.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500 ease-out" 
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            {course.completedLectures} of {course.totalLectures} lectures completed
          </p>
        </div>
      </div>

      {/* Action Button */}
      <div className="w-full md:w-auto shrink-0">
        <Link
          href={`/courses/${course.slug}`} // Links to the specific course detail
          className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold rounded-lg transition-colors group"
        >
          Continue Learning
          <svg 
            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}