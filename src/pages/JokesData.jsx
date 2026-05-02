import React, { useEffect, useState } from "react";
import JokeCard from "../components/JokeCard";

function JokesData() {
  const [JokeData, setJokeData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%252Cid%252Ccontent&page=1", { signal: controller.signal })
    .then(res => res.json())
    .then(res => setJokeData(res.data.data))
    .catch(err => {
        if (err.name !== 'AbortError') {
          console.log(err);
        }
      });

     return () => controller.abort();
  }, []);

  return(
   <div className="min-h-screen bg-black text-white p-6">

  {/* Heading */}
  <h1 className="text-3xl font-bold text-center mb-8">
    Jokes Data
  </h1>

  {/* Grid Layout */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    
    {JokeData.length > 0 ? (
      JokeData.map((item) => (
        <JokeCard
          key={item.id}
          content={item.content}
        />
      ))
    ) : (
      <p className="col-span-full text-center text-gray-400">
        No jokes available
      </p>
    )}

  </div>
</div>
  )
}

export default JokesData;
