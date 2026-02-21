import React from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import CourseDetail from "@/components/learning/CourseDetail";

export default function CoursePage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(props.params); // unwrap Promise

  return (
    <>
      <Header />
      <CourseDetail slug={slug} />
      <Footer />
    </>
  );
}