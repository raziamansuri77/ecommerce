import React from "react";
import Navbar from "../home/Navbar";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Footer from "../home/Footer";
import TodaysDealMain from "./Todays-Deal-Main";

export default function TodaysDeal() {
  return (
    <div>
      <BeforeNavbar />
      <SearchNavbar />
      <Navbar />
      {/* <Parent /> */}
      <TodaysDealMain />
      <Footer />
    </div>
  );
}
