import React, {useContext} from 'react'
import classes from './Payment.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { DataContext } from '../../Components/DataProvider/DataProvider'


function Payment() {
  const [{ user, basket }] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
        return amount + item.amount
    }, 0)
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
        <div></div>
        <hr />

        {/* card form */}
        <div></div>

      </section>
    </LayOut>
  )
}

export default Payment
