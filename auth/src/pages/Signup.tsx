import { lazy, Suspense } from "react";
import AuthLayout from "../components/AuthLayout";
import { Link } from "react-router-dom";

const Button = lazy(() => import("ui/Button"));
const Input = lazy(() => import("ui/Input"));

export const Signup = () => (
  <AuthLayout title="Create Account" subtitle="Sign up to get started">
    <form className="space-y-4">
      <Input label="Full Name" type="text" placeholder="John Doe" />
      <Input label="Email" type="email" placeholder="you@example.com" />
      <Input label="Password" type="password" placeholder="••••••••" />
      <Suspense fallback={<div>Loading...</div>}>
        <Button className="w-full">Sign Up</Button>
      </Suspense>
      <p className="text-center text-sm text-gray-600 mt-4">
        Already have an account?{" "}
        <Link to=".." className="text-amber-600 hover:underline">
          Login
        </Link>
      </p>
    </form>
  </AuthLayout>
);
