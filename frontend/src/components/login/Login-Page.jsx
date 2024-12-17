import React from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center  pb-12 border-b-2 bg-[url('public/loginbg.jpg')] bg-cover py-8">
      <div className="w-[500px] h-[550px] shadow-sm pb-6 bg-white  relative">
        <div className="   text-[#E42B26] font-bold flex justify-between h-[120px]">
          <div className="text-[28px] p-4 ">
            India's Largest Online Book Store
          </div>
          <img src="./public/cart-lady.jpg" alt="" className="w-[150px]" />
        </div>
        <form className="text-center py-3 px-12 space-y-4">
          <div className="font-semibold">Log in</div>
          <input
            type="email"
            placeholder="Mobile/Email"
            className="w-full px-2 py-1 outline-none bg-[#F2F2F2]    "
            required
          />
          <img src="" alt="" />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full px-2 outline-none bg-[#F2F2F2]   py-1  "
          />
          <Link to="/forgot">
            <div className="text-right px-2   font-semibold text-[#E42B26] cursor-pointer  hover:text-black duration-300">
              Forgot your Password?
            </div>
          </Link>
          <div className="space-y-2">
            <button className="bg-[#E42B26] w-full p-1 text-white   ">
              Login
            </button>
            <p>or</p>
            <button className=" border-2 border-[#E42B26] w-full p-1 text-[#E42B26] hover:text-black text-[12px] duration-300 ">
              Request OTP
            </button>
          </div>
          <div className="flex justify-center ">
            <img src="public/google.png" alt="" className="w-[30px] h-[30px]" />
          </div>
          <Link to="/signup">
            <div className=" text-[13px] font-semibold text-[#E42B26] cursor-pointer  hover:text-black duration-300">
              New to Bookswagon? Sign up
            </div>
          </Link>
          <div className=" text-[13px] font-semibold cursor-pointer  hover:text-black duration-300">
            By continuing, I agree to the{" "}
            <span className="text-[#E42B26] ">
              Terms of Use & Privacy Policy
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
