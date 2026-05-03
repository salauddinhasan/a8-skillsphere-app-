"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UpdateProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const name = e.target.name.value;
    const image = e.target.image.value;

    const { error } = await authClient.updateUser({
      name,
      image,
    });

    if (error) {
      alert(error.message || "Update failed!");
    } else {
      alert("Profile updated successfully!");
      router.push("/profile");
      router.refresh();
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-black text-sky-600 mb-8">Update Profile</h2>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        {/* Current Avatar */}
        <div className="flex justify-center mb-6">
          <Image
            src={user?.image || "/default-avatar.png"}
            alt={user?.name || "User"}
            width={80}
            height={80}
            loading="eager"
            className="w-20 h-20 rounded-full border-4 border-gray-100 shadow-sm object-cover"
          />
        </div>

        <form onSubmit={handleUpdate} className="flex flex-col gap-5">
          {/* Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.name}
              placeholder="Enter your name"
              className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 transition"
              required
            />
          </div>

          {/* Image URL */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-600">
              Photo URL
            </label>
            <input
              type="url"
              name="image"
              defaultValue={user?.image}
              placeholder="https://example.com/photo.jpg"
              className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 transition"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-2">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition disabled:opacity-50"
            >
              {loading ? "Updating..." : "Update Information"}
            </button>
            <button
              type="button"
              onClick={() => router.back()}
              className="flex-1 border border-gray-300 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfilePage;
