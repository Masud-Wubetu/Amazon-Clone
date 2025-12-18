import React from 'react'
import classes from './Results.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import ProductCard from '../../Components/Product/ProductCard'
import axios from 'axios'
import { useState, useEffect} from 'react'
import { productUrl } from '../../Api/endPoints'

function Results() {
  const [results, setResults] = useState([])
  const { categoryName } = useParams();
  const decodedCategory = decodeURIComponent(categoryName)

  useEffect(() => {
    axios.get(`${productUrl}/products/category/${decodedCategory }`)
      .then((res) => {
        setResults(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ decodedCategory  ])
  return (
    <LayOut>
      <section>
        <h1 style={{padding: '30px'}}>Results</h1>
        <p style={{padding: '30px'}}>Category/{categoryName}</p>
        <hr/>
        <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard 
                key={product.id}
                product={product}
              />
            ))}
        </div>
      </section>
    </LayOut>
  )
}

export default Results
