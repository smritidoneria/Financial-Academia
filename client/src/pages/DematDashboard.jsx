import { Route, Routes, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import StockAnalysis from "./StockAnalysis";
import News from "./News";
import Discussion from "./Discussion";
import NavBar from "../components/NavBar";

function Dashboard() {
  const navigate = useNavigate(); 

  return (
    <>
  
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white text-black">
      
      <h1 className="text-4xl font-bold mb-8">Market Dashboard</h1>

      {/* Navigation Buttons
      <div className="flex gap-6 mb-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-6 py-3 text-lg font-semibold text-white bg-[#662d91] rounded-lg shadow-md"
          onClick={() => navigate("/dashboard/analysis")}
        >
          Stock Analysis
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-6 py-3 text-lg font-semibold text-[#662d91] bg-white border-2 border-[#662d91] rounded-lg shadow-md"
          onClick={() => navigate("/dashboard/news")}
        >
          News
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-6 py-3 text-lg font-semibold text-white bg-[#662d91] rounded-lg shadow-md"
          onClick={() => navigate("/dashboard/discussion")}
        >
          Forums Discussion
        </motion.button>
      </div>


      <div className="w-full flex justify-center">
        <Routes>
          <Route path="/analysis" element={<StockAnalysis />} />
          <Route path="/news" element={<News />} />
          <Route path="/discussion" element={<Discussion />} />
        </Routes>
      </div> */}
    </div>
    </>
  );
}

export default Dashboard;

