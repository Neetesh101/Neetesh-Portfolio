import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Header from "./components/Header";
import ScrollProgressBar from "./components/ScrollProgressBar";
import Footer from "./components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neetesh Katiyar|  Frontend Developer | React & Next.js",
  description:
    "Neetesh Katiyar is a  Frontend Developer with 2+ years of experience in React.js, Next.js, TypeScript, and building scalable UI systems.",
  keywords: [
    "Neetesh Katiyar",
    "Neetesh Katiyar Frontend Developer",
    "Neetesh Katiyar React Developer",
    "Neetesh Katiyar Next.js",
    "Neetesh Katiyar Portfolio",
    "Neetesh Katiyar UI Engineer",
    "Neetesh Katiyar JavaScript Developer",
    "Neetesh Katiyar TypeScript",
    "Neetesh Katiyar Web Developer",
    "Frontend Developer",
  ],
  authors: [{ name: "Neetesh Katiyar" }],
  creator: "Neetesh Katiyar",
  metadataBase: new URL("https://ayushjaiswal.vercel.app"),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
  suppressHydrationWarning
  className="bg-white dark:bg-black transition-colors">

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Neetesh Katiyar",
              url: "https://ayushjaiswal.vercel.app",
              jobTitle: " Frontend Developer",
              sameAs: [
                "https://www.linkedin.com/in/neeteshkatiyar/",
                "https://github.com/Neetesh101/NetflixGpt",
                "https://leetcode.com/u/Neetesh1996/",
              ],
              knowsAbout: [
                "React.js",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "Frontend Development",
                "UI Engineering",
                "Web Development",
                "Scalable Web Applications",
                "Performance Optimization",
                "Responsive Design",
                "Next.js SEO",
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Neetesh Katiyar Portfolio",
              // url: "https://ayushjaiswal.vercel.app",
              description:
                "Official portfolio website of Neetesh Katiyar,  Frontend Developer specializing in React.js, Next.js, and scalable web applications.",
              inLanguage: "en",
              author: {
                "@type": "Person",
                name: "Neetesh Katiyar",
              },
            }),
          }}
        />

        <Header />
        <ScrollProgressBar />
        <div className="pt-20">{children}</div>
        <Footer />
        <Analytics />

      </body>
    </html>
  );
}
