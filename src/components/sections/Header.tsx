"use client";

import Link from "next/link";
import ToggleMode from "@/components/ToggleMode";
import {useState} from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const menuLinks = [
        {href: "#about", label: "About"},
        {href: "#experience", label: "Experience"},
        {href: "#projects", label: "Projects"},
        // { href: "/blogs", label: "Blogs" },
    ];

    const renderMenu = () => (
        <ul className="flex flex-col items-center space-y-5 bg-white dark:bg-background p-5"> {/* Added padding for better visibility */}
            {menuLinks.map((link) => (
                <li key={link.href}>
                    <Link href={link.href} className="font-semibold hover:text-primary dark:hover:text-primary"
                          onClick={toggleMenu}>
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    );

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-950 shadow-md">
            {/* Navigation */}
            <nav className="container mx-auto p-5 flex justify-between items-center">
                <div className="text-3xl font-bold text-primary dark:text-primary">
                    Aniket Kakde
                </div>
                <div className="hidden md:flex space-x-5">
                    {menuLinks.map((link) => (
                        <Link key={link.href} href={link.href}
                              className="px-3 py-2 hover:bg-primary dark:hover:bg-primary hover:text-gray-50 text-xl font-semibold rounded">
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div className="hidden md:flex">
                    <ToggleMode/>
                </div>
                <button className="md:hidden" onClick={toggleMenu}>
                    {menuOpen ? (
                        <svg className="w-10 h-10 text-primary dark:text-primary hover:text-rose-500"
                             fill="none"
                             stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                                  d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    ) : (
                        <svg className="w-10 h-10 text-primary dark:text-primary hover:text-rose-500"
                             fill="none"
                             stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    )}
                </button>
            </nav>
            {/* Mobile Navigation */}
            {menuOpen && (
                <nav className="md:hidden">
                    {renderMenu()}
                </nav>
            )}
        </header>
    );
};

export default Header;
