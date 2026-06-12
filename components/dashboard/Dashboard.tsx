"use client";

import { useState, useEffect } from "react";
import StatsCard from "./StatsCard";
import CourseProgressRow from "./CourseProgressRow";
//import { UserStats } from "./Dashboard";
//import {  EnrolledCourse } from "./Dashboard";

export interface UserStats {
  coursesInProgress: number;
  certificatesEarned: number;
  hoursLearned: number;
}

export interface EnrolledCourse {
  id: string;
  title: string;
  category: string;
  image: string;
  slug: string;
  progress: number; // 0 to 100
  lastWatchedLecture?: string;
  totalLectures: number;
  completedLectures: number;
}

export default function Dashboard() {
  const [stats, setStats] = useState<UserStats | null>(null);
  const [enrolledCourses, setEnrolledCourses] = useState<EnrolledCourse[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  

  // Simulate API Fetch
  useEffect(() => {
    // In real app: fetch('/api/user/dashboard')
    setTimeout(() => {
      setStats({
        coursesInProgress: 2,
        certificatesEarned: 4,
        hoursLearned: 24.5
      });

      setEnrolledCourses([
        {
          id: "c1",
          title: "HTML5 Mastery: From Zero to Hero",
          category: "HTML",
          image: "/images/course-html.jpg",
          slug: "html5-mastery-from-zero-to-hero",
          progress: 35,
          completedLectures: 12,
          totalLectures: 34,
          lastWatchedLecture: "Semantic HTML Tags"
        },
        {
          id: "c2",
          title: "Advanced CSS Layouts & Animations",
          category: "CSS",
          image: "/images/course-css.jpg",
          slug: "advanced-css-layouts-animations",
          progress: 10,
          completedLectures: 3,
          totalLectures: 28,
          lastWatchedLecture: "Flexbox Basics"
        },
        {
          id: "c3",
          title: "JavaScript: The Hard Parts",
          category: "JavaScript",
          image: "/images/course-js.jpg",
          slug: "javascript-the-hard-parts",
          progress: 0,
          completedLectures: 0,
          totalLectures: 45,
          lastWatchedLecture: undefined
        }
      ]);
      
      setIsLoading(false);
    }, 600);
  }, []);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-8 animate-pulse">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => <div key={i} className="h-32 bg-gray-200 rounded-xl"></div>)}
        </div>
        <div className="space-y-4">
          {[1, 2].map(i => <div key={i} className="h-48 bg-gray-200 rounded-xl"></div>)}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">My Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's your learning overview.</p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard 
          label="Courses in Progress"
          value={stats?.coursesInProgress || 0}
          colorClass="bg-indigo-100 text-indigo-600"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
        <StatsCard 
          label="Certificates Earned"
          value={stats?.certificatesEarned || 0}
          colorClass="bg-green-100 text-green-600"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          }
        />
        <StatsCard 
          label="Hours Learned"
          value={stats?.hoursLearned || 0}
          colorClass="bg-blue-100 text-blue-600"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
      </div>

      {/* Continue Learning Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue Learning</h2>
        <div className="space-y-6">
          {enrolledCourses.length > 0 ? (
            enrolledCourses.map((course) => (
              <CourseProgressRow key={course.id} course={course} />
            ))
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-300">
              <p className="text-gray-500 mb-4">You haven't enrolled in any courses yet.</p>
              <a href="/catalog" className="text-indigo-600 font-semibold hover:underline">
                Browse Catalog →
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}