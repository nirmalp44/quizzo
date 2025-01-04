import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { login, userSignUp } from "@/state/auth/authSlice";
import { RootState } from "@/state/store";
import { useRouter } from "next/navigation";

interface AuthFormProps {
    title: string;
    subtitle: string;
    actionText: string;
    actionLink: string;
    isSignUp?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({
    title,
    subtitle,
    actionText,
    actionLink,
    isSignUp = false,
}) => {
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const router = useRouter();

    const dispatch = useDispatch();
    const { isAuthenticated, errorMessage } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            router.push("/question-one");
        }

    }, [isAuthenticated, router])

    const isFormValid = email && password && (isSignUp ? name : true);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (isSignUp && isFormValid) {
            dispatch(userSignUp({ name, email, password }));
            router.push("/signin");

        } else if (isFormValid && !isSignUp) {
            dispatch(login({ email, password }));


        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h1 className="text-2xl font-semibold text-center mb-4">{title}</h1>
                <p className="text-center text-gray-600 mb-6">{subtitle}</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {isSignUp && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md mt-2"
                            />
                        </div>
                    )}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-3 border border-gray-300 rounded-md mt-2"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-3 border border-gray-300 rounded-md mt-2"
                        />
                    </div>
                    <div className="pt-1">
                        {errorMessage && (
                            <span className="text-red-500 text-sm ">{errorMessage}</span>
                        )}
                    </div>
                    <button
                        type="submit"
                        className={`w-full bg-[#FB2E86] text-white font-bold py-2 rounded-md hover:bg-[#cf2770] transition ${!isFormValid ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                        disabled={!isFormValid}
                    >
                        {actionText}
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    {actionLink === "/signup" ? "Don’t have an account? ": "Already have an account? " }
                    <Link href={actionLink} className="text-blue-500 hover:underline">
                        {actionLink === "/signup" ? "Sign up":"Please Login" }
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default AuthForm;
