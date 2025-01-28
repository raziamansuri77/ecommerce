import React from "react";
import Navbar from "../home/Navbar";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Parent from "../components/Parent";
import Footer from "../home/Footer";
import randomBooks from "../components/Random-Book.json";

export default function BookDetails() {
  const moreDeails = [
    {
      " img": "./public/",
      " title": "Premium quality",
    },
    {
      " img": "./public/",
      " title": "Easy Return ",
    },
    {
      " img": "./public/",
      " title": "Certified product",
    },
    {
      " img": "./public/",
      " title": "Secure Checkout",
    },
    {
      " img": "./public/",
      " title": " Money back guarantee",
    },
    {
      " img": "./public/",
      " title": "On time delivery",
    },
  ];
  return (
    <div>
      <BeforeNavbar />
      <SearchNavbar />
      <Navbar />
      {/* <div>Books Details</div> */}
      <div className="py-4 max-w-[90%]  mx-auto flex gap-16 max-h-screen">
        <div className="relative">
          <img src="/public/na1.jpg" alt="" className="w-[240px]" />
          <div className="absolute bg-[#B53D3D] text-white px-4 -top-3 -left-3">
            20%
          </div>
        </div>
        <div className="space-y-4 ">
          <div className="text-[#B53D3D] font-bold text-[30px]">
            Diary of a Wimpy Kid: Hot Mess (Book 19)
          </div>
          <div className="text-[17px] ">
            {" "}
            By: Jeff Kinney (Author) , Kinney, Jeff (Author) , Author 33291 TBA
            (Author) | Publisher: Penguin Random House Children's UK
          </div>
          <div className="text-[#b33535] text-[22px]">₹455</div>
          <div className="line-through text-[18px] text-gray-700">
            M.R.P. :₹650
          </div>
          <div className="text-[18px] text-gray-700">Save: ₹195(30%)</div>
          <hr />
          {moreDeails.map((detail) => {
            return (
              <div>
                <img src="/public/na1/jpg" alt="" />
              </div>
            );
          })}
        </div>
        <div>
          <div>
            <label htmlFor="quantity">Quantity:</label>
            <select name="quantity" id="" className="px-2">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
