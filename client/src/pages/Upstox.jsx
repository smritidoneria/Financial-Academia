import React from "react";
import step1 from "../assets/up1.jpeg";
import step2 from "../assets/up2.jpeg";
import step3 from "../assets/up3.jpeg";
import step4 from "../assets/up4.jpeg";
import step5 from "../assets/up5.jpeg";
import step6 from "../assets/up6.jpeg";
import step7 from "../assets/up7.jpeg";
import step8 from "../assets/up8.jpeg";
import step9 from "../assets/up9.jpeg";
import step10 from "../assets/up10.jpeg";
import step11 from "../assets/up11.jpeg";
import step12 from "../assets/up12.jpeg";
import { motion } from "framer-motion";

const steps = [
  { image: step1, description: "Go to Upstox’s official website. Click on Open Demat Account. Provide the mobile number to log in." },
  { image: step2, description: "Now enter your email address to continue. Click verify to proceed." },
  { image: step3, description: "Fill out personal details such as marital status." },
  { image: step4, description: "Now enter your Date of Birth, PAN card details. Click the next button to continue." },
  { image: step5, description: "Now click your picture on a clear background. Click the camera button to capture your photo." },
  { image: step6, description: "Now enter your bank IFSC Code and wait for the system to detect the branch. Click Confirm bank to continue." },
  { image: step7, description: "Now you need to upload your signature. Check the declaration box and hit the ‘Click to Sign’ button." },
  { image: step8, description: "Now upload proof of income such as a bank statement, salary slips, ITR, DP holding." },
  { image: step9, description: "Now select your primary bank." },
  { image: step10, description: "Now share the bank statement and bank details." },
  { image: step11, description: "Choose your account and click OK." },
  { image: step12, description: "Verify your application with Aadhaar, and you are good to go." },
];

const Upstox = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#dcd6f7] to-[#a6a1e0] text-black p-10">
      <motion.h2
        className="text-5xl font-extrabold text-[#662d91] mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Upstox Account Opening Guide
      </motion.h2>

      <div className="flex flex-col gap-12">
        {Array.from({ length: Math.ceil(steps.length / 2) }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap justify-center gap-12">
            {steps.slice(rowIndex * 2, rowIndex * 2 + 2).map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-center text-white font-semibold shadow-lg rounded-full px-6 py-2 bg-gradient-to-r from-[#6a1b9a] to-[#4a148c] text-lg">
                  Step {rowIndex * 2 + index + 1}
                </div>
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
        ))}
      </div>
    </div>
  );
};

export default Upstox;
