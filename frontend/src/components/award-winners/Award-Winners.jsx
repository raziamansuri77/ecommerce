import React from "react";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Navbar from "../home/Navbar";
import Parent from "../Parent";
import AwardWinnersBase from "./Award-Winners-Base";

export default function AwardWinners() {
  return (
    <div>
      <BeforeNavbar />
      <SearchNavbar />
      <Navbar />
      {/* <Parent /> */}
      <AwardWinnersBase />
    </div>
  );
}
