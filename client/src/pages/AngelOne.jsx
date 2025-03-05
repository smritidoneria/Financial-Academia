import React from "react";
import { motion } from "framer-motion";
import step1 from "../assets/angel1.jpeg";
import step2 from "../assets/angel2.jpeg";
import step3 from "../assets/angel3.jpeg";
import step4 from "../assets/angel4.jpeg";
import step5 from "../assets/angel5.jpeg";
import step6 from "../assets/angel6.jpeg";
import step7 from "../assets/angel7.jpeg";
import step8 from "../assets/angel8.jpeg";
import step9 from "../assets/angel9.jpeg";

const steps = [
  {
    image: step1,
    description: "Visit Angel One’s Website. Go to Angel One’s official website.",
  },
  {
    image: step2,
    description: "Provide your Name, Mobile Number. Verify your mobile number with an OTP.",
  },
  { image: step3, description: "Add Email Address for KYC Verification." },
  {
    image: step4,
    description:
      "Enter your PAN Card number and Date of Birth. Fill in personal details like address, occupation, and annual income.",
  },
  { image: step5, description: "Enter Aadhar number to continue." },
  {
    image: step6,
    description: "Use the digilocker to access the credential and important documents.",
  },
  {
    image: step7,
    description: "Give the permission from the digilocker to provide the credentials.",
  },
  {
    image: step8,
    description:
      "Enter your PAN Card number and Date of Birth. Fill in personal details like address, occupation, and annual income.",
  },
  {
    image: step9,
    description:
      "Upload Required Documents such as PAN Card (for identity verification), Aadhaar Card (for address verification), Bank proof (Cancelled cheque or bank statement), and Signature proof (Upload an image of your signature).",
  },
];

const AngelOne = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#dcd6f7] to-[#a6a1e0] text-black p-10">
      <motion.h2
        className="text-5xl font-extrabold text-[#662d91] mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Angel One Account Opening Guide
      </motion.h2>

      {/* Steps Container */}
      <div className="flex flex-col gap-10">
        {Array.from({ length: Math.ceil(steps.length / 2) }).map(
          (_, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap justify-center gap-10">
              {steps.slice(rowIndex * 2, rowIndex * 2 + 2).map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Step Number Trapezium Container */}
                  <div className="flex items-center justify-center text-white font-semibold shadow-lg rounded-full px-6 py-2 bg-gradient-to-r from-[#6a1b9a] to-[#4a148c] text-lg">
                    Step {rowIndex * 2 + index + 1}
                  </div>

                  {/* Card Container */}
                  <div className="flex items-center gap-6 p-6 bg-white rounded-lg shadow-lg w-[650px] border-2 border-[#6a1b9a] h-auto transition-all hover:scale-105">
                    <img
                      src={step.image}
                      alt={`Step ${rowIndex * 2 + index + 1}`}
                      className="w-64 h-56 rounded-lg"
                    />
                    <div className="h-32 border-r-2 border-dashed border-gray-400"></div>
                    <p className="text-lg font-medium">{step.description}</p>
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

export default AngelOne;