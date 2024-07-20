const API_URL = 'http://localhost:8000/api/';

// api.ts

export const FetchBlogs = async (page: number = 1) => {
    const response = await fetch(`${API_URL}blog?limit=5&offset=${(page - 1) * 5}`);
    const data = await response.json();
    return data;
};


export const FetchBlog = async (id: number) => {
  const response = await fetch(`${API_URL}blog/${id}/`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
};
