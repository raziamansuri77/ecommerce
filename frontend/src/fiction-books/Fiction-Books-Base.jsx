import React, { useEffect, useState } from "react";
import randomBook from "../components/Random-Book";
import { Link } from "react-router-dom";
export default function FictionBooksBase() {
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
      <div className="text-center text-[30px] font-bold">Fiction Books</div>
      <img src="/public/bestsellerheading.jpg" alt="" className="mx-auto" />
      <div
        className="flex
          gap-3 w-[90%] mx-auto"
      >
        <div className=" w-full ">
          <div className="grid grid-cols-6 gap-5 py-4">
            {displayedBooks.map((book) => {
              return (
                <Link to="/bookDetails">
                  <div
                    key={book.key}
                    className="  shadow-inner bg-[#FBFBFB]  cursor-pointer p-4 relative "
                  >
                    <div className=" rounded-full  w-[45px] h-[45px]  bg-[#FD0000] text-white  text-center    absolute -top-2 -right-2 flex items-center justify-center  ">
                      {book.discountAmount}
                    </div>
                    <div className="flex flex-col items-center">
                      <img src={book.img} alt="" className="w-full h-[200px]" />
                      <div className="text-gray-600 text-center">
                        {book.name}
                      </div>
                      <div className="flex gap-2 items-center">
                        <div>{book.prize}</div>
                        <div className="line-through">{book.discount}</div>
                      </div>
                    </div>
                  </div>
                </Link>
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
