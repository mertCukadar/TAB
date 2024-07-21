import React from "react";
import { GetCategories } from "@/app/api";

interface Category {
    id: number;
    name: string;
}

interface CategoryFilterProps {
    onCategoryChange: (categoryId: number | null) => void;
    selectedCategory: number | null;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ onCategoryChange, selectedCategory }) => {
    const [categories, setCategories] = React.useState<Category[]>([]);
    
    React.useEffect(() => {
        const loadCategories = async () => {
            try {
                const data = await GetCategories();
                setCategories(data);
            } catch (error) {
                console.error("Failed to load categories:", error);
            }
        };
        loadCategories();
    }, []);
    
    const handleCategoryClick = (categoryId: number | null) => {
        onCategoryChange(categoryId);
    };
    
    return (
        <div className="mt-5">
            <div className="md:hidden flex justify-center flex-wrap">
                <button
                    className={`mx-1 my-2 px-3 py-1 rounded transition duration-300 ${selectedCategory === null ? 'bg-blogCardBg text-white' : 'bg-cyan-800 text-white'}`}
                    onClick={() => handleCategoryClick(null)}
                >
                    All
                </button>
                {categories.map((category) => (
                    <button
                        key={category.id}
                        className={`mx-1 my-2 px-3 py-1 rounded transition duration-300 ${selectedCategory === category.id ? 'bg-blogCardBg text-white' : 'bg-cyan-800 text-white'}`}
                        onClick={() => handleCategoryClick(category.id)}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
            <div className="hidden md:block fixed top-32 p-5 bg-blogbarBg rounded-lg shadow-lg">
                <h2 className="text-xl font-bold text-white mb-3">Categories</h2>
                <button
                    className={`block w-full my-2 px-3 py-1 rounded transition duration-300 ${selectedCategory === null ? 'bg-blogCardBg text-white' : 'bg-cyan-800 text-white'}`}
                    onClick={() => handleCategoryClick(null)}
                >
                    All
                </button>
                {categories.map((category) => (
                    <button
                        key={category.id}
                        className={`block w-full my-2 px-3 py-1 rounded transition duration-300 ${selectedCategory === category.id ? 'bg-blogCardBg text-white' : 'bg-cyan-800 text-white'}`}
                        onClick={() => handleCategoryClick(category.id)}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default CategoryFilter;
