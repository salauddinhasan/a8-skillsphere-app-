"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import { addToast } from "@heroui/toast";

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;

    const { error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
      callbackURL: "/login",
    });

    if (error) {
      addToast({
        title: "Registration Failed",
        description: error.message || "Something went wrong!",
        color: "danger",
      });
    } else {
      addToast({
        title: "Account Created!",
        description: "Please login to continue.",
        color: "success",
      });
      router.push("/login");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] py-10 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-600">Create Account</h2>
          <p className="text-gray-500 text-sm mt-2">
            Join thousands of learners today
          </p>
        </div>

        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
          {/* Name */}
          <TextField isRequired name="name">
            <Label>Full Name</Label>
            <Input placeholder="John Doe" className="bg-sky-50" />
            <FieldError />
          </TextField>

          {/* Photo URL */}
          <TextField name="image" type="url">
            <Label>Photo URL</Label>
            <Input
              placeholder="https://example.com/photo.jpg"
              className="bg-sky-50"
            />
          </TextField>

          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8)
                return "Password must be at least 8 characters";
              if (!/[A-Z]/.test(value))
                return "Need at least one uppercase letter";
              if (!/[0-9]/.test(value)) return "Need at least one number";
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              At least 8 characters, 1 uppercase, and 1 number
            </Description>
            <FieldError />
          </TextField>

          {/* Submit */}
          <Button
            color="primary"
            type="submit"
            isLoading={loading}
            className="w-full font-bold mt-2"
            size="lg"
          >
            Create Account
          </Button>
        </Form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
