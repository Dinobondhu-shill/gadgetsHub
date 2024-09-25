import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const Product = () => {
const [products, setProduct] = useState([]);

useEffect(()=>{
  const fetchProduct = async()=>{
    try{
      const response = await fetch("/product.json")
    const data = await response.json()
    setProduct(data)
    } catch(error){
      console.error("Something went wrong", error)
    }
  }
  fetchProduct()
}, [])

  return (
    <div>
      <h2 className='text-center font-bold underline text-3xl my-5 text-[#25a585]'>Our Gadgets</h2>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
     {
        products?.map(product => <ProductCard key={product.id} product={product}/>)
      }
     </div>
    </div>
  );
};

export default Product;