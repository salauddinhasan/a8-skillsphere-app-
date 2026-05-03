import Image from "next/image";
import React from "react";

const LearningPage = async () => {
  const res = await fetch("http://localhost:3000/data.json", {
    next: { revalidate: 3600 },
  });
  const courses = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-pink-50/50 rounded-lg">
      <div className="mb-8 border-l-4 border-sky-500 pl-4">
        <h2 className="text-3xl font-bold text-gray-800">Learning Tips</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {courses.slice(2, 6).map((course) => (
          <div
            key={course.id}
            className="group flex items-center gap-6 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-sky-200 cursor-pointer"
          >
            <div className="relative flex-shrink-0">
              <div className="h-32 w-32 overflow-hidden rounded-xl border-2 border-transparent group-hover:border-sky-100 transition-all">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={150}
                  height={150}
                  loading="eager"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded uppercase tracking-wider">
                  {course.category}
                </span>
                <span className="text-[10px] text-gray-400">• 4 min read</span>
              </div>

              <h4 className="text-xl font-bold text-gray-800 group-hover:text-sky-600 leading-tight transition-colors">
                {course.title}
              </h4>

              <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed italic">
                Expert tip: {course.description}
              </p>

              <div className="pt-1">
                <span className="text-xs font-bold text-sky-500 group-hover:underline flex items-center gap-1">
                  Explore Guide →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPage;
