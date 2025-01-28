import React from "react";
import Navbar from "../home/Navbar";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Footer from "../home/Footer";

export default function Wishlist() {
  return (
    <div>
      <BeforeNavbar />
      <SearchNavbar />
      <Navbar />
      <div className="w-[60%] space-y-4   pl-20 py-16">
        <div className="text-[20px] font-semibold font-serif">My Wishlist</div>
        <div className=" ">
          <div className="p-2 border-2 rounded-t-lg  font-semibold text-[15px]  px-4">
            - To make your Wishlist public{" "}
            <span className="text-blue-400  cursor-pointer hover:text-black hover:border-b-2 duration-200 hover:border-black">
              {" "}
              Click here
            </span>
          </div>{" "}
          <div className="p-2 border-2 text-[#E42B26] rounded-b-lg font-semibold text-[18px] text-center">
            You do not have any Order(s) placed
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
