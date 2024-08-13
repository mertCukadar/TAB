import React from 'react';
import Link from 'next/link';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { CiBatteryFull, CiCoffeeCup } from 'react-icons/ci';

interface Blog {
  id: string; 
  title: string;
  description: string;
  date: string;
  slug: string;
  postname: string;
  category: string; 
}

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div
      key={blog.id}
      className="relative flex flex-col items-center justify-center m-5 rounded-lg shadow-lg overflow-hidden group w-full"
    >
      <div className="absolute top-0 left-0 w-full p-1 bg-cyan-800 rounded-t-lg flex justify-between z-20">
        <IoCloseCircleSharp size={30} className="text-white" />
        <div className="flex">
          <CiBatteryFull size={30} className="text-white" />
          <CiCoffeeCup size={30} className="text-white" />
        </div>
      </div>

      {/* Kategori bilgisi burada URL'ye ekleniyor */}
      <Link href={`/article/${blog.category}/${blog.postname}`} className="flex flex-col justify-center w-full p-5 relative z-10 h-96 bg-blogCardBg text-white">
        <div className="relative z-20 bg-opacity-50 p-8 rounded-lg transition duration-300 ease-in-out group-hover:bg-opacity-75 group-hover:scale-105">
          <h2 className="text-3xl font-bold mt-3">{blog.title}</h2>
          <p className="text-lg mt-5">{blog.description}</p>
        </div>
        <div className="absolute bottom-5 right-5">
            <p className="text-sm">{formatDate(blog.date)}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
