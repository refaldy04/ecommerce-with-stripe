import Image from "next/image";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

interface ProductItem {
  id: number;
  img: string;
}

const Product: React.FC<ProductItem> = ({ id, img }) => {
  return (
    <div className="w-[280px] h-[350px] flex justify-center items-center bg-[#28949b] relative group">
      <div className="h-[200px] w-[200px] rounded-full bg-white absolute"></div>
      <div className="z-10">
        <Image src={img} alt="product-image" width={280} height={280} />
      </div>
      <div className="w-full h-full absolute top-0 left-0 z-20 flex items-center justify-center gap-3 bg-[rgba(0,0,0,0.2)] opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="h-[40px] w-[40px] rounded-full bg-white flex justify-center items-center hover:bg-[#e9f5f5] hover:scale-110 cursor-pointer">
          <ShoppingCartOutlinedIcon />
        </div>
        <div className="h-[40px] w-[40px] rounded-full bg-white flex justify-center items-center hover:bg-[#e9f5f5] hover:scale-110 cursor-pointer">
          <SearchOutlinedIcon />
        </div>
        <div className="h-[40px] w-[40px] rounded-full bg-white flex justify-center items-center hover:bg-[#e9f5f5] hover:scale-110 cursor-pointer">
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Product;
