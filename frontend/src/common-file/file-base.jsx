import React from "react";
import Navbar from "../home/Navbar";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Parent from "../components/Parent";
import Footer from "../home/Footer";
import CommonFile from "./common-file";

export default function FileBase() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white w-full">
        <BeforeNavbar />
        <SearchNavbar />
        <Navbar />
      </div>
      <div className="mt-[190px]">
        <div className="text-[30px] font-bold text-center py-2">
          common file
        </div>
        {/* <Parent test={"Box Set"} /> */}
        <CommonFile />
        <Footer />
      </div>
    </div>
  );
}
