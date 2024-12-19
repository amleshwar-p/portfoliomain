import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Amleshwar Pandey  || My portfolio",
  description:
    "Welcome to my portfolio website! Here, you'll find a curated collection of my creative endeavors, showcasing my passion and expertise. From captivating graphic designs to innovative web development projects, I aim to blend artistry with technology. Explore my work to witness a fusion of aesthetics and functionality that reflects my dedication to crafting meaningful digital experiences. Thank you for visiting, and I look forward to sharing my journey with you.",
  generator: "Next.js",
  applicationName: "Amleshwar Pandey",
  keywords: [
    "Amleshwar Pandey",
      "Amleshwar",
      "Design",
      "Visuals",
      "freelance",
      "developer",
      "freelance developer",
      "frontend",
      "nextjs",
      "astro",
      "react",
      "frontend developer",
      "frontend engineer",
      "creative",
      "creative developer",
      "creative engineer",
      "tech"      
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Amleshwar Pandey - Frontend Developer",
    description:
      "Hobby Designer and Software Engineer and create something new",
      url: "https://github.com/amleshwar-p",
      siteName: "Amleshwar's Portfolio",
      locale: "en-US",
      type: "website",
  },
  
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}