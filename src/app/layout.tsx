import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNavbar from "./components/TopNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sahejveer Singh Kumar - Software Engineer",
  description: "Personal website of Sahejveer Singh Kumar, Software Engineer at NCR Voyix",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <TopNavbar />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
