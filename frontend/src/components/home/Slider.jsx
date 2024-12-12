import React, { useState, useEffect } from "react";

export default function Slider() {
  const images = [
    "public/1.jpg",
    "public/2.jpg",
    "public/3.jpg",
    "public/4.jpg",
    "public/5.jpg",
    "public/6.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic image slider using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div classNameName="relative w-full cursor-pointer ">
        {/* Image Display */}
        <div classNameName="overflow-hidden relative">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            classNameName="w-full h-[528px]  object-cover transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
}
