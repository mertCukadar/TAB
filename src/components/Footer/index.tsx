import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram , FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-backgroundDefault text-gray-100 py-6 w-full">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">Tab Mert</h1>
          <p className="text-sm">© 2024 Tab Mert. All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <p aria-label="Instagram">
            <FaInstagram size={24} />
          </p>
          <p aria-label="Facebook">
            <FaFacebook size={24} />
          </p>
          <p aria-label="Youtube">
            <FaYoutube size={24} />
          </p>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-6 flex flex-col md:flex-row justify-between items-center">
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <li>
            <Link href="/blog">
              <p className="hover:text-gray-300">Blog</p>
            </Link>
          </li>
          <li>
            <Link href="/hakkimda">
              <p className="hover:text-gray-300">Hakkımda</p>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
