import Image from "next/image";
import React from "react";
import { FaLinkedin, FaGithub, FaStar } from "react-icons/fa";

const TopInstructors = async () => {
  const res = await fetch("https://a8-skillsphere-app-mjfx.vercel.app/instructors.json");
  const instructors = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-sky-50">
      <div className="mb-8 border-l-4 border-sky-500 pl-4">
        <h2 className="text-4xl font-black text-gray-800 mb-2">
          Our Top Instructors
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {instructors.map((ins) => (
          <div
            key={ins.id}
            className="group relative bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-2"
          >
            <span className="absolute top-4 right-4 bg-sky-100 text-sky-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
              {ins.level}
            </span>

            <div className="relative w-24 h-24 mx-auto mb-4">
              <Image
                src={ins.image}
                alt={ins.name}
                width={94}
                height={94}
                className="rounded-full w-full h-full object-cover border-4 border-white shadow-md group-hover:border-sky-200 transition-colors"
              />
              <div className="absolute -bottom-1 -right-1 bg-amber-400 text-white p-1.5 rounded-full border-2 border-white">
                <FaStar size={10} />
              </div>
            </div>

            <h4 className="text-xl font-bold text-gray-800 group-hover:text-sky-600 transition-colors">
              {ins.name}
            </h4>
            <p className="text-sky-500 text-sm font-semibold mb-3">
              {ins.role} Expert
            </p>
            <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-5">
              {ins.description}
            </p>

            <div className="flex justify-center gap-4 mb-6">
              <button className="text-gray-400 hover:text-sky-600 transition-colors">
                <FaLinkedin size={20} />
              </button>
              <button className="text-gray-400 hover:text-gray-900 transition-colors">
                <FaGithub size={20} />
              </button>
            </div>

            <button className="w-full py-3 rounded-xl bg-gray-50 text-gray-700 font-bold text-sm hover:bg-sky-500 hover:text-white transition-all duration-300">
              View Courses
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopInstructors;
