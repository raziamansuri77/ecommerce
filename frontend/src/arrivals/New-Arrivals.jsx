import React from "react";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Footer from "../home/Footer";
import Parent from "../components/Parent";
import Navbar from "../home/Navbar";
export default function NewArrivals() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white w-full">
        <BeforeNavbar />
        <SearchNavbar />
        <Navbar />
      </div>
      <div className="mt-[190px]">
        <div className="text-[30px] font-bold text-center py-2">
          New Arrival
        </div>
        <Parent />
        <Footer />
      </div>
    </div>
  );
}
