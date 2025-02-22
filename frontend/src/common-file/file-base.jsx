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
      <div className="   text-[#E42B26] font-bold flex justify-between h-[120px]">
        <div className="text-[28px] p-4 ">
          India's Largest Online Book Store
        </div>
        <img src="./public/cart-lady.jpg" alt="" className="w-[150px]" />
      </div>
      <div className="mt-[270px] md:mt-[220px]">
        {/* <div className="text-[30px] font-bold text-center py-2">
          common file
        </div> */}
        {/* <Parent test={"Box Set"} /> */}
        <CommonFile />
        <Footer />
      </div>
    </div>
  );
}
