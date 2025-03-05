import React, { useEffect, useState } from "react";
import { Clock, ExternalLink } from "lucide-react";

const NewsArticlesSkeleton = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-6">
        <div className="h-10 w-64 bg-gray-200 animate-pulse mx-auto rounded"></div>
      </div>
      
      <div className="relative overflow-hidden">
        <div className="flex space-x-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="w-1/3 flex-shrink-0 p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="h-40 bg-gray-200 animate-pulse"></div>
                <div className="p-4">
                  <div className="h-6 bg-gray-200 animate-pulse mb-2 w-3/4"></div>
                  <div className="h-4 bg-gray-200 animate-pulse mb-2"></div>
                  <div className="h-4 bg-gray-200 animate-pulse w-1/2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const NewsArticles = () => {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.marketaux.com/v1/news/all?symbols=AAPL,GOOGL,TSLA,AMZN,MSFT,NFLX,NVDA,META,AMD,IBM,SP500,DOWJONES,BTC,ETH,FOREX,CRYPTO,GOLD,ECONOMY&filter_entities=true&language=en&api_token=QjmOKq3YWRq5KvD7AJT25ka7jV5ofg4SdPfntewT"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setArticles(data.data.slice(0, 15));
        setLoading(false);
      } catch (err) {
        console.error("Error fetching articles:", err);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (articles.length === 0) return;
    
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

  if (loading) {
    return <NewsArticlesSkeleton />;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 flex items-center justify-center">
        <Clock className="mr-3 text-blue-500" />
        Latest Market News
      </h1>

      <div className="relative group">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 
            bg-white border border-gray-200 text-gray-700 
            p-3 rounded-full shadow-lg z-10 
            opacity-0 group-hover:opacity-100 
            transition-all duration-300 hover:bg-gray-100"
        >
          ❮
        </button>

        {/* Carousel Container */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {articles.map((article) => (
              <div key={article.uuid} className="w-1/3 flex-shrink-0 p-4">
                <div className="bg-white shadow-lg rounded-xl overflow-hidden 
                  transform transition duration-300 hover:scale-105 
                  hover:shadow-2xl border border-gray-100">
                  {article.image_url && (
                    <img 
                      src={article.image_url} 
                      alt={article.title} 
                      className="w-full h-48 object-cover transform transition duration-300 hover:scale-110" 
                    />
                  )}
                  <div className="p-5">
                    <h2 className="text-lg font-bold mb-2 text-gray-800 line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 
                        flex items-center font-semibold"
                      >
                        Read More
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                      <span className="text-xs text-gray-500">
                        {new Date(article.published_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 
            bg-white border border-gray-200 text-gray-700 
            p-3 rounded-full shadow-lg z-10 
            opacity-0 group-hover:opacity-100 
            transition-all duration-300 hover:bg-gray-100"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default NewsArticles;