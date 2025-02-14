import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Navbar from "../home/Navbar";

export default function CartPage() {
  const { cartItems, removeFromCart } = useGlobalContext();

  return (
    <div>
      <BeforeNavbar />
      <SearchNavbar />
      <Navbar />
      <div className="p-16">
        <h1 className="text-[20px] font-bold">My Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="mt-12 border-2 p-12 rounded-lg bg-[#F8F8F8]">
            {cartItems.map((item) => (
              <li key={item.id} className="flex gap-6">
                <div className=" ">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-[150px] h-[200px] shadow-lg"
                  />
                </div>
                <div>
                  <div className="text-[20px] font-bold">{item.name}</div>
                  <div className="text-[#2c73a3]">
                    <span className="text-[#E42B26]">By: </span>
                    {item.author}
                  </div>
                  <div className="text-[20px] font-semibold">{item.prize}</div>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
