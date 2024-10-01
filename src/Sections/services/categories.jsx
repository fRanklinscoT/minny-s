import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'T-Shirts', link: '/services/t-shirts' },
  { name: 'Shoes', link: '/services/shoes' },
  { name: 'Socks', link: '/services/socks' },
];

const Categories = ({ onCategoryClick }) => {
  return (
    <div className="mb-8" id="category">
      <h2 className="text-2xl font-bold dark:text-white mb-4">Explore Our Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group dark:bg-gray-700 p-4 rounded-lg flex items-center justify-center text-center hover:bg-gray-600 transition cursor-pointer"
            onClick={() => onCategoryClick(category.name.toLowerCase())}
          >
            <div className="dark:text-white">
              <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
              <p className="text-sm">Explore our range of {category.name.toLowerCase()}.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
