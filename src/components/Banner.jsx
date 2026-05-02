"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const slides = [
  {
    badge: "NEW — 200+ Courses Added This Month",
    title: "Upgrade Your Skills",
    highlight: "Today",
    subtitle:
      "Learn from industry experts. Master Web Development, Design, Marketing and more — at your own pace.",
  },
  {
    badge: "TRENDING — Web Development",
    title: "Master Full Stack",
    highlight: "Development",
    subtitle:
      "Build real-world projects with React, Node.js, and MongoDB from scratch.",
  },
  {
    badge: "HOT — Design Courses",
    title: "Learn UI/UX",
    highlight: "Design",
    subtitle:
      "Create stunning interfaces and user experiences with industry tools.",
  },
];

const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative py-20 overflow-hidden">

              {/* Background Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 blur-[120px] opacity-20">
                <div className="aspect-square bg-gradient-to-tr from-blue-400 to-pink-400 rounded-full w-[500px]"></div>
              </div>

              <div className="container mx-auto px-6 text-center space-y-8">

                {/* Badge */}
                <div className="flex justify-center">
                  <p className="bg-red-500/10 text-red-500 border border-red-200/50 rounded-full px-4 py-1 text-sm font-medium">
                    {slide.badge}
                  </p>
                </div>

                {/* Heading */}
                <div className="max-w-4xl mx-auto">
                  <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-gray-900">
                    {slide.title} <br />
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                      {slide.highlight}
                    </span>
                  </h1>
                </div>

                {/* Subtitle */}
                <div className="max-w-2xl mx-auto">
                  <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                    {slide.subtitle}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <Link
                    href="/all-courses"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full transition shadow-lg"
                  >
                    Explore Courses
                  </Link>
                  <Link
                    href="/register"
                    className="border border-gray-300 hover:border-gray-500 text-gray-900 font-bold px-8 py-3 rounded-full transition"
                  >
                    Get Started Free
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-gray-200 mt-10">
                  <div className="space-y-1">
                    <h2 className="text-3xl font-bold text-gray-900">50K+</h2>
                    <p className="text-gray-500 text-sm">Students</p>
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-3xl font-bold text-gray-900">200+</h2>
                    <p className="text-gray-500 text-sm">Courses</p>
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-3xl font-bold text-gray-900">50+</h2>
                    <p className="text-gray-500 text-sm">Instructors</p>
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-3xl font-bold text-gray-900">4.8</h2>
                    <p className="text-gray-500 text-sm">Avg Rating</p>
                  </div>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;