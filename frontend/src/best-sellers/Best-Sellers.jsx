import React from "react";
import Navbar from "../home/Navbar";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Footer from "../home/Footer";
import BestSellersBase from "./Best-Sellers-Base";
import Parent from "../components/Parent";

export default function BestSellers() {
  return (
    <div>
      <BeforeNavbar />
      <SearchNavbar />
      <Navbar />
      <div className="text-[30px] font-bold text-center py-2">Best Sellers</div>

      <Parent />
      {/* <BestSellersBase /> */}
      <Footer />
    </div>
  );
}
