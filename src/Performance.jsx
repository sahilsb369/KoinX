import React from "react";
import arrow from "./assets/arrow.svg"
import info from "./assets/info.svg"
const PerformanceAndFundamentals = () => {
  return (
    <div className='bg-white  p-6 rounded-md shadow-md'>
      {/* Performance Section */}
      <div className='mb-8'>
        <h2 className='text-xl font-semibold mb-4'>Performance</h2>
        <div className='flex justify-between text-sm mb-2 items-center gap-4'>
          <div>
            <p className='text-gray-500'>Today's Low</p>
            <p className='font-medium text-gray-500'>46,930.22</p>
          </div>
          <div className='relative w-3/4 h-2 rounded-full mb-4'>
            {/* Gradient line */}
            <div
              className='absolute left-0 top-0 h-1 rounded-full'
              style={{
                width: "100%",
                background:
                  "linear-gradient(to right, red, orange, yellow, green)",
              }}
            />
            {/* Current position marker */}
            <img
              src={arrow}
              style={{ left: "60%" }}
              className='absolute top-2 h-4 w-4 '
            />
            <p
              className='absolute left-0 top-6 h-2 rounded-full text-sm'
              style={{ left: "56%" }}
            >
              $48,637.83
            </p>
          </div>
          <div>
            <p className='text-gray-500'>Today's High</p>
            <p className='font-medium text-gray-500'>49,343.83</p>
          </div>
        </div>

        <div className='flex justify-between text-sm mb-2 items-center gap-4 mt-8'>
          <div>
            <p className='text-gray-500'>52W Low</p>
            <p className='font-medium text-gray-500'>46,930.22</p>
          </div>
          <div className='relative w-3/4 h-2 rounded-full mb-4'>
            {/* Gradient line */}
            <div
              className='absolute left-0 top-0 h-1 rounded-full'
              style={{
                width: "100%",
                background:
                  "linear-gradient(to right, red, orange, yellow, green)",
              }}
            />
            {/* Current position marker */}
          </div>
          <div>
            <p className='text-gray-500'>52W High</p>
            <p className='font-medium text-gray-500'>49,343.83</p>
          </div>
        </div>
      </div>

      {/* Fundamentals Section */}
      <div>
        <div className='flex flex-row h-8 items-center gap-2 '>
          <h2 className='text-lg font-semibold text-[#44475B]'>Fundamentals</h2>
          <img src={info} />
        </div>
        <div className='grid lg:grid-cols-2 gap-x-8 text-sm'>
          {/* Left Column */}
          <div className=''>
            <div className='flex justify-between mb-2 py-2'>
              <span className='text-gray-500'>Bitcoin Price</span>
              <span className='font-medium'>$16,815.46</span>
            </div>
            <div className='h-[1px] bg-gray-300 w-full mt-2 '></div>
            <div className='flex justify-between mb-2 py-2'>
              <span className='text-gray-500'>24h Low / 24h High</span>
              <span className='font-medium'>$16,382.07 / $16,874.12</span>
            </div>
            <div className='h-[1px] bg-gray-300 w-full mt-2'></div>
            <div className='flex justify-between mb-2 py-2'>
              <span className='text-gray-500'>7d Low / 7d High</span>
              <span className='font-medium'>$16,382.07 / $16,874.12</span>
            </div>
            <div className='h-[1px] bg-gray-300 w-full mt-2'></div>
            <div className='flex justify-between mb-2 py-2'>
              <span className='text-gray-500'>Trading Volume</span>
              <span className='font-medium'>$23,249,202,782</span>
            </div>
            <div className='h-[1px] bg-gray-300 w-full mt-2'></div>
            <div className='flex justify-between mb-2 py-2'>
              <span className='text-gray-500'>Market Cap Rank</span>
              <span className='font-medium'>#1</span>
            </div>
            <div className='h-[1px] bg-gray-300 w-full mt-2'></div>
          </div>

          {/* Right Column */}
          <div>
            <div className='flex justify-between mb-2 py-2'>
              <span className='text-gray-500'>Market Cap</span>
              <span className='font-medium'>$323,507,290,047</span>
            </div>
            <div className='h-[1px] bg-gray-300 w-full mt-2'></div>
            <div className='flex justify-between mb-2 py-2'>
              <span className='text-gray-500'>Market Cap Dominance</span>
              <span className='font-medium'>38.343%</span>
            </div>
            <div className='h-[1px] bg-gray-300 w-full mt-2'></div>
            <div className='flex justify-between mb-2 py-2'>
              <span className='text-gray-500'>Volume / Market Cap</span>
              <span className='font-medium'>0.0718</span>
            </div>
            <div className='h-[1px] bg-gray-300 w-full mt-2'></div>
            <div className='flex justify-between mb-2 py-2'>
              <span className='text-gray-500'>All-Time High</span>
              <span className='font-medium text-red-500'>
                $69,044.77 <span className='text-xs'>-75.6%</span>
              </span>
            </div>
            <div className='h-[1px] bg-gray-300 w-full mt-2'></div>
            <div className='flex justify-between mb-2 py-2'>
              <span className='text-gray-500'>All-Time Low</span>
              <span className='font-medium text-green-500'>
                $67.81 <span className='text-xs'>24729.1%</span>
              </span>
            </div>
            <div className='h-[1px] bg-gray-300 w-full mt-2'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceAndFundamentals;
