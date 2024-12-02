import React, { useState, useEffect, useContext } from "react";
import { Link, useFetcher, useNavigate } from "react-router-dom";
import { useTheme } from "../../../context/themeContext";

const Dashboards = () => {
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [active, setActive] = useState(true);

  const navigate = useNavigate();

  const { formData } = useTheme();
  console.log(formData, "ghhhgg");

  const signInHandler = () => {
    setData((prev) => [
      ...prev,
      {
        date: date,
        time: time,
        signout: null,
      },
    ]);

    setCurrentIndex(data.length);
    setActive(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("email");
    navigate("/login");
  };

  const signOutHandler = () => {
    const currentTime = new Date().toLocaleTimeString();
    setData((prev) =>
      prev.map((item, index) =>
        index === currentIndex ? { ...item, signout: currentTime } : item
      )
    );
    setActive(true);
  };

  return (
    <div className="bg-gradient-to-r from-green-50 to-green-100 min-h-screen flex flex-col justify-center items-center">
      <button
        onClick={handleLogout}
        // state={{ data }}
        className="px-6 py-3 m-4 self-end  bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300 transform hover:scale-105"
      >
        LOGOUT
      </button>
      <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center space-y-6">
        <h1 className="text-4xl font-bold text-green-800">
          {" "}
          {formData && formData.firstName ? formData.firstName : "No user"}
        </h1>
        <div className="text-center">
          <p className="text-xl text-gray-700 mb-2">Current Date</p>
          <p className="text-2xl font-semibold text-gray-900">{date}</p>
          <p className="text-xl text-gray-700 mt-4 mb-2">Current Time</p>
          <p className="text-2xl font-semibold text-gray-900">{time}</p>
        </div>
        {active === true ? (
          <button
            onClick={signInHandler}
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300 transform hover:scale-105"
          >
            SIGN IN
          </button>
        ) : (
          <button
            onClick={signOutHandler}
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300 transform hover:scale-105"
            disabled={active === true}
          >
            SIGN OUT
          </button>
        )}

        <Link
          to="/report"
          state={{ data }}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
        >
          View Report
        </Link>
      </div>
    </div>
  );
};

export default Dashboards;
