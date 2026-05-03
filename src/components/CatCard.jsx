function Badge({ label }) {
  return (
    <span className="bg-zinc-200 text-zinc-700 text-xs px-2 py-1 rounded-full">
      {label}
    </span>
  );
}

export function CatCard({ cat }) {
  if (!cat) return null;

  return (
    <div className="bg-white rounded-xl shadow-md max-w-sm w-full overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      
      {/* Image */}
      <div className="w-full h-52 overflow-hidden">
        <img
          src={cat.image}
          alt={cat.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-1">
          {cat.name}
        </h2>

        {/* Origin */}
        <p className="text-sm text-gray-500 mb-2">
          🌍 {cat.origin}
        </p>

        {/* Temperament */}
        <div className="flex flex-wrap gap-2 mb-3">
          {cat.temperament.split(",").map((t, i) => (
            <Badge key={i} label={t.trim()} />
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {cat.description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mb-4">
          <p>🐾 Life: {cat.life_span} yrs</p>
          <p>⚖ Weight: {cat.weight.metric} kg</p>
          <p>⚡ Energy: {cat.energy_level}/5</p>
          <p>🧠 Intelligence: {cat.intelligence}/5</p>
        </div>

        {/* Button */}
        <a
          href={cat.wikipedia_url}
          target="_blank"
          rel="noreferrer"
          className="block text-center bg-zinc-900 text-white py-2 rounded-lg text-sm hover:bg-zinc-800 transition"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}