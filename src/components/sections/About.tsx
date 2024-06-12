"use client";

import Image from "next/image";

const About = () => {
    return (
        <section id="about" className="min-h-screen px-8 rounded-lg shadow-md pt-32">
            <div className="w-full grid grid-cols-1 lg:grid-cols-10 gap-8">
                <div className="col-span-full lg:col-span-6 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-blue-700 mb-6">About Me</h2>
                    <p className="text-gray-700 mb-6 text-lg md:text-3xl leading-relaxed dark:text-gray-300">
                        I am an experienced Software Engineer with over <span className="text-blue-700 font-semibold">8+ years</span> of
                        expertise in developing scalable
                        applications and web services, proficient in Java technologies like Spring Boot and Play
                        Framework, and building user-friendly frontends with React and deploying applications on AWS,
                        GCP, or on-premise (like this website!).
                    </p>
                    <p className="text-gray-700 mb-6 text-lg md:text-3xl leading-relaxed dark:text-gray-300">At <span
                        className="text-green-700 font-bold">Europcar International</span>,
                        I am currently working on backend development, designing and implementing robust APIs and
                        microservices.</p>
                    <p className="text-gray-700 mb-6 text-lg md:text-3xl leading-relaxed dark:text-gray-300">
                        I hold a <span className="font-bold text-blue-700">Master’s</span> in <span
                        className="font-bold text-blue-700">Information Technology </span> from
                        Institut supérieur d’électronique de Paris
                        and a <span className="font-bold text-blue-700">Bachelor of
                        Engineering</span> in <span className="font-bold text-blue-700">Electronics and Telecommunications </span> from
                        the University of
                        Mumbai.
                    </p>
                    <p className="text-gray-700 mb-6 text-lg md:text-3xl leading-relaxed dark:text-gray-300">
                        I am proficient in a range of programming languages and tools, including Java, Scala, Kotlin,
                        Python, and JavaScript/TypeScript, and I contribute to open-source projects like the Gradle
                        plugin for publishing artifacts to Sonatype Maven Central.
                    </p>
                </div>
                <div className="col-span-full lg:col-span-4">
                    <div className="grid grid-cols-8 grid-rows-8 gap-2">
                        <div className="row-start-2 row-span-3 col-start-2 col-span-3 relative">
                            <Image
                                src="/img/portfolio/image1.jpg"
                                alt="Image 1"
                                width="100"
                                height="100"
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="inset-0 bg-blue-200 dark:bg-blue-600 opacity-50 rounded-lg"></div>
                        </div>
                        <div className="row-start-5 row-span-4 col-span-4 relative">
                            <Image
                                src="/img/portfolio/image2.jpg"
                                alt="Image 2"
                                width="100"
                                height="100"
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="inset-0 bg-blue-200 dark:bg-blue-600 opacity-50 rounded-lg"></div>
                        </div>
                        <div className="row-start-1 row-span-5 col-start-5 col-span-3 relative">
                            <Image
                                src="/img/portfolio/image3.jpg"
                                alt="Image 3"
                                width="100"
                                height="100"
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="inset-0 bg-blue-200 dark:bg-blue-600 opacity-50 rounded-lg"></div>
                        </div>
                        <div className="row-start-6 row-span-2 col-start-5 col-span-2 relative">
                            <Image
                                src="/img/portfolio/image4.jpg"
                                alt="Image 4"
                                width="100"
                                height="100"
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="inset-0 bg-blue-200 dark:bg-blue-600 opacity-50 rounded-lg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
