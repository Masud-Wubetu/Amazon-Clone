import React from 'react'
import classes from './Header.module.css'
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import LowerHeader from './LowerHeader'
import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import { DataContext } from '../DataProvider/DataProvider'

function Header() {
    const [{basket}, dispatch] = useContext(DataContext);
    const totalItem = basket?.reduce((amount, item) => {
        return amount + item.amount
    }, 0)
  return (
    <section className={classes.fixed}>
        <section>
            <div className={classes.header_container}>
                <div className={classes.logo_container}>
                    {/* logo */}
                    <Link to="/">
                        <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon logo" />
                    </Link>
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
                    <Link to="" className={classes.language}>
                        <img src="https://image.shutterstock.com/image-vector/american-flag-usa-design-united-260nw-2477519645.jpg" alt="" />
                        <select>
                            <option value="">EN</option>
                        </select>
                    </Link>
                    {/* three components */}
                    <Link to="/auth">
                        <div>
                            <p>Hello, Sign in</p>
                            <span>Account & Lists</span>
                        </div>
                    </Link>
                    {/* Orders */}
                    <Link to="/orders">
                        <p>Returns</p>
                        <span>& Orders</span>
                    </Link>
                    {/* cart */}
                    <Link to={"/cart"} className={classes.cart}>
                        {/* icon */}
                        <BiCart size={35} />
                        <span>{totalItem}</span>
                    </Link>
                </div>  
            </div>
        </section>
        <LowerHeader/>
    </section>
  )
}

export default Header
