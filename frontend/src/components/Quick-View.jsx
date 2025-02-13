import React from "react";
import { useLocation, useParams } from "react-router-dom";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import { useGlobalContext } from "../context/GlobalContext";

export default function QuickView() {
  const location = useLocation();
  const { bookData } = location.state || {};
  const { addToCart, addToWishlist } = useGlobalContext();

  const handleAddToCart = () => {
    addToCart(bookData);
    console.log("Added to cart:", bookData);
  };

  const handleAddToWishlist = () => {
    addToWishlist(bookData);
    console.log("Added to wishlist:", bookData);
  };

  return (
    <div>
      <BeforeNavbar />
      <SearchNavbar />
      <Navbar />
      <div className="py-12 px-6">
        {/* shadow-inner  bg-[#FBFBFB]*/}
        {bookData && (
          <div className="w-full h-[500px]  px-8 flex gap-8  ">
            <div className="bg-blue-200 h-[400px] shadow-lg relative">
              <div className="bg-[#FD0000]  text-white text-[12px] px-4 py-[1px] absolute -top-2 -left-2 flex items-center justify-center text-center">
                {bookData.discountAmount}
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={bookData.img}
                  alt={bookData.name}
                  className="w-[350px] h-[400px]"
                />
              </div>
            </div>
            <div>
              <div className="text-[20px] ">
                <div className="text-[35px] font-bold text-[#B01A16]">
                  {bookData.name}
                </div>
                <div className="text-[20px]">{bookData.author}</div>
                <div className="text-[20px]">{bookData.prize}</div>
                <div className="line-through text-[#B01A16]">
                  M.R.P.:{bookData.discount}
                </div>
                <div>{bookData.description}</div>
              </div>
              <div className="flex">
                <div>
                  <img src="/public/premium-quality.png" alt="" />
                  <p> Premium quality</p>
                </div>
                <div>
                  <img src="/public/easy-return.png" alt="" />
                  <p>Easy Return</p>
                </div>
                <div>
                  <img src="/public/certified-product.png" alt="" />
                  <p>Certified product</p>
                </div>
                <div>
                  <img src="/public/secure-express.png" alt="" />
                  <p>Secure Checkout</p>
                </div>
                <div>
                  <img src="/public/" alt="" />
                  <p>Money back guarantee</p>
                </div>
              </div>
            </div>
            <div>
              <div className="border-4 space-y-3 border-gray-300 w-[280px] p-3 rounded-md   ">
                <button
                  className="px-4 py-2 w-full rounded-full bg-[#397D58] text-white  mr-2"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
                <button className="px-4 py-2 w-full rounded-full bg-[#C86800] text-white  mr-2">
                  Buy Now
                </button>
                <button
                  className="px-4 py-2 w-full rounded-full  border-2   "
                  onClick={handleAddToWishlist}
                >
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
