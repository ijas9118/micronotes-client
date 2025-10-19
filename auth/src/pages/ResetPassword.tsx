import { lazy, Suspense } from "react";
import AuthLayout from "../components/AuthLayout";
import { Link } from "react-router-dom";

const Button = lazy(() => import("ui/Button"));
const Input = lazy(() => import("ui/Input"));

export const ResetPassword = () => (
  <AuthLayout title="Reset Password" subtitle="Set your new password">
    <form className="space-y-4">
      <Input label="New Password" type="password" placeholder="••••••••" />
      <Input label="Confirm Password" type="password" placeholder="••••••••" />
      <Suspense fallback={<div>Loading...</div>}>
        <Button variant="secondary" className="w-full">
          Reset Password
        </Button>
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
