import React from "react";
import ServicesCard from "./ServicesCard";

const Services = async () => {
  const res = await fetch("http://localhost:3000/data.json", {
    next: { revalidate: 3600 },
  });
  const courses = await res.json();

  return (
    <div className="max-w-7xl mx-auto bg-warning/5 py-10 rounded-l-2xl mt-5">
      <div className=" mb-8 border-l-4 border-sky-500 pl-4">
        <h2 className="text-3xl font-bold text-gray-800">Popular Courses</h2>
      </div>

      <div className="p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {courses
            ?.sort((a, b) => b.rating - a.rating)
            .slice(0, 3)
            .map((course, id) => (
              <div key={id}>
                <ServicesCard course={course} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
