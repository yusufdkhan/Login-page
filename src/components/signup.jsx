import React from "react";
import FormUi from "./ui/form";

const Signup = () => {
  const SignUpData = {
    type: "Sign Up",
    // username: "First Name"
    buttonText: "Sign Up",
    buttonLink: "/login",
  };
  return (
    <div>
      <FormUi data={SignUpData} />
    </div>
  );
};

export default Signup;
