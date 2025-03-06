import React from "react";
import ReactPlayer from "react-player";

const Resources = () => {
  const videos = [
    "https://www.youtube.com/watch?v=4CQzOXbkLqY",
    "https://www.youtube.com/watch?v=DRAcPbYPNVk",
    "https://www.youtube.com/watch?v=QaKbnXndWUY",
    "https://www.youtube.com/watch?v=M86YwBWxygI",
    "https://www.youtube.com/watch?v=vbzZto4WCyo",
    "https://www.youtube.com/watch?v=3UF0ymVdYLA",
    "https://www.youtube.com/watch?v=Xn7KWR9EOGQ",
    "https://www.youtube.com/watch?v=p7HKvqRI_Bo",
    "https://www.youtube.com/watch?v=oHAB6f-P-K0"
  ];

  return (
    <div className="flex flex-col items-center p-5">
      <h2 className="text-2xl font-bold mb-4">Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
        {videos.map((video, index) => (
          <div key={index} className="shadow-lg p-2 rounded-lg">
            <ReactPlayer url={video} width="100%" height="200px" controls />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;