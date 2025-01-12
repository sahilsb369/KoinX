import { useState } from "react";
import BitcoinPrice from "./Bitcoin";
import greater from "./assets/greater.svg";
import TradingViewChart from "./Tradingviewchart";
import TabNavigation from "./Tabnavigation";
import PerformanceAndFundamentals from "./Performance";
import KeyEventsCarousel from "./Sentiment";
import About from "./About";
import Tokenomics from "./Tokenomics"
import Team from "./Team";
import YouMayAlsoLike from "./Likecharts"
import RightComponent from "./Rightcomponent";
function LeftComponent() {
  return (
    <div className='rounded-md w-full'>
      <BitcoinPrice />
      <TabNavigation />
      <PerformanceAndFundamentals className='bg-black' />
      <KeyEventsCarousel />
      <About />
      <Tokenomics />
      <Team />
      <div className="mt-6 md:hidden block">
        <RightComponent />
      </div>
      {/* <YouMayAlsoLike /> */}
    </div>
  );
}

export default LeftComponent;
