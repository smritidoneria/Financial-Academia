import React, { useEffect, useState } from "react";

const NewsArticles = () => {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; // Number of articles visible at a time

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://api.marketaux.com/v1/news/all?symbols=AAPL,GOOGL,TSLA,AMZN,MSFT,NFLX,NVDA,META,AMD,IBM,SP500,DOWJONES,BTC,ETH,FOREX,CRYPTO,GOLD,ECONOMY&filter_entities=true&language=en&api_token=QjmOKq3YWRq5KvD7AJT25ka7jV5ofg4SdPfntewT"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setArticles(data.data.slice(0, 15)); // Fetch 15 articles
      } catch (err) {
        console.error("Error fetching articles:", err);
      }
    };

    fetchArticles();
  }, []);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, articles]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= articles.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0 ? articles.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Latest Market News</h1>

      <div className="relative overflow-hidden">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-700"
        >
          ❮
        </button>

        {/* Carousel Container */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {articles.map((article) => (
              <div key={article.uuid} className="w-1/3 flex-shrink-0 p-4">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
                  {article.image_url && (
                    <img src={article.image_url} alt={article.title} className="w-full h-40 object-cover" />
                  )}
                  <div className="p-4">
                    <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
                    <p className="text-gray-600 text-sm">{article.description.slice(0, 100)}...</p>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-blue-500 hover:underline"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-700"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default NewsArticles;
