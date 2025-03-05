import React from "react";
import step1 from "../assets/zero1.jpeg";
import step2 from "../assets/zero2.jpeg";
import step3 from "../assets/zero3.jpeg";
import step4 from "../assets/zero4.jpeg";
import step5 from "../assets/zero5.jpeg";
import step6 from "../assets/zero6.jpeg";
import step7 from "../assets/zero7.jpeg";
import step8 from "../assets/zero8.jpeg";
import step9 from "../assets/zero9.jpeg";
import step10 from "../assets/zero10.jpeg";
import step11 from "../assets/zero11.jpeg";
import step12 from "../assets/zero12.jpeg";
import step13 from "../assets/zero13.jpeg";
import step14 from "../assets/zero14.jpeg";
import { motion } from "framer-motion";

const steps = [
  { image: step1, description: "Install and open the Zerodha Kite app on your phone." },
  { image: step2, description: "Enter your phone number and click on continue." },
  { image: step3, description: "Fill in the details and click on continue." },
  { image: step4, description: "Confirm the OTP and proceed." },
  { image: step5, description: "Enter PAN details and date of birth." },
  { image: step6, description: "Pay the account opening fee to proceed." },
  { image: step7, description: "Share your Aadhaar KYC via DigiLocker." },
  { image: step8, description: "Enter Aadhaar details and continue." },
  { image: step9, description: "Verify Aadhaar OTP." },
  { image: step10, description: "Fill in your profile details." },
  { image: step11, description: "Link your bank account." },
  { image: step12, description: "Complete webcam verification." },
  { image: step13, description: "Upload your digital or e-signature." },
  { image: step14, description: "Complete documentation for account opening." },
];

const Zerodha = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#dcd6f7] to-[#a6a1e0] text-black p-10">
      {/* Heading Section */}
      <motion.h2
        className="text-5xl font-extrabold text-[#4a148c] mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Zerodha Account Opening Guide
      </motion.h2>

      {/* Steps Container */}
      <div className="flex flex-col gap-12">
        {Array.from({ length: Math.ceil(steps.length / 2) }).map(
          (_, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap justify-center gap-12">
              {steps.slice(rowIndex * 2, rowIndex * 2 + 2).map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Step Badge */}
                  <div className="flex items-center justify-center text-white font-semibold shadow-lg rounded-full px-6 py-2 bg-gradient-to-r from-[#6a1b9a] to-[#4a148c] text-lg">
                    Step {rowIndex * 2 + index + 1}
                  </div>

                  {/* Card Container */}
                  <div className="flex items-center gap-6 p-6 bg-white rounded-lg shadow-lg w-[650px] border-2 border-[#6a1b9a] h-auto transition-all hover:scale-105">
                    <img
                      src={step.image}
                      alt={`Step ${rowIndex * 2 + index + 1}`}
                      className="w-64 h-56 rounded-lg shadow-md"
                    />
                    <div className="h-32 border-r-2 border-dashed border-gray-400"></div>
                    <p className="text-lg font-medium text-gray-800">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Zerodha;
