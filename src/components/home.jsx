import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/themeContext";

const Home = () => {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { mode, handleMode } = useTheme();
  let handleSignup = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/signup");
    }, 1000);
  };

  useEffect(() => {
    let user = localStorage.getItem("email");

    if (user) {
      navigate("/dashboard");
    } else {
      return;
    }
  }, []);

  return (
    <div className="bg-gradient-to-r from-green-50 to-green-100 min-h-screen flex flex-col justify-center items-center">
      <button onClick={() => handleMode()}>
        {mode === "dark" ? (
          <span className="text-white bg-black">Dark</span>
        ) : (
          <span>light</span>
        )}
      </button>
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <>
          <h1 className="text-5xl font-bold text-green-800 mb-12">Welcome</h1>
          <div className="flex justify-center gap-8">
            <Link
              to="/login"
              className="bg-green-600 px-8 py-4 rounded-lg text-white text-xl font-semibold shadow-md hover:bg-green-700 transition duration-300 transform hover:scale-105"
            >
              Login
            </Link>
            <button
              onClick={handleSignup}
              className="bg-blue-600 px-8 py-4 rounded-lg text-white text-xl font-semibold shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Sign Up
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
