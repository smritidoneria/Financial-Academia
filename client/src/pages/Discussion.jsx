import React, { useState } from "react";
import { MessageCircle, Send, ChevronDown, ChevronUp, PlusCircle } from "lucide-react";

function Discussion() {
  const [discussions, setDiscussions] = useState([
    {
      id: 1,
      question: "What are the key indicators to analyze before investing?",
      answers: [
        "Look at P/E ratio, EPS, and market trends.",
        "Analyze financial statements and company performance.",
        "Check industry trends and competitor analysis."
      ]
    },
    {
      id: 2,
      question: "How does inflation affect stock prices?",
      answers: [
        "High inflation reduces purchasing power, impacting company revenue.",
        "It increases interest rates, making borrowing costly for companies.",
        "Stock markets may become volatile due to uncertainty."
      ]
    },
    {
      id: 3,
      question: "What is the best strategy for long-term investing?",
      answers: [
        "Diversify your portfolio to reduce risk.",
        "Invest in fundamentally strong companies.",
        "Follow a buy-and-hold strategy rather than frequent trading."
      ]
    }
  ]);

  const [selected, setSelected] = useState(null);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [selectedQuestionForAnswer, setSelectedQuestionForAnswer] = useState(null);

  const handleAddQuestion = () => {
    if (newQuestion.trim()) {
      const newDiscussion = {
        id: discussions.length + 1,
        question: newQuestion,
        answers: []
      };
      setDiscussions([...discussions, newDiscussion]);
      setNewQuestion("");
    }
  };

  const handleAddAnswer = () => {
    if (selectedQuestionForAnswer !== null && newAnswer.trim()) {
      const updatedDiscussions = discussions.map(discussion => 
        discussion.id === selectedQuestionForAnswer
          ? {...discussion, answers: [...discussion.answers, newAnswer]}
          : discussion
      );
      setDiscussions(updatedDiscussions);
      setNewAnswer("");
      setSelectedQuestionForAnswer(null);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <div className="flex items-center mb-6">
          <MessageCircle className="w-10 h-10 text-blue-500 mr-4" />
          <h1 className="text-3xl font-bold text-gray-800">Discussion Forum</h1>
        </div>
        
        <p className="text-gray-600 mb-6 text-lg">
          Engage in meaningful discussions about stock market trends, strategies, and insights.
        </p>

        {/* Question Submission Section */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <PlusCircle className="mr-2 text-blue-500" />
            Start a New Discussion
          </h2>
          <div className="flex space-x-4">
            <input 
              type="text"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              placeholder="What's your market-related question?"
              className="flex-grow p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button 
              onClick={handleAddQuestion}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition flex items-center"
            >
              <Send className="mr-2" /> Post Question
            </button>
          </div>
        </div>

        {/* FAQ and Discussion Section */}
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Discussions & Insights
        </h2>
        
        <div className="space-y-4">
          {discussions.map((item, index) => (
            <div 
              key={item.id} 
              className="bg-white border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <button
                className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50 rounded-t-lg"
                onClick={() => setSelected(selected === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-800">
                  {item.question}
                </span>
                {selected === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              
              {selected === index && (
                <div className="p-4 bg-gray-50 rounded-b-lg">
                  {/* Existing Answers */}
                  {item.answers.map((answer, ansIndex) => (
                    <p 
                      key={ansIndex} 
                      className="text-gray-700 mb-2 pl-4 border-l-2 border-blue-300"
                    >
                      {answer}
                    </p>
                  ))}
                  
                  {/* Answer Input */}
                  <div className="mt-4 flex space-x-4">
                    <input 
                      type="text"
                      value={selectedQuestionForAnswer === item.id ? newAnswer : ""}
                      onChange={(e) => {
                        setNewAnswer(e.target.value);
                        setSelectedQuestionForAnswer(item.id);
                      }}
                      placeholder="Add your answer..."
                      className="flex-grow p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <button 
                      onClick={handleAddAnswer}
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Discussion;