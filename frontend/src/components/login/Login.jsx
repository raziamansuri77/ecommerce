import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../home/Navbar";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import LoginPage from "./Login-page";
import Footer from "../home/Footer";

export default function Login() {
  useEffect(() => {
    // Test API connection
    fetch("/api/v1/test")
      .then((res) => res.json())
      .then((data) => console.log("API Response:", data))
      .catch((err) => console.error("API Error:", err));
  }, []);

  return (
    <div>
      <BeforeNavbar />
      <SearchNavbar />
      <Navbar />
      <LoginPage />
      <div className="pt-10 pb-3">
        <Footer />
      </div>
    </div>
  );
}
