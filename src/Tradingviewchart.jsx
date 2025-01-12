import React, { useEffect } from "react";

const TradingViewChart = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      new TradingView.widget({
        container_id: "tradingview_chart",
        width: "100%", // Ensures responsiveness
        height: 400, // Chart height
        symbol: "BTCUSD",
        interval: "D", // Daily intervals
        timezone: "Etc/UTC",
        theme: "light", // Light theme
        style: "3", // 1 = Line chart
        locale: "en",
        hide_side_toolbar: true, // Hides the side toolbar
        hide_top_toolbar: true, // Removes unnecessary toolbars
        withdateranges: true, // Disables date ranges
        details: false, // Removes extra details
        calendar: false, // Disables calendar
        studies: [], // No technical indicators
        backgroundColor: "#ffffff", // Optional: White background
        gridLineColor: "#f0f3fa", // Optional: Light gridlines
        hide_volume: true,
        enable_publishing: false,
        save_image: false,
      });
    };
    document.body.appendChild(script);
  }, []);

  return <div id='tradingview_chart' style={{ height: "400px" }}></div>;
};

export default TradingViewChart;
