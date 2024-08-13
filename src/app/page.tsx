import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogCard from '@/components/BlogCards';

interface Blog {
    id: string;
    title: string;
    description: string;
    date: string;
    category: string;
    content: string;
    slug: string;
    postname: string;
}

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export default function Page() {
    // get file names
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData: Blog[] = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const file_postname = fileName.replace(/\.md$/, '');
        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id: matterResult.data.id,
            postname: file_postname,
            slug: fullPath,
            title: matterResult.data.title || '',
            description: matterResult.data.description || '',
            date: matterResult.data.date || '',
            category: matterResult.data.category || '',
            content: matterResult.content,
        } as Blog;
    });

    // Tarihe göre sıralama (en yeni tarihler önce)
    allPostsData.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return (
        <div className="flex flex-col md:flex-row justify-center items-center p-5 text-gray-100 bg-backgroundDefault">
            <div className="flex flex-col items-center">
                {allPostsData.map((post) => (
                    <div key={post.id} className='flex flex-col items-center w-full h-screen'>
                        <BlogCard blog={post} />
                    </div>
                ))}
            </div>
        </div>
    );
}
