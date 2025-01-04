"use client";

import AuthForm from "@/components/auth-form";
import React from "react";

const SignIn: React.FC = () => {
    return (
        <AuthForm
            title="Login"
            subtitle="Please login using account details below."
            actionText="Sign In"
            actionLink="/signup"
        />
    );
};

export default SignIn;
