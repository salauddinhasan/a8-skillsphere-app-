import React from "react";

const LearningPage = async () => {
  const res = await fetch(
    "https://a8-skillsphere-app-mjfx.vercel.app/data.json",
    {
      next: { revalidate: 3600 },
    },
  );
  const courses = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-pink-50/50 rounded-lg">
      <div className="mb-8 border-l-4 border-sky-500 pl-4">
        <h2 className="text-3xl font-bold text-gray-800">Learning Tips</h2>
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
                <div className="h-40 w-full overflow-hidden p-4 ">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full rounded-lg object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="flex-1">
                <h4 className="text-lg font-bold text-gray-800 group-hover:text-sky-700 leading-tight mb-1">
                  {course.title}
                </h4>

                <div>
                  <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">{course.description}</p>
                </div>

                <p className="bg-yellow-50 rounded-full w-20 flex justify-center">
                  Trending
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LearningPage;
