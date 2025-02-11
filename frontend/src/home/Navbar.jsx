import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Search() {
  return (
    <div className="  border-b-[1px] border-[#E42B26] ">
      <div className="p-2 lg:flex justify-between xl:text-[17px]     lg:text-[10px] pr-6 hidden">
        <div className="flex items-center">
          <Link to="/">
            {" "}
            {/* <div className="py-1 px-4 hover:text-[#E42B26] font-semibold   flex items-center cursor-pointer  duration-150 ">
              <div className=" "> Book</div>
              <MdArrowDropDown className="text-[25px]" />
              <div className="w-[1px] h-[20px] bg-red-500"></div>
            </div> */}{" "}
            <div className=" py-1 px-4   cursor-pointer  hover:text-[#E42B26] font-semibold  duration-150 ">
              Home
            </div>
          </Link>
          <div className="w-[1px] h-[20px] bg-red-500"></div>

          <Link to="/newarrivals">
            <div className=" py-1 px-4   cursor-pointer  hover:text-[#E42B26] font-semibold  duration-150 ">
              New Arrivals
            </div>
          </Link>
          <div className="w-[1px] h-[20px] bg-red-500"></div>

          <Link to="/boxset">
            {" "}
            <div className="py-1 px-4  cursor-pointer hover:text-[#E42B26] font-semibold duration-150">
              Box Sets
            </div>
          </Link>
          <div className="w-[1px] h-[20px] bg-red-500"></div>
          <Link to="/bestSeller">
            <div className="py-1 px-4  cursor-pointer hover:text-[#E42B26] font-semibold duration-150 ">
              Best Sellers
            </div>
          </Link>
          <div className="w-[1px] h-[20px] bg-red-500"></div>
          <Link to="/fictionBooks">
            <div className="py-1 px-4  cursor-pointer hover:text-[#E42B26] font-semibold duration-150 ">
              Fiction Books
            </div>
          </Link>
          <div className="w-[1px] h-[20px] bg-red-500"></div>
          <Link to="/awardWinners">
            <div className="py-1 px-4  cursor-pointer  hover:text-[#E42B26] font-semibold duration-150">
              Award Winners
            </div>
          </Link>
          <div className="w-[1px] h-[20px] bg-red-500"></div>
          <Link to="/authors">
            <div className="py-1 px-4  cursor-pointer  hover:text-[#E42B26] font-semibold duration-150 ">
              Featured Authors
            </div>
          </Link>
          <div className="w-[1px] h-[20px] bg-red-500"></div>

          <div className="flex flex-col items-center">
            {/* <img src="./public/dealicon.png" alt="" /> */}
            <Link to="/todaysDeal">
              <div className="py-1 px-4    cursor-pointer hover:text-[#E42B26] font-semibold  duration-150">
                Today's Deal
              </div>
            </Link>
          </div>
          <div className="w-[1px] h-[20px] bg-red-500"></div>
          <Link to="/requestBook">
            <div className="py-1 px-4     cursor-pointer  hover:text-[#E42B26] font-semibold  duration-150">
              Request Book
            </div>
          </Link>
        </div>
        <div className="relative">
          <div className="absolute xl:top-[1px] xl:right-[10px] lg:top-[7px] lg:right-3">
            0
          </div>
          <div className="text-[30px] text-[#E42B26]">
            <FaRegHeart />
          </div>
        </div>
      </div>
    </div>
  );
}
