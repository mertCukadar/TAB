import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { Roboto } from 'next/font/google'

const inter = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Tab Mert",
  description: "Tab Mert's official website for his projects and blog posts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
