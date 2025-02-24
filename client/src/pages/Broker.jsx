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
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white text-black">
      <h2 className="text-4xl font-bold mb-6">Broker Authentication</h2>
      <div className="grid grid-cols-4 gap-8">
        {brokers.map((broker) => (
          <motion.div
            key={broker.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center p-8 bg-white border-2 border-[#662d91] rounded-lg shadow-md cursor-pointer w-72 h-72"
            onClick={() => navigate(broker.path)}
          >
            <img
              src={broker.logo}
              alt={broker.name}
              className="w-32 h-32 mb-4"
            />
            <span className="text-xl font-semibold text-[#662d91]">
              {broker.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Broker;
