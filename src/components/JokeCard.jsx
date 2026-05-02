import React from 'react'

function JokeCard({key="4.5" ,content}) {
  return (
        <div className="relative max-w-lg p-8 border border-gray-100 bg-black shadow-xl rounded-xl">
      <span className="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
        {key}
      </span>

      <div className="mt-4 text-gray-200 sm:pr-8">
        
        <p className="mt-2 text-sm">
         {content}
        </p>
      </div>
    </div>

  )
}

export default JokeCard
