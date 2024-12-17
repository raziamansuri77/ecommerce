import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
export default function Seller() {
  const bookDetails = [
    {
      img: "public/s1.jpg",
      name: "Percy Jackson and the Olympians",
      author: "Rick Riordan",
      review: "No Review Yet",
      price: "489",
      disc: "699",
    },
    {
      img: "public/s2.jpg",
      name: "The Golden Road",
      author: "William Dalry..",
      review: "No Review Yet",
      price: "639",
      disc: "999",
    },
    {
      img: "public/s3.jpg",
      name: "Nexus",
      author: "Yuval Noah H....",
      review: "No Review Yet",
      price: "758",
      disc: "1099",
    },
    {
      img: "public/s4.jpg",
      name: "Satvic Revolution",
      author: "Subah Saraf",
      review: "No Review Yet",
      price: "364",
      disc: "499",
    },
    {
      img: "public/s5.jpg",
      name: "An Eye for an Eye",
      author: "Jeffrey Archer",
      review: "No Review Yet",
      price: "324",
      disc: "499",
    },
    {
      img: "public/s6.jpg",
      name: "Warmth",
      author: "Rithvik Singh",
      review: "No Review Yet",
      price: "239",
      disc: "299",
    },
    {
      img: "public/s7.jpg",
      name: "Mastering the Date Paradox",
      author: "Nitin Seth",
      price: "551",
      disc: "799",
    },
    {
      img: "public/s8.jpg",
      name: "Greatest Short Stories of....",
      author: "Fyodor Dosto...",
      price: "1,388",
      disc: "2,169",
    },
  ];
  return (
    <div>
      <div className="text-center text-[30px] font-bold py-4">New Arrivals</div>
      <div className="flex items-center">
        <MdOutlineKeyboardArrowLeft className="text-[70px] cursor-pointer" />
        <div className="flex gap-4 max-w-8xl bg-red-200 mx-auto">
          {bookDetails.map((details) => {
            return (
              <div className="px-2 border-1 w-[150px] bg-green-400 rounded-lg flex flex-col items-center gap-2 justify-center shadow-md h-[340px]">
                <div className="bg-[url({})]">
                  <img
                    src={details.img}
                    className="cursor-pointer w-full h-[200px] "
                  />
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
