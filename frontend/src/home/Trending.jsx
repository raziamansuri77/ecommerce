import React, { useRef, useState, useEffect } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

// Book data array
const trendingBooks = [
  {
    id: 1,
    title: "The Psychology",
    author: "Housel,Morgan",
    price: 251,
    originalPrice: 322,
    image: "public/t1.jpg",
    discount: "30%",
  },
  {
    id: 2,
    title: "Karnal II : Son of Surya",
    author: "Kevin Missal",
    price: 257,
    originalPrice: 396,
    image: "public/t2.jpg",
    discount: "30%",
  },
  {
    id: 3,
    title: "White Nights",
    author: "Ronald Meyer",
    price: 314,
    originalPrice: 338,
    image: "public/t3.jpg",
    discount: "30%",
  },
  {
    id: 4,
    title: "30 Days To Better English",
    author: "Lewis Norman",
    price: 119,
    originalPrice: 199,
    image: "public/t4.jpg",
    discount: "30%",
  },
  {
    id: 5,
    title: "VAgabond (Vizbig Edition),Vol.3",
    author: "Takehiko Inoue",
    price: 1388,
    originalPrice: 32169,
    image: "public/t5.jpg",
    discount: "30%",
  },
  {
    id: 6,
    title: "Rooster Fighter,Vol.1",
    author: "Syu Sakuratani",
    price: 309,
    originalPrice: 1105,
    image: "public/t6.jpg",
    discount: "30%",
  },
  {
    id: 7,
    title: "Vagabond(Vizbig Edition),Vol.2",
    author: "Takehiko Inoue",
    price: 1714,
    originalPrice: 2169,
    image: "public/t7.jpg",
    discount: "30%",
  },
  {
    id: 8,
    title: "Fire & Blood",
    author: "Grorge R.R.....",
    price: 536,
    originalPrice: 850,
    image: "public/t8.jpg",
    discount: "30%",
  },
  {
    id: 9,
    title: "Vagabond (Vizbig Edition),Vol.4",
    author: "Housel,Morgan",
    price: 1410,
    originalPrice: 2169,
    image: "public/t9.jpg",
    discount: "30%",
  },
  {
    id: 10,
    title: "Conceptual Physics | Twelfth Edition | By Pearson",
    author: "Paul G. Hewitt",
    price: 824,
    originalPrice: 1070,
    image: "public/t10.jpg",
    discount: "30%",
  },
  {
    id: 11,
    title: "20th Century Boys:The Perfect Edition,Vol.1",
    author: "Naoki Urasawa",
    price: 1237,
    originalPrice: 2061,
    image: "public/t11.jpg",
    discount: "30%",
  },
];

export default function Trending() {
  // Refs and state for scroll functionality
  const scrollContainer = useRef(null);
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  // Effect to handle card width calculations
  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.clientWidth);
    }

    const handleResize = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.clientWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll handlers
  const scrollNext = () => {
    if (scrollContainer.current) {
      const container = scrollContainer.current;
      const totalScrollWidth = container.scrollWidth;
      const currentScroll = container.scrollLeft;

      if (currentScroll + container.clientWidth >= totalScrollWidth) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }
  };

  const scrollPrev = () => {
    if (scrollContainer.current) {
      const container = scrollContainer.current;
      const currentScroll = container.scrollLeft;

      if (currentScroll <= 0) {
        const totalScrollWidth = container.scrollWidth;
        container.scrollTo({
          left: totalScrollWidth - container.clientWidth,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({ left: -cardWidth, behavior: "smooth" });
      }
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="text-[30px] font-bold text-center py-4">Now Trending</div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Previous Button */}
        <button
          onClick={scrollPrev}
          className="absolute top-1/2 left-4 h-[50px] text-black p-3 rounded-full"
        >
          <MdOutlineKeyboardArrowLeft className="text-[70px] cursor-pointer" />
        </button>

        {/* Cards Container */}
        <div
          className="flex overflow-x-hidden scroll-smooth max-w-7xl mx-auto h-[430px]"
          ref={scrollContainer}
        >
          {/* Mapping through books array */}
          {trendingBooks.map((book) => (
            <div
              key={book.id}
              ref={book.id === 1 ? cardRef : null}
              className="flex-shrink-0 w-60 h-80 text-black m-4 rounded-lg"
            >
              <div className="px-2 shadow-sm rounded-lg border-1 xl:h-[400px] relative">
                {/* Discount Badge */}
                <div className="absolute -top-[14px] -right-4 w-[40px] h-[40px] flex items-center justify-center text-white bg-[#FF0000] rounded-full">
                  {book.discount}
                </div>

                {/* Card Content */}
                <div className="p-4 border-1 xl:h-[400px] rounded-lg flex flex-col items-center gap-2 justify-center shadow-md h-[450px]">
                  {/* Image Container */}
                  <div className="overflow-hidden">
                    <div className="hover:scale-110 duration-500 transition-transform">
                      <img
                        src={book.image}
                        className="cursor-pointer w-[170px] h-[240px]"
                        alt={book.title}
                      />
                    </div>
                  </div>

                  {/* Book Details */}
                  <div className="text-center w-full px-2 py-2">
                    <p>{book.title}</p>
                    <p>{book.author}</p>
                    <div className="flex justify-center gap-4">
                      <p>{book.price}</p>
                      <p>{book.originalPrice}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={scrollNext}
          className="absolute top-1/2 right-4 text-black p-3 rounded-full"
        >
          <MdOutlineKeyboardArrowRight className="text-[70px] cursor-pointer" />
        </button>
      </div>

      {/* Footer */}
      <div className="text-center text-[#E42B26] font-semibold underline cursor-pointer py-4">
        Show All
      </div>
    </div>
  );
}
