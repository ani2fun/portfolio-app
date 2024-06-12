import React from "react";

const Page = ({params}: { params: { slug: string } }) => {
    return (
        <section className="container min-h-screen px-8 rounded-lg shadow-md pt-32">
            <div className="w-full flex flex-col text-center justify-center">
                <h1 className="text-6xl font-bold mb-8">
                    <span className={`text-red-500`}>Blog </span>
                    <span className={`text-green-500`}>section </span>
                    <span className={`text-blue-500`}>is </span>
                    <span className={`text-yellow-500`}>coming </span>
                    <span className={`text-purple-500`}>soon </span>
                    <span className="text-green-700">...</span>
                </h1>
                <p className="text-4xl font-semibold text-orange-500">Stay tuned!</p>
            </div>
        </section>
    );
};

export default Page;
