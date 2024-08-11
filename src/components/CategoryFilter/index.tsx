import React from "react";

interface Category {
    name: string;
}

interface CategoryFilterProps {
    onCategoryChange: (category: string | null) => void;
    selectedCategory: string | null;
    categories: string[]; // Kategorileri dışarıdan alıyoruz
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ onCategoryChange, selectedCategory, categories }) => {
    
    const handleCategoryClick = (category: string | null) => {
        onCategoryChange(category);
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
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`mx-1 my-2 px-3 py-1 rounded transition duration-300 ${selectedCategory === category ? 'bg-blogCardBg text-white' : 'bg-cyan-800 text-white'}`}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
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
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`block w-full my-2 px-3 py-1 rounded transition duration-300 ${selectedCategory === category ? 'bg-blogCardBg text-white' : 'bg-cyan-800 text-white'}`}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default CategoryFilter;
