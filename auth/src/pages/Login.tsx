import { lazy, Suspense } from "react";
import AuthLayout from "../components/AuthLayout";
import { Link } from "react-router-dom";
const Button = lazy(() => import("ui/Button"));
const Input = lazy(() => import("ui/Input"));

export const Login = () => (
  <AuthLayout title="Welcome Back 👋" subtitle="Sign in to your account">
    <form className="space-y-4">
      <Input label="Email" type="email" placeholder="you@example.com" />
      <Input label="Password" type="password" placeholder="••••••••" />
      <div className="text-right">
        <Link
          to="forgot-password"
          className="text-sm text-amber-600 hover:underline"
        >
          Forgot password?
        </Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Button className="w-full">Login</Button>
      </Suspense>
      <p className="text-center text-sm text-gray-600 mt-4">
        Don't have an account?{" "}
        <Link to="signup" className="text-amber-600 hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  </AuthLayout>
);
