import React, { useEffect, useState } from "react";
import { CatCard } from "../components/CatCard";

function CatData() {
  const [cat, setCat] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(
      "https://api.freeapi.app/api/v1/public/cats/cat/random",
      { signal: controller.signal }
    )
      .then((res) => res.json())
      .then((res) => {
        setCat([res?.data] || []);
        setLoading(false);
        console.log(res.data);
        
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
          Soft Cats...🐈‍⬛
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
        {cat.map((item) => (
          <CatCard
          key={item.id}
            cat={item}
          />
        ))}
      </div>

    </div>
  </div>
  );
}

export default CatData;