"use client";

import { useState, useEffect } from "react";
import CourseHero from "./CourseHero";
import WhatYouLearn from "./WhatYouLearn";
import CourseContent from "./CourseContent";

// 1. Define the Data Type (Keep this exactly like this for API later)
export interface CourseDetailData {
  id: string;
  title: string;
  description: string;
  slug:string;
  category: string;
  level: string;
  rating: number;
  students: number;
  duration: string;
  instructor: string;
  image: string;
  price: number;
  isFree: boolean;
  whatYouLearn: string[];
  sections: {
    id: string;
    title: string;
    totalDuration: string;
    lectures: { id: string; title: string; duration: string; type: string; isPreview?: boolean }[];
  }[];
}

export default function CourseDetail({ slug }: { slug: string }) {
  const [course, setCourse] = useState<CourseDetailData | null>(null);

  // 2. MOCK DATA (This is where your API call will go later)
  useEffect(() => {
    const mockData: CourseDetailData = {
      id: "1",
      slug, // dummy slug match
      title: "HTML5 Mastery: From Zero to Hero",
      description: "The complete guide to building semantic, accessible, and SEO-friendly web structures.",
      category: "HTML",
      level: "Beginner",
      rating: 4.8,
      students: 12500,
      duration: "4h 30m",
      instructor: "Sarah Jenkins",
      image: "/images/course-html.jpg",
      price: 0,
      isFree: true,
      whatYouLearn: [
        "Master the core concepts and advanced techniques required for professional development.",
        "Master the core concepts and advanced techniques required for professional development.",
        "Master the core concepts and advanced techniques required for professional development.",
        "Master the core concepts and advanced techniques required for professional development.",
      ],
      sections: [
        {
          id: "s1",
          title: "Section 1: Getting Started",
          totalDuration: "45m",
          lectures: [
            { id: "l1", title: "Introduction to Getting Started", duration: "10:00", type: "video" },
            { id: "l2", title: "Deep Dive", duration: "20:00", type: "video" },
            { id: "l3", title: "Quiz", duration: "15:00", type: "quiz" },
          ]
        },
        {
          id: "s2",
          title: "Section 2: Getting Started",
          totalDuration: "45m",
          lectures: [
            { id: "l1", title: "Introduction to Getting Started", duration: "10:00", type: "video" },
            { id: "l2", title: "Deep Dive", duration: "20:00", type: "video" },
            { id: "l3", title: "Quiz", duration: "15:00", type: "quiz" },
          ]
        }
      ]
    };
    setCourse(mockData);
  }, [slug]);

  if (!course) return <div className="py-20 text-center">Loading Course Details...</div>;

  return (
    <main>
      <CourseHero course={course} />
      <WhatYouLearn outcomes={course.whatYouLearn} />
      <CourseContent sections={course.sections} />
    </main>
  );
}