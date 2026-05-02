import React, { useEffect, useState } from "react";

function Card({
  title,
  price,
  category,
  images = [
    "https://imgs.search.brave.com/iQicSFDtveaTZAVKyh_SdfNbl_WafzKPnqsVJfS0Eis/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MDk1ODczMTIyMDgt/Y2VhNTRiZTk2OWU3/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjEuMCZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE1ueDhkMkYw/WTJobGMzeGxibnd3/Zkh3d2ZIeDhNQT09",
    "https://imgs.search.brave.com/PCN5ESwi6ECOWGuRwoW6Eavz8LSmNDc2aK4D14C2E5Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Nzg5OTgzMjM4NzAt/ODNhOWEzZDYwOWU1/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZhdXRv/PWZvcm1hdCZmaXQ9/Y3JvcCZpeGxpYj1y/Yi00LjEuMCZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE1UUjhmSGR5YVhO/MGQyRjBZMmg4Wlc1/OE1IeDhNSHg4ZkRB/PQ",
    "https://imgs.search.brave.com/KntiU9lB-Epk0995FbixJq6L2MyVR0h4aJOU8JSIids/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNjLzhm/LzM2LzNjOGYzNmMx/YTZlMWUzYWQ1ZWYw/NjFjMmQwZTU0Nzk0/LmpwZw"
  ]
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-72 bg-zinc-900 text-white rounded-2xl border border-zinc-800 shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20 group">

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={images[current]}
          alt={title}
          className="w-full h-48 object-cover transition-opacity duration-500"
        />

        {/* Category */}
        <span className="absolute top-3 left-3 bg-blue-600 text-xs px-2 py-1 rounded">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-sm font-semibold line-clamp-2 group-hover:text-blue-400 transition">
          {title}
        </h2>

        <p className="text-lg font-bold text-green-400">
          ${price}
        </p>

        <button className="mt-3 w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Card;