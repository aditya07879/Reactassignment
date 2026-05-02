import React, { useEffect, useState } from 'react'
import BookCard from '../components/BookCard';

function BooksData() {
    const [BookData, setBookData] = useState([]);


    useEffect(() => {
     const controller = new AbortController();

     fetch("https://api.freeapi.app/api/v1/public/books?page=1&limit=10&inc=kind%252Cid%252Cetag%252CvolumeInfo&query=tech", {signal: controller.signal})
     .then(res => res.json())
     .then(res => setBookData(res.data.data))
     .catch(err => {
        if (err.name !== 'AbortError') {
          console.log(err);
        }
      });

      
      

      return () => controller.abort()
    },[])

  return (
    <div  className="p-6 bg-black text-white min-h-screen">
      <h1 className="text-2xl mb-6">Book Data</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {
          BookData.length > 0 ? (
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
              )
            })
          ) : (
            <p>No books found!</p>
          )
        }
      </div>
    </div>
  )
}

export default BooksData
