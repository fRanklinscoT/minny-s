import React from "react";
import Background from '../assets/Images/background_image.jpeg';
import Background2 from '../assets/Images/background_2.jpeg';
import giftImage from '../assets/Images/gift.png';

const ProductsView = ({ BackgroundImg, title, subtitle, peopleViewed }) => {
  return (
    <div className="bg-slate-200 dark:bg-neutral-700 h-[500px] w-full min-width-[1100px] lg:rounded-r-lg xl:rounded-xl" style={{
      backgroundImage: `url(${BackgroundImg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flex flex-wrap min-w-full items-center">
          <div className="rounded-full bg-[#ffb4d9e8] p-4 shrink-0">
            <img src={giftImage} alt="logo" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1 ml-4">
            <h3 className="text-lg md:text-md sm:text-sm">{title}</h3>
            <p className="regular-14 md:text-sm sm:text-xs">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-20 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <ProductsView BackgroundImg={Background} title={"Minnies Gift baskets"} subtitle={"many more products like these"} peopleViewed={"5+ viewed"} />
        <ProductsView BackgroundImg={Background2} title={"Minnies Gift baskets"} subtitle={"many more products like these"} peopleViewed={"5+ viewed"} />
      </div>
      <div className="flex justify-end mt-10 px-6 lg:-mt-60 lg:mr-6 ">
        <div className="bg-yellow-300 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
            <h2 className="gupter-medium">Want to share your <strong><b>Memories</b></strong> with your loved ones?</h2>
        </div>
      </div>
    </section>
  );
};

export default Products;
