import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

const ServicesCard = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="h-40 w-full overflow-hidden p-4 bg-sky-50">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full rounded-lg object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Category */}
        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          {course.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 leading-snug line-clamp-2">
          {course.title}
        </h2>

        {/* Instructor */}
        <p className="text-sm text-gray-500">
          by
          <span className="font-medium text-gray-700">{course.instructor}</span>
        </p>

        {/* Rating & Level */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400 text-sm" />
            <span className="text-sm font-semibold text-gray-700">
              {course.rating}
            </span>
          </div>
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full
            ${
              course.level === "Beginner"
                ? "bg-green-50 text-green-700"
                : course.level === "Intermediate"
                  ? "bg-yellow-50 text-yellow-700"
                  : "bg-red-50 text-red-700"
            }`}
          >
            {course.level}
          </span>
        </div>

        <hr className="border-gray-100" />

        {/* Duration & Button */}
        <div className="flex justify-between items-center pt-1">
          <div className="flex items-center gap-1 text-gray-500">
            <IoMdTime className="text-base" />
            <span className="text-sm">{course.duration}</span>
          </div>

          <Link
            href={`/all-courses/${course.id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
