"use client";

import Link from "next/link";
import ToggleMode from "@/components/ToggleMode";

const Footer = () => {
    return (
        <footer className="container sticky top-[100vh] md:p-12 p-5 rounded-lg shadow-md">
            <div className="flex flex-auto place-content-between pt-5">
                <div
                    className="items-center max-md:hidden text-xl font-semibold">Made with
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                         className="custom-icon w-8 h-8 inline-block hover:animate-pulse text-rose-600 hover:text-gray-50 mx-1">
                        <path fill="currentColor"
                              d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
                    </svg>in Paris by Aniket &copy; 2024
                </div>
                <div className="hidden md:items-center">
                    <ToggleMode/>
                </div>
                <div className="items-center">
                    <div
                        className="flex flex-row col-span-full md:col-span-3 justify-center md:justify-end order-2 md:order-3 my-4 md:my-0">
                        <Link href="https://www.linkedin.com/in/aniketkakde/" rel="noopener noreferrer"
                              target="_blank"
                              className="hover:scale-125 mx-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300 transition-transform duration-100">
                            <svg role="img" viewBox="0 0 24 24" className="custom-icon w-8 h-8"
                                 xmlns="http://www.w3.org/2000/svg">
                                <title>LinkedIn</title>
                                <path fill="currentColor"
                                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </Link>
                        <Link href="https://github.com/ani2fun" rel="noopener noreferrer" target="_blank"
                              className="hover:scale-125 mx-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300 transition-transform duration-100">
                            <svg role="img" viewBox="0 0 24 24" className="custom-icon w-8 h-8"
                                 xmlns="http://www.w3.org/2000/svg">
                                <title>GitHub</title>
                                <path fill="currentColor"
                                      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.235-3.221-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.957-.267 1.98-.4 3-.405 1.02.005 2.043.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.221 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.21 0 1.595-.015 2.875-.015 3.27 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
