import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getAllPostSlugsWithCategories() {
  const categoriesDirectory = path.join(process.cwd(), 'src/content/categories');
  const categories = fs.readdirSync(categoriesDirectory);

  const paths = categories.flatMap((category) => {
    const categoryPath = path.join(categoriesDirectory, category);
    const postSlugs = fs.readdirSync(categoryPath).map((fileName) => ({
      params: {
        kategori: category,  // Kategori ismini burada doğru aldığınızdan emin olun
        postname: fileName.replace(/\.md$/, ''),
      },
    }));
    return postSlugs;
  });

  return paths;
}


export function getPostBySlug(slug: string, category: string) {
  const fullPath = path.join(process.cwd(), `src/content/categories/${category}/${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  return { data, content };
}
