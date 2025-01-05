import Login from "./components/login/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import SignupPage from "./components/signup/Signup-Page";
import Signup from "./components/signup/Signup";
import Forgot from "./components/forgot/Forgot";
import Book from "./components/books/Book";
import NewArrivals from "./components/arrivals/New-Arrivals";
import Medical from "./components/medical-dream/Medical";
import BoxSet from "./components/box-set/Box-Set";
import BoxSetHero from "./components/box-set/box-set-hero";
import AccountHero from "./components/account/Account-Hero";
import PersonalSetting from "./components/account/Personal-Setting";

function App() {
  const isAuthenticated = !!localStorage.getItem("user");
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
          <Route path="/boxset" element={<BoxSet />} />
          <Route path="/boxhero" element={<BoxSetHero />} />
          <Route path="/account" element={<AccountHero />} />
          <Route path="/personalsetting" element={<PersonalSetting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
