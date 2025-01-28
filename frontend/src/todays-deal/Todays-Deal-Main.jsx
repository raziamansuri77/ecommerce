import React, { useEffect, useState } from "react";
import randomBook from "../components/Random-Book";
export default function TodaysDealMain() {
  const [value, setValue] = useState(50);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  // books visible or not
  const [displayedBooks, setDisplayedBooks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(10);

  useEffect(() => {
    // Shuffle books array on page load
    const shuffledBooks = [...randomBook].sort(() => Math.random() - 0.5);
    setDisplayedBooks(shuffledBooks.slice(0, 12));
  }, []);

  const handleShowMore = () => {
    const nextBooks = randomBook.slice(currentIndex, currentIndex + 10);
    setDisplayedBooks([...displayedBooks, ...nextBooks]);
    setCurrentIndex(currentIndex + 12);
  };
  return (
    <div>
      <div className="text-center text-[30px] font-bold py-6">
        Deal Of The Day
      </div>
      <div
        className="flex
          gap-3 w-[90%] mx-auto"
      >
        <div className=" w-full ">
          <div className="grid grid-cols-6 gap-3 py-4">
            {displayedBooks.map((book) => {
              return (
                <div
                  key={book.key}
                  className="  shadow-inner bg-[#FBFBFB]  cursor-pointer p-4 relative "
                >
                  <div className="  bg-[#FD0000] text-white text-[12px] px-4 py-[1px]  absolute -top-2 -left-2 flex items-center justify-center text-center">
                    {book.discountAmount}
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={book.img} alt="" className="w-full h-[200px]" />
                    <div className="text-gray-600 text-center">{book.name}</div>
                    <div className="flex gap-2 items-center">
                      <div>{book.prize}</div>
                      <div className="line-through">{book.discount}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {currentIndex < randomBook.length && (
            <div
              onClick={handleShowMore}
              className="text-center hover:text-[#B01A16] duration-500 py-4 hover:underline cursor-pointer"
            >
              Load more books
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
