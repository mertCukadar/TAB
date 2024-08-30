import dynamic from 'next/dynamic';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getPostBySlug, getAllPostSlugsWithCategories } from '../../../lib/articles';
import PageLayout from '../../../components/PageLayout';
import Script from 'next/script';


const MarkdownPreview = dynamic(() => import('@uiw/react-markdown-preview'), { ssr: false });

interface BlogPostProps {
  title: string;
  date: string;
  category: string;
  content: string;
}

export default function BlogPost({ title, date, content }: BlogPostProps) {
  return (
    <PageLayout>
         <Script
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2073799749748484"
                strategy="afterInteractive"
            />
      <div className="min-h-screen flex flex-col justify-center items-center bg-backgroundDefault p-6">
        <article className="max-w-4xl w-full">
          <header className="mb-12 text-center">
            <h1 className="text-5xl font-extrabold text-gray-50 mb-4">{title}</h1>
            <time className="text-sm text-gray-400">
              {new Date(date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          </header>
          <MarkdownPreview
            source={content}
            style={{
              padding: '20px',
              borderRadius: '8px',
              color: 'black',
              fontSize: "1rem",
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.8)',
              width: '100%',
            }}
            components={{
              ul: ({ children }) => (
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>{children}</ul>
              ),
              ol: ({ children }) => (
                <ol style={{ listStyleType: 'decimal', paddingLeft: '20px' }}>{children}</ol>
              ),
              li: ({ children }) => (
                <li style={{ position: 'relative', paddingLeft: '20px', color: 'black' }}>
                  {children}
                </li>
              ),
            }}
          />
        </article>
      </div>
    </PageLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostSlugsWithCategories();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params?.postname as string, params?.kategori as string);

  return {
    props: {
      title: post.data.title,
      date: post.data.date,
      content: post.content,
    },
  };
};
