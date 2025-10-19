import { type ReactNode } from "react";

interface AuthLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const AuthLayout = ({ title, subtitle, children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-semibold text-center text-gray-800">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm text-center text-gray-500 mt-1">{subtitle}</p>
        )}
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
