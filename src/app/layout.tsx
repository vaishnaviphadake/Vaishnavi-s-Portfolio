import type { Metadata } from "next";
import {Inter, Calistoga} from "next/font/google";

import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({subsets:["latin"], variable: "--font-sans"});
const callistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created to shpwcase my skills and previous work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(
        inter.variable,
        callistoga.variable,
        "bg-gray-900 text-white antialiased")}>{children}</body>
    </html>
  );
}
