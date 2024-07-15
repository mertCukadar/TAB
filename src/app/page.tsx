import React from 'react';
import BlogCard from '@/components/BlogCards';
import Image from 'next/image';

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Page: React.FC = () => {
  const dummy_blog: Blog[] = [
    {
      id: 1,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, purus ac ultrices ultricies, mi ex tincidunt turpis, non tincidunt mi odio non neque. Nullam auctor, purus ac ultrices ultricies, mi ex tincidunt turpis, non tincidunt mi odio non neque.",
      image: "/beemo.jpg",
    },
    {
      id: 2,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, purus ac ultrices ultricies, mi ex tincidunt turpis, non tincidunt mi odio non neque. Nullam auctor, purus ac ultrices ultricies, mi ex tincidunt turpis, non tincidunt mi odio non neque.",
      image: "/beemo.jpg",
    },
    {
      id: 3,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, purus ac ultrices ultricies, mi ex tincidunt turpis, non tincidunt mi odio non neque. Nullam auctor, purus ac ultrices ultricies, mi ex tincidunt turpis, non tincidunt mi odio non neque.",
      image: "/beemo.jpg",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center p-5 text-gray-100 w-full bg-backgroundDefault pt-32">
      {dummy_blog.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Page;
