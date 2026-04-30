import React from "react";
import ServicesCard from "./ServicesCard";

const Services = async () => {
  const res = await fetch(
    "https://a8-skillsphere-app-mjfx.vercel.app/data.json",
    {
      next: { revalidate: 3600 },
    },
  );
  const courses = await res.json();

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl py-5 font-bold">Popular Courses</h2>
      <div className="p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {courses?.sort((a, b) => b.rating - a.rating).slice(0, 3).map((course, id) => (
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
