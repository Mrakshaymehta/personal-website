import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const description =
  "Akshay Mehta — Software Engineer building across frontend, backend, and AI. Internship experience at ISRO and Skypoint, plus freelance full-stack work shipping production websites and AI-agent systems.";

export const metadata: Metadata = {
  metadataBase: new URL("https://akshaymehta.dev"),
  title: "Akshay Mehta — Software Engineer (Frontend · Backend · AI)",
  description,
  keywords: [
    "Akshay Mehta",
    "Software Engineer",
    "Full-Stack Developer",
    "AI Engineer",
    "React",
    "Next.js",
    "Spring Boot",
    "Node.js",
    "Python",
    "Bengaluru",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: "Akshay Mehta — Software Engineer",
    description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshay Mehta — Software Engineer",
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
