import { useState } from "react";

function Discussion() {
  const discussions = [
    {
      question: "What are the key indicators to analyze before investing?",
      answers: [
        "Look at P/E ratio, EPS, and market trends.",
        "Analyze financial statements and company performance.",
        "Check industry trends and competitor analysis."
      ]
    },
    {
      question: "How does inflation affect stock prices?",
      answers: [
        "High inflation reduces purchasing power, impacting company revenue.",
        "It increases interest rates, making borrowing costly for companies.",
        "Stock markets may become volatile due to uncertainty."
      ]
    },
    {
      question: "What is the best strategy for long-term investing?",
      answers: [
        "Diversify your portfolio to reduce risk.",
        "Invest in fundamentally strong companies.",
        "Follow a buy-and-hold strategy rather than frequent trading."
      ]
    }
  ];

  const [selected, setSelected] = useState(null);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Discussion Forum</h1>
      <p className="mb-4">Discuss stock market trends, strategies, and insights with other traders.</p>

      {/* User Input for Discussion */}
      <div className="border p-4 rounded-lg mb-6">
        <h2 className="text-lg font-semibold mb-2">Start a Discussion</h2>
        <textarea className="w-full p-2 border rounded" placeholder="Share your thoughts..."></textarea>
        <button className="bg-green-500 text-white px-4 py-2 rounded mt-2">Submit</button>
      </div>

      {/* FAQ Section */}
      <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions</h2>
      <div>
        {discussions.map((item, index) => (
          <div key={index} className="border p-4 rounded-lg mb-2">
            <button
              className="text-lg font-semibold w-full text-left flex justify-between items-center"
              onClick={() => setSelected(selected === index ? null : index)}
            >
              {item.question}
              <span>{selected === index ? "▲" : "▼"}</span>
            </button>
            {selected === index && (
              <div className="mt-2">
                {item.answers.map((answer, ansIndex) => (
                  <p key={ansIndex} className="text-gray-700 mt-1">• {answer}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discussion;
