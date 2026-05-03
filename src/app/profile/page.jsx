"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { BiEdit } from "react-icons/bi";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <p className="text-gray-500 text-lg">Please login to view profile</p>
        <Link
          href="/login"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="grid grid-cols-12 gap-4 mb-6">

        {/* Left — Avatar Card */}
        <div className="col-span-12 md:col-span-4 bg-white border shadow-xl border-gray-200 rounded-2xl p-8 text-center">
          <img
            src={user.image || "/default-avatar.png"}
            alt={user.name}
            className="w-24 h-24 rounded-full border-4 border-gray-100 shadow-sm object-cover mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
          <p className="text-gray-500 text-sm mt-1">{user.email}</p>
          <span className="inline-block border border-gray-300 text-gray-600 text-xs font-semibold px-4 py-1 rounded-full mt-3">
            Active Member
          </span>
        </div>

        {/* Right — Info Card */}
        <div className="col-span-12 md:col-span-8 bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Profile Information
          </h3>
          <ul className="divide-y divide-gray-100">
            <li className="flex justify-between items-center py-3">
              <span className="text-sm text-gray-400 font-semibold uppercase tracking-wider">
                Full Name
              </span>
              <span className="text-sm font-bold text-gray-800">
                {user.name}
              </span>
            </li>
            <li className="flex justify-between items-center py-3">
              <span className="text-sm text-gray-400 font-semibold uppercase tracking-wider">
                Email
              </span>
              <span className="text-sm font-bold text-gray-800">
                {user.email}
              </span>
            </li>
            <li className="flex justify-between items-center py-3">
              <span className="text-sm text-gray-400 font-semibold uppercase tracking-wider">
                Account Status
              </span>
              <span className="bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                Active
              </span>
            </li>
            <li className="flex justify-between items-center py-3">
              <span className="text-sm text-gray-400 font-semibold uppercase tracking-wider">
                Member Since
              </span>
              <span className="text-sm font-bold text-gray-800">
                {user.createdAt ? new Date(user.createdAt).toISOString().split("T")[0] : "N/A"}
              </span>
            </li>
          </ul>

          {/* Update Button */}
          <div className="mt-6">
            <Link
              href="/profile/update"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-semibold py-2.5 px-6 rounded-xl hover:bg-gray-100 hover:border-gray-400 transition-all duration-200"
            >
              <BiEdit size={18} />
              Edit Profile
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;