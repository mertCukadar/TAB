import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PageLayout from "../../components/PageLayout";
import BlogCardCategories from "../../components/BlogCardsCategories";
import { GetStaticProps, GetStaticPaths } from "next";
import Script from "next/script";

export default function Page({ allPostsData, slug }: { allPostsData: any[], slug: string }) {
  return (
    <PageLayout>
         <Script
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2073799749748484"
                strategy="afterInteractive"
            />
      <div className="text-white p-5 bg-backgroundDefault h-screen">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="flex flex-col items-center md:w-3/6">
            {allPostsData.map((post) => (
              <div key={post.id} className="flex flex-col items-center w-full mb-5">
                <BlogCardCategories blog={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categoriesDirectory = path.join(process.cwd(), "src/content/categories");
  const categoryDirs = fs.readdirSync(categoriesDirectory);

  const paths = categoryDirs.map((category) => ({
    params: { slug: category },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const contentDirectory = path.join(process.cwd(), `src/content/categories/${slug}`);

  const fileNames = fs.readdirSync(contentDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const file_postname = fileName.replace(/\.md$/, '');
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id: matterResult.data.id,
      postname: file_postname,
      slug: fullPath,
      title: matterResult.data.title || '',
      description: matterResult.data.description || '',
      date: matterResult.data.date || '',
      category: matterResult.data.category || '',
      content: matterResult.content,
    };
  });

  // Tarihe göre sıralama
  allPostsData.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return {
    props: {
      allPostsData,
      slug,
    },
  };
};
