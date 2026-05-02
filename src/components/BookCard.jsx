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
    <div className="w-72 bg-zinc-900 text-white rounded-2xl border border-zinc-800 shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20 group">

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={
            image ||
            "https://media4.giphy.com/media/1gbqIc1fK8QgR3bHL7/giphy.gif"
          }
          alt={title}
          className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-70" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">

        {/* Title */}
        <h2 className="font-semibold text-lg leading-tight group-hover:text-blue-400 transition">
          {title}
        </h2>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-xs text-gray-400 line-clamp-1">
            {subtitle}
          </p>
        )}

        {/* Authors + Date */}
        <div className="flex justify-between text-xs text-gray-400">
          <span className="text-blue-400">
            {authors?.join(", ")}
          </span>
          <span>{publishedDate}</span>
        </div>

        {/* Divider */}
        <div className="h-px bg-zinc-800 my-1" />

        {/* Description */}
        <p className="text-sm text-gray-300 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
}

export default BookNFTCard;