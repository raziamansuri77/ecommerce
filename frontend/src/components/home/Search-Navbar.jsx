import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

export default function SearchNavbar() {
  return (
    <div className="px-2 flex justify-between items-center pt-14 pb-2 ">
      <div className="flex items-center gap-20">
        <img
          src="https://www.shl.com/assets/blog-featured-images/woman-with-tablet-UN001__FocusFillMaxWyIwLjAwIiwiMC4wMCIsMTkyMCw4NDld.jpg"
          alt=""
          className="w-[60px] h-[60px] rounded-full border-2"
        />
        <div className="relative ">
          <input
            type="text"
            placeholder="Search By Title,Author,Publisher Or ISBN"
            className="w-[500px] border-1 p-1 border-[#E42B26]"
          />
          <div className="absolute top-0 py-2 cursor-pointer right-0 bg-[#E42B26] text-white h-full px-[10px] text-[20px]">
            <FaSearch />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className=" h-[30px] px-2 border-r-[1px] border-[#E42B26] flex">
          <div className="flex items-center gap-2 ">
            <FaUserCircle className="text-[#E42B26] text-[20px]" />
            <div>My Account</div>
            <IoIosArrowForward className="text-[#E42B26] text-[20px]" />
          </div>
        </div>
        <div className="px-2 relative ">
          <img
            src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/cart_white.svg"
            alt=""
            className="w-[40px] "
          />
          <div className="absolute top-[-6px] right-5">0</div>
        </div>
      </div>
    </div>
  );
}
