'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';

const Header = () => {
  const [nav, setNav] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleCategories = () => {
    setCategoriesOpen(!categoriesOpen);
  };

  return (
    <header className="text-white w-full shadow-sm bg-blogbarBg">
      <nav className="flex justify-between items-center p-5 text-gray-100">
        <div>
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo-transparent.png" alt="Tab Mert" width={60} height={60} className="cursor-pointer" />
            <p className="text-2xl font-bold cursor-pointer">Tab Mert</p>
          </Link>
        </div>

        <div className="flex items-center md:hidden" onClick={handleNav}>
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>

        <ul className="hidden md:flex space-x-3">
          <li className="cursor-pointer hover:text-blue-300" onClick={handleCategories}>
            <span className="p-2 px-3">Kategoriler</span>
          </li>
          <li className="cursor-pointer hover:text-blue-300">
            <Link href="/about" className="p-2 px-3">
              Hakkımda
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Main Menu */}
      <div className={`fixed inset-y-0 right-0 transform ${nav ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out bg-slate-800 text-white w-64 p-5 flex flex-col md:hidden z-50`}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={handleNav}>
            <AiOutlineClose size={24} />
          </button>
        </div>
        <ul className="flex-grow">
          <li className="mb-4">
            <Link href="/about" className="p-2 px-3 block text-center hover:text-blue-300">
              Hakkımda
            </Link>
          </li>
          <li className="mb-4">
            <span onClick={handleCategories} className="p-2 px-3 block text-center cursor-pointer hover:text-blue-300">
              Kategoriler
            </span>
          </li>
        </ul>
      </div>

      {/* Categories Sidebar */}
      <div className={`fixed inset-y-0 right-0 transform ${categoriesOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out bg-slate-700 text-white w-64 p-5 flex flex-col z-50`}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Kategoriler</h2>
          <button onClick={handleCategories}>
            <AiOutlineClose size={24} />
          </button>
        </div>
        <ul className="flex-grow">
          <li className="mb-4">
            <Link href="/" className="p-2 px-3 block text-left hover:text-blue-300">
              Blog
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/kategori/algoritma-sorulari/" className="p-2 px-3 block text-left hover:text-blue-300">
              Algoritma Soruları
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
