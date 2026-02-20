import Image from "next/image";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Header />
      {/* We'll add Hero section here later */}
      <main >
       <Hero/>
      </main>
        <Footer />
    </>
  );
}