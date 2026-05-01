import ServicesCard from "@/components/ServicesCard";

const AllCourses = async () => {
  const res = await fetch(
    "https://a8-skillsphere-app-mjfx.vercel.app/data.json",
    {
      next: { revalidate: 3600 },
    },
  );
  const courses = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 min-h-screen">
      <div className="text-center pb-5">
        <h1 className="text-3xl md:text-4xl font-black text-gray-800 tracking-tight uppercase">
          All Courses
        </h1>
        <p className="text-gray-500 mt-2 font-medium">
          Showing {courses.length} premium courses designed for your career
          growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <ServicesCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
