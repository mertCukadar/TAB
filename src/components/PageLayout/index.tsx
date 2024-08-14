import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../../app/globals.css";
import { Roboto } from 'next/font/google'
import Script from 'next/script';

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
         <Script
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2073799749748484"
                strategy="afterInteractive"
            />
        <Header />
            <main>{children}</main>
        <Footer />
    </div>
    );
}

