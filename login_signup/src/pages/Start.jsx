import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">Welcome to PopX</h1>
      <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Link to="/signup" className="bg-purple-600 text-white px-4 py-2 rounded mt-4">Create Account</Link>
      <Link to="/login" className="bg-purple-300 text-white px-4 py-2 rounded mt-2">Already Registered? Login</Link>
    </div>
  );
}
