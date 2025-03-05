import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo1 from "../assets/zerodha.png";
import logo2 from "../assets/upstox.png";
import logo3 from "../assets/grow.webp";
import logo4 from "../assets/angelone.png.avif";

const Broker = () => {
  const navigate = useNavigate();

  const brokers = [
    { name: "Zerodha", logo: logo1, path: "/zerodha" },
    { name: "Upstox", logo: logo2, path: "/upstox" },
    { name: "Groww", logo: logo3, path: "/groww" },
    { name: "AngelOne", logo: logo4, path: "/angelOne" },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#dcd6f7] to-[#a6a1e0] text-black px-4 py-10">
      {/* Heading Section */}
      <motion.h2
        className="text-5xl font-extrabold text-[#4a148c] mb-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Broker Authentication
      </motion.h2>

      {/* Broker Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {brokers.map((broker) => (
          <motion.div
            key={broker.name}
            whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center p-6 bg-white border-2 border-[#6a1b9a] rounded-xl shadow-lg cursor-pointer w-80 h-80 transform transition-all hover:shadow-2xl"
            onClick={() => navigate(broker.path)}
          >
            <img
              src={broker.logo}
              alt={broker.name}
              className="w-36 h-36 mb-4 object-contain"
            />
            <span className="text-2xl font-semibold text-[#6a1b9a]">
              {broker.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Broker;
