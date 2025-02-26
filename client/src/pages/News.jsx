import NewsArticles from "../components/NewsArticle";

function News() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Stock Market News</h1>
      <NewsArticles />
    </div>
  );
}

export default News;
