import type { Metadata } from "next";
import { Anek_Latin } from "next/font/google";
const anek = Anek_Latin({ subsets: ["latin"] });

import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/utils/classNames";
import Menu from "./components/container/menu";
import Footer from "./components/container/footer";

//import Header from "./components/header";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Eri Resume Profile",
  description: "CUriculum Vitae Eri Safari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-background", anek.className)}>
        <Menu/>
        <main className="min-h-screen">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
