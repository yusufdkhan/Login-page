import React from "react";
import FormUi from "./ui/form";
 

const Login = () => {
  const loginData = {
    type: "login",
    buttonText: "Login",
    buttonLink: "/dashboard",
  };

  return (
    <div className="bg-gradient-to-r from-green-50 to-green-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <FormUi data={loginData} />
      </div>
    </div>
  );
};
//
export default Login;
