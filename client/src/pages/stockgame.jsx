import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const stockData = {
  "Tesla": {
    historical: [
      { date: "Jun 2023", original: 8.508, predicted: 8.1827 },
      { date: "Jul 2023", original: 9.1223, predicted: 8.3547 },
      { date: "Aug 2023", original: 9.5643, predicted: 8.9019 },
      { date: "Sep 2023", original: 9.4123, predicted: 8.9814 },
      { date: "Oct 2023", original: 8.8196, predicted: 8.6679 },
      { date: "Nov 2023", original: 8.7085, predicted: 7.8652 },
      { date: "Dec 2023", original: 9.9013, predicted: 9.0317 },
      { date: "Jan 2024", original: 9.2132, predicted: 8.8773 },
      { date: "Feb 2024", original: 8.7122, predicted: 8.2724 },
      { date: "Mar 2024", original: 8.7399, predicted: 8.2897 },
    ],
    future: [
      { date: "2024-12-31", predicted: 9.7302 },
      { date: "2025-01-01", predicted: 9.6621 },
      { date: "2025-01-02", predicted: 9.5913 },
      { date: "2025-01-03", predicted: 9.5114 },
      { date: "2025-01-06", predicted: 9.4204 },
      { date: "2025-01-07", predicted: 9.3196 },
      { date: "2025-01-08", predicted: 9.2121 },
      { date: "2025-01-09", predicted: 9.1011 },
      { date: "2025-01-10", predicted: 8.9898 },
      { date: "2025-01-13", predicted: 8.8805 },
    ]
  },
  "Manchester United": {
    historical: [
      { date: "Sep 2021", original: 127.6009, predicted: 119.4183 },
      { date: "Oct 2021", original: 127.2971, predicted: 115.2947 },
      { date: "Nov 2021", original: 136.007, predicted: 120.6491 },
      { date: "Dec 2021", original: 155.0132, predicted: 132.3723 },
      { date: "Jan 2022", original: 151.3854, predicted: 134.7026 },
      { date: "Feb 2022", original: 151.5326, predicted: 132.671 },
      { date: "Mar 2022", original: 147.1196, predicted: 128.0502 },
      { date: "Apr 2022", original: 148.6061, predicted: 133.3868 },
      { date: "May 2022", original: 130.6793, predicted: 121.6274 },
      { date: "Jun 2022", original: 122.2167, predicted: 113.4719 },
    ],
    future: [
      { date: "2024-12-31", predicted: 178.1915 },
      { date: "2025-01-01", predicted: 177.8966 },
      { date: "2025-01-02", predicted: 176.5586 },
      { date: "2025-01-03", predicted: 174.1587 },
      { date: "2025-01-06", predicted: 170.7163 },
      { date: "2025-01-07", predicted: 166.5155 },
      { date: "2025-01-08", predicted: 161.8377 },
      { date: "2025-01-09", predicted: 156.9472 },
      { date: "2025-01-10", predicted: 152.057 },
      { date: "2025-01-13", predicted: 147.3325 },
    ]
  },
  "Alpine Income Property Trust": {
    historical: [
      { date: "Jun 2023", original: 16.5208, predicted: 15.7343 },
      { date: "Jul 2023", original: 17.2346, predicted: 16.1876 },
      { date: "Aug 2023", original: 17.6543, predicted: 16.9012 },
      { date: "Sep 2023", original: 17.3987, predicted: 16.7654 },
      { date: "Oct 2023", original: 16.9876, predicted: 16.5432 },
      { date: "Nov 2023", original: 16.7654, predicted: 15.9876 },
      { date: "Dec 2023", original: 18.1234, predicted: 17.2543 },
      { date: "Jan 2024", original: 17.5432, predicted: 16.9876 },
      { date: "Feb 2024", original: 16.9876, predicted: 16.3454 },
      { date: "Mar 2024", original: 17.0123, predicted: 16.4321 },
    ],
    future: [
      { date: "2024-12-31", predicted: 17.8765 },
      { date: "2025-01-01", predicted: 17.7543 },
      { date: "2025-01-02", predicted: 17.6321 },
      { date: "2025-01-03", predicted: 17.4987 },
      { date: "2025-01-06", predicted: 17.2765 },
      { date: "2025-01-07", predicted: 16.9876 },
      { date: "2025-01-08", predicted: 16.6543 },
      { date: "2025-01-09", predicted: 16.3210 },
      { date: "2025-01-10", predicted: 15.9876 },
      { date: "2025-01-13", predicted: 15.6543 },
    ]
  },
  "CoreEnergy Infrastructure Trust": {
    historical: [
      { date: "Jun 2023", original: 22.3456, predicted: 21.5678 },
      { date: "Jul 2023", original: 23.1234, predicted: 22.0987 },
      { date: "Aug 2023", original: 23.5678, predicted: 22.8765 },
      { date: "Sep 2023", original: 23.2345, predicted: 22.6543 },
      { date: "Oct 2023", original: 22.8765, predicted: 22.3456 },
      { date: "Nov 2023", original: 22.6543, predicted: 21.8765 },
      { date: "Dec 2023", original: 24.0987, predicted: 23.1234 },
      { date: "Jan 2024", original: 23.4321, predicted: 22.8765 },
      { date: "Feb 2024", original: 22.9876, predicted: 22.3456 },
      { date: "Mar 2024", original: 23.0123, predicted: 22.4321 },
    ],
    future: [
      { date: "2024-12-31", predicted: 24.5678 },
      { date: "2025-01-01", predicted: 24.4321 },
      { date: "2025-01-02", predicted: 24.2987 },
      { date: "2025-01-03", predicted: 24.1234 },
      { date: "2025-01-06", predicted: 23.8765 },
      { date: "2025-01-07", predicted: 23.5678 },
      { date: "2025-01-08", predicted: 23.2345 },
      { date: "2025-01-09", predicted: 22.9876 },
      { date: "2025-01-10", predicted: 22.6543 },
      { date: "2025-01-13", predicted: 22.3210 },
    ]
  }
};

