import React from 'react'
import classes from './Header.module.css'

import LowerHeader from './LowerHeader'
import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";

function Header() {
  return (
    <>
        <section>
            <div className={classes.header_container}>
                <div className={classes.logo_container}>
                    {/* logo */}
                    <a href="/">
                        <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon logo" />
                    </a>
                    {/* delivery */}
                    <div className={classes.delivery}>
                        <span>
                            {/* icon */}
                            <SlLocationPin />
                        </span>
                        <div>
                            <p>Deliver to</p>
                            <span>Ethiopia</span>
                        </div>
                    </div>
                </div>
                <div className={classes.search}>
                    {/* Search bar */}
                    <select name="" id="">
                        <option value="">All</option>
                    </select>
                    <input type="text" name="" id="" placeholder="search product" />
                    {/* icon */}
                    <FaSearch size={25} />
                </div>
                <div className={classes.order_container}>
                    <a href="" className={classes.language}>
                        <img src="https://image.shutterstock.com/image-vector/american-flag-usa-design-united-260nw-2477519645.jpg" alt="" />
                        <select>
                            <option value="">EN</option>
                        </select>
                    </a>
                    {/* three components */}
                    <a href="">
                        <div>
                            <p>Hello, Sign in</p>
                            <span>Account & Lists</span>
                        </div>
                    </a>
                    {/* Orders */}
                    <a href="">
                        <p>Returns</p>
                        <span>& Orders</span>
                    </a>
                    {/* cart */}
                    <a to={"/cart"} className={classes.cart}>
                        {/* icon */}
                        <BiCart size={35} />
                        <span>0</span>
                    </a>
                </div>  
            </div>
        </section>
        <LowerHeader/>
    </>
  )
}

export default Header
