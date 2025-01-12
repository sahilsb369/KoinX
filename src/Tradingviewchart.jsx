import React, { useState, useEffect } from "react";

const TradingViewChart = () => {
  const [isLoading, setIsLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      new TradingView.widget({
        container_id: "tradingview_chart",
        width: "100%",
        height: 400,
        symbol: "BTCUSD",
        interval: "D",
        timezone: "Etc/UTC",
        theme: "light",
        style: "3",
        locale: "en",
        hide_side_toolbar: true,
        hide_top_toolbar: true,
        withdateranges: true,
        details: false,
        calendar: false,
        studies: [],
        backgroundColor: "#ffffff",
        gridLineColor: "#f0f3fa",
        hide_volume: true,
        enable_publishing: false,
        save_image: false,
      });

      // Set loading to false once the chart is loaded
      setIsLoading(false);
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className='relative h-[400px] w-full'>
      {isLoading && (
        <div className='absolute inset-0 flex items-center justify-center bg-white'>
          <div className='h-10 w-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin'></div>
        </div>
      )}
      <div
        id='tradingview_chart'
        className={`h-full ${
          isLoading
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-500"
        }`}
      ></div>
    </div>
  );
};

export default TradingViewChart;
