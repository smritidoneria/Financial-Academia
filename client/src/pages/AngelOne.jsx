import React from "react";
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
    description:
      "Visit Angel One’s Website. Go to Angel One’s official website.",
  },
  {
    image: step2,
    description:
      " Provide your Name, Mobile Number. Verify your mobile number with an OTP.",
  },
  { image: step3, description: "Add Email Address for kYC Verification" },
  {
    image: step4,
    description:
      "Enter your PAN Card number and Date of Birth. Fill in personal details like address, occupation, and annual income.",
  },
  { image: step5, description: "Enter Aadhar number to continue." },
  {
    image: step6,
    description:
      "Use the digilocker to access the credential and important documents",
  },
  {
    image: step7,
    description:
      "Give the permission from the digilocker to provide the credentials.",
  },
  {
    image: step8,
    description:
      "Enter your PAN Card number and Date of Birth. Fill in personal details like address, occupation, and annual income.",
  },
  {
    image: step9,
    description:
      "Upload Required Documents such as PAN Card (for identity verification). Aadhaar Card (for address verification). Bank proof (Cancelled cheque or bank statement).Signature proof (Upload an image of your signature).",
  },
];

const AngelOne = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white text-black p-10">
      <h2 className="text-4xl font-bold mb-10"> Groww</h2>

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

export default AngelOne;
