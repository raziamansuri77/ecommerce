import React from "react";
import Navbar from "../home/Navbar";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import FictionBooksBase from "./Fiction-Books-Base";
import Footer from "../home/Footer";

export default function FictionBooks() {
  return (
    <div>
      <BeforeNavbar />
      <SearchNavbar />
      <Navbar />
      {/* <Parent /> */}
      <FictionBooksBase />
      <Footer />
    </div>
  );
}
