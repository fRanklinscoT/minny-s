import React from "react";
import Large from "../assets/Images/large_pic.jpg";
import Medium1 from "../assets/Images/med_1.jpg";
import Medium2 from "../assets/Images/med_2.jpg";

const IconSection = () => {
  return (
    <section className="bg-slate-300 dark:bg-neutral-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-4">
          {/* Full Height Card */}
          <div className="relative lg:row-span-2 bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={Large}
              alt="What's New"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold text-white">What's New</h3>
              <a href="#" className="mt-2 font-semibold text-white">Shop now</a>
            </div>
          </div>

          {/* Half Width Card 1 */}
          <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={Medium1}
              alt="Most Bought"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold text-white">Most Bought</h3>
              <a href="#" className="mt-2 text-white">Shop now</a>
            </div>
          </div>

          {/* Half Width Card 2 */}
          <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={Medium2}
              alt="Workspace"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold text-white">Workspace</h3>
              <a href="" className="mt-2 text-white">Shop now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IconSection;
