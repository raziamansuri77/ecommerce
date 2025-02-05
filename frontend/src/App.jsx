import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Login from "./login/Login";
import Signup from "./signup/Signup";
import Forgot from "./forgot/Forgot";
import Medical from "./medical-dream/Medical";
import BoxSet from "./box-set/Box-Set";
import BoxSetHero from "./box-set/Box-Set-Hero";
import AccountHero from "./account/Account-Hero";
import PersonalSetting from "./account/Personal-Setting";
import YourOrder from "./account/Your-Order";
import Wishlist from "./account/Wishlist";
import Certificates from "./account/Certificates";
import Address from "./account/Address";
import ChangePassword from "./account/ChangePassword";
import BestSellers from "./best-sellers/Best-Sellers";
import FictionBooks from "./fiction-books/Fiction-Books";
import AwardWinners from "./award-winners/Award-Winners";
import Authors from "./author/authors";
import NewArrivals from "./arrivals/New-Arrivals";
import TodaysDeal from "./todays-deal/Todays-Deal";
import RequestBook from "./request-book/Request-Book";
import BookDetails from "./components/Book-Details";
import SliderNext from "./home/Slider-Next";
import QuickView from "./components/Quick-View";
import InternationalBestseller from "./international-bestseller/international-seller";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot" element={<Forgot />} />
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
          <Route path="/authors" element={<Authors />} />
          <Route path="/todaysDeal" element={<TodaysDeal />} />
          <Route path="/requestBook" element={<RequestBook />} />
          <Route path="/bookDetails" element={<BookDetails />} />
          <Route path="/SliderNext" element={<SliderNext />} />
          <Route path="/quickview" element={<QuickView />} />
          <Route
            path="InternationalBestseller"
            element={<InternationalBestseller />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
