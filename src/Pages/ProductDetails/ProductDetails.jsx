import React from 'react'
import classes from './ProductDetails.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import {useParams} from 'react-router-dom'
import { productUrl } from '../../Api/endPoints'
import { useEffect, useState} from 'react'
import ProductCard from '../../Components/Product/ProductCard'
import axios from 'axios'
import Loader from '../../Components/Loader/Loader'


function ProductDetails() {
  const { productId } =  useParams();
  const [isLoading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  useEffect(() => {
      setLoading(true);
      axios.get(`${productUrl}/products/${productId}`)
        .then((res) => {
          setProduct(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        })
  }, [productId])
  return (
    <LayOut>
      {isLoading ? (<Loader/>) : (
        <ProductCard product={product}
      />)}
    </LayOut>
  )
}

export default ProductDetails
