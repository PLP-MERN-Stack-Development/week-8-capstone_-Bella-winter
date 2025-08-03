
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
   const isAuthenticated = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token"); // or sessionStorage.removeItem("token")
    navigate("/login"); // redirect to login page
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div>
        <Link to="/" className="text-xl font-bold">MyApp</Link>
      </div>
      <div className="flex space-x-4">
        {isAuthenticated ? (
          <>
        <Link to="/dashboard" className="hover:text-gray-400">Dashboard</Link>
        <Link to="/profile" className="hover:text-gray-400">Profile</Link>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
        >
          Logout
        </button>
        </>
        ) : (
          <>
            <Link to="/login" className="hover:text-gray-400">Login</Link>
            <Link to="/register" className="hover:text-gray-400">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
