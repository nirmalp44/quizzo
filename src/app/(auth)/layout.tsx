
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName =usePathname();
 
  return (
    <html lang="en">
      <body>
        <nav>
          {navLinks.map((link) => {
            const isActive = pathName.startsWith( link.href);
            return <Link href={link.href} key={link.name} 
            className={isActive? "font-bold mr-4": "text-green-500 mr-4"}
            >
              {link.name}
            </Link>;
          })}
        </nav>
        {children}
      </body>
    </html>
  );
}
