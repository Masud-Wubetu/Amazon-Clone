import React, {useContext} from 'react'
import classes from './Cart.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard'
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat'
import {Link} from 'react-router-dom'

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
                  renderAdd={true}
                  flex={true}
                />
              })
            )
          }
        </div>
        {
          basket?.length !== 0 && (
            <div>
              <div>
                <p>Subtotal ({basket?.length} items)</p>
                <CurrencyFormat amount="total"/>
              </div>
              <span>
                <input type="checkbox"/>
                <small>This order contains order</small>
              </span>
              <Link to='/payments'>Continue to checkout</Link>
            </div>
          )
        }
      </section>
    </LayOut>
  )
}

export default Cart
