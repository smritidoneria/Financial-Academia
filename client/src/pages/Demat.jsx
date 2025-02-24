import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Demat = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white text-black">
      <h2 className="text-4xl font-bold mb-6">Do you have a Demat account?</h2>
      <div className="flex gap-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-6 py-3 text-lg font-semibold text-white bg-[#662d91] rounded-lg shadow-md"
          onClick={() => navigate("/dashboard")}
        >
          Yes, I have one
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-6 py-3 text-lg font-semibold text-[#662d91] bg-white border-2 border-[#662d91] rounded-lg shadow-md"
          onClick={() => navigate("/broker")}
        >
          No, I need one
        </motion.button>
      </div>
    </div>
  );
};

export default Demat;
