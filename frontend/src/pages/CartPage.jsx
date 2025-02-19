import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Navbar from "../home/Navbar";

export default function CartPage() {
  const { bookData } = location.state || {};

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    addToWishlist,
    addToCart,
  } = useGlobalContext();

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.prize * item.quantity,
    0
  );

  const handleMoveToWishlist = (item) => {
    addToWishlist(item);
    removeFromCart(item.cartItemId);
  };
  const handleBuyNow = () => {
    addToCart(bookData);
    navigate("/checkout");
  };
  return (
    <div>
      <BeforeNavbar />
      <SearchNavbar />
      <Navbar />
      <div className="p-16 ">
        <h1 className="text-[20px] font-bold">My Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="mt-12 border-2 p-12 rounded-lg bg-[#F8F8F8] w-full">
            {cartItems.map((item) => (
              <li
                key={item.cartItemId}
                className="  flex justify-between gap-6 items-center py-4 border-b w-full"
              >
                <div className="flex gap-4">
                  <div className=" ">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-[150px] h-[200px] shadow-lg"
                    />
                  </div>
                  <div className="">
                    <div className="text-[20px] font-bold">{item.name}</div>
                    <div className="text-[#2c73a3]">
                      <span className="text-[#E42B26]">By: </span>
                      {item.author}
                    </div>
                    <div className="text-[20px] font-semibold">
                      Price: ${item.prize}
                    </div>
                    {/* Quantity controls */}
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => decreaseQuantity(item.cartItemId)}
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        -
                      </button>
                      <span className="mx-2 px-2 py-1 bg-gray-200 rounded">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQuantity(item.cartItemId)}
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" flex justify-end gap-2">
                  <button
                    onClick={() => removeFromCart(item.cartItemId)}
                    className=" px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => handleMoveToWishlist(item)}
                    className="py-2 px-4 rounded-md border-2 shadow-sm border-[#EF4444] text-[#EF4444]"
                  >
                    Move to wishlist
                  </button>
                  <button
                    onClick={handleBuyNow}
                    className="px-4 py-2 w-full rounded-full bg-[#C86800] text-white mr-2"
                  >
                    Buy Now
                  </button>
                </div>
              </li>
            ))}
            {/* Display total price */}
            {/* <div className="mt-6 text-2xl font-bold">Total: ${totalPrice}</div> */}
          </ul>
        )}
      </div>
    </div>
  );
}
