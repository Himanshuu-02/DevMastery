export default function WhatYouLearn({ outcomes }: { outcomes: string[] }) {
  return (
    <div className=" mx-auto px-6 py-12 bg-white ">
      <h2 className="text-2xl font-bold mb-6 text-black">What you'll learn</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {outcomes.map((item, i) => (
          <div key={i} className="flex gap-3 items-start">
            <svg className="w-5 h-5 text-gray-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            <p className="text-gray-700">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}