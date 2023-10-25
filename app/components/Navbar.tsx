"use client";

import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const { currentUser } = useSelector((state: any) => state.persisted.user);
  const { quantity } = useSelector((state: any) => state.persisted.cart);

  return (
    <div className="bg-[#fcf5f5] py-2 border-b-2 shadow-md">
      <div className="container p-2 lg:p-4 flex justify-between items-center">
        <div className="lg:flex-1 flex items-center">
          <span className="text-sm cursor-pointer hidden lg:block">EN</span>
          <div className="border border-slate-700 flex items-center lg:ml-6 h-6 lg:h-8">
            <input
              type="text"
              className="border-0 ring-transparent focus:ring-0 bg-transparent w-[80px] lg:w-full"
              placeholder="Search"
            />
            <SearchIcon className="text-gray-600 text-lg mr-2" />
          </div>
        </div>
        <div className="lg:flex-1 text-end lg:text-center ml-2">
          <span className="font-semibold text-xl lg:text-3xl">RESHOP.</span>
        </div>
        <div className="flex-1 flex items-center justify-end lg:justify-end gap-4 lg:gap-7">
          <div
            className={`lg:text-sm cursor-pointer text-xs ${
              currentUser && "hidden"
            }`}
          >
            REGISTER
          </div>
          <div
            className={`lg:text-sm cursor-pointer text-xs ${
              currentUser && "hidden"
            }`}
          >
            SIGN IN
          </div>
          <div className="lg:text-sm cursor-pointer text-xs">
            <Link href="/cart">
              <Badge badgeContent={quantity} color="info">
                <ShoppingCartIcon color="action" />
              </Badge>
            </Link>
          </div>
          <div
            className={`lg:text-sm cursor-pointer text-xs ${
              !currentUser && "hidden"
            }`}
          >
            LOGOUT
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
