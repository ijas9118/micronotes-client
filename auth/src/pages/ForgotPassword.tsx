import { lazy, Suspense } from "react";
import AuthLayout from "../components/AuthLayout";
import { Link } from "react-router-dom";

const Button = lazy(() => import("ui/Button"));
const Input = lazy(() => import("ui/Input"));

export const ForgotPassword = () => (
  <AuthLayout
    title="Forgot Password"
    subtitle="Enter your email to reset password"
  >
    <form className="space-y-4">
      <Input label="Email" type="email" placeholder="you@example.com" />
      <Suspense fallback={<div>Loading...</div>}>
        <Button className="w-full">Send Reset Link</Button>
      </Suspense>
      <p className="text-center text-sm text-gray-600 mt-4">
        Remembered your password?{" "}
        <Link to=".." className="text-amber-600 hover:underline">
          Login
        </Link>
      </p>
    </form>
  </AuthLayout>
);
