import React from "react";
import { useBooks } from "../context/BookContext";

export default function SearchResults() {
  const { searchResults = [], loading, error } = useBooks();

  if (loading) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-4 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Search Results</h2>
      {searchResults.length === 0 ? (
        <p className="text-gray-600">
          No books found. Try a different search term.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {searchResults.map((book) => (
            <div key={book._id} className="border p-4 rounded-lg shadow-md">
              <img
                src={book.img}
                alt={book.name}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="font-semibold text-lg">{book.name}</h3>
              <p className="text-gray-700">Author: {book.author}</p>
              <p className="text-green-600">Price: {book.prize}</p>
              <p className="text-red-500">Original Price: {book.discount}</p>
              <p className="text-blue-600">Discount: {book.discountAmount}</p>
              <p className="text-gray-600 mt-2 text-sm line-clamp-2">
                {book.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
