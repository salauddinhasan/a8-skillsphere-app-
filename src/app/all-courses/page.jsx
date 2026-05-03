import ServicesCard from "@/components/ServicesCard";
import Link from "next/link";

const categories = ["All", "Development", "Design", "Security", "Database"];

const AllCourses = async ({ searchParams }) => {
  // ✅ আগে data fetch করো
  const res = await fetch("http://localhost:3000/data.json", {
    next: { revalidate: 3600 },
  });
  const courses = await res.json();

  // ✅ তারপর searchParams নাও
  const params = await searchParams;
  const selectedCategory = params?.category || "All";

  // ✅ তারপর filter করো
  const filtered =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 min-h-screen">
      {/* Header */}
      <div className="text-center pb-8">
        <h1 className="text-3xl md:text-4xl font-black text-gray-800 tracking-tight uppercase">
          All Courses
        </h1>
        <p className="text-gray-500 mt-2 font-medium">
          Showing {filtered.length} premium courses designed for your career
          growth.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/all-courses?category=${cat}`}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition border
              ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-600 border-gray-200 hover:border-blue-400 hover:text-blue-600"
              }`}
          >
            {cat}
          </Link>
        ))}
      </div>

      {/* No Result */}
      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">No courses found!</p>
          <Link
            href="/all-courses"
            className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
          >
            Clear Filter
          </Link>
        </div>
      )}

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((course) => (
          <ServicesCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
