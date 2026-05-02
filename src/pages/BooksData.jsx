import React, { useEffect, useState } from 'react';
import BookCard from '../components/BookCard';

function BooksData() {
  const [BookData, setBookData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch(
      "https://api.freeapi.app/api/v1/public/books?page=1&limit=10&inc=kind%252Cid%252Cetag%252CvolumeInfo&query=tech",
      { signal: controller.signal }
    )
      .then(res => res.json())
      .then(res => setBookData(res.data.data))
      .catch(err => {
        if (err.name !== 'AbortError') {
          console.log(err);
        }
      });

    return () => controller.abort();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-10">

      {/* Header */}
      <h1 className="text-3xl font-bold mb-10 text-center">
        📚 Tech Books
      </h1>

      {/* Grid Container */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">

        {BookData.length > 0 ? (
          BookData.map((item) => {
            const info = item.volumeInfo;

            return (
              <BookCard
                key={item.id}
                title={info.title}
                subtitle={info.subtitle}
                authors={info.authors}
                publishedDate={info.publishedDate}
                description={info.description}
              />
            );
          })
        ) : (
          <p className="col-span-full text-gray-400 text-lg text-center">
            No books found!
          </p>
        )}

      </div>
    </div>
  );
}

export default BooksData;