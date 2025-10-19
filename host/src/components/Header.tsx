import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 text-amber-500 border-b-1">
      <h1 className="text-xl font-bold">MicroNotes</h1>
      <nav className="space-x-4 text-amber-800">
        <Link to="/auth" className="hover:underline">
          Login
        </Link>
        <Link to="/auth/signup" className="hover:underline">
          Sign Up
        </Link>
      </nav>
    </header>
  );
};

export default Header;
