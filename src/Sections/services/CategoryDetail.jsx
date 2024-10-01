import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryDetail = () => {
  const { categoryName } = useParams(); // Extract category name from URL

  // Example logic to display content based on the category
  const renderCategoryContent = () => {
    switch (categoryName) {
      case 'clothing':
        return <p>Explore our range of clothing prints including T-shirts, hoodies, and more.</p>;
      case 'util-prints':
        return <p>Check out our util prints collection for cups, bottles, mugs, and more utensils.</p>;
      case 'wine-prints':
        return <p>Find unique wine prints to personalize your wine-drinking experience.</p>;
      case 'gift-boxes':
        return <p>Browse our selection of gift boxes and combo deals for special occasions.</p>;
      default:
        return <p>Category not found.</p>;
    }
  };

  return (
    <div className="p-6 dark:bg-neutral-800 rounded-lg dark:text-white">
      <h2 className="text-3xl font-bold mb-4">Category: {categoryName.replace('-', ' ')}</h2>
      {renderCategoryContent()}
    </div>
  );
};

export default CategoryDetail;
