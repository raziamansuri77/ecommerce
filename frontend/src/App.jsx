import { useState } from "react";
import "./App.css";
import Navbar from "./components/home/Navbar";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Books from "./components/home/Books";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
