import React from "react";
import BeforeNavbar from "../home/Before-Navbar";
import Navbar from "../home/Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Footer from "../home/Footer";
import YourAccount from "./Your-Account";
import PersonalSetting from "./Personal-Setting";
export default function AccountHero() {
  return (
    <div>
      <BeforeNavbar />
      <SearchNavbar />
      <Navbar />
      <YourAccount />
      <Footer />
    </div>
  );
}
