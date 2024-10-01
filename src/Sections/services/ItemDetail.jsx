import React from 'react';
import { useParams } from 'react-router-dom';
import UnderConstruction from '../error-pages/error-405';

const ItemDetail = () => {
  const { categoryName, itemId } = useParams(); // Extract category name and item ID from URL

  // You can fetch or display item details based on categoryName and itemId
  return (
    <div className="p-6 dark:bg-neutral-600 rounded-lg dark:text-white">
      <h2 className="text-3xl font-bold mb-4">Item in Category: {categoryName.replace('-', ' ')}</h2>
      <p>Displaying details for item ID: {itemId}</p>
      {/* Render more item-specific details here, e.g., image, description, price, etc. */}
      <UnderConstruction />
    </div>
  );
};

export default ItemDetail;
