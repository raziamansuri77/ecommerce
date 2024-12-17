import React from "react";
import Navbar from "./Navbar";
import Books from "./Books";
import HeroSection from "./Hero-Section";
import BeforeNavbar from "./Before-Navbar";
import SearchNavbar from "./Search-Navbar";
import AfterSlider from "./After-Slider";
import BoxSlider from "./Box-Slider";
import SS from "./Slider";
import Cards from "./Cards";
import Slider from "./Slider";
import Trending from "./Trending";
import Sellers from "./Sellers";
import Author from "./Author";
import Footer from "./Footer";
import Comics from "./comics";
import Slider1 from "../extra/Slider1";
import Slider3 from "../extra/Slider3";

export default function Home() {
  return (
    <div>
      <BeforeNavbar />
      <SearchNavbar />
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <Comics />
      <Slider />
      <AfterSlider />
      <Trending />
      <Sellers />
      <Author />
      <Footer />
    </div>
  );
}
