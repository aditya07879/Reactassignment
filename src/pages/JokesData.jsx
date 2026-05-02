import React, { useEffect, useState } from "react";
import JokeCard from "../components/JokeCard";

function JokesData() {
  const [JokeData, setJokeData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch(
      "https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%252Cid%252Ccontent&page=1",
      { signal: controller.signal }
    )
      .then(res => res.json())
      .then(res => setJokeData(res.data.data))
      .catch(err => {
        if (err.name !== "AbortError") {
          console.log(err);
        }
      });

    return () => controller.abort();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-10">

      {/* Header */}
      <h1 className="text-3xl font-bold mb-10 text-center">
        😂 Science Jokes
      </h1>

      {/* Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">

        {JokeData.length > 0 ? (
          JokeData.map((item) => (
            <JokeCard
              key={item.id}
              content={item.content}
            />
          ))
        ) : (
          <p className="col-span-full text-gray-400 text-lg text-center">
            No jokes available
          </p>
        )}

      </div>
    </div>
  );
}

export default JokesData;