import Image from "next/image";
import React from "react";

interface Category {
  id: number;
  title: string;
  img: string;
}

const CategoryItem: React.FC<Category> = ({ id, title, img }) => {
  return (
    <div className="relative">
      <Image
        src={img}
        alt="category-image"
        width={600}
        height={600}
        className="h-[20vh]"
      />
      <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center flex-col">
        <h1 className="text-white mb-5 text-3xl font-bold">{title}</h1>
        <button className="bg-white p-2 font-semibold text-gray-600">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;
