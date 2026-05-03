import React, { useEffect, useState } from "react";
import { QuoteCard } from "../components/QuoteCard";

function QuoteData() {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(
      "https://api.freeapi.app/api/v1/public/quotes?page=1&limit=10&query=human",
      { signal: controller.signal }
    )
      .then((res) => res.json())
      .then((res) => {
        setQuote(res?.data?.data || []);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.log(err);
          setError("Failed to fetch quotes");
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, []);

  return (
    <div className="min-h-screen bg-black py-10">
    <div className="max-w-6xl mx-auto px-4">
      
      <h1 className="text-3xl font-bold text-center mb-10">
          Quotes That make your life  Easy!
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
        {quote.map((item) => (
          <QuoteCard
            key={item.id}
            name={item.author || "Unknown"}
            content={item.content}
          />
        ))}
      </div>

    </div>
  </div>
  );
}

export default QuoteData;