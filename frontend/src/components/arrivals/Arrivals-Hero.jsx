import React from "react";
import { useState } from "react";
// import data from "/src/components/arrivals/data.json";
import arrivalsbook from "/src/components/arrivals/arrivals-books.json";

export default function ArrivalsHero() {
  const [value, setValue] = useState(50);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <div className="text-center text-[30px] font-bold">New Arrivals</div>
      <div
        className="flex
      gap-4 w-[90%] mx-auto"
      >
        <div className="bg-red-100 w-[30%] space-y-4">
          <div>Refine your Search</div>
          <div className="space-y-4">
            <div>
              Price range:
              <span className="text-[#FF0000]">
                {" "}
                ₹{value} - ₹{value}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              onChange={handleChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />{" "}
            <div>
              Discount Range:{" "}
              <span className="text-[#FF0000]">
                {" "}
                {value}% - {value}%
              </span>
            </div>
          </div>
          <div>
            <div>
              <div>Binding </div>
            </div>
          </div>
        </div>
        <div className=" w-full ">
          <div className="flex justify-between">
            <div className="text-[18px] font-semibold">5441 results found</div>
            <div className="space-x-2">
              <label htmlFor="sort">Sort By: </label>
              <select name="" id="" className="bg-[#E9E9ED]">
                <option value="relevance"> Relevance</option>
                <option value="prize-low-high">Price-Low to High</option>
                <option value="prize-high-low">Price-High to Low</option>
                <option value="discount">Discount</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4">
            {arrivalsbook.map((book) => {
              return (
                <div className="bg-red-200 p-3 relative ">
                  <div className="w-[40px] h-[40px] bg-red-600 rounded-full absolute -top-3 right-0 flex items-center justify-center text-center">
                    {book.discount - value}
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={book.img} alt="" className="w-full h-[200px]" />
                    <div className="text-gray-600 text-center">{book.name}</div>
                    <div className="flex gap-2 items-center">
                      <div>{book.amount}</div>
                      <div className="line-through">{book.discount}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
