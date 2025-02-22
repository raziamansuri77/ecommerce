import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useBooks from "../../hooks/useBooks";

export default function CommonFile(props) {
  const { books, loading, error } = useBooks();
  const [value, setValue] = useState(50);
  const [displayedBooks, setDisplayedBooks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(10);
  const [hoveredBook, setHoveredBook] = useState(null);
  const navigate = useNavigate();

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center text-xl sm:text-2xl lg:text-[30px] font-bold"></div>
      <div className="w-full sm:w-[90%] mx-auto">
        <div className="w-full">
          <div className="flex justify-end"></div>
          <div className="grid grid-cols-1 gap-3 py-4">
            {displayedBooks.map((book) => (
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 p-4 group">
                <div className="flex flex-col sm:flex-row w-full sm:border-r-2 gap-4 sm:gap-8">
                  <div className="relative shadow-inner border-2 border-[#E5E5E5] w-full sm:w-auto">
                    <img
                      src={book.img}
                      alt={book.name}
                      className="w-full h-[200px] object-cover"
                    />
                    <div className="bg-[#FD0000] text-white text-[12px] px-4 py-[1px] absolute -top-2 -left-2 flex items-center justify-center text-center">
                      {book.discountAmount}
                    </div>
                    {hoveredBook === book._id && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-semibold text-lg">
                          Quick View
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-gray-600 font-bold line-clamp-1">
                      {book.name}
                    </div>
                    <div>{book.author}</div>
                    <div className="flex flex-row justify-center sm:justify-start gap-2">
                      <div>{book.prize}</div>
                      <div className="line-through">{book.discount}</div>
                    </div>
                  </div>
                </div>

                <div className="w-full sm:mt-[80px] space-y-2">
                  <div className="text-[#468d66] font-bold"> Available </div>
                  <div>
                    Ships within
                    <span className="text-gray-600 font-bold"> 4-6 Days</span>
                    <span className="text-blue-500 cursor-pointer">
                      {" "}
                      Explain..
                    </span>{" "}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <Link to="/cart" className="text-blue-500">
                      <button className="w-full sm:w-auto bg-[#397D58] py-2 px-4 rounded-md text-white">
                        Add to cart
                      </button>
                    </Link>
                    <button className="w-full sm:w-auto py-2 px-4 rounded-md border-2 shadow-sm">
                      Add to wishlist
                    </button>
                  </div>
                </div>
              </div>
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
