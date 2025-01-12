import React, { useEffect, useState } from "react";
import axios from "axios";
import bit from "./assets/bit.svg";
import upper from "./assets/upper.svg";
import TradingViewChart from "./Tradingviewchart";
const BitcoinPrice = () => {
  const [priceData, setPriceData] = useState(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price",
          {
            params: {
              ids: "bitcoin",
              vs_currencies: "inr,usd",
              include_24hr_change: true,
            },
          }
        );
        setPriceData(response.data.bitcoin);
      } catch (error) {
        console.error("Error fetching Bitcoin price data:", error);
      }
    };
    fetchPrice();
  }, []);

  return (
    <div className='lg:bg-white lg:p-3 rounded-lg'>
      <div className='flex flex-row items-center gap-3'>
        <img src={bit} alt='bitcoin Logo' className='w-[36px] h-[36px] ' />
        <h1 className='text-2xl font-semibold'>Bitcoin </h1>
        <p className='text-lg font-semibold text-[#5D667B]'>BTC</p>
        <p className='ml-4 text-lg font-medium text-[white] bg-[#808A9D] p-2 rounded-md'>
          Rank #1
        </p>
      </div>
      <div className='mt-6 lg:bg-white rounded-xl'>
        {priceData ? (
          <div className='bg-white p-3'>
            <div className='flex flex-row items-center gap-5'>
              <p className='text-3xl font-semibold'>
                ${priceData.usd.toLocaleString()}
              </p>
              <p className='flex flex-row items-center gap-1 text-[#14B079] bg-[#EBF9F4] rounded-md px-2 py-1'>
                <img src={upper} alt='up' className='w-4 h-4 ' />
                {priceData.usd_24h_change.toFixed(2)}%
              </p>

              <p className='text-[#768396]'>(24H)</p>
            </div>
            <p className='text-lg font-medium mt-2'>
              ₹{priceData.inr.toLocaleString()}
            </p>
            <TradingViewChart />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default BitcoinPrice;
