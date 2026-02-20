import CourseCard, { Course } from "../ui/CoursesCard";
import Link from "next/link";

export default function FeaturedCourses() {
  // Mock data - This will be replaced with API data later
  const featuredCourses: Course[] = [
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
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Featured Courses
            </h2>
            <p className="text-gray-600 text-lg">
              Start your journey with our most popular content.
            </p>
          </div>
          <Link 
            href="/catalog" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold transition-colors group"
          >
            View all courses
            <svg 
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}