import Image from "next/image";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import FeaturesSection from "@/components/sections/FeaturesSection";
import FeaturedCourses from "@/components/sections/FeaturedCourses";
import FAQSection from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <>
      <Header />
      {/* We'll add Hero section here later */}
      <main >
       {/* <Hero/> */}
       <StatsBar/>
       <FeaturesSection/>
       <FeaturedCourses/>
      </main>
      <FAQSection/>
        <Footer />
    </>
  );
}