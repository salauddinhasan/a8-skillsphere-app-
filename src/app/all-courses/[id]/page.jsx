import Link from "next/link";
import React from "react";
import { FaClock, FaStar, FaUser } from "react-icons/fa";
import { LuTarget } from "react-icons/lu";

const CoursesDetails = async ({ params }) => {
  const { id } = await params;

 // Protected Route — login check
  // const session = await auth.api.getSession({
  //   headers: await headers(),
  // });

  // if (!session) {
  //   redirect(`/login?callbackUrl=/all-courses/${id}`);
  // }
   

  const res = await fetch(
    "https://a8-skillsphere-app-mjfx.vercel.app/data.json",
  );
  const courses = await res.json();
  const course = courses.find((item) => item.id === parseInt(id));

  if (!course) {
    return (
      <div className="text-center py-20 text-2xl font-bold">
        Course Not Found
      </div>
    );
  }
  // Static curriculum
  const curriculum = [
    "Introduction & Course Overview",
    "Setting Up Your Environment",
    "Core Concepts & Fundamentals",
    "Hands-on Projects & Practice",
    "Advanced Techniques",
    "Real-world Case Studies",
    "Performance & Optimization",
    "Final Project & Certification",
  ];

  return (
    <div className="max-w-7xl mx-auto pt-12 px-8 pb-20">
      <h2 className="text-3xl font-black mb-8 text-sky-600">Course Details</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-8">
              <p className="text-sky-500 font-bold uppercase tracking-widest text-sm mb-2">
                {course.category}
              </p>
              <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
                {course.title}
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                {course.description}
              </p>

              {/* Meta Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-sky-50 rounded-xl">
                <div className="flex gap-3 items-center">
                  <FaStar className="text-amber-400 text-xl" />
                  <div>
                    <p className="text-xs text-gray-400">Rating</p>
                    <p className="font-bold">{course.rating}</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <FaUser className="text-sky-500 text-xl" />
                  <div>
                    <p className="text-xs text-gray-400">Instructor</p>
                    <p className="font-bold">{course.instructor}</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <FaClock className="text-sky-500 text-xl" />
                  <div>
                    <p className="text-xs text-gray-400">Duration</p>
                    <p className="font-bold">{course.duration}</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <LuTarget className="text-rose-500 text-xl" />
                  <div>
                    <p className="text-xs text-gray-400">Level</p>
                    <p className="font-bold">{course.level}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Curriculum */}
          <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Course Curriculum
            </h3>
            <ul className="space-y-3">
              {curriculum.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-sky-50 transition"
                >
                  <span className="w-7 h-7 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 text-sm font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right — Enroll Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 sticky top-24">
            <p className="text-4xl font-black text-gray-800 mb-2">Free</p>
            <p className="text-sm text-gray-400 mb-6">Full lifetime access</p>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition mb-3">
              Enroll Now
            </button>

            <Link
              href="/all-courses"
              className="block text-center text-sm text-gray-500 hover:text-blue-600 transition mt-3"
            >
              ← Back to Courses
            </Link>

            <hr className="my-6 border-gray-100" />

            <div className="space-y-2 text-sm text-gray-500">
              <p>✓ {course.duration} on-demand video</p>
              <p>✓ Certificate of completion</p>
              <p>✓ Mobile & desktop access</p>
              <p>✓ Community support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesDetails;
