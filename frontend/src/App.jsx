import Login from "./components/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import SignupPage from "./components/signup/Signup-Page";
import Signup from "./components/signup/Signup";
import Forgot from "./components/forgot/Forgot";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot" element={<Forgot />} />
        </Routes>
      </BrowserRouter>
      {/* <SignupPage /> */}
      {/* <Signup /> */}
    </div>
  );
}

export default App;
