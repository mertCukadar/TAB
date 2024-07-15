'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="text-white w-full shadow-sm bg-bgHeader fixed z-50">
      <nav className="flex justify-between items-center p-5 text-gray-100">
        <div>
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo-transparent.png" alt="Tab Mert" width={100} height={100} className="cursor-pointer" />
            <h1 className="text-2xl font-bold cursor-pointer">Tab Mert</h1>
          </Link>
        </div>

        <div className="flex items-center md:hidden" onClick={handleNav}>
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>

        <ul className="hidden md:flex space-x-3">
          <li className="cursor-pointer hover:text-blue-300">
            <Link href="/blog" className="p-2 px-3">
              Blog
            </Link>
          </li>
          <li className="cursor-pointer hover:text-blue-300">
            <Link href="/dersler" className="p-2 px-3">
              Dersler
            </Link>
          </li>
          <li className="cursor-pointer hover:text-blue-300">
            <Link href="/projeler" className="p-2 px-3">
              Projeler
            </Link>
          </li>
          <li className="cursor-pointer hover:text-blue-300">
            <Link href="/hakkimda" className="p-2 px-3">
              Hakkımda
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-y-0 right-0 transform ${nav ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out bg-slate-800 text-white w-64 p-5 flex flex-col md:hidden z-50`}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={handleNav}>
            <AiOutlineClose size={24} />
          </button>
        </div>
        <ul className="flex-grow">
          <li className="mb-4">
            <Link href="/blog" className="p-2 px-3 block text-center hover:text-blue-300">
              Blog
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/dersler" className="p-2 px-3 block text-center hover:text-blue-300">
              Dersler
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/projeler" className="p-2 px-3 block text-center hover:text-blue-300">
              Projeler
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/hakkimda" className="p-2 px-3 block text-center hover:text-blue-300">
              Hakkımda
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
