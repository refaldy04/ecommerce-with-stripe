import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <div className="h-16">
      <div className="container p-4 flex justify-between items-center">
        <div className="flex-1 flex items-center">
          <span className="text-sm cursor-pointer">EN</span>
          <div className="border border-slate-700 flex items-center ml-6 h-8">
            <input
              type="text"
              className="border-0 ring-transparent focus:ring-0 bg-transparent"
            />
            <SearchIcon className="text-gray-600 text-lg mr-2" />
          </div>
        </div>
        <div className="flex-1 text-center">
          <span className="font-semibold text-3xl">RESHOP.</span>
        </div>
        <div className="flex-1 flex items-center justify-end gap-7">
          <div className="text-sm cursor-pointer">REGISTER</div>
          <div className="text-sm cursor-pointer">SIGN IN</div>
          <div className="text-sm cursor-pointer">
            <Badge badgeContent={4} color="info">
              <ShoppingCartIcon color="action" />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
