import React from "react";
import Navbar from "../home/Navbar";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Parent from "../components/Parent";
import Footer from "../home/Footer";

export default function AwardWinners() {
  return (
    <div>
      <BeforeNavbar />
      <SearchNavbar />
      <Navbar />
      <Parent test={"Box Set"} />
      <Footer />
    </div>
  );
}
