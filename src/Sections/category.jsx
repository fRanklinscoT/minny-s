import React from 'react';
import { useParams, Link } from 'react-router-dom';

const shoes = [
  { name: 'Nike Jordan', link: '/services/shoes/nike-jordan' },
  { name: 'Nike Airforce', link: '/services/shoes/nike-airforce' },
  { name: 'Nike Supreme', link: '/services/shoes/nike-supreme' },
];

const Category = () => {
  const { categoryName } = useParams();

  return (
    <div className="mb-8" id="category-description">
      <h2 className="text-2xl font-bold text-white mb-4">{categoryName}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {shoes.map((shoe, index) => (
          <Link
            to={shoe.link}
            key={index}
            className="group bg-gray-700 p-4 rounded-lg flex items-center justify-center text-center hover:bg-gray-600 transition"
          >
            <div className="text-white">
              <h3 className="text-lg font-semibold mb-2">{shoe.name}</h3>
              <p className="text-sm">Explore our range of {shoe.name.toLowerCase()}.</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
