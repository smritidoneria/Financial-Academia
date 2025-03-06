import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Info, RefreshCw, TrendingUp, TrendingDown } from "lucide-react";

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
  const [chartData, setChartData] = useState([]);
  const [stats, setStats] = useState({
    open: 0,
    high: 0,
    low: 0,
    close: 0,
    volume: 0,
    change: 0,
    changePercent: 0
  });

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
      const timeSeries = result["Time Series (" + selectedInterval + ")"] || {};
      
      // Process data for table and chart
      const processedData = Object.entries(timeSeries).map(([time, values]) => ({
        time,
        open: parseFloat(values["1. open"]),
        high: parseFloat(values["2. high"]),
        low: parseFloat(values["3. low"]),
        close: parseFloat(values["4. close"]),
        volume: parseInt(values["5. volume"])
      })).slice(0, 10).reverse(); // Take last 10 data points

      setData(timeSeries);
      setChartData(processedData);

      // Calculate statistics
      if (processedData.length > 1) {
        const latest = processedData[processedData.length - 1];
        const previous = processedData[processedData.length - 2];
        
        setStats({
          open: latest.open,
          high: latest.high,
          low: latest.low,
          close: latest.close,
          volume: latest.volume,
          change: (latest.close - previous.close).toFixed(2),
          changePercent: ((latest.close - previous.close) / previous.close * 100).toFixed(2)
        });
      }
    } catch (error) {
      console.error("Error fetching data", error);
    }
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white rounded-lg shadow-md h-full">
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold flex-grow">Stock Analysis</h1>
        <Info className="w-5 h-5 text-gray-500" />
      </div>

      <div className="flex space-x-4 mb-6">
        <select
          value={selectedMarket}
          onChange={(e) => setSelectedMarket(e.target.value)}
          className="p-2 border rounded w-48"
        >
          {Object.keys(markets).map((market) => (
            <option key={market} value={market}>
              {market.charAt(0).toUpperCase() + market.slice(1)}
            </option>
          ))}
        </select>

        <select
          value={selectedSymbol}
          onChange={(e) => setSelectedSymbol(e.target.value)}
          className="p-2 border rounded w-48"
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
          className="p-2 border rounded w-48"
        >
          {intervals.map((interval) => (
            <option key={interval} value={interval}>
              {interval}
            </option>
          ))}
        </select>

        <button 
          onClick={fetchData} 
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded flex items-center space-x-2 disabled:opacity-50"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Fetch Data</span>
        </button>
      </div>

      {loading && (
        <div className="text-center text-gray-500 py-4">
          Fetching market data...
        </div>
      )}

      {chartData.length > 0 && (
        <div className="mb-6">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <XAxis dataKey="time" />
              <YAxis domain={['auto', 'auto']} />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="close" 
                stroke="#8884d8" 
                strokeWidth={2} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-100 p-4 rounded">
          <div className="text-sm text-gray-500">Open</div>
          <div className="text-lg font-bold">${stats.open.toFixed(2)}</div>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <div className="text-sm text-gray-500">High</div>
          <div className="text-lg font-bold">${stats.high.toFixed(2)}</div>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <div className="text-sm text-gray-500">Low</div>
          <div className="text-lg font-bold">${stats.low.toFixed(2)}</div>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <div className="text-sm text-gray-500">Volume</div>
          <div className="text-lg font-bold">{stats.volume.toLocaleString()}</div>
        </div>
      </div>

      <div className="flex items-center mb-4">
        <div className="mr-4">
          <span className="text-lg font-bold mr-2">${stats.close.toFixed(2)}</span>
          <span className={`flex items-center ${stats.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {stats.change >= 0 ? <TrendingUp className="w-5 h-5 mr-1" /> : <TrendingDown className="w-5 h-5 mr-1" />}
            {stats.change} ({stats.changePercent}%)
          </span>
        </div>
      </div>

      {data && (
        <table className="w-full border-collapse border border-gray-300">
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
            {Object.entries(data).slice(0, 10).map(([time, values]) => (
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