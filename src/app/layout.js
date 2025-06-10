import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Creaters United",
  description: "Built by Aditya Aman",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          min-h-screen 
          bg-gradient-to-r 
          from-[#0f1a36] 
          to-[#3a0f1e] 
          text-white
        `}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
//This is a custom root layout for a Next.js application that sets up global styles and fonts.
