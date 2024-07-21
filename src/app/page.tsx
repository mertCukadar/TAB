'use client';
import React, { useEffect, useState } from 'react';
import BlogCard from '@/components/BlogCards';
import { FetchBlogs } from './api';
import CategoryFilter from '@/components/CategoryFilter';

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
    const [category, setCategory] = useState<number | null>(null);

    useEffect(() => {
        const loadBlogs = async () => {
            try {
                const data = await FetchBlogs(page, 2, category);
                if (data && data.results) {
                    setBlogs(data.results);
                    setTotalPages(Math.ceil(data.count / (data.limit || 1)));
                }
            } catch (error) {
                console.error('Failed to load blogs:', error);
            }
        };
        loadBlogs();
    }, [page, category]);

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };

    const handleCategoryChange = (categoryId: number | null) => {
        setCategory(categoryId);
        setPage(1); // Reset to the first page when category changes
    };

    return (
        <div className="flex flex-col md:flex-row justify-center items-center p-5 text-gray-100 w-full bg-backgroundDefault">
            <CategoryFilter onCategoryChange={handleCategoryChange} selectedCategory={category} />
            <div className="flex flex-col items-center w-full md:ml-20">
                {blogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
                <div className="flex justify-center mt-5">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            className={`mx-1 px-3 py-1 rounded ${page === index + 1 ? 'bg-blogbarBg text-white' : 'bg-gray-300 text-black'}`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
