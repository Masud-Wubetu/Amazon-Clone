import React, {useContext} from 'react'
import classes from './Payment.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { DataContext } from '../../Components/DataProvider/DataProvider'


function Payment() {
  const [{basket}] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
        return amount + item.amount
    }, 0)
  return (
    <LayOut>
      {/* header */}
      <div className={classes.payment_header}>Checkout ({totalItem}) items</div>
      {/* payment method */}
      <section>
        {/* address */}
        <div></div>
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
