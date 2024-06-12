"use client";

import Hero from "@/components/sections/Hero";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Experience from "@/components/sections/Experience";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";

export default function Home() {
    return (
        <main className="container">
            <Header/>
            <Hero/>
            <About/>
            <Experience/>
            <Projects/>
            <Footer/>
        </main>
    );
}
