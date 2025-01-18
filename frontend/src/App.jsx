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
import YourOrder from "./components/account/Your-Order";
import Wishlist from "./components/account/Wishlist";
import Certificates from "./components/account/Certificates";
import Address from "./components/account/Address";
import ChangePassword from "./components/account/ChangePassword";
import BestSellers from "./components/best-sellers/Best-Sellers";
import FictionBooks from "./components/fiction-books/Fiction-Books";
import AwardWinners from "./components/award-winners/Award-Winners";

function App() {
  // const isAuthenticated = !!localStorage.getItem("user");
  return (
    <div>
      {/* <TabCom /> */}
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
          <Route path="/yourorder" element={<YourOrder />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/address" element={<Address />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/bestSeller" element={<BestSellers />} />
          <Route path="/fictionBooks" element={<FictionBooks />} />
          <Route path="/awardWinners" element={<AwardWinners />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
