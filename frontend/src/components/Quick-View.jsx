import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import { useGlobalContext } from "../context/GlobalContext";

export default function QuickView() {
  const location = useLocation();
  const { bookData } = location.state || {};
  const { addToCart, addToWishlist } = useGlobalContext();
  // Inside your component:
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // Add the book to the cart
    addToCart(bookData);
    console.log("Added to cart:", bookData);
  };

  const handleAddToWishlist = () => {
    // Add the book to the wishlist
    addToWishlist(bookData);
    console.log("Added to wishlist:", bookData);
  };
  const handleBuyNow = () => {
    addToCart(bookData);
    navigate("/checkout");
  };
  const icons = [
    {
      img: "/public/delivery.png",
      name: "Free Delivery",
      description:
        "Free shipping on orders over ₹499. Delivery within 5-7 business days.",
    },
    {
      img: "./public/return.png",
      name: "Easy Returns",
      description:
        "Hassle-free returns within 30 days of delivery. No questions asked policy.",
    },
    {
      img: "./public/secure.png",
      name: "Secure Payment",
      description:
        "Multiple secure payment options including Credit/Debit cards, UPI, and Net Banking.",
    },
    {
      img: "./public/quality.png",
      name: "Quality Check",
      description:
        "All books undergo strict quality checks to ensure pristine condition.",
    },
    {
      img: "./public/support.png",
      name: "24/7 Support",
      description:
        "Round-the-clock customer support available via chat, email, and phone.",
    },
  ];
  const [selectedDescription, setSelectedDescription] = useState(null);

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white w-full">
        <BeforeNavbar />
        <SearchNavbar />
        <Navbar />
      </div>
      <div className="py-12 px-6 mt-[175px] ">
        {/* shadow-inner  bg-[#FBFBFB]*/}
        {bookData && (
          <div className="w-full h-[400px]  px-8 flex gap-8  ">
            <div className=" h-[300px] shadow-lg relative">
              <div className="bg-[#FD0000]  text-white text-[12px] px-4 py-[1px] absolute -top-2 -left-2 flex items-center justify-center text-center">
                {bookData.discountAmount}
              </div>
              <div className="flex flex-col items-center ">
                <img
                  src={bookData.img}
                  alt={bookData.name}
                  className="w-[270px] h-[300px]"
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

              <div>
                <div className="flex mt-[68px]">
                  {icons.map((icon, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center w-full space-y-2"
                      onClick={() => setSelectedDescription(icon.description)}
                    >
                      <img
                        src={icon.img}
                        alt=""
                        className="cursor-pointer w-[40px] rounded-full bg-[#F9F9F9] p-2 hover:bg-[#E42B26]/10 transition-colors"
                      />
                      <p className="text-[13px] font-medium">{icon.name}</p>
                    </div>
                  ))}
                </div>

                {selectedDescription && (
                  <div className="mt-6 p-4 bg-[#F9F9F9] rounded-md text-center text-gray-700">
                    {selectedDescription}
                  </div>
                )}
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
                <button
                  onClick={handleBuyNow}
                  className="px-4 py-2 w-full rounded-full bg-[#C86800] text-white mr-2"
                >
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
