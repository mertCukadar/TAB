const API_URL = 'http://167.99.12.11:8000/api/';



// Limit ve offset kullanımı
export const FetchBlogs = async (page: number = 1, limit: number = 2, category: number | null = null) => {
    const offset = (page - 1) * limit; // Sayfa başına veri sayısı * (Sayfa numarası - 1)
    const url = new URL(`${API_URL}blog/`);
    url.searchParams.append('limit', limit.toString());
    url.searchParams.append('offset', offset.toString());
    if (category !== null) {
        url.searchParams.append('category', category.toString());
    }
    const response = await fetch(url.toString());
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
};


// FetchBlog fonksiyonu, belirli bir blog ID'si ile blog detayını getirir
export const FetchBlog = async (id: number) => {
    const response = await fetch(`${API_URL}blog/${id}/`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
};

// GetCategories fonksiyonu, kategorileri alır
export const GetCategories = async () => {
    const response = await fetch(`${API_URL}categories/`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
};
