import React from 'react';

const ReviewsSection = () => {
  return (
    <div className="dark:bg-neutral-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-yellow-600">Customer Reviews</h2>
          <p className="mt-4 dark:text-neutral-400">See what our customers have to say!</p>
        </div>
        
        {/* Check if there are reviews */}
        {reviews.length > 0 ? (
          <div className="grid gap-8 lg:grid-cols-2">
            {reviews.map((review, index) => (
              <div key={index} className="dark:bg-neutral-600 p-6 rounded-lg shadow-lg">
                <p className="text-lg dark:text-white">{review.comment}</p>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold dark:text-white">{review.name}</h3>
                  <p className="text-sm dark:text-neutral-400">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mt-10">
            <p className="text-xl text-yellow-500 mb-4">Be our first reviewer!</p>
            <button
              onClick={() => window.location.href = '/services'}
              className="border border-yellow-600 text-yellow-500 py-2 px-4 rounded-lg shadow-md hover:bg-yellow-500 hover:text-white focus:outline-none"
            >
              Order Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const reviews = [];

export default ReviewsSection;
