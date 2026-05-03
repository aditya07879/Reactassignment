import React, { useEffect, useState } from "react";
import { ProfileCard } from "../components/profileCard";


function UserData() {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(
      "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10",
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
         User Data
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
        {quote.map((item) => (
          <ProfileCard
            user={item}
          />
        ))}
      </div>

    </div>
  </div>
  );
}

export default UserData;