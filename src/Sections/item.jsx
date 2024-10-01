import React from 'react';
import { useParams } from 'react-router-dom';

const items = {
  'nike-jordan': {
    name: 'Nike Jordan',
    price: '£100',
    sizes: ['6', '7', '8', '9'],
  },
  'nike-airforce': {
    name: 'Nike Airforce',
    price: '£90',
    sizes: ['6', '7', '8', '9'],
  },
  // Add more items as needed
};

const Item = () => {
  const { itemName } = useParams();
  const item = items[itemName.toLowerCase()];

  return (
    <div className="bg-neutral-600 p-6 rounded-lg">
      <h1 className="text-white text-3xl font-bold mb-4">{item.name}</h1>
      <img
        src={`https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80`}
        alt={item.name}
        className="w-full h-auto rounded-lg mb-4"
      />
      <p className="text-white mb-4">Price: {item.price}</p>
      <p className="text-white mb-4">Sizes: {item.sizes.join(', ')}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => alert('Item added to cart')}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
