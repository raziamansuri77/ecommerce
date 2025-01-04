import React from "react";
import { accountdata } from "/src/components/signup/account-data.json";
export default function YourAccount() {
  return (
    <div className="bg-red-400 max-w-6xl mx-auto">
      <div>My Account</div>
      <div>
        {data.map((data) => {
          return (
            <div>
              <div>{data.icon}</div>
              <div></div>
            </div>
          );
        })}
      </div>

      {/* <div>
        <div>
          <img src="./public/personalsetttingicon.jpg" alt="" />
          <p> Personal Setting</p>
        </div>{" "}
        <div>
          <img src="./public/myordericon.jpg" alt="" />
          <p> My Order</p>
        </div>{" "}
        <div>
          <img src="./public/wishlisticon.jpg" alt="" />
          <p> My Wishlist</p>
        </div>{" "}
        <div>
          <img src="./public/giftcertificateicon.jpg" alt="" />
          <p> My Gift Certificates</p>
        </div>
        <div>
          <img src="./public/addressicon.jpg" alt="" />
          <p> My Address</p>
        </div>
        <div>
          <img src="./public/chagepasswordicon.jpg" alt="" />
          <p> Change Password</p>
        </div>
      </div> */}
    </div>
  );
}
