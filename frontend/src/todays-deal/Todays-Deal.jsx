import React from "react";
import Navbar from "../home/Navbar";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Footer from "../home/Footer";
import TodaysDealMain from "./Todays-Deal-Main";

export default function TodaysDeal() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white w-full">
        <BeforeNavbar />
        <div className="mt-[35px]">
          <SearchNavbar />
        </div>
        <Navbar />
      </div>
      {/* <Parent /> */}
      <div className="mt-[170px]">
        <TodaysDealMain />
        <Footer />
      </div>
    </div>
  );
}
