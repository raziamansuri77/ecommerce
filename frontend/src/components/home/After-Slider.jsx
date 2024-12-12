import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function AfterSlider() {
  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto flex justify-between items-center text-center   py-6 border-t-2 border-b-2 border-gray-300">
        <MdOutlineKeyboardArrowLeft className="text-[70px]" />
        <div>
          <img
            src="https://www.bookswagon.com/Images/staticimages/icon1.png"
            alt=""
          />
          <div>Best Seller</div>
        </div>
        <div>
          <img
            src="https://www.bookswagon.com/Images/staticimages/icon8.png"
            alt=""
          />
          <div>Award Winners</div>
        </div>
        <div>
          <img
            src="https://www.bookswagon.com/Images/staticimages/TodaysDeal.png"
            alt=""
          />
          <div>Today's Deal</div>
        </div>
        <div>
          <img
            src="https://www.bookswagon.com/Images/staticimages/icon4.png"
            alt=""
          />
          <div>Box Sets</div>
        </div>
        <div>
          <img
            src="https://www.bookswagon.com/Images/staticimages/icon7.png"
            alt=""
          />
          <div>
            International <br /> Best Seller
          </div>
        </div>
        <div>
          <img
            src="https://www.bookswagon.com/Images/staticimages/icon2.png"
            alt=""
          />
          <div>New Arrivals</div>
        </div>
        <div>
          <img
            src="https://www.bookswagon.com/Images/staticimages/icon5.png"
            alt=""
          />
          <div>Fiction Books</div>
        </div>
        <div>
          <img
            src="https://www.bookswagon.com/Images/staticimages/tarot.png"
            alt=""
          />
          <div>Tarot Cards</div>
        </div>
        <MdOutlineKeyboardArrowRight className="text-[70px]" />
      </div>
    </div>
  );
}