const StockGame = () => {
  const [selectedStock, setSelectedStock] = useState("Tesla");

  // Combine historical and future data for full chart
  const fullChartData = [
    ...stockData[selectedStock].historical.map(entry => ({
      date: entry.date,
      Original: entry.original,
      Predicted: entry.predicted,
      Type: 'Historical'
    })),
    ...stockData[selectedStock].future.map(entry => ({
      date: entry.date,
      Predicted: entry.predicted,
      Type: 'Future'
    }))
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto bg-gray-50 min-h-screen">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Stock Price Prediction Dashboard</h1>
        <p className="text-gray-600 text-xl">Comprehensive Analysis of Stock Predictions</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 bg-gray-100 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800">Select Stock</h2>
          <select 
            className="border-2 border-purple-500 rounded-md px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
            value={selectedStock} 
            onChange={(e) => setSelectedStock(e.target.value)}
          >
            {Object.keys(stockData).map((stock) => (
              <option key={stock} value={stock}>{stock}</option>
            ))}
          </select>
        </div>

        <div className="p-6">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Price Trend Visualization</h3>
            <ResponsiveContainer width="100%" height={500}>
              <LineChart data={fullChartData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-gray-300" />
                <XAxis dataKey="date" className="text-sm" />
                <YAxis className="text-sm" />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(255,255,255,0.9)', border: '1px solid #ddd' }}
                />
                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                
                {/* Historical Data Lines */}
                {fullChartData.some(entry => entry.Original) && (
                  <Line 
                    type="monotone" 
                    dataKey="Original" 
                    stroke="#FF6384" 
                    strokeWidth={2}
                    dot={{ strokeWidth: 2, r: 4 }}
                    name="Original Price"
                  />
                )}
                <Line 
                  type="monotone" 
                  dataKey="Predicted" 
                  stroke="#36A2EB" 
                  strokeWidth={3}
                  dot={{ strokeWidth: 2, r: 5 }}
                  name="Predicted Price"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Historical Data</h3>
              <div className="max-h-96 overflow-y-auto border rounded">
                <table className="w-full">
                  <thead className="sticky top-0 bg-gray-100">
                    <tr>
                      <th className="p-3 text-left">Date</th>
                      <th className="p-3 text-left">Original Price</th>
                      <th className="p-3 text-left">Predicted Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stockData[selectedStock].historical.map((entry, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-3">{entry.date}</td>
                        <td className="p-3">{entry.original.toFixed(4)}</td>
                        <td className="p-3">{entry.predicted.toFixed(4)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Future Predictions</h3>
              <div className="max-h-96 overflow-y-auto border rounded">
                <table className="w-full">
                  <thead className="sticky top-0 bg-gray-100">
                    <tr>
                      <th className="p-3 text-left">Date</th>
                      <th className="p-3 text-left">Predicted Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stockData[selectedStock].future.map((entry, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-3">{entry.date}</td>
                        <td className="p-3">{entry.predicted.toFixed(4)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockGame;