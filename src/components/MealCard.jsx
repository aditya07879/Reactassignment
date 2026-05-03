function Tag({ text }) {
  return (
    <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">
      {text}
    </span>
  );
}

export function MealCard({ meal }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg max-w-sm w-full hover:scale-[1.02] transition">
      
      {/* Image */}
      <div className="relative">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-52 object-cover"
        />
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
          {meal.strCategory}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {meal.strMeal}
        </h2>

        {/* Area */}
        <p className="text-sm text-gray-500 mb-2">
          🌍 {meal.strArea}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {meal.strTags &&
            meal.strTags.split(",").map((tag, i) => (
              <Tag key={i} text={tag} />
            ))}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-3 mb-4">
          {meal.strInstructions}
        </p>

        {/* Button */}
        <a
          href={meal.strYoutube}
          target="_blank"
          className="block text-center bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm font-medium"
        >
          ▶ Watch Recipe
        </a>
      </div>
    </div>
  );
}