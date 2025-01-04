"use client";

import AuthForm from "@/components/auth-form";
import React from "react";

const SignUp: React.FC = () => {
  return (
    <AuthForm
      title="Register"
      subtitle="Please register using account details below."
      actionText="Sign Up"
      actionLink="/signin"
      isSignUp={true}
    />
  );
};

export default SignUp;
