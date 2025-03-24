import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
  <div className="flex flex-col  mt-auto pb-8 mx-4">
    <h1 className="text-2xl font-bold pb-2">Welcome to PopX</h1>
    <p className="text-gray-500 pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <Link to="/signup" className="bg-purple-600 text-white px-4 py-2 rounded mt-4 text-center font-bold">
      Create Account
    </Link>
    <Link to="/login" className= "bg-purple-300 text-black font-bold px-4 py-2 rounded mt-2 text-center">
      Already Registered? Login
    </Link>
  </div>
</div>

  );
}
