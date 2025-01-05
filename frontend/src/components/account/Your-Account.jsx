import React from "react";
import accountdata from "/src/components/account/account-data.json";
import { useState } from "react";
export default function YourAccount() {
  const [selectedCard, setSelectedCard] = useState(null); // State to track the clicked card

  const handleCardClick = (data) => {
    setSelectedCard(data); // Update state with clicked card data
  };
  return (
    <div className="  max-w-6xl mx-auto py-6">
      <div className="text-[25px] italic font-serif">My Account</div>
      <div className="grid grid-cols-3 gap-4 py-4">
        {accountdata.map((data) => {
          return (
            <div
              key={data.id}
              onClick={() => handleCardClick(data)}
              className="border-2  p-2 rounded-lg flex flex-col justify-center items-center cursor-pointer"
            >
              <img src={data.icon} alt="" />
              <div className="font-bold text-[14px]">{data.name}</div>
            </div>
          );
        })}
      </div>
      {selectedCard && ( // Show selected card details
        <div style={{ marginTop: "20px" }}>
          <h2>Selected Card</h2>
          <p>{selectedCard.name}</p>
          <p>
            <strong>Description:</strong> {selectedCard.description}
          </p>
        </div>
      )}
    </div>
  );
}
