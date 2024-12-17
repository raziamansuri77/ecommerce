import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
export default function Trending() {
  const bookDetails = [
    {
      img: "public/t1.jpg",
      name: "The Psychology",
      author: "Housel,Morgan",
      price: "251",
      disc: "322",
    },
    {
      img: "public/t2.jpg",
      name: "Karnal II : Son of Surya",
      author: "Kevin Missal",
      price: "257",
      disc: "396",
    },
    {
      img: "public/t3.jpg",
      name: "White Nights",
      author: "Ronald Meyer",
      price: "314",
      disc: "338",
    },
    {
      img: "public/t4.jpg",
      name: "30 Days To Better English",
      author: "Lewis Norman",
      price: "119",
      disc: "199",
    },
    {
      img: "public/t5.jpg",
      name: "VAgabond (Vizbig Edition),Vol.3",
      author: "Takehiko Inoue",
      price: "1,388",
      disc: "2,169",
    },
  ];
  return (
    <div>
      <div className="text-center text-[30px] font-bold py-4">Now Trending</div>
      <div className="flex items-center">
        <MdOutlineKeyboardArrowLeft className="text-[70px] cursor-pointer" />
        <div className="flex gap-4 max-w-8xl bg-red-200 mx-auto py-3">
          {bookDetails.map((details) => {
            return (
              <div className="px-2 bg-blue-400 shadow-sm rounded-lg border-1 h-[450px] ">
                <div className="p-4 border-1 bg-green-400 rounded-lg flex flex-col items-center gap-2 justify-center shadow-md h-[450px]">
                  <div className="">
                    <img src={details.img} className="cursor-pointer  " />
                  </div>
                  <div className="text-center w-full px-2 py-2">
                    <p>{details.name}</p>
                    <p>{details.author}</p>
                    <div className="flex justify-center gap-4">
                      <p>{details.price}</p>
                      <p>{details.disc}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>{" "}
        <MdOutlineKeyboardArrowRight className="text-[70px] cursor-pointer" />
      </div>
      <div className=" flex items-center justify-center text-center text-[#E42B26] underline cursor-pointer w-[80px] my-10  mx-auto ">
        SEE ALL
      </div>
    </div>
  );
}
