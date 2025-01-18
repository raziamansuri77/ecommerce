import React from "react";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Navbar from "../home/Navbar";
import Parent from "../Parent";
import BestSellersBase from "./best-sellers-base";

export default function BestSellers() {
  return (
    <div>
      <BeforeNavbar />
      <SearchNavbar />
      <Navbar />
      {/* <Parent /> */}
      <BestSellersBase />
    </div>
  );
}
