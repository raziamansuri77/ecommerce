import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
export default function Author() {
  const author = [
    { img: "public/a1.jpg", name: "Gayle Forman" },
    { img: "public/a2.jpg", name: "Erich Segal" },
    { img: "public/a3.jpg", name: "Sylvia Plath" },
    { img: "public/a4.jpg", name: "Shashi Tharo" },
    { img: "public/a4.jpg", name: "Shashi Tharo" },
    { img: "public/a4.jpg", name: "Shashi Tharo" },
    { img: "public/a4.jpg", name: "Shashi Tharo" },
    { img: "public/a4.jpg", name: "Shashi Tharo" },
  ];
  return (
    <div className="bg-[#ECECEC] mx-10">
      <div className="text-[30px] font-bold text-center py-2">
        Featured Author
      </div>
      <div className="flex items-center max-w-7xl mx-auto ">
        <MdOutlineKeyboardArrowLeft className="text-[70px] cursor-pointer" />
        <div className="flex gap-4">
          {author.map((author) => {
            return (
              <div>
                <div className="text-center">
                  <div className="w-[130px] h-[130px] border-2 rounded-full"></div>
                </div>
                <img src="" alt="" />
                <p>{author.name}</p>
              </div>
            );
          })}
        </div>

        <MdOutlineKeyboardArrowRight className="text-[70px] cursor-pointer" />
      </div>
    </div>
  );
}
