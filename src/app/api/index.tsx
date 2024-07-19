
const API_URL = 'http://localhost:8000/api/';
export function FetchBlogs() {
    return fetch(`${API_URL}blog/`)
        .then((res) => res.json())
        .then((data) => data);
    }
export function FetchBlog(id: number) {
    return fetch(`${API_URL}blog/${id}/`)
        .then((res) => res.json())
        .then((data) => data);
    }
