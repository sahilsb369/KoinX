import { useState } from "react";
import learn from "./assets/learn.svg";
import next from "./assets/next.svg";
import TrendingCoins from "./Trendingcoins";
function RightComponent() {
  return (
    <div className=''>
      <div className='p-3 flex flex-col items-center justify-center rounded-xl bg-[#1F67FF]'>
        <h1 className='text-white text-2xl font-semibold'>
          Get Started with KoinX for FREE
        </h1>
        <p className='text-white text-sm font-normal text-center p-4'>
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
        <img src={learn} />
        <div className='flex flex-row bg-white rounded-lg p-2 text-base font-semibold text-[#0F1629] justify-between md:w-2/5'>
          <h2 className="">Get Started for FREE</h2>
          <img src={next} />
        </div>
      </div>

      <TrendingCoins />
    </div>
  );
}

export default RightComponent;
