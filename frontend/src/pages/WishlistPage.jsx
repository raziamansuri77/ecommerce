import React from "react";
import { useGlobalContext } from "../context/GlobalContext";

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useGlobalContext();

  return (
    <div>
      <h1>Wishlist Page</h1>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishlistItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.prize}
              <button onClick={() => removeFromWishlist(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
