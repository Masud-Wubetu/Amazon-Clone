import React from 'react'
import classes from './ProductDetails.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import {useParams} from 'react-router-dom'
import { productUrl } from '../../Api/endPoints'
import { useEffect, useState} from 'react'
import ProductCard from '../../Components/Product/ProductCard'
import axios from 'axios'


function ProductDetails() {
  const { productId } =  useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
      axios.get(`${productUrl}/products/${productId}`)
        .then((res) => {
          setProduct(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
  }, [productId])
  return (
    <LayOut>
      <ProductCard
      product={product}/>
    </LayOut>
  )
}

export default ProductDetails
