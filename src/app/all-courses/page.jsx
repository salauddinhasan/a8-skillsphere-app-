import ServicesCard from "@/components/ServicesCard";
import Link from "next/link";

const categories = ["All", "Development", "Design", "Security", "Database"];

const AllCourses = async ({ searchParams }) => {
  const res = await fetch(
    "https://skillsphere-project-phi.vercel.app//data.json",
    {
      cache: "no-store",
    },
  );
  const courses = await res.json();

  const params = await searchParams;
  const selectedCategory = params?.category || "All";
  const searchQuery = params?.search || "";

  // Filter — category + search দুটো একসাথে
  const filtered = courses.filter((course) => {
    const matchCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    const matchSearch = course.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 min-h-screen">
      {/* Search Form */}
      <div className="max-w-2xl mx-auto mb-8">
        <form method="GET" action="/all-courses" className="flex gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
              name="search"
              defaultValue={searchQuery}
              placeholder="Search courses by title..."
              className="w-full border-2 border-gray-200 rounded-2xl px-5 py-3.5 text-sm outline-none focus:border-blue-500 transition shadow-sm"
            />
          </div>
          <input type="hidden" name="category" value={selectedCategory} />
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3.5 rounded-2xl font-bold hover:bg-blue-700 transition shadow-md shadow-blue-200 whitespace-nowrap"
          >
            Search
          </button>
        </form>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-10 justify-center">
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/all-courses?category=${cat}&search=${searchQuery}`}
            className={`px-6 py-2.5 rounded-2xl text-sm font-bold transition-all duration-200 border-2
        ${
          selectedCategory === cat
            ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200"
            : "bg-white text-gray-600 border-gray-200 hover:border-blue-400 hover:text-blue-600 hover:shadow-sm"
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
