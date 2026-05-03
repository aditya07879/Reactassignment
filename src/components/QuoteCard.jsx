function StarIcon() {
  return <span className="text-yellow-500 text-sm">★</span>;
}

export function QuoteCard({ name, content }) {
  return (
    <div className="w-full max-w-md border rounded-xl p-4 shadow-sm bg-white">
      {/* Header */}
      <div className="flex items-center gap-4 pb-4">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d"
          alt="avatar"
          className="w-12 h-12 rounded-full object-cover"
        />

        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg text-black">
              {name || "Unknown"}
            </h2>

            <div className="flex gap-1">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>

          <p className="text-gray-500 text-sm">Frontend Lead @ Google</p>
        </div>
      </div>

      {/* Content */}
      <p className="text-gray-700 text-sm leading-relaxed">{content}</p>
    </div>
  );
}
