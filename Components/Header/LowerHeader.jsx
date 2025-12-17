import React from 'react'
import classes from './Header.module.css'

import { IoMenuSharp } from "react-icons/io5";

function LowerHeader() {
  return (
    <div className={classes.lower_containers}>
      <ul>
        <li>
            <IoMenuSharp />
            <p>All</p>
        </li>
        <li>Today's deal</li>
        <li>Prime video</li>
        <li> Registry</li>
        <li>Customer service</li>
        <li>Sell</li>
      </ul>
    </div>
  )
}

export default LowerHeader
