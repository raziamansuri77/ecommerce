import React from "react";
import Navbar from "./Navbar";
import Books from "./Books";
import HeroSection from "./Hero-Section";
import BeforeNavbar from "./Before-Navbar";
import SearchNavbar from "./Search-Navbar";
import Slider from "./Slider";
import AfterSlider from "./After-Slider";
import BoxSlider from "./Box-Slider";
import SS from "./SS";

export default function Home() {
  return (
    <div>
      <BeforeNavbar />
      <SearchNavbar />
      <Navbar />
      <SS />
      {/* <Slider /> */}
      <AfterSlider />
      {/* <BoxSlider /> */}
      {/* <HeroSection /> */}
      <Books />
    </div>
  );
}
