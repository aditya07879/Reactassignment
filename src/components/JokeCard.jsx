import React from "react";

function JokeCard({ rating = "4.5", content }) {
  return (
    <div className="relative max-w-sm p-6 bg-zinc-900 text-white border border-zinc-800 rounded-xl shadow-md transition hover:scale-105 hover:shadow-blue-500/20">

      {/* Rating badge */}
      <span className="absolute right-3 top-3 bg-blue-600 text-xs px-2 py-1 rounded">
        ⭐ {rating}
      </span>

      {/* Content */}
      <p className="text-sm text-gray-300 leading-relaxed">
        {content}
      </p>
    </div>
  );
}

export default JokeCard;