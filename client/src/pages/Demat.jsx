import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Demat = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#dcd6f7] to-[#a6a1e0] text-black px-4 py-10">
      {/* Heading Section */}
      <motion.h2
        className="text-5xl font-extrabold text-[#4a148c] mb-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Do you have a Demat account?
      </motion.h2>

      {/* Buttons Section */}
      <div className="flex gap-8">
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 text-lg font-semibold text-white bg-[#6a1b9a] rounded-lg shadow-lg transition-all hover:bg-[#4a148c]"
          onClick={() => navigate("/home")}
        >
          Yes, I have one
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 text-lg font-semibold text-[#6a1b9a] bg-white border-2 border-[#6a1b9a] rounded-lg shadow-lg transition-all hover:bg-[#f3e5f5] hover:text-[#4a148c]"
          onClick={() => navigate("/broker")}
        >
          No, I need one
        </motion.button>
      </div>
    </div>
  );
};

export default Demat;
