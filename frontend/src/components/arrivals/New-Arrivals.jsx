import React from "react";
import SearchNavbar from "../home/Search-Navbar";
import BeforeNavbar from "../home/Before-Navbar";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import Parent from "../Parent";

export default function NewArrivals() {
  return (
    <div>
      <BeforeNavbar />
      <SearchNavbar />
      <Navbar />
      <Parent test={"New Arrivals"} />
      <Footer />
    </div>
  );
}
