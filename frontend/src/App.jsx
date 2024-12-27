import Login from "./components/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import SignupPage from "./components/signup/Signup-Page";
import Signup from "./components/signup/Signup";
import Forgot from "./components/forgot/Forgot";
import Book from "./components/books/Book";
import NewArrivals from "./components/arrivals/New-Arrivals";
import Medical from "./components/medical-dream/Medical";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/book" element={<Book />} />
          <Route path="/newarrivals" element={<NewArrivals />} />
          <Route path="/medical" element={<Medical />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
