import React from "react";
import BeforeNavbar from "../home/Before-Navbar";
import Navbar from "../home/Navbar";
import SearchNavbar from "../home/Search-Navbar";
import randomBook from "/src/components/Random-Book.json";

export default function QuickView() {
  return (
    <div>
      <BeforeNavbar />
      <SearchNavbar />
      <Navbar />
      <div>
        {randomBook.map((book) => {
          return (
            <div
              key={book.key}
              className=" w-[200px] h-[600px] shadow-inner bg-[#FBFBFB]  cursor-pointer p-4 relative "
            >
              {/* <div className="  bg-[#FD0000] text-white text-[12px] px-4 py-[1px]  absolute -top-2 -left-2 flex items-center justify-center text-center">
                {book.discountAmount}
              </div>
              <div className="flex flex-col items-center">
                <img src={book.img} alt="" className="w-full h-[200px]" />
                <div className="text-gray-600 text-center font-bold">
                  {book.name}
                </div>
                <div className="text-gray-600 text-center">{book.author}</div>
                <div className="text-gray-600 text-center">{book.review}</div>
                <div className="flex gap-2 items-center">
                  <div>{book.prize}</div>
                  <div className="line-through">{book.discount}</div>
                </div> */}
              {/* </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
