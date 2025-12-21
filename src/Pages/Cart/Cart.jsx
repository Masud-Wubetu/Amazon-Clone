import React, {useContext} from 'react'
import classes from './Cart.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard'

function Cart() {
  const [{basket, user}, dispatch] = useContext(DataContext);
  return (
    <LayOut>
      <section>
        <div>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr/>
          {
            basket?.length === 0 ? (<p>Opps! no item in your cart</p>) : (
              basket?.map((item) => {
                 return <ProductCard
                  key={item.id}
                  product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                />
              })
            )
          }
        </div>
      </section>
    </LayOut>
  )
}

export default Cart
