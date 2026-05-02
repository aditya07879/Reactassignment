import React from "react";

function BookNFTCard({
  title,
  subtitle,
  authors,
  publishedDate,
  description,
  image
}) {
  return (
    <div className="w-72 bg-black text-white rounded-xl border border-zinc-800 shadow-md overflow-hidden">

      {/* NFT-style image */}
      <img
        src={image || "https://media4.giphy.com/media/1gbqIc1fK8QgR3bHL7/giphy.gif"}
        alt={title}
        className="w-full h-52 object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">

        {/* Title */}
        <h2 className="font-bold text-lg">
          {title}
        </h2>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-sm text-gray-400">
            {subtitle}
          </p>
        )}

        {/* Authors */}
        <p className="text-sm text-blue-400">
          {authors?.join(", ")}
        </p>

        {/* Date */}
        <p className="text-xs text-gray-500">
          {publishedDate}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-300 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
}

export default BookNFTCard;