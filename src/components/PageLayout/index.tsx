import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../../app/globals.css";
import { Roboto } from 'next/font/google'

const inter = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={inter.className}>
        <Header />
            <main>{children}</main>
        <Footer />
    </div>
    );
}

