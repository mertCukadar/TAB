import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { CiBatteryFull } from 'react-icons/ci';
import { CiCoffeeCup } from 'react-icons/ci';

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div
      key={blog.id}
      className="relative flex flex-col items-center justify-center m-5 rounded-lg shadow-lg md:w-3/5 overflow-hidden group "
    >
      <div className="absolute top-0 left-0 w-full p-1 bg-blogbarBg rounded-t-lg flex justify-between z-20">
        <IoCloseCircleSharp size={30} className="text-white" />
        <div className="flex">
          <CiBatteryFull size={30} className="text-white" />
          <CiCoffeeCup size={30} className="text-white" />
        </div>
      </div>

      <Link href={`/blog/${blog.id}`} className="flex flex-col items-center justify-center w-full p-5 relative z-10 h-96 bg-blogCardBg text-white">
        <div className="relative z-20 bg-opacity-50 p-8 rounded-lg transition duration-300 ease-in-out group-hover:bg-opacity-75 group-hover:scale-105">
          <h2 className="text-3xl font-bold mt-3">{blog.title}</h2>
          <p className="mt-3">{blog.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
