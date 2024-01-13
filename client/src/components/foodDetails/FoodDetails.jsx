import React from 'react'
import img from '../../assests/burger1.jpeg'
import {useParams} from 'react-router-dom'
import classes from './FoodDetails.module.css'
import  { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';

import { addProduct } from '../../redux/cartSlice';
const FoodDteails = () => {
  const [foodDetails,setFoodDetails]=useState('')
  const[quantity,setQuantity]=useState(1)
  const dispatch=useDispatch()
  const{id}=useParams()
  const {token}=useSelector((state)=>state.auth)

  useEffect(()=>{
    const fetchFoodDetails=async()=>{
   const res = await fetch(`http://localhost:5000/product/find=${id}`, )
    }

  },[id])

  const changeQuantity=(command)=>{
    if(command==='dec'){
      if(quantity===1)return
      setQuantity(prev=>prev+1)

    }else if(command==='inc'){

    }

  }
    const addToCart=()=>{
      dispatch(addProduct({...foodDetails,quantity}))
    }
  return (
    <div className={classes.container}>
    <div className={classes.wrapper}>
    <div className={classes.left}>

      <img src={`http://localhost:5000/images/${foodDetails?.img}`}/>

    </div>
    <div className={classes.right}>
      <h2 className={classes.title}>{foodDetails?.title}</h2>
      <div className={classes.price}>
        price:<span>$</span>{foodDetails?.price}
      </div>
      <div className={classes.quantity}>
        <button disabled={quantity===1} onClick={() =>changeQuantity('dec')}>-</button>
        <span claasName={classes.quantityNumber}>{quantity}</span>
        <button onClick={()=>changeQuantity('inc')}>+</button>

      </div>
      <div className={classes.category}>
        <h3>Category:</h3>
        <span className={classes.categoryName}>{foodDetails?.category}</span>
      </div>
      <div className={classes.productDesc}>
        <div>Description:</div>
        <p>
          {foodDetails?.desc?.length>40 ? `${foodDetails?.desc}`.slice(0,50):foodDetails?.desc}
        </p>

      </div>
     <button onClick={addToCart}className={classes.addToCart}>add To Cart<AiOutlineShoppingCart/></button>

    </div>
      </div>
      </div>
  )
}

export default FoodDteails
