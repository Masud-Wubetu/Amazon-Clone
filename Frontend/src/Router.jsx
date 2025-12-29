import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Auth from './Pages/Auth/Auth'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Results from './Pages/Results/Results'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtectedRoute from './Components/protectedRoute/ProtectedRoute'

const stripePromise = loadStripe(
   `pk_test_51ShOHX1z2JDeuAX6ecPrUf0PpqB9TteTgkYBaW1euLI3WwyOXYcnGaDX
    Otz3CqfkXZvosPqksJQN1fsPjeENBETY00K1EMMvKJ`
  );

function Routering() {
  return (
   <Router>
    <Routes>
        <Route path="/"  element={<Landing/>}></Route>
        <Route path="/auth"  element={<Auth/>}></Route>
        <Route path="/payments"  element={
          <ProtectedRoute 
          msg={"You must log in to pay"}
          redirect={"/payments"}>
            <Elements stripe={stripePromise}>
              <Payment/>
            </Elements>
          </ProtectedRoute>}></Route>
        <Route path="/orders"  element={
          <ProtectedRoute 
          msg={"You must log in to access your orders"}
          redirect={"/payments"}>
            <Orders/> 
          </ProtectedRoute>}></Route>
        <Route path="/category/:categoryName"  element={<Results/>}></Route>
        <Route path="/products/:productId"  element={<ProductDetails/>}></Route>
        <Route path="/cart"  element={<Cart/>}></Route>
    </Routes>
   </Router>
  )
}

export default Routering
