import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useBooks from "../../hooks/useBooks";

export default function TodaysDealMain() {
  const { books, loading, error } = useBooks();
  const [displayedBooks, setDisplayedBooks] = useState([]);
  const [hoveredBook, setHoveredBook] = useState(null);

  useEffect(() => {
    if (books.length > 0) {
      const shuffledBooks = [...books].sort(() => Math.random() - 0.5);
      setDisplayedBooks(shuffledBooks.slice(0, 12));
    }
  }, [books]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="">
      <div className="text-center mt-[260px] text-xl md:text-2xl lg:text-[30px] font-bold py-4 md:py-5 lg:py-6  md:mt-[200px] lg:mt-[200px]">
        Deal Of The Day
      </div>
      <div className="flex gap-2 md:gap-3 w-[85%] md:w-[90%] mx-auto">
        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-3 py-2 md:py-3 lg:py-4">
            {displayedBooks.map((book) => (
              <div
                key={book._id}
                className="shadow-inner bg-[#FBFBFB] cursor-pointer p-2 md:p-3 lg:p-4 relative group"
                onMouseEnter={() => setHoveredBook(book._id)}
                onMouseLeave={() => setHoveredBook(null)}
              >
                <div className="bg-[#FD0000] text-white text-[10px] md:text-[12px] px-2 md:px-4 py-[1px] absolute -top-2 -left-2 flex items-center justify-center text-center">
                  {book.discountAmount}
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={book.img}
                    alt={book.name}
                    className="w-full h-[120px] sm:h-[150px] md:h-[180px] lg:h-[200px] object-cover"
                  />
                  {hoveredBook === book._id && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Link to="/quickview">
                        <span className="text-white font-semibold text-sm md:text-base lg:text-lg">
                          Quick View
                        </span>
                      </Link>
                    </div>
                  )}
                  <div className="text-gray-600 text-center text-sm md:text-base">
                    {book.name}
                  </div>
                  <div className="flex gap-1 md:gap-2 items-center text-sm md:text-base">
                    <div>{book.price}</div>
                    <div className="line-through">{book.discount}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
