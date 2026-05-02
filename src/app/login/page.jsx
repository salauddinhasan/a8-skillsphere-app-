"use client";
import { authClient } from "@/lib/auth-client";
import { addToast } from "@heroui/toast";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoLogoGoogle } from "react-icons/io";
import { GrGoogle } from "react-icons/gr";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (error) {
      alert(error.message || "Invalid email or password!");
      // addToast({
      //   title: "Login Failed",
      //   description: error.message || "Invalid email or password!",
      //   color: "danger",
      // });
    } else {
      // addToast({
      //   title: "Welcome Back!",
      //   description: "Successfully logged in to SkillSphere",
      //   color: "success",
      // });
      router.push("/");
      router.refresh();
    }
    setLoading(false);
  };

    const handleGoogleLogin = async () => {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] py-10 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-600">Welcome Back</h2>
          <p className="text-gray-500 text-sm mt-2">
            Login to your SkillSphere account
          </p>
        </div>

        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
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
          <TextField isRequired name="password" type="password">
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
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
            Sign In
          </Button>
        </Form>

        {/* Divider */}
        <div className="flex items-center my-6 gap-2">
          <div className="h-[1px] bg-gray-200 flex-grow"></div>
          <span className="text-xs text-gray-400 uppercase">or</span>
          <div className="h-[1px] bg-gray-200 flex-grow"></div>
        </div>

        {/* Google Login */}
        <Button
          variant="outline"
            onPress={handleGoogleLogin}
          className="w-full font-medium"
          size="lg"
          startContent={<IoLogoGoogle className="text-xl" />}
        >
          <GrGoogle />
          Continue with Google
        </Button>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
