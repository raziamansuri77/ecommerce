import React from "react";
import Navbar from "../home/Navbar";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import FictionBooksBase from "./Fiction-Books-Base";
import Footer from "../home/Footer";

export default function FictionBooks() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white w-full">
        <BeforeNavbar />
        <SearchNavbar />
        <Navbar />
      </div>
      {/* <Parent /> */}
      <div className="mt-[190px]">
        <FictionBooksBase />
        <Footer />
      </div>
    </div>
  );
}
