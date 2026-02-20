import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[65vh] ">
        
        {/* LEFT SIDE */}
        <div className="flex items-center px-6 lg:px-16">
          <div className="max-w-xl space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Master the Modern{" "}
              <span className="text-indigo-600">Web Stack</span>
            </h1>

            <p className="text-lg text-gray-600">
              From your first line of HTML to architecting scalable Node.js
              microservices. Join thousands of developers leveling up their careers.
            </p>

            <div className="flex gap-4 pt-4">
              <Link
                href="/catalog"
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md"
              >
                Explore Courses
              </Link>

              <Link
                href="/signup"
                className="px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold rounded-lg"
              >
                Start for Free
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
     <div className="relative w-full h-75 sm:h-100 lg:h-full mt-5 md:mt-0">
          <Image
            src="/images/hero-laptop.png"
            alt="Developer coding"
            fill
            className="object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}
