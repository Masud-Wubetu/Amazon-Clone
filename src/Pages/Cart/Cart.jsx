import React, {useContext} from 'react'
import classes from './Cart.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard'
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat'
import {Link} from 'react-router-dom'
import {Type} from '../../Utility/action.type'

function Cart() {
  const [{basket, user}, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return amount + item.price * item.amount
  }, 0)

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item
    })
  }

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id
    })
  }
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr/>
          {
            basket?.length === 0 ? (<p>Opps! no item in your cart</p>) : (
              basket?.map((item) => {
      return <section>
        <ProductCard
                  key={item.id}
                  product={item}
                  renderDesc={true}
                  renderAdd={true}
                  flex={true}
                />
                <div>
                  <button onClick={() => increment(item)}>+</button>
                  <span>{item.amount}</span>
                  <button onClick={() => decrement(item.id)}>-</button>
                </div>
              </section>
              })
            )
          }
        </div>
        {
          basket?.length !== 0 && (
            <div className={classes.subtotal}>
              <div>
                <p>Subtotal ({basket?.length} items)</p>
                <CurrencyFormat amount={total}/>
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
