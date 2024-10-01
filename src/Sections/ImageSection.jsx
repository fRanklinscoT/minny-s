import React from "react";
import PaintBrush from "../../src/assets/Images/Paintbrush.png";
import Blob from "../../src/assets/Images/Blob.png";

const ImageSection = () => {
  return (
    <section className="bg-slate-100 dark:bg-neutral-800 overflow-hidden 2xl:max-container relative flex flex-col py-10 lg:mb:20 lg:py-20 xl:mb-20">
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[250px] items-center">
        <div className="flex flex-col justify-center w-full text-3xl font-bold text-yellow-500 leading-snug ml-8 mx-auto px-4 py-14 md:py-0 gupter-medium">
          <p>Let's Make</p>
          <p className="text-[#ffb4d9e8]">
            Memories <span className="text-yellow-500">That Last!</span>
          </p>
        </div>
        <div className="justify-end items-center relative w-[300px] h-[300px] ml-72 mt-[65px] md:block hidden">
          <img src={PaintBrush} alt="paintbrush" className="w-full h-full relative z-10 drop-shadow" />
          <img src={Blob} alt="blob" className="absolute top-0 left-0 w-full md:w-[850px] h-full z-[1]" />
        </div>
      </div>
    </section>
  );
};


export default ImageSection;
