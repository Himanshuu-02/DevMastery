"use client";

import { useState, useMemo } from "react";
import CatalogHeader from "./CatalogHeader";
import CatalogGrid from "./CatalogGrid";
import { Course } from "@/components/ui/CoursesCard";

// Mock Data (Move this to an API call later)
const ALL_COURSES: Course[] = [
  {
    id: "1",
    title: "HTML5 Mastery: From Zero to Hero",
    description: "The complete guide to building semantic, accessible, and SEO-friendly web structures.",
    level: "Beginner",
    rating: 4.8,
    duration: "4h 30m",
    students: 12500,
    image: "/images/course-html.jpg",
    category: "HTML",
    slug: "html5-mastery-from-zero-to-hero"
  },
  {
    id: "2",
    title: "Advanced CSS Layouts & Animations",
    description: "Master Flexbox, Grid, and complex animations to build stunning user interfaces.",
    level: "Intermediate",
    rating: 4.9,
    duration: "6h 15m",
    students: 8900,
    image: "/images/course-css.jpg",
    category: "CSS",
    slug: "advanced-css-layouts-animations"
  },
  {
    id: "3",
    title: "JavaScript: The Hard Parts",
    description: "Understand closures, prototypes, async/await, and the event loop deeply.",
    level: "Advanced",
    rating: 5.0,
    duration: "12h 00m",
    students: 5400,
    image: "/images/course-js.jpg",
    category: "JavaScript",
    slug: "javascript-the-hard-parts"
  },
  {
    id: "4",
    title: "React 19 Complete Guide",
    description: "Build modern web applications with React 19, hooks, and server components.",
    level: "Intermediate",
    rating: 4.7,
    duration: "8h 45m",
    students: 15200,
    image: "/images/course-react.jpg",
    category: "React",
    slug: "react-19-complete-guide"
  },
  {
    id: "5",
    title: "Node.js Microservices Architecture",
    description: "Design and build scalable microservices with Node.js, Docker, and Kubernetes.",
    level: "Advanced",
    rating: 4.9,
    duration: "10h 30m",
    students: 7800,
    image: "/images/course-node.jpg",
    category: "Node.js",
    slug: "nodejs-microservices-architecture"
  },
  {
    id: "6",
    title: "Next.js 14 Server Actions",
    description: "Master the latest Next.js features including server actions, app router, and more.",
    level: "Intermediate",
    rating: 4.8,
    duration: "7h 20m",
    students: 9300,
    image: "/images/course-nextjs.jpg",
    category: "Next.js",
    slug: "nextjs-14-server-actions"
  }
];

export default function Catalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [isLoading, setIsLoading] = useState(false);

  // Filter Logic
  const filteredCourses = useMemo(() => {
    return ALL_COURSES.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
      const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;
      
      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [searchTerm, selectedCategory, selectedLevel]);

  // Handlers
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 300); // Simulate API delay
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 300);
  };

  const handleLevelChange = (level: string) => {
    setSelectedLevel(level);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 300);
  };

  return (
    <section className="bg-white">
      <CatalogHeader 
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
        onLevelChange={handleLevelChange}
      />
      
      <div className="py-16 max-w-7xl mx-auto px-6 md:px-8">
        <CatalogGrid courses={filteredCourses} isLoading={isLoading} />
      </div>
    </section>
  );
}