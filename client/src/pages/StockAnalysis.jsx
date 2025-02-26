import { useState, useEffect } from "react";

const markets = {
  stocks: ["AAPL", "GOOGL", "MSFT", "TSLA", "AMZN"],
  options: ["SPY", "QQQ", "IWM", "VXX"],
  indices: ["^GSPC", "^DJI", "^IXIC"],
  forex: ["EUR/USD", "GBP/USD", "USD/JPY"],
  crypto: ["BTC", "ETH", "XRP"],
};

const intervals = ["1min", "5min", "15min", "30min", "60min"];

function StockAnalysis() {
  const [selectedMarket, setSelectedMarket] = useState("stocks");
  const [selectedSymbol, setSelectedSymbol] = useState(markets.stocks[0]);
  const [selectedInterval, setSelectedInterval] = useState("15min");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setSelectedSymbol(markets[selectedMarket][0]);
  }, [selectedMarket]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${selectedSymbol}&interval=${selectedInterval}&apikey=YOUR_API_KEY`
      );
      const result = await response.json();
      setData(result["Time Series (" + selectedInterval + ")"] || {});
    } catch (error) {
      console.error("Error fetching data", error);
    }
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Stock Analysis</h1>

      <div className="flex space-x-4 mb-4">
        <select
          value={selectedMarket}
          onChange={(e) => setSelectedMarket(e.target.value)}
          className="p-2 border rounded"
        >
          {Object.keys(markets).map((market) => (
            <option key={market} value={market}>
              {market}
            </option>
          ))}
        </select>

        <select
          value={selectedSymbol}
          onChange={(e) => setSelectedSymbol(e.target.value)}
          className="p-2 border rounded"
        >
          {markets[selectedMarket].map((symbol) => (
            <option key={symbol} value={symbol}>
              {symbol}
            </option>
          ))}
        </select>

        <select
          value={selectedInterval}
          onChange={(e) => setSelectedInterval(e.target.value)}
          className="p-2 border rounded"
        >
          {intervals.map((interval) => (
            <option key={interval} value={interval}>
              {interval}
            </option>
          ))}
        </select>

        <button
          onClick={fetchData}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Fetch Data
        </button>
      </div>

      {loading && <p>Loading...</p>}

      {data && (
        <table className="w-full border-collapse border border-gray-300 mt-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Time</th>
              <th className="border p-2">Open</th>
              <th className="border p-2">High</th>
              <th className="border p-2">Low</th>
              <th className="border p-2">Close</th>
              <th className="border p-2">Volume</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(data).map(([time, values]) => (
              <tr key={time}>
                <td className="border p-2">{time}</td>
                <td className="border p-2">{values["1. open"]}</td>
                <td className="border p-2">{values["2. high"]}</td>
                <td className="border p-2">{values["3. low"]}</td>
                <td className="border p-2">{values["4. close"]}</td>
                <td className="border p-2">{values["5. volume"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StockAnalysis;
