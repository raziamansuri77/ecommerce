import React from "react";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Navbar from "../home/Navbar";
import BoxSetHero from "./box-set-hero";

export default function BoxSet() {
  return (
    <div>
      <BeforeNavbar />
      <SearchNavbar />
      <Navbar />
      <BoxSetHero />
    </div>
  );
}
