import React from "react";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Footer from "../home/Footer";
import Parent from "../components/Parent";
import Navbar from "../home/Navbar";
export default function NewArrivals() {
  return (
    <div>
      <BeforeNavbar />
      <SearchNavbar />
      <Navbar />
      <div className="text-[30px] font-bold text-center py-2">New Arrival</div>
      <Parent />
      <Footer />
    </div>
  );
}
