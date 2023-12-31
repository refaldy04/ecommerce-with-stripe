import React from "react";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:p-5 justify-between gap-3">
      {categories.map((item) => (
        <CategoryItem {...item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;
