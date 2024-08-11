import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsBadge3dFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-blogbarBg text-gray-100 py-6 w-full">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm">© 2024 Tab Mert. All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <a href="https://www.instagram.com/tabmert.try" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.youtube.com/@TabMert" aria-label="Youtube" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={24} />
          </a>
          <a href="https://github.com/mertCukadar" aria-label="Github" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/mert-kaan-%C3%A7ukadar-740614122/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://grabcad.com/mert.kaan.cukadar-3" aria-label="GrabCAD" target="_blank" rel="noopener noreferrer">
            <BsBadge3dFill size={24} />
          </a>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-6 flex flex-col md:flex-row justify-between items-center">
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <li>
            <Link href="/">
              <p className="hover:text-gray-300">Blog</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p className="hover:text-gray-300">Hakkımda</p>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
