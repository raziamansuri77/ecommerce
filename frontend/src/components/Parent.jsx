import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useBooks from "../../hooks/useBooks";

export default function Parent(props) {
  const { books, loading, error } = useBooks();
  const [value, setValue] = useState(50);
  const [displayedBooks, setDisplayedBooks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(10);
  const [hoveredBook, setHoveredBook] = useState(null);
  const navigate = useNavigate();

  // Add this handler
  const handleBookClick = (book) => {
    navigate(`/quickview/${book._id}`, { state: { bookData: book } });
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (books.length > 0) {
      const shuffledBooks = [...books].sort(() => Math.random() - 0.5);
      setDisplayedBooks(shuffledBooks.slice(0, 12));
    }
  }, [books]);

  const handleShowMore = () => {
    const nextBooks = books.slice(currentIndex, currentIndex + 10);
    setDisplayedBooks([...displayedBooks, ...nextBooks]);
    setCurrentIndex(currentIndex + 12);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className=" ">
      <div className="text-center text-[30px] font-bold"></div>
      <div
        className="flex
           gap-3 w-[90%] mx-auto"
      >
        <div className=" w-full ">
          <div className="flex justify-end"></div>
          <div className="grid grid-cols-6 gap-3 py-4 ">
            {displayedBooks.map((book) => (
              // <Link to="/quickview" key={book._id}>
              <div
                className="shadow-inner bg-[#FBFBFB] cursor-pointer  p-4 relative group"
                onMouseEnter={() => setHoveredBook(book._id)}
                onMouseLeave={() => setHoveredBook(null)}
                onClick={() => handleBookClick(book)}
              >
                <div className="bg-[#FD0000] text-white text-[12px] px-4 py-[1px] absolute -top-2 -left-2 flex items-center justify-center text-center">
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
                      <span className="text-white font-semibold text-lg">
                        Quick View
                      </span>
                    </div>
                  )}
                  <div className="text-gray-600 text-center font-bold line-clamp-1">
                    {book.name}
                  </div>
                  <div>{book.author}</div>
                  <div className="flex justify-between gap-6">
                    <div>{book.prize}</div>
                    <div className="line-through">{book.discount}</div>
                  </div>
                </div>
              </div>
              // </Link>
            ))}
          </div>
          {books.length > 0 && currentIndex < books.length && (
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
