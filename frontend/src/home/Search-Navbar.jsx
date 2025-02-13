import React, { useState } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useGlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";

export default function SearchNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const { cartItems } = useGlobalContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <div className="px-2 flex lg:justify-between   items-center pt-14 pb-2  ">
      <div className="flex items-center lg:gap-20">
        <img
          src="./public/logo.png"
          alt=""
          className="lg:w-[95px] lg:h-[60px] w-[100px] h-[50px] sm:w-[80px] sm:h-[50px] "
        />
        <div className="relative sm:text-[10px] lg:text-[20px] ">
          <input
            type="text"
            placeholder="Search By Title,Author,Publisher Or ISBN"
            className="lg:w-[500px] sm:text-[15px] sm:w-[660px] sm:py-2 w-[330px] border-1 lg:p-1 border-[#E42B26]    sm:px-2 "
          />
          <div className="absolute      top-0   sm:text-[15px] sm:w-[40px]  cursor-pointer  w-[30px]  right-0 bg-[#E42B26] text-white h-full   text-[16px]">
            <FaSearch className="absolute top-1 left-2 sm:left-3 sm:top-3" />
          </div>
        </div>
      </div>

      <div className="lg:flex items-center hidden">
        <div className="h-[30px] px-2 border-r-[1px] border-[#E42B26] flex relative">
          <div
            className="flex items-center gap-2"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <FaUserCircle className="text-[#E42B26] text-[20px]" />
            <div>{user ? user.email : "My Account"}</div>

            {isOpen && (
              <div className="absolute p-2 -right-4 top-4 h-[260px] w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
                <div className="py-1" role="none">
                  {user ? (
                    <>
                      <button
                        onClick={handleLogout}
                        className="block w-full px-4 bg-[#E42B26] text-[15px] font-semibold text-center py-2 text-sm text-white"
                      >
                        Logout
                      </button>
                      <Link to="/account">
                        <div className="block px-4 py-2 text-sm text-gray-700 hover:underline text-center">
                          Your Account
                        </div>
                      </Link>
                      <Link to="/personalsetting">
                        <div className="block px-4 py-2 text-sm text-gray-700 hover:underline text-center">
                          Personal Setting
                        </div>
                      </Link>
                      <Link to="/yourorder">
                        <div className="block px-4 py-2 text-sm text-gray-700 hover:underline text-center">
                          Your Orders
                        </div>
                      </Link>
                      <Link to="/wishlist">
                        <div className="block px-4 py-2 text-sm text-gray-700 hover:underline text-center">
                          Your Wishlist
                        </div>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to="/login">
                        <div className="block px-4 bg-[#E42B26] text-[15px] font-semibold text-center py-2 text-sm text-white">
                          Login
                        </div>
                      </Link>
                      <Link to="/signup">
                        <div className="block px-4 py-2 text-sm text-[#E42B26] hover:underline text-center text-[15px]">
                          New to ApnaBook Store? Sign up
                        </div>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className="px-2 relative cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <img
            src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/cart_white.svg"
            alt=""
            className="w-[40px]"
          />
          <div className="absolute top-[-6px] right-5">{cartItems.length}</div>
        </div>
      </div>
    </div>
  );
}
