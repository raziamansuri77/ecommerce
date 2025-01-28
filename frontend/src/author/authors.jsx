import React from "react";
import Navbar from "../home/Navbar";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Footer from "../home/Footer";
import authorData from "../author/author-data.json";

export default function Authors() {
  return (
    <div>
      <BeforeNavbar />
      <SearchNavbar />
      <Navbar />
      <div className="py-6 px-12">
        <div className="text-[20px] font-semibold ">Featured Authors</div>

        <div className="grid grid-cols-2 gap-16">
          {authorData.map((author) => {
            return (
              <div className="flex gap-12 border-b-2 py-4  ">
                <img
                  src={author.img}
                  alt=""
                  className="w-[100px] h-[100px] rounded-full cursor-pointer"
                />
                <div className="">
                  <div className="font-bold text-[18px]">{author.name}</div>
                  <div className="text-[16px]">
                    {author.about}{" "}
                    <span className="text-[#B01A16] hover:underline cursor-pointer">
                      Read More
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
