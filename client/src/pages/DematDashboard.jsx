import { Route, Routes, Link, useNavigate } from "react-router-dom";
import StockAnalysis from "./StockAnalysis";
import News from "./News";
import Discussion from "./Discussion";

function Dashboard() {
  const navigate = useNavigate(); // Use navigate instead of <Link>

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Market Dashboard</h1>

      <div className="flex space-x-4 mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => navigate("/dashboard/analysis")}
        >
          Stock Analysis
        </button>

        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => navigate("/dashboard/news")}
        >
          News
        </button>

        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded"
          onClick={() => navigate("/dashboard/discussion")}
        >
          Forms Discussion
        </button>
      </div>

      <Routes>
        <Route path="/dashboard/analysis" element={<StockAnalysis />} />
        <Route path="/dashboard/news" element={<News />} />
        <Route path="/dashboard/discussion" element={<Discussion />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
