import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";

export default function Search() {
  return (
    <div>
      <div className="p-2 flex justify-between pr-6">
        <div className="flex gap-2">
          <div>
            <div className="py-1 px-4 border-r-[1px] border-red-500 flex items-center cursor-pointer hover:font-bold">
              <div> Book</div>
              <MdArrowDropDown className="text-[25px]" />
            </div>
          </div>
          <div className=" py-1 px-4 border-r-[1px] border-red-500 cursor-pointer hover:font-bold ">
            New Arrivals
          </div>
          <div className="py-1 px-4 border-r-[1px] border-red-500 cursor-pointer hover:font-bold">
            Box Sets
          </div>
          <div className="py-1 px-4 border-r-[1px] border-red-500 cursor-pointer hover:font-bold ">
            Best Sellers
          </div>
          <div className="py-1 px-4 border-r-[1px] border-red-500 cursor-pointer hover:font-bold">
            Fiction Books
          </div>
          <div className="py-1 px-4 border-r-[1px] border-red-500 cursor-pointer hover:font-bold">
            Award Winners
          </div>
          <div className="py-1 px-4 border-r-[1px] border-red-500 cursor-pointer hover:font-bold">
            Featured Authors
          </div>
          <div className="py-1 px-4 border-r-[1px] border-red-500 cursor-pointer hover:font-bold">
            Today's Deal
          </div>
          <div className="py-1 px-4   border-red-500 cursor-pointer hover:font-bold">
            Request Book
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-[1px] right-[10px]">0</div>
          <div className="text-[30px] text-[#E42B26]">
            <FaRegHeart />
          </div>
        </div>
      </div>
      {/* <img
        src="https://www.bookswagon.com/images/promotionimages/web/2_CuratedWeb0412.jpg"
        alt=""
      /> */}
      <div className="bg-[url('./public/bg1.png')] h-[100px]">
        <p className="text-white text-[40px] font-bold flex justify-center items-center pt-3">
          ComicsByApna BookStore:Connecting fans to the best in comics
        </p>
      </div>
    </div>
  );
}
