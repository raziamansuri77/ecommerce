import React from "react";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Navbar from "../home/Navbar";
import Parent from "../Parent";
import FictionBooksBase from "./Fiction-Books-Base";

export default function FictionBooks() {
  return (
    <div>
      <BeforeNavbar />
      <SearchNavbar />
      <Navbar />
      {/* <Parent /> */}
      <FictionBooksBase />
    </div>
  );
}
