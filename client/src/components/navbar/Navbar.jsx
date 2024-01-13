import React from 'react'
import classes from './Navbar.module.css'
import {Link} from 'react-router-dom'
import logos from '../../assests/aroma.jpeg'
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';
import { useState } from 'react'
import {Navigate} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { logout } from '../../redux/authSlice';

import {state} from 'react'
import {useSelector} from 'react-redux'

const Navbar = () => {

  const [isScrolled, setIsScrolled]=useState(false)
  const {products}=useSelector((state)=>state.cart)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  window.onscroll= () =>{
    setIsScrolled(window.pageYOffset===0 ? false :true)
    return ()=> (window.onscroll=null)
  }
  const handleLogout=()=>{
    dispatch(logout())
    navigate('/login')
  }


  return (
    <div className={`${classes.container} ${isScrolled && classes.scrolled}`}>
     
      <div className={classes.wrapper}>
       <img src={logos} alt="" className={classes.logos}/>
        <div className={classes.left}>
         <div>
       
        <Link to='/'className={classes.title}>
       
          Artful Aromas Cafe
          </Link>
     </div>
          
         
        </div>
       
        <div className={classes.right}>
        <div className={classes.center}>
          <ul className={classes.list}>
            <li className={classes.listItem}>
            <a href="home">Home</a>
          </li>
          <li className={classes.listItem}>
            <a href="contacts1">contacts</a>
            </li>
            <li className={classes.listItem}>
            <a href="foods">Foods</a>
            </li>
            <li className={classes.listItem}>
            <a href="#FAQ">FAQ</a>
          </li>
          <li className={classes.listItem}>
            <Link to='/create'>create</Link>
          </li>
          <li className={classes.listItem}>
            <Link to='/contacts'>Newsletter</Link>
          </li>
         </ul>
         <div className={classes.right}>
          <AiOutlineUser className={classes.userIcon}/>
          <Link to='/cart'className={classes.cartContainer}>
            <AiOutlineShoppingCart className={classes.cartIcon}/>
            <div className={classes.cartQuantity}>{products.length}</div>
          </Link>
          <button onClick={handleLogout}className={classes.logout}>LogOut</button>
         </div>
        

        </div>
        </div>
      </div>


    </div>
  
  )
}

export default Navbar