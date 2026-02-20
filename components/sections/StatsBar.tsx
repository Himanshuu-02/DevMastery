"use client";
import { useEffect, useState } from "react";

export default function StatsBar() {
  const stats = [
    { number: 50, suffix: "+", label: "Courses" },
    { number: 100, suffix: "k+", label: "Students" },
    { number: 500, suffix: "+", label: "Hours of Content" },
    { number: 4.9, suffix: "/5", label: "Average Rating" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 4000; // total animation time (2s)
    const intervalTime = 20;
    const steps = duration / intervalTime;

    const counters = stats.map((stat, index) => {
      const increment = stat.number / steps;

      return setInterval(() => {
        setCounts(prev => {
          const newCounts = [...prev];
          if (newCounts[index] < stat.number) {
            newCounts[index] = Math.min(
              newCounts[index] + increment,
              stat.number
            );
          }
          return newCounts;
        });
      }, intervalTime);
    });

    return () => counters.forEach(clearInterval);
  }, []);

  return (
    <section className="bg-indigo-900 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-white">
                {stat.number === 4.9
                  ? counts[index].toFixed(1)
                  : Math.floor(counts[index])}
                {stat.suffix}
              </div>
              <div className="text-indigo-200 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
