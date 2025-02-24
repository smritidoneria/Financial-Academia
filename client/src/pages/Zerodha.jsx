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

const steps = [
  {
    image: step1,
    description: "Install and open the zerodha kite App on your phone.",
  },
  {
    image: step2,
    description: " Next, put your phone no.and click  on continue.",
  },
  {
    image: step3,
    description: "Fill in the information and click on the continue button.",
  },
  { image: step4, description: "Confirm the OTP and click on continue." },
  {
    image: step5,
    description:
      "After signing up, start with the first step with filling pan detail and DOB.",
  },
  {
    image: step6,
    description:
      " In step 2 pay account opening fee which is the minimum balance to open Zerodha account.",
  },
  {
    image: step7,
    description:
      "Now, it's time to share your aadhar KYC continue to digilocker",
  },
  { image: step8, description: "Enter your aadhaar and click on continue." },
  { image: step9, description: "Verify  your aadhar OTP" },
  {
    image: step10,
    description:
      " Next, fill the requested information here to make a profile.",
  },
  { image: step11, description: "Here you have to link your bank account." },
  {
    image: step12,
    description:
      "Now it’s time for webcam verification which is an important step to complete your demat account.",
  },
  { image: step13, description: "Upload digital signature or E Signature." },
  {
    image: step14,
    description:
      "This is the last process where you have to collect required account opening documentation.",
  },
];
const Zerodha = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white text-black p-10">
      <h2 className="text-4xl font-bold mb-10">Zerodha</h2>

      {/* Steps Container */}
      <div className="flex flex-col gap-10">
        {Array.from({ length: Math.ceil(steps.length / 2) }).map(
          (_, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap justify-center gap-10"
            >
              {steps
                .slice(rowIndex * 2, rowIndex * 2 + 2)
                .map((step, index) => (
                  <div key={index} className="flex flex-col items-center">
                    {/* Step Number Trapezium Container */}
                    <div
                      className="flex items-center justify-center text-white font-semibold shadow-md"
                      style={{
                        width: "120px",
                        height: "40px",
                        backgroundColor: "#662d91",
                        clipPath: "polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)",
                      }}
                    >
                      Step {rowIndex * 2 + index + 1}
                    </div>

                    {/* Card Container */}
                    <div className="flex items-center gap-6 p-6 bg-gray-100 rounded-lg shadow-md w-[600px] border-2 border-[#662d91] h-76">
                      <img
                        src={step.image}
                        alt={`Step ${rowIndex * 2 + index + 1}`}
                        className="w-64 h-56 rounded-lg"
                      />
                      <div className="h-32 border-r-2 border-dashed border-gray-400"></div>
                      <p className="text-lg font-medium">{step.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Zerodha;
