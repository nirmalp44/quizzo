"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-white to-[#fd96c2] p-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-white text-2xl font-bold">Quizzo</Link>
                <div className="hidden md:flex space-x-6">
                    <Link href="/signin" className="text-white hover:text-gray-200">Sign In</Link>
                    <Link href="/signup" className="text-white hover:text-gray-200">Sign Up</Link>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white"
                    >
                        {isMobileMenuOpen ? "✖" : "☰"}
                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#FB2E86] p-4 space-y-4">
                    <Link href="/signin" className="text-white block">Sign In</Link>
                    <Link href="/signup" className="text-white block">Sign Up</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
