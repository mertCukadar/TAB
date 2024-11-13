'use client';
import { useState } from "react";
import Link from "next/link";

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white text-blue-800 shadow-md">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold">
                            <p>LOGO</p>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="/" className="px-3 py-2  text-lg font-bold hover:bg-blue-700 hover:text-white">
                                <p>Ana Sayfa</p>
                            </Link>
                            <Link href="/hizmetler" className="px-3 py-2  text-lg font-bold hover:bg-blue-700 hover:text-white">
                                <p>Hizmetlerimiz</p>
                            </Link>
                            <Link href="/blog" className="px-3 py-2  text-lg font-bold hover:bg-blue-700 hover:text-white">
                                <p>Blog</p>
                            </Link>
                            <Link href="/iletisim" className="px-3 py-2  text-lg font-bold hover:bg-blue-700 hover:text-white">
                                <p>İletişim</p>
                            </Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 text-blue-700 focus:outline-none"
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path
                                    className={`${isOpen ? "hidden" : "inline-flex"}`}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={`${isOpen ? "inline-flex" : "hidden"}`}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 hover:text-white">
                        <p>Ana Sayfa</p>
                    </Link>
                    <Link href="/hizmetler" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 hover:text-white">
                        <p>Hizmetlerimiz</p>
                    </Link>
                     <Link href="/blog" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 hover:text-white">
                        <p>Blog</p>
                    </Link>
                    <Link href="/iletisim" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 hover:text-white">
                        <p>İletişim</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
