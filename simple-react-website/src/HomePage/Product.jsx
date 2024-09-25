import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const Product = () => {
const [product, setProduct] = useState([]);

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
      <ProductCard product={product}/>
    </div>
  );
};

export default Product;