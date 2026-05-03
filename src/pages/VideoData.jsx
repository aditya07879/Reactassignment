import React, { useEffect, useState } from "react";
import { VideoCard } from "../components/VideoCard";

function VideoData() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(
      "https://api.freeapi.app/api/v1/public/youtube/videos?page=1&limit=10&query=javascript",
      { signal: controller.signal }
    )
      .then((res) => res.json())
      .then((res) => {
        setVideos(res?.data?.data || []);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.log(err);
          setError("Failed to fetch videos");
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, []);

  return (
    <div >
  <div className="max-w-6xl mx-auto px-4">
    
    {/* Heading */}
    <h1 className="text-3xl md:text-4xl text-zinc-100 font-semibold text-center mb-12 tracking-tight">
      📺 Hitesh Chaudhary Videos
    </h1>

    {/* Loading */}
    {loading && (
      <p className="text-center text-zinc-400 text-sm">
        Loading videos...
      </p>
    )}

    {/* Error */}
    {error && (
      <p className="text-center text-red-400 text-sm">
        {error}
      </p>
    )}

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
      {!loading &&
        !error &&
        videos.map((item) => (
          <VideoCard key={item.items.id} video={item.items} />
        ))}
    </div>

  </div>
</div>
  );
}

export default VideoData;