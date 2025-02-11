import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useBooks from "../../hooks/useBooks";

export default function FictionBooksBase() {
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
    <div>
      <div className="text-center text-[30px] font-bold">Fiction Books</div>
      <img src="/public/bestsellerheading.jpg" alt="" className="mx-auto" />
      <div className="flex gap-3 w-[90%] mx-auto">
        <div className="w-full">
          <div className="grid grid-cols-6 gap-5 py-4">
            {displayedBooks.map((book) => (
              <div
                key={book._id}
                className="shadow-inner bg-[#FBFBFB] cursor-pointer p-4 relative group"
                onMouseEnter={() => setHoveredBook(book._id)}
                onMouseLeave={() => setHoveredBook(null)}
              >
                <div className="rounded-full w-[45px] h-[45px] bg-[#FD0000] text-white text-center absolute -top-2 -right-2 flex items-center justify-center">
                  {book.discountAmount}
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={book.img}
                    alt={book.name}
                    className="w-full h-[200px] object-cover"
                  />
                  {hoveredBook === book._id && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Link to="/quickview">
                        <span className="text-white font-semibold text-lg">
                          Quick View
                        </span>
                      </Link>
                    </div>
                  )}
                  <div className="text-gray-600 text-center">{book.name}</div>
                  <div className="flex gap-2 items-center">
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
