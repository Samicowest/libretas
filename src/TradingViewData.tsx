import React, { useEffect, useState } from "react";

interface StockData {
  symbol: string;
  price: number | undefined;
  high: number | undefined;
  low: number | undefined;
}

const TradingViewData: React.FC = () => {
  const [stockData, setStockData] = useState<StockData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const tradingViewLink =
      "https://www.tradingview.com/chart/USDJPY/2da1f1Sd-This-trade-will-sail-through/";
    const symbol = tradingViewLink.split("/chart/")[1].split("/")[0]; // Extracts "AAPL"

    const fetchStockData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/stock/${symbol}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }
        const result = await response.json();
        setStockData(result);
      } catch (err) {
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Stock Data for {stockData?.symbol}</h1>
      <p>Price: {stockData?.price}</p>
      <p>High: {stockData?.high}</p>
      <p>Low: {stockData?.low}</p>
    </div>
  );
};

export default TradingViewData;
