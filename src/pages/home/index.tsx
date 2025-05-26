import { useState, type FC } from "react";

import Category from "../../components/category";
import type { CategoryType } from "../../types";

const Home: FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryType>("Top Rated");

  const categories: CategoryType[] = ["Top Rated", "Popular", "Trending"];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 ml-1 py-2 rounded cursor-pointer transition-all duration-300 ${
              selectedCategory === category
                ? "bg-blue-500 text-white transform scale-105 shadow-lg"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="transition-opacity duration-500 ease-in-out">
        <Category selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default Home;
