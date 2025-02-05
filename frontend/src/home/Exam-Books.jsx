import React from "react";

export default function ExamBooks() {
  return (
    <div className="max-w-[85%]   mx-auto">
      <div className="grid grid-cols-2 gap-3 text-[20px] font-bold">
        <div className="">
          <div className="py-4">Indian Language</div>
          <img
            src="\public\regionallanguage.jpg"
            alt=""
            className="cursor-pointer"
          />
        </div>
        <div className="">
          <div className="py-4"> Exclusive Editions</div>
          <img
            src="\public\healthparenting.jpg"
            alt=""
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="py-6">
        <img src="\public\Exambooks.jpg" alt="" className="cursor-pointer" />
      </div>
    </div>
  );
}
