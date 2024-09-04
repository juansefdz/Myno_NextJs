import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/Header";

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
      <body>
        <Header />
        <div className="container items-center">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
