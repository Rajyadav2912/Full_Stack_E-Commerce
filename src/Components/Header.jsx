import React from "react";
import Logo from "../Components/Logo";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="h-20 shadow-2xl">
      <div className="h-full container mx-auto flex items-center justify-between px-10">
        <div className="">
          <Logo w={90} h={50} />
        </div>

        <div className="hidden lg:flex items-center justify-center w-full max-w-sm relative">
          <input
            type="text"
            placeholder="Search product here...."
            className="border border-[#8f8f8f] w-full rounded-2xl pl-3 pr-16 py-1 outline-none"
          />
          <GrSearch
            fontSize={20}
            className="absolute right-[0.6px] min-w-[50px] bg-red-500 text-white rounded-r-full py-1 h-8"
          />
        </div>
        <div className="flex items-center gap-6">
          <div className="text-3xl cursor-pointer">
            <FaRegCircleUser />
          </div>

          <div className="text-2xl relative">
            <span>
              <FaShoppingCart fontSize={28} />
            </span>
            <div className="bg-red-600 absolute -top-2 -right-3  text-white w-5 h-5 p-1 rounded-full flex items-center justify-center">
              <p className="text-sm">0</p>
            </div>
          </div>

          <div>
            <button className="px-6 py-2 rounded-full text-white bg-red-600 hover:bg-red-700">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
