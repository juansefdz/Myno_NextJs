import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NotesSidebar from "./components/NotesSidebar";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Myno APP",
  description: "personal notes management app - Next.js - Java/SpringBoot",
  keywords: ["next.js", "java", "springboot", "mynoApp"],
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <Header />
        <div className="md:flex">
          <NotesSidebar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
