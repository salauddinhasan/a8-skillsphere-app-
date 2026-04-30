import React from "react";

const Trending = async () => {
  const res = await fetch(
    "https://a8-skillsphere-app-mjfx.vercel.app/data.json",
    {
      next: { revalidate: 3600 },
    },
  );
  const courses = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-sky-50/50 rounded-lg">
      <div className="mb-8 border-l-4 border-sky-500 pl-4">
        <h2 className="text-3xl font-bold text-gray-800">Trending Now</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {courses
          ?.sort((a, b) => b.rating - a.rating)
          .slice(0, 4)
          .map((course) => (
            <div
              key={course.id}
              className="group flex items-center gap-5 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-sky-50"
            >
              <div className="text-4xl font-black text-sky-200 group-hover:text-sky-500 transition-colors">
                {course.id < 10 ? `0${course.id}` : course.id}
              </div>

              <div className="flex-1">
                <h4 className="text-lg font-bold text-gray-800 group-hover:text-sky-700 leading-tight mb-1">
                  {course.title}
                </h4>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-sm text-gray-500 font-medium">
                      {course.instructor}
                    </p>
                    <p className="text-xs">{course.duration}</p>
                  </div>
                  <span className="text-xs font-bold bg-white px-2 py-1 rounded text-sky-600 border border-sky-100">
                    ★ {course.rating}
                  </span>
                </div>

                <p className="bg-yellow-50 rounded-full w-20 flex justify-center">Trending</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Trending;
