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
      <div className="text-[30px] font-bold text-center py-2">
        Award Winners
      </div>

      <Parent test={"Box Set"} />
      <Footer />
    </div>
  );
}
