"use client";

import Link from "next/link";

const Hero = () => {
    return (
        <section id="hero"
                 className="min-h-screen flex items-center justify-center px-8 rounded-lg shadow-md">
            <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100 relative mb-6">
                    Hi! My name is
                    <span className="block text-5xl md:text-6xl font-bold mt-3 text-blue-700 dark:text-blue-700">
            Aniket Kakde
          </span>
                </h1>
                <p className="text-lg md:text-3xl mt-2 md:mt-8 text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
                    <span>I&apos;m a </span>
                    <span className="font-bold text-blue-600 dark:text-blue-400">Software Engineer </span>
                    <span className="font-semibold text-2xl text-blue-600 dark:text-blue-400">(Full Stack).</span>
                    <br/>
                    <span
                        className={`text-2xl`}>Turning ideas into clean, practical, and rapid software experiences.</span>
                </p>
                <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
                    <Link href="mailto:aniket.kakde.work@gmail.com?subject=Hi! | kakde.eu"
                          className="font-semibold border-2 border-blue-600 dark:bg-gray-100 dark:hover:bg-gray-900 text-blue-900 hover:text-gray-50 hover:bg-sky-400 py-2 px-6 rounded-md transition duration-300">
                        Contact Me
                    </Link>
                    <Link href="/ANIKET-KAKDE-CV-EN.pdf"
                          className="font-semibold border-2 border-blue-600 bg-blue-600 text-gray-50 hover:bg-gray-50 hover:text-slate-900 py-2 px-6 rounded-md transition duration-300">
                        Get My CV
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
