import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import SignUp from './Pages/Auth/SignUp'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Results from './Pages/Results/Results'

function Routering() {
  return (
   <Router>
    <Routes>
        <Route path="/"  element={<Landing/>}></Route>
        <Route path="/auth"  element={<SignUp/>}></Route>
        <Route path="/payments"  element={<Payment/>}></Route>
        <Route path="/orders"  element={<Orders/>}></Route>
        <Route path="/category/:categoryName"  element={<Results/>}></Route>
        <Route path="/cart"  element={<Cart/>}></Route>
    </Routes>
   </Router>
  )
}

export default Routering
