import React, { useState } from "react";
import info from "./assets/info.svg"; // Import the info image
import key1 from "./assets/key1.svg"; // Import the first key image
import key2 from "./assets/key2.svg"; // Import the second key image

const KeyEventsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const events = [
    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis",
      description:
        "Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien ",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis",
      description:
        "Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien  ",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis",
      description:
        "Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien ",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 2 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === events.length - 2 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='lg:p-6 p-3 bg-white shadow rounded-lg mt-3'>
      <h2 className='text-xl font-semibold mb-4'>Sentiment</h2>
      <div className='flex flex-row h-8 items-center gap-2'>
        <h2 className='text-lg font-semibold text-[#44475B]'>Key Events</h2>
        <img src={info} alt='Info' />
      </div>
      <div className='relative'>
        {/* Carousel Content */}
        <div className='overflow-hidden'>
          <div
            className='flex transition-transform duration-300 ease-in-out'
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            <div className='flex lg:flex-row flex-col gap-4'>
              <div className='w-full bg-blue-50 p-4 rounded-lg'>
                <div className='flex items-start space-x-4'>
                  <img src={key1} alt='Event Icon' className='text-2xl' />
                  <div>
                    <h3 className='text-sm font-bold mb-2'>
                      {events[0].title}
                    </h3>
                    <p className='text-sm text-gray-600'>
                      {events[0].description}
                    </p>
                  </div>
                </div>
              </div>

              <div className='w-full bg-green-50 p-4 rounded-lg'>
                <div className='flex items-start space-x-4'>
                  <img src={key2} alt='Event Icon' className='text-2xl' />
                  <div>
                    <h3 className='text-sm font-bold mb-2'>
                      {events[1].title}
                    </h3>
                    <p className='text-sm text-gray-600'>
                      {events[1].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className='flex space-x-4'>
              <div className='w-full bg-blue-50 p-4 rounded-lg'>
                <div className='flex items-start space-x-4'>
                  <img src={key1} alt='Event Icon' className='text-2xl' />
                  <div>
                    <h3 className='text-sm font-bold mb-2'>
                      {events[1].title}
                    </h3>
                    <p className='text-sm text-gray-600'>
                      {events[1].description}
                    </p>
                  </div>
                </div>
              </div>

              <div className='w-full bg-green-50 p-4 rounded-lg'>
                <div className='flex items-start space-x-4'>
                  <img src={key2} alt='Event Icon' className='text-2xl' />
                  <div>
                    <h3 className='text-sm font-bold mb-2'>
                      {events[2].title}
                    </h3>
                    <p className='text-sm text-gray-600'>
                      {events[2].description}
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className='flex justify-between'>
          <button
            onClick={handlePrev}
            className=' hover:text-gray-800  h-8 w-8 rounded-full bg-gray-100 mt-1'
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className=' hover:text-gray-800  h-8 w-8 rounded-full bg-gray-100 mt-1'
          >
            &#8594;
          </button>
        </div>
      </div>
      <div className='flex flex-row h-8 items-center gap-2 mt-3'>
        <h2 className='text-lg font-semibold text-[#44475B]'>
          Analyst Estimates
        </h2>
        <img src={info} />
      </div>

      <div className='flex items-center justify-between lg:px-8 p-2'>
        <div className='w-24 h-24 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-2xl'>
          76%
        </div>
        <div className='flex flex-col lg:w-[80%] w-[50%]'>
          <div className='flex items-center'>
            <span className='w-16 text-gray-700 font-medium '>Buy</span>
            <div className='w-3/4 h-2  rounded-full mr-4'>
              <div
                className='h-2 bg-green-500 rounded-full'
                style={{ width: "76%" }}
              ></div>
            </div>
            <span className='text-gray-700'>76%</span>
          </div>
          <div className='flex items-center'>
            <span className='w-16 text-gray-700 font-medium'>Hold</span>
            <div className='w-3/4 h-2  rounded-full mr-4'>
              <div
                className='h-2 bg-gray-400 rounded-full'
                style={{ width: "8%" }}
              ></div>
            </div>
            <span className='text-gray-700'>8%</span>
          </div>
          <div className='flex items-center'>
            <span className='w-16 text-gray-700 font-medium'>Sell</span>
            <div className='w-3/4 h-2  rounded-full mr-4'>
              <div
                className='h-2 bg-red-500 rounded-full'
                style={{ width: "16%" }}
              ></div>
            </div>
            <span className='text-gray-700'>16%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyEventsCarousel;
