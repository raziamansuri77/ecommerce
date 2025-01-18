import React from "react";
import accountdata from "/src/components/account/account-data.json";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function YourAccount() {
  return (
    <div className="  max-w-6xl mx-auto py-6">
      <div className="text-[25px] italic font-serif">My Account</div>
      <div className="grid grid-cols-3 gap-4 py-4">
        <Link to="/personalsetting">
          <div className="border-2  p-2 rounded-lg flex flex-col justify-center items-center cursor-pointer">
            <img src="./public/personalsetttingicon.jpg" alt="" />
            <div className="font-bold text-[14px]">Personal Setting</div>
          </div>
        </Link>
        <Link to="/yourorder">
          <div className="border-2  p-2 rounded-lg flex flex-col justify-center items-center cursor-pointer">
            <img src="./public/myordericon.jpg" alt="" />
            <div className="font-bold text-[14px]">My Order</div>
          </div>{" "}
        </Link>
        <Link to="/wishlist">
          <div className="border-2  p-2 rounded-lg flex flex-col justify-center items-center cursor-pointer">
            <img src="./public/wishlisticon.jpg" alt="" />
            <div className="font-bold text-[14px]"> My Wishlist</div>
          </div>{" "}
        </Link>
        <Link to="/certificates">
          <div className="border-2 h-[120px] p-2 rounded-lg flex flex-col justify-center items-center cursor-pointer">
            <img src="./public/giftcertificateicon.jpg" alt="" />
            <div className="font-bold text-[14px]">My Gift Certificates</div>
          </div>
        </Link>
        <Link to="/address">
          <div className="border-2  p-2 rounded-lg flex flex-col justify-center items-center cursor-pointer">
            <img src="./public/addressicon.jpg" alt="" />
            <div className="font-bold text-[14px]">My Address</div>
          </div>{" "}
        </Link>
        <Link to="/changepassword">
          <div className="border-2  p-2 rounded-lg flex flex-col justify-center items-center cursor-pointer">
            <img src="./public/chagepasswordicon.jpg" alt="" />
            <div className="font-bold text-[14px]">Change Password</div>
          </div>{" "}
        </Link>
      </div>
    </div>
  );
}
