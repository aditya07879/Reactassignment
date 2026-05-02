import React, { useEffect } from 'react'
import { useState } from 'react'
import Card from '../components/Card';


const ProductData = () => {

     const [productData, setProductData] = useState([]);

  useEffect(() => {
    
    const controller = new AbortController();


    fetch('https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches', {
      signal: controller.signal
    })
      .then(res => res.json())
      .then(res => setProductData(res.data.data))
      .catch(err => {
        if (err.name !== 'AbortError') {
          console.log(err);
        }
      });
    
    return () => controller.abort();
  },[])
  


  return (
    <div className="min-h-screen bg-black text-white p-6">
  
  {/* Header */}
  <h1 className="text-3xl font-bold mb-8 text-center">
    Product Data
  </h1>

  {/* Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    
    {productData.length > 0 ? (
      productData.map((item) => (
        <Card
          key={item.id} // ✅ required
          title={item.title}
          price={item.price}
          category={item.category}
        />
      ))
    ) : (
      <p className="text-center col-span-full text-gray-400">
        No products found
      </p>
    )}

  </div>
</div>
  )
}

export default ProductData
