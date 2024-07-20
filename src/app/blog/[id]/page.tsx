'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FetchBlog } from "@/app/api";
import MarkdownPreview from '@uiw/react-markdown-preview';

interface Blog {
    title: string;
    description: string;
    markdown: string;
    created_at?: string;
    updated_at?: string;
}

const Page: React.FC = () => {
    const params = useParams();
    const { id } = params;
    const [blogData, setBlogData] = useState<Blog | null>(null);

    useEffect(() => {
        FetchBlog(Number(id)).then((data) => setBlogData(data));
    }, [id]);

    return (
        <div className="flex flex-col justify-center items-center p-5 text-gray-100 w-full bg-backgroundDefault">
            <MarkdownPreview 
                source={blogData?.markdown} 
                className="markdown-preview"
                style={{backgroundColor: '#2d3250', padding: '20px', borderRadius: '8px', color:'white',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.8)' , width: '90%'}} 
            />
        </div>
    );
};

export default Page;
