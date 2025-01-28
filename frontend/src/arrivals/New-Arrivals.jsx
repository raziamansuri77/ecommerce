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
      <Parent />
      <Footer />
    </div>
  );
}
