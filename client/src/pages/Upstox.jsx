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


const steps = [
  { image: step1, description: "Go to Upstox’s official website.Click on Open Demat Account. Provide the mobile number to login" },
  { image: step2, description: "Now enter your email address to continue. Click verify to proceed." },
  { image: step3, description: "Fill out the personal details such as Marital status." },
  { image: step4, description: "Now enter your Date of Birth,PAN card details.Click the next button to continue." },
  { image: step5, description: "Now click your picture on a clear background. Click the camera button to capture your photo." },
  { image: step6, description: "Now enter your bank IFSC Code and wait for the system to detect the branch. Click Confirm bank to continue." },
  { image: step7, description: "Now you need to upload your signature. Check the declaration box and hit “click to sign button”." },
    { image: step8, description: "Now Upload proof of income such as bank statement, salary slips, ITR, DP holding." },
    { image: step9, description: "Now Select your primary bank." },
    { image: step10, description: "Now Share the bank statement and the bank details" },
    { image: step11, description: "Choose your account and click OK" },
    { image: step12, description: "verify your application with aadhar and you are good to go." },
    

];

const Upstox = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white text-black p-10">
      <h2 className="text-4xl font-bold mb-10"> Groww</h2>

      {/* Steps Container */}
      <div className="flex flex-col gap-10">
        {Array.from({ length: Math.ceil(steps.length / 2) }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap justify-center gap-10">
            {steps.slice(rowIndex * 2, rowIndex * 2 + 2).map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                
                {/* Step Number Trapezium Container */}
                <div 
                  className="flex items-center justify-center text-white font-semibold shadow-md"
                  style={{
                    width: "120px",
                    height: "40px",
                    backgroundColor: "#662d91",
                    clipPath: "polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)"
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
        ))}
      </div>
    </div>
  );
};

export default Upstox;
