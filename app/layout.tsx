import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import FooterComponent from "@/components/layouts/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rafael Axel Frananda | Full Stack Developer",
  description:
    "Full Stack Developer with expertise in React, Next.js, Node.js, and more. Passionate about building scalable web applications and delivering exceptional user experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />

        {children}

        <FooterComponent />
      </body>
    </html>
  );
}
