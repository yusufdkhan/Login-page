import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import {
  ThemeContext,
  ThemeProvider,
  useTheme,
} from "../../context/themeContext";

const Report = () => {
  const location = useLocation();
  console.log(location, "location");
  const { data = [] } = location.state || {};
  // console.log(formData, "ggggggg");
  const { formData } = useTheme();
  console.log(formData, "formdatacontext");

  return (
    <div className="p-8 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-8 text-blue-800">
        Student Login Report
      </h1>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {data.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-blue-600">
                  {formData && formData.firstName
                    ? formData.firstName
                    : "No user found"}
                </h2>
              </div>
              <div className="text-gray-700">
                <p className="mb-2">
                  <span className="font-semibold">Date:</span> {item.date}
                </p>
                <p>
                  <span className="font-semibold">SignIn Time:</span>
                  {item.time}
                </p>
                <p>
                  <span className="font-semibold">SignOut Time:</span>
                  {item.signout}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-600 mt-12">
          No students have logged in yet.
        </p>
      )}
    </div>
  );
};

export default Report;
