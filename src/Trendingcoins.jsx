import React, { useEffect, useState } from "react";
import upper from "./assets/upper.svg";
import lower from "./assets/lower.svg";
const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const data = await response.json();

        const topCoins = data.coins.slice(0, 3).map((coin) => {
          const {
            name,
            symbol,
            thumb,
            data: { price, price_change_percentage_24h },
          } = coin.item;

          return {
            name,
            symbol,
            thumb,
            price,
            priceChange: price_change_percentage_24h.usd, // Extract percentage change
          };
        });

        setTrendingCoins(topCoins);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div className='trending-coins p-4 border border-gray-200 rounded-lg bg-white mt-4'>
      <h2 className='text-xl font-semibold mb-4'>Trending Coins (24h)</h2>
      <ul>
        {trendingCoins.map((coin, index) => (
          <li key={index} className='flex items-center mb-4'>
            <img
              src={coin.thumb}
              alt={`${coin.name} logo`}
              className='w-8 h-8 mr-4 rounded-full'
            />
            <div className='flex flex-row items-center justify-between  w-full'>
              <p className='text-base'>
                {coin.name} ({coin.symbol})
              </p>
              <p
                className={`flex flex-row items-center justify-between rounded-md px-2 py-1 w-24 ${
                  coin.priceChange >= 0
                    ? "text-[#14B079] bg-[#EBF9F4]"
                    : "text-[#FF0000] bg-[#FDE8E8]"
                }`}
              >
               
                <img
                  src={coin.priceChange < 0 ? lower: upper}
                  alt='change'
                  className={`w-3 h-3 transform ${
                    coin.priceChange < 0 ? "rotate-180 " : ""
                  }`}
                />
                {coin.priceChange.toFixed(2)}%
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingCoins;
