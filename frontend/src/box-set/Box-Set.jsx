import React from "react";
import Navbar from "../home/Navbar";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Parent from "../components/Parent";
import Footer from "../home/Footer";
import BoxSetHero from "./Box-Set-Hero";

export default function BoxSet() {
  return (
    <div>
      <BeforeNavbar />
      <SearchNavbar />
      <Navbar />
      {/* <Parent test={"Box Set"} /> */}
      <BoxSetHero />
      <Footer />
    </div>
  );
}
