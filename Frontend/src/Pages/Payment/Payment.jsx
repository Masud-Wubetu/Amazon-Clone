import React, {useContext, useState} from 'react'
import classes from './Payment.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard'
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat'



function Payment() {
  const [{ user, basket }] = useContext(DataContext);

  const totalItem = basket?.reduce((amount, item) => {
        return amount + item.amount
    }, 0);

  const total = basket.reduce((amount, item) => {
        return amount + item.price * item.amount
  }, 0)

  const [cardError, setCardError] = useState(null);
  
  const stripe = useStripe();
  const elements = useElements();

  const handleChange = (e) => {
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("")
  }
  
  return (
    <LayOut>
      {/* header */}
      <div className={classes.payment_header}>Checkout ({totalItem}) items</div>
      {/* payment method */}
      <section className={classes.payment}>
        {/* address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>Addis Ababa 5 Kilo Campus</div>
            <div>Ethiopia, Niger Street</div>
          </div>
        </div>
        <hr />

        {/* product */}
        <div className={classes.flex}>
          <h3>Review items and Delivery</h3>
          <div>
            {
              basket?.map((item) => <ProductCard product={item} flex={true}/>)
            }
          </div>
        </div>
        <hr />

        {/* card form */}
        <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details}>
              <form action="">
                {cardError && <small style={{color: "red "}}>{cardError}</small>}
                <CardElement onChange={handleChange}/>
              </form>
              <div className={classes.payment_price}>
                <div>
                  <span style={{display: "flex", gap: "10px"}}>
                    <p>Total Order |</p> <CurrencyFormat amount={total}/>
                  </span>
                </div>
                <button>Pay Now</button>
              </div>
            </div>
          </div>
        </div>

      </section>
    </LayOut>
  )
}

export default Payment
