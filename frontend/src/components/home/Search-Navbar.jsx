import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SearchNavbar() {
  return (
    <div className="px-2 flex lg:justify-between items-center pt-14 pb-2  ">
      <div className="flex items-center lg:gap-20">
        <img
          src="./public/logo.png"
          alt=""
          className="lg:w-[95px] lg:h-[60px] w-[70px] h-[50px] sm:w-[50px] sm:h-[35px] "
        />
        <div className="relative sm:text-[10px] lg:text-[20px] ">
          <input
            type="text"
            placeholder="Search By Title,Author,Publisher Or ISBN"
            className="lg:w-[500px]  sm:w-[350px] w-[330px] border-1 lg:p-1 border-[#E42B26]    sm:px-2 sm:py-1"
          />
          <div className="absolute  top-0  sm:py-[6px] sm:text-[12px] sm:w-[25px] lg:py-2 cursor-pointer right-0 bg-[#E42B26] text-white h-full sm:px-2 lg:px-[10px] text-[20px]">
            <FaSearch />
          </div>
        </div>
      </div>
      <div className="lg:flex items-center hidden">
        <div className=" h-[30px] px-2 border-r-[1px] border-[#E42B26] flex">
          <Link to="/login">
            {" "}
            <div className="flex items-center gap-2 ">
              <FaUserCircle className="text-[#E42B26] text-[20px]" />
              <div>My Account</div>
              <IoIosArrowForward className="text-[#E42B26] text-[20px]" />
            </div>
          </Link>
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
