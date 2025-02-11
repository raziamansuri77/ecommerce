import React from "react";
import Navbar from "./Navbar";
import BeforeNavbar from "./Before-Navbar";
import SearchNavbar from "./Search-Navbar";
import Slider from "./Slider";
import Trending from "./Trending";
import Comics from "./comics";
import IconSlider from "./Icon-Slider";
import Seller from "./Seller";
import Arrivals from "./Arrivals";
import BestSeller from "./Best-Seller";
import Author from "./Author";
import Winners from "./Winners";
import TopBooks from "./Top-Books";
import DiscountBooks from "./Discount-Books";
import Footer from "./Footer";
import Slider2 from "./Slider2";
import ExamBooks from "./Exam-Books";

export default function Home() {
  return (
    <div>
      <BeforeNavbar />
      <SearchNavbar className="" />
      <Navbar />
      <Comics />
      <Slider />
      <IconSlider />
      {/* <Trending /> */}
      {/* <Seller /> */}
      {/* <Arrivals /> */}
      {/* <BestSeller /> */}
      {/* <Winners /> */}
      {/* <TopBooks /> */}
      {/* <ExamBooks /> */}
      <DiscountBooks />
      {/* <Author /> */}
      <Footer />
    </div>
  );
}
