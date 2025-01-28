import React from "react";
import Navbar from "../home/Navbar";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Footer from "../home/Footer";
import ForgotPage from "./Forgot-Page";

export default function Forgot() {
  return (
    <div>
      <BeforeNavbar />
      <SearchNavbar />
      <Navbar />
      <ForgotPage />
      <Footer />
    </div>
  );
}
