import dynamic from 'next/dynamic';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getPostBySlug, getPostSlugs } from '../../lib/posts';
import PageLayout from '../../components/PageLayout';

const MarkdownPreview = dynamic(() => import('@uiw/react-markdown-preview'), { ssr: false });

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
}

export default function BlogPost({ title, date, content }: BlogPostProps) {
  return (
    <PageLayout>
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
              backgroundColor: '#2d3250',
              padding: '20px',
              borderRadius: '8px',
              color: 'white',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.8)',
              width: '100%',
            }}
          />
        </article>
      </div>
    </PageLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getPostSlugs();

  const paths = slugs.map((slug) => ({
    params: { postname: slug.replace(/\.md$/, '') },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params?.postname as string);

  return {
    props: {
      title: post.data.title,
      date: post.data.date,
      content: post.content,
    },
  };
};
