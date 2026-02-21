"use client";

import { useState } from "react";
import { CourseDetailData } from "./CourseDetail";

// 1. Corrected the Interface to target the 'sections' array properly
interface CourseContentProps {
  sections: CourseDetailData["sections"]; 
}

export default function CourseContent({ sections }: CourseContentProps) {
  // Add a safety check in case sections is undefined
  const [openSection, setOpenSection] = useState<string | null>(
    sections && sections.length > 0 ? sections[0].id : null
  );

  const toggleSection = (sectionId: string) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "video":
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case "quiz":
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
    }
  };

  return (
    <section className="bg-white py-16">
      <div className=" mx-auto px-6 md:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Course Content</h2>
        
        <div className="space-y-4">
          {sections?.map((section) => (
            <div
              key={section.id}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex justify-between items-center p-6 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      openSection === section.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="font-semibold text-gray-900">{section.title}</span>
                </div>
                <span className="text-sm text-gray-600">
                  {section.lectures.length} lectures • {section.totalDuration}
                </span>
              </button>

              {/* Section Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openSection === section.id ? 'max-h-250' : 'max-h-0'
                }`}
              >
                <div className="divide-y divide-gray-100">
                  {section.lectures.map((lecture) => (
                    <div
                      key={lecture.id}
                      className="flex justify-between items-center p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <span className={`shrink-0 ${
                          lecture.type === 'video' ? 'text-indigo-600' :
                          lecture.type === 'quiz' ? 'text-green-600' : 'text-gray-600'
                        }`}>
                          {getIcon(lecture.type)}
                        </span>
                        <span className="text-gray-700">{lecture.title}</span>
                        {lecture.isPreview && (
                          <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                            Preview
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-gray-500">{lecture.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}