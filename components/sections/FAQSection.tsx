"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(); // Open first item by default

  const faqs: FAQItem[] = [
    {
      question: "Do I need prior coding experience to start?",
      answer: "Not at all! Our 'Zero to Hero' paths are designed specifically for beginners. We start with the absolute basics of HTML and CSS and guide you step-by-step up to advanced concepts like microservices and cloud architecture."
    },
    {
      question: "How is DevMastery different from other platforms?",
      answer: "Unlike video-only platforms, DevMastery focuses on **hands-on coding**. Every lesson includes an interactive coding environment where you write real code, get instant feedback, and build actual projects for your portfolio."
    },
    {
      question: "Are the courses updated for the latest technologies?",
      answer: "Yes! We pride ourselves on staying current. Our curriculum is updated monthly to include the latest features of React 19, Next.js 14+, Node.js, and modern CSS. We don't teach outdated libraries like jQuery."
    },
    {
      question: "Can I access the courses on mobile devices?",
      answer: "Absolutely. Our platform is fully responsive. You can watch videos, read documentation, and even write code directly from your tablet or smartphone. Perfect for learning on the go."
    },
    {
      question: "Is there a certificate upon completion?",
      answer: "Yes, every course and learning path comes with a verified certificate of completion that you can share on LinkedIn or add to your resume to showcase your new skills to employers."
    },
    {
      question: "What if I get stuck on a project?",
      answer: "You're never alone! Join our active Discord community where thousands of students and mentors hang out. You can ask questions, get code reviews, and pair program with others."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-3">
            FAQ
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h3>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about the product and billing. Can't find the answer you're looking for? Chat to our friendly team.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <span className={`shrink-0 ml-6 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?{" "}
            <a href="/contact" className="text-indigo-600 font-semibold hover:text-indigo-700 underline decoration-2 underline-offset-2">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}