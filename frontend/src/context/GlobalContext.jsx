import React, { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  // Cart functions
  const addToCart = (book) => {
    // Check if the book is already in the cart
    if (!cartItems.find((item) => item.id === book.id)) {
      setCartItems([...cartItems, book]);
    }
  };

  const removeFromCart = (bookId) => {
    setCartItems(cartItems.filter((item) => item.id !== bookId));
  };

  // Wishlist functions
  const addToWishlist = (book) => {
    // Check if the book is already in the wishlist
    if (!wishlistItems.find((item) => item.id === book.id)) {
      setWishlistItems([...wishlistItems, book]);
    }
  };

  const removeFromWishlist = (bookId) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== bookId));
  };

  const contextValue = {
    cartItems,
    wishlistItems,
    addToCart,
    removeFromCart,
    addToWishlist,
    removeFromWishlist,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
