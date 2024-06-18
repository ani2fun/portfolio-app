import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "next-themes";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Aniket Kakde - Portfolio",
    description: "Welcome to the personal portfolio of Aniket Kakde, showcasing experiences and projects.",
    keywords: "Aniket Kakde, portfolio, projects, experience, web development",
    openGraph: {
        title: "Aniket Kakde - Portfolio",
        description: "Explore the projects, experience, and blogs of Aniket Kakde.",
        type: "website",
        url: "https://kakde.eu",
        images: [
            {
                url: "https://kakde.eu/images/og-image.jpg",
                width: 800,
                height: 600,
                alt: "Aniket Kakde Portfolio"
            }
        ]
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/img/portfolio/favicon.png"/>
        </head>
        <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
