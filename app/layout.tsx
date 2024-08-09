
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import MyProfilePic from "./components/MyProfilePic";

export const metadata: Metadata = {
  title: "Mio's Blog",
  description: "Developed by Sim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-900 bg-slate-300 text-slate-700">
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
