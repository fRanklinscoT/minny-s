import { Link } from 'react-router-dom';
import productImg from './assets/Images/med_2.jpg';

const Services = () => {
  return (
    <div className="bg-neutral-200 dark:bg-neutral-800 p-6" id="services">
      <div className="mb-8">
        <h2 className="text-2xl font-bold dark:text-white mb-4">Explore Our Diverse Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link to="/services/category/clothing" className="group dark:bg-gray-700 p-4 rounded-lg flex items-center justify-center text-center hover:bg-gray-600 transition">
            <div className="dark:text-white">
              <h3 className="text-lg font-semibold mb-2">Clothing Prints</h3>
              <p className="text-sm">Explore our range of clothing prints.</p>
            </div>
          </Link>
          <Link to="/services/category/util-prints" className="group dark:bg-gray-700 p-4 rounded-lg flex items-center justify-center text-center hover:bg-gray-600 transition">
            <div className="dark:text-white">
              <h3 className="text-lg font-semibold mb-2">Util Prints</h3>
              <p className="text-sm">Discover our util prints collection. For cups, Bottles, Mugs and many more utensils</p>
            </div>
          </Link>
          <Link to="/services/category/wine-prints" className="group dark:bg-gray-700 p-4 rounded-lg flex items-center justify-center text-center hover:bg-gray-600 transition">
            <div className="dark:text-white">
              <h3 className="text-lg font-semibold mb-2">Wine Prints</h3>
              <p className="text-sm">Find unique wine prints. Share a glass and a memory of your favorite wine with a message for your favorite someone to share wine with</p>
            </div>
          </Link>
          <Link to="/services/category/gift-boxes" className="group dark:bg-gray-700 p-4 rounded-lg flex items-center justify-center text-center hover:bg-gray-600 transition">
            <div className="dark:text-white">
              <h3 className="text-lg font-semibold mb-2">Gift Boxes and Combo deals</h3>
              <p className="text-sm">Browse our selection of gift boxes and Combo deals.</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Category Description Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold dark:text-white mb-4">Category: Most Trending</h2>
        <p className="dark:text-gray-300 mb-4">
         See this months selected products by Minny and other custoemrs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link to="/services/category/t-shirt-prints/item/1" className="group dark:bg-gray-700 p-4 rounded-lg overflow-hidden flex flex-col items-center text-center hover:bg-gray-600 transition">
            <img
              src={productImg}
              alt="Gitf Box"
              className="h-[200px] w-full object-cover mb-2"
            />
            <h3 className="text-lg font-semibold text-white mb-2">Basic Tee</h3>
            <p className="text-sm text-gray-300">£24.00 GBP</p>
          </Link>
          {/* Repeat for more items */}
        </div>
      </div>
    </div>
  );
};

export default Services;
