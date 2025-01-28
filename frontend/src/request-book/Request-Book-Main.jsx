import React from "react";
import { FaInfoCircle } from "react-icons/fa";
export default function RequestBookMain() {
  return (
    <div className="py-10  ">
      <div className="max-w-6xl mx-auto  ">
        <div className="border-2 relative p-10 ">
          <div className="text-[28px] bg-white w-[200px] absolute -top-[25px] left-6 ">
            Request A Book
          </div>
          <div className="space-y-4">
            <div>
              Please fill up the form below to Request a Book. We will inform
              you as soon as the book is available.
            </div>
            <form action="verify" className="space-y-6">
              <div className="flex gap-10 ">
                <div className="   w-full  flex flex-col gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <label htmlFor="isbn13 ">ISBN13:</label>
                      <FaInfoCircle />
                    </div>
                    <input
                      type="text"
                      className="border-2 w-full py-1 px-2 outline-none"
                      min="10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="author">Author:</label>
                    <input
                      type="text"
                      className="border-2 w-full py-1 px-2 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email">Email id:</label>
                    <div className="flex gap-2 items-center">
                      <input
                        type="email"
                        className="border-2 w-full py-1 px-2 outline-none"
                      />
                      <img
                        src="/public/check.png"
                        alt=""
                        className="w-[25px] h-[25px] cursor-pointer"
                      />
                      <img
                        src="/public/edit.png"
                        alt=""
                        className="w-[20px] h-[25px] cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
                <div className="   w-full  flex flex-col gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <label htmlFor="title">Book Title:</label>
                      <FaInfoCircle />
                    </div>
                    <input
                      type="text"
                      className="border-2 w-full py-1 px-2 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="author">Quantity:</label>
                    <input
                      type="text"
                      className="border-2 w-full py-1 px-2 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email">Phone/Mobile:</label>
                    <div>
                      <input
                        type="text"
                        className="border-2 w-full py-1 px-2 outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="font-semibold text-white bg-[#B01A16] py-1 px-4 text-[18px]   ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
