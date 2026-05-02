import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const ProductData = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch(
      'https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches',
      { signal: controller.signal }
    )
      .then(res => res.json())
      .then(res => setProductData(res.data.data))
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
        ⌚ Watch Products
      </h1>

      {/* Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">

        {productData.length > 0 ? (
          productData.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              price={item.price}
              category={item.category}
            />
          ))
        ) : (
          <p className="col-span-full text-gray-400 text-lg text-center">
            No products found
          </p>
        )}

      </div>
    </div>
  );
};

export default ProductData;