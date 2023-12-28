import React from 'react'

import classes from './Checkout.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Checkouts = () => {
  const {products}=useSelector((state)=>state.cart)
    let totalPrice=0
    products.map((product)=>totalPrice +=(product.quantity*product.price))

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>your order is successfull</h2>
        <p>expect it in 1 hour</p>
        <span>total price:{totalPrice}</span>
        </div>
        </div>
  )
}

export default Checkouts