import React from "react";
import step1 from "../assets/groww1.jpeg";
import step2 from "../assets/groww2.jpeg";
import step3 from "../assets/groww3.jpeg";
import step4 from "../assets/groww4.jpeg";
import step5 from "../assets/groww5.jpeg";
import step6 from "../assets/groww6.jpeg";
import step7 from "../assets/groww7.jpeg";
import step8 from "../assets/groww8.jpeg";
import step9 from "../assets/groww9.jpeg";
import step10 from "../assets/groww10.jpeg";
import step11 from "../assets/groww11.jpeg";
import step12 from "../assets/groww12.jpeg";
import step13 from "../assets/groww13.jpeg";
import { motion } from "framer-motion";

const steps = [
  { image: step1, description: "Click on ‘Open Your Account’ to visit Groww and start your account opening process. Enter your mobile number to continue." },
  { image: step2, description: "Now enter your PAN number to continue. Click verify to proceed." },
  { image: step3, description: "Confirm your identity by clicking the confirm button." },
  { image: step4, description: "Now enter your Date of Birth, Gender and marital status. Click the next button to continue." },
  { image: step5, description: "Now enter your Occupation type, annual income and parents name. Click next to continue." },
  { image: step6, description: "Now enter your bank IFSC Code and wait for the system to detect the branch. Click Confirm bank to continue." },
  { image: step7, description: "Now enter your bank account number. Re-enter it to confirm the bank account number. Click verify bank to continue." },
  { image: step8, description: "Now click your picture on a clear background. Click the camera button to capture your photo." },
  { image: step9, description: "Now you need to record a 3-second video of yourself to do the IPV process. Make sure your face fits within the frame." },
  { image: step10, description: "Now upload a clear picture of your PAN card. Click the Camera to capture it. You can also upload a scanned image of the PAN card from your gallery." },
  { image: step11, description: "Now verify your address by uploading any one of the documents (Aadhaar card, Voter ID, Passport, Driving License). Click Next to continue." },
  { image: step12, description: "Now enter your same address details which you have mentioned on your uploaded documents." },
  { image: step13, description: "Now you need to upload your signature. Check the declaration box and hit “click to sign button”. You will be welcomed by a screen where you need to sign using your fingers. Click submit. Your account has been successfully created. You can now start trading using the app." },
];

const Groww = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#dcd6f7] to-[#a6a1e0] text-black p-10">
      <motion.h2
        className="text-5xl font-extrabold text-[#4a148c] mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Groww Account Opening Guide
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

export default Groww;
