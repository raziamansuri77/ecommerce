import React from "react";
import BeforeNavbar from "../home/Before-Navbar";
import Navbar from "../home/Navbar";
import SearchNavbar from "../home/Search-Navbar";
// import randomBook from "/src/components/Random-Book.json";

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
              className=" w-full h-[600px] shadow-inner flex gap-8 bg-[#FBFBFB]    p-4 relative "
            >
              <div>
                <div className="  bg-[#FD0000] text-white text-[12px] px-4 py-[1px]  absolute -top-2 -left-2 flex items-center justify-center text-center">
                  {book.discountAmount}
                </div>
                <div className="flex flex-col items-center ">
                  <img src={book.img} alt="" className="w-[200px] h-[300px]" />
                </div>
              </div>
              <div>
                <div className="text-[35px] font-bold text-[#B01A16]">
                  {book.name}
                </div>
                <div>By:{book.author}</div>
                <div>{book.review}</div>
                <div>{book.prize}</div>
                <div className="line-through">{book.discount}</div>
              </div>
              <div>
                <div className="border-b-2 border-gray-300">
                  <button>Add to Cart</button>
                  <button>Buy Now</button>
                  <button>Add to Wishlist</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
