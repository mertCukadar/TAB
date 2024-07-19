'use client'
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

  useEffect(() => {
    FetchBlogs().then((data) => setBlogs(data));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center p-5 text-gray-100 w-full bg-backgroundDefault">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Page;
