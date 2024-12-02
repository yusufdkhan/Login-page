import React, { useEffect, useRef, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  ThemeContext,
  ThemeProvider,
  useTheme,
} from "../../../context/themeContext";

const FormUi = ({ data }) => {
  // const  {handleReportData}=useTheme()
  const [error, setError] = useState(null);

  const { setFormData } = useTheme();

  let navigate = useNavigate();
  const emailRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const passwordRef = useRef();

  const signHandler = async (e) => {
    e.preventDefault();
    let formData = {
      email: emailRef.current.value,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      password: passwordRef.current.value,
    };
    setFormData(formData);

    try {
      let userCredentials = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
        formData.firstName
      );
      console.log(userCredentials.user);
      navigate("/login");
    } catch (error) {
      console.log("signup error", error);

      setError(error.message);
    }
  };

  const signInhandler = async (e) => {
    e.preventDefault();
    let formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      let userCredentialsSign = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log(userCredentialsSign.user);

      localStorage.setItem("email", JSON.stringify(formData.email));
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    let user = localStorage.getItem("email");
    if (user) navigate("/dashboard");
  }, []);

  return (
    <div className="bg-gradient-to-r from-green-50 to-green-100 flex flex-col gap-12 p-12 justify-center items-center min-h-screen">
      <h1 className="text-4xl font-bold text-green-800">
        {data.type === "Sign Up" ? "Sign Up" : "Login"}
      </h1>
      <form className="bg-white p-8 rounded-lg shadow-lg flex flex-col gap-6 w-full max-w-md">
        {data.type === "Sign Up" && (
          <>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                First Name
              </label>
              <input
                ref={firstNameRef}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                type="text"
                placeholder="Enter your First name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Last Name
              </label>
              <input
                ref={lastNameRef}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                type="text"
                placeholder="Enter your Last name"
                required
              />
            </div>
          </>
        )}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Email
          </label>
          <input
            ref={emailRef}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            type="email"
            placeholder="Enter your email"
            required
            autoComplete="email"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Password
          </label>
          <input
            ref={passwordRef}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="flex justify-between pt-6">
          <Link
            className="bg-blue-600 px-6 py-3 rounded-lg text-white text-lg font-semibold hover:bg-blue-700 transition duration-300"
            to="/"
            type="button"
          >
            Back
          </Link>
          <button
            onClick={
              data.buttonText === "Sign Up" ? signHandler : signInhandler
            }
            className="bg-green-600 px-6 py-3 rounded-lg text-white text-lg font-semibold hover:bg-green-700 transition duration-300"
            to={data.buttonLink}
          >
            {data.buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormUi;
