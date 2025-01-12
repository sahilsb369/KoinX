import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import upper from "./assets/upper.svg";
import lower from "./assets/lower.svg";
const YouMayAlsoLike = () => {
  const { id } = useParams(); // Get the token ID from the URL
  const [coinData, setCoinData] = useState(null);
  const [trendingCoins, setTrendingCoins] = useState([]);
  const carouselRef = useRef(null); // Ref for the carousel container

  // Fetch the coin details for the current page
  useEffect(() => {
    const fetchCoinDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}`
        );
        setCoinData(response.data);
      } catch (error) {
        console.error("Error fetching coin details:", error);
      }
    };

    if (id) fetchCoinDetails();
  }, [id]);

  // Fetch trending coins for the carousel
  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/search/trending`
        );
        setTrendingCoins(response.data.coins.map((coin) => coin.item));
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchTrendingCoins();
  }, []);

  // Scroll the carousel
  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 200; // Adjust scroll distance as needed
      if (direction === "left") {
        carouselRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else if (direction === "right") {
        carouselRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className='you-may-also-like-section bg-white rounded-md mt-3 p-6'>
      <h2 className='text-xl font-semibold mb-4 '>You May Also Like</h2>

      {/* Carousel with navigation buttons */}

      <div className='relative'>
        <button
          className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow p-2  rounded-full z-10'
          onClick={() => scrollCarousel("left")}
        >
          &lt;
        </button>

        <div
          ref={carouselRef}
          className='carousel-container flex overflow-x-hidden space-x-4 mt-6'
        >
          {trendingCoins.map((coin) => (
            <div
              key={coin.id}
              className='coin-card bg-white  rounded p-4 w-50 flex-shrink-0 border border-gray-200'
            >
              <div className='flex flex-row items-center'>
                <img
                  src={coin.thumb}
                  alt={coin.name}
                  className='w-8 h-8  rounded-full'
                />
                <p className='text-center text-black text-xs uppercase px-2'>
                  {coin.symbol}
                </p>
                <p
                  className={`flex flex-row items-center justify-between rounded-md px-2 py-1 w-16 text-xs ${
                    coin.data.price_change_percentage_24h.usd >= 0
                      ? "text-[#14B079] bg-[#EBF9F4]"
                      : "text-[#FF0000] bg-[#FDE8E8]"
                  }`}
                >
                  <img
                    src={
                      coin.data.price_change_percentage_24h.usd < 0
                        ? lower
                        : upper
                    }
                    alt='change'
                    className={`w-3 h-3 transform ${
                      coin.data.price_change_percentage_24h.usd < 0
                        ? "rotate-180 "
                        : ""
                    }`}
                  />
                  {coin.data.price_change_percentage_24h.usd.toFixed(2)}%
                </p>
              </div>
              <p className=' font-semibold text-xl mt-1'>
                ${coin.data.price ? coin.data.price.toFixed(2) : "--"}
              </p>

              <img
                src={coin.data.sparkline}
                alt='Sparkline'
                className='w-full h-12 mt-2'
              />
            </div>
          ))}
        </div>

        <button
          className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full z-10'
          onClick={() => scrollCarousel("right")}
        >
          &gt;
        </button>
      </div>
      {/* <div className='relative'>
        <button
          className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow p-2  rounded-full z-10'
          onClick={() => scrollCarousel("left")}
        >
          &lt;
        </button>

        <div
          ref={carouselRef}
          className='carousel-container flex overflow-x-hidden space-x-4 mt-6'
        >
          {trendingCoins.map((coin) => (
            <div
              key={coin.id}
              className='coin-card bg-white  rounded p-4 w-50 flex-shrink-0 border border-gray-200'
            >
              <div className='flex flex-row items-center'>
                <img
                  src={coin.thumb}
                  alt={coin.name}
                  className='w-8 h-8  rounded-full'
                />
                <p className='text-center text-black text-xs uppercase px-2'>
                  {coin.symbol}
                </p>
                <p
                  className={`flex flex-row items-center justify-between rounded-md px-2 py-1 w-16 text-xs ${
                    coin.data.price_change_percentage_24h.usd >= 0
                      ? "text-[#14B079] bg-[#EBF9F4]"
                      : "text-[#FF0000] bg-[#FDE8E8]"
                  }`}
                >
                  <img
                    src={
                      coin.data.price_change_percentage_24h.usd < 0
                        ? lower
                        : upper
                    }
                    alt='change'
                    className={`w-3 h-3 transform ${
                      coin.data.price_change_percentage_24h.usd < 0
                        ? "rotate-180 "
                        : ""
                    }`}
                  />
                  {coin.data.price_change_percentage_24h.usd.toFixed(2)}%
                </p>
              </div>
              <p className=' font-semibold text-xl mt-1'>
                ${coin.data.price ? coin.data.price.toFixed(2) : "--"}
              </p>

              <img
                src={coin.data.sparkline}
                alt='Sparkline'
                className='w-full h-12 mt-2'
              />
            </div>
          ))}
        </div>

        <button
          className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full z-10'
          onClick={() => scrollCarousel("right")}
        >
          &gt;
        </button>
      </div> */}
    </div>
  );
};

export default YouMayAlsoLike;
