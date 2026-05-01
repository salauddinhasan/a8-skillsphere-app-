import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[45vh] px-4 text-center">
      <h1 className="text-9xl font-extrabold text-sky-100 relative">
        404
        <span className="absolute inset-0 flex items-center justify-center text-4xl text-gray-800">
          Oops!
        </span>
      </h1>
      <h2 className="text-2xl font-bold text-gray-800 mt-4">Page Not Found</h2>
      <p className="text-gray-500 mt-2 mb-8 max-w-sm">
        The page you are looking for might have been removed or had its name
        changed.
      </p>
      <Link
        href="/"
        className="px-8 py-3 bg-sky-500 text-white font-bold rounded-xl hover:bg-sky-600 transition-all shadow-lg shadow-sky-200"
      >
        Back to Home
      </Link>
    </div>
  );
}
