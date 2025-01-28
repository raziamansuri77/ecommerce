import React from "react";
import Navbar from "../home/Navbar";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Footer from "../home/Footer";
import RequestBookMain from "./Request-Book-Main";

export default function RequestBook() {
  return (
    <div>
      <BeforeNavbar />
      <SearchNavbar />
      <Navbar />
      {/* <Parent /> */}
      <RequestBookMain />
      <Footer />
    </div>
  );
}
