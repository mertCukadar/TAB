'use client';
import React, { useEffect, useState } from 'react';
import BlogCard from '@/components/BlogCards';
import { FetchBlogs } from './api';

interface Blog {
  id: number;
  title: string;
  description: string;
  created_at?: string;
}

const Page: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await FetchBlogs(page);
        if (data && data.results) {
          setBlogs(data.results);
          setTotalPages(Math.ceil(data.count / 5)); // Sayfa başına 5 blog gösterildiği varsayılıyor.
        }
      } catch (error) {
        console.error('Failed to load blogs:', error);
      }
    };
    loadBlogs();
    window.scrollTo(0, 0); // Sayfa numarası değiştiğinde sayfanın üstüne çık
  }, [page]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-5 text-gray-100 w-full bg-backgroundDefault">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
      <div className="flex justify-center mt-5">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`mx-1 px-3 py-1 rounded ${page === index + 1 ? 'bg-blogCardBg text-white' : 'bg-gray-300 text-black'}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      {/* TODO: Add category filter */}
    </div>
  );
};

export default Page;
